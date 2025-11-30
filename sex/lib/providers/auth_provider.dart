import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import '../models/user_model.dart';
import '../services/supabase_service.dart';
import '../main.dart';

class AuthProvider extends ChangeNotifier {
  final SupabaseService _supabaseService = SupabaseService();
  
  UserModel? _user;
  bool _isLoading = true;
  String? _error;

  UserModel? get user => _user;
  bool get isLoading => _isLoading;
  String? get error => _error;
  bool get isOnboarded => _user?.isOnboarded ?? false;

  AuthProvider() {
    _initializeAuth();
  }

  Future<void> _initializeAuth() async {
    try {
      _isLoading = true;
      notifyListeners();

      // Add small delay to ensure supabase is fully initialized
      await Future.delayed(const Duration(milliseconds: 500));
      
      try {
        final session = supabase.auth.currentSession;
        if (session != null) {
          await _loadUserData(session.user.id);
        }
      } catch (e) {
        debugPrint('Session check error: $e');
        // Session check failed, but app can still load
      }
    } catch (e) {
      _error = e.toString();
      debugPrint('Auth initialization error: $e');
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> _loadUserData(String userId) async {
    try {
      _user = await _supabaseService.getUserProfile(userId);
    } catch (e) {
      _error = e.toString();
      debugPrint('Load user data error: $e');
      // Don't crash if user profile doesn't exist yet
    }
  }

  Future<bool> signUp(String email, String password, String name) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      debugPrint('Attempting sign up for: $email');
      
      final response = await supabase.auth.signUp(
        email: email,
        password: password,
      ).timeout(
        const Duration(seconds: 30),
        onTimeout: () {
          throw Exception('Sign up request timed out. Check your internet connection.');
        },
      );

      if (response.user != null) {
        await _supabaseService.createUserProfile(
          userId: response.user!.id,
          email: email,
          name: name,
        );
        await _loadUserData(response.user!.id);
        return true;
      }
      _error = 'Sign up failed: No user returned';
      return false;
    } catch (e) {
      _error = _formatError(e.toString());
      debugPrint('Sign up error: $_error');
      return false;
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<bool> signIn(String email, String password) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      debugPrint('Attempting sign in for: $email');
      
      final response = await supabase.auth.signInWithPassword(
        email: email,
        password: password,
      ).timeout(
        const Duration(seconds: 30),
        onTimeout: () {
          throw Exception('Sign in request timed out. Check your internet connection.');
        },
      );

      if (response.user != null) {
        await _loadUserData(response.user!.id);
        return true;
      }
      _error = 'Sign in failed: No user returned';
      return false;
    } catch (e) {
      _error = _formatError(e.toString());
      debugPrint('Sign in error: $_error');
      return false;
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<bool> completeOnboarding(Map<String, dynamic> onboardingData) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      if (_user != null) {
        _user = await _supabaseService.updateUserOnboarding(
          userId: _user!.id,
          onboardingData: onboardingData,
        );
        return true;
      }
      return false;
    } catch (e) {
      _error = e.toString();
      return false;
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> signOut() async {
    try {
      await supabase.auth.signOut();
      _user = null;
      _error = null;
      notifyListeners();
    } catch (e) {
      _error = e.toString();
    }
  }

  void clearError() {
    _error = null;
    notifyListeners();
  }

  String _formatError(String error) {
    // Format network errors to be more user-friendly
    if (error.contains('Failed host lookup') || 
        error.contains('No address associated') ||
        error.contains('getaddrinfo failed')) {
      return 'Network error: Cannot reach Supabase server. Check your internet connection and Supabase URL.';
    }
    if (error.contains('timed out')) {
      return 'Request timed out. Check your internet connection.';
    }
    if (error.contains('Invalid login credentials')) {
      return 'Invalid email or password.';
    }
    if (error.contains('User already registered')) {
      return 'This email is already registered.';
    }
    if (error.contains('Password should be')) {
      return 'Password must be at least 6 characters.';
    }
    // Return original error if no match
    return error.length > 100 ? error.substring(0, 100) + '...' : error;
  }
}

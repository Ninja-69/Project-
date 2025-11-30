import 'package:flutter/material.dart';
import '../models/chat_model.dart';
import '../models/task_model.dart';
import '../services/ai_service.dart';
import '../services/supabase_service.dart';

class ChatProvider extends ChangeNotifier {
  final AIService _aiService = AIService();
  final SupabaseService _supabaseService = SupabaseService();
  
  ChatSession? _currentSession;
  List<ChatSession> _sessions = [];
  bool _isLoading = false;
  String? _error;

  ChatSession? get currentSession => _currentSession;
  List<ChatSession> get sessions => _sessions;
  bool get isLoading => _isLoading;
  String? get error => _error;

  Future<void> loadSessions(String userId) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      _sessions = await _supabaseService.getUserChatSessions(userId);
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<void> createNewSession(String userId, String title) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      _currentSession = await _supabaseService.createChatSession(userId, title);
      _sessions.insert(0, _currentSession!);
    } catch (e) {
      _error = e.toString();
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  Future<List<TaskModel>?> sendMessage(
    String userId,
    String message,
    Map<String, dynamic>? userPreferences,
  ) async {
    try {
      _isLoading = true;
      _error = null;
      notifyListeners();

      if (_currentSession == null) {
        throw Exception('No active chat session');
      }

      // Add user message
      final userMessage = ChatMessage(
        id: DateTime.now().millisecondsSinceEpoch.toString(),
        userId: userId,
        content: message,
        role: MessageRole.user,
        createdAt: DateTime.now(),
      );

      _currentSession!.messages.add(userMessage);
      await _supabaseService.saveChatMessage(userMessage);

      // Get AI response
      final aiResponse = await _aiService.generateResponse(
        message: message,
        userPreferences: userPreferences,
        conversationHistory: _currentSession!.messages,
      );

      // Add assistant message
      final assistantMessage = ChatMessage(
        id: DateTime.now().millisecondsSinceEpoch.toString(),
        userId: userId,
        content: aiResponse['response'] as String,
        role: MessageRole.assistant,
        generatedTaskIds: (aiResponse['task_ids'] as List<dynamic>?)?.cast<String>(),
        createdAt: DateTime.now(),
      );

      _currentSession!.messages.add(assistantMessage);
      await _supabaseService.saveChatMessage(assistantMessage);

      // Return generated tasks if any
      if (aiResponse['tasks'] != null) {
        return aiResponse['tasks'] as List<TaskModel>;
      }

      return null;
    } catch (e) {
      _error = e.toString();
      return null;
    } finally {
      _isLoading = false;
      notifyListeners();
    }
  }

  void clearError() {
    _error = null;
    notifyListeners();
  }
}

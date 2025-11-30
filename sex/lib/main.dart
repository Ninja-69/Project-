import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:provider/provider.dart';
import 'package:supabase/supabase.dart';
import 'config/theme.dart';
import 'providers/auth_provider.dart';
import 'providers/task_provider.dart';
import 'providers/chat_provider.dart';
import 'screens/splash_screen.dart';
import 'screens/auth/login_screen.dart';
import 'screens/onboarding/onboarding_screen.dart';
import 'screens/dashboard/dashboard_screen.dart';

late SupabaseClient supabase;
bool _initializationError = false;
String _initializationErrorMessage = '';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  
  try {
    // Try to load .env file
    try {
      await dotenv.load(fileName: ".env");
      debugPrint('.env file loaded successfully');
    } catch (e) {
      debugPrint('Warning: Could not load .env file: $e');
      // Continue anyway, will check for env variables
    }
    
    final supabaseUrl = dotenv.env['SUPABASE_URL'];
    final supabaseKey = dotenv.env['SUPABASE_ANON_KEY'];
    
    debugPrint('SUPABASE_URL: ${supabaseUrl != null ? 'Found' : 'Not found'}');
    debugPrint('SUPABASE_ANON_KEY: ${supabaseKey != null ? 'Found' : 'Not found'}');
    
    if (supabaseUrl == null || supabaseUrl.isEmpty) {
      throw Exception('SUPABASE_URL not found in .env file or environment');
    }
    if (supabaseKey == null || supabaseKey.isEmpty) {
      throw Exception('SUPABASE_ANON_KEY not found in .env file or environment');
    }
    
    supabase = SupabaseClient(supabaseUrl, supabaseKey);
    debugPrint('Supabase client initialized successfully');
  } catch (e) {
    _initializationError = true;
    _initializationErrorMessage = e.toString();
    debugPrint('Initialization Error: $e');
  }
  
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    if (_initializationError) {
      return MaterialApp(
        title: 'AI Planner',
        theme: AppTheme.lightTheme,
        home: Scaffold(
          body: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Icon(Icons.error_outline, size: 64, color: Colors.red),
                const SizedBox(height: 16),
                const Text(
                  'Initialization Error',
                  style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 8),
                Padding(
                  padding: const EdgeInsets.all(16),
                  child: Text(
                    _initializationErrorMessage,
                    textAlign: TextAlign.center,
                    style: const TextStyle(fontSize: 14),
                  ),
                ),
              ],
            ),
          ),
        ),
        debugShowCheckedModeBanner: false,
      );
    }

    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => AuthProvider()),
        ChangeNotifierProvider(create: (_) => TaskProvider()),
        ChangeNotifierProvider(create: (_) => ChatProvider()),
      ],
      child: MaterialApp(
        title: 'AI Planner',
        theme: AppTheme.lightTheme,
        darkTheme: AppTheme.darkTheme,
        themeMode: ThemeMode.system,
        home: const AppRouter(),
        debugShowCheckedModeBanner: false,
      ),
    );
  }
}

class AppRouter extends StatelessWidget {
  const AppRouter({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Consumer<AuthProvider>(
      builder: (context, authProvider, _) {
        try {
          if (authProvider.isLoading) {
            return const SplashScreen();
          }

          if (authProvider.user == null) {
            return const LoginScreen();
          }

          if (!authProvider.isOnboarded) {
            return const OnboardingScreen();
          }

          return const DashboardScreen();
        } catch (e) {
          return Scaffold(
            body: Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.error_outline, size: 64, color: Colors.red),
                  const SizedBox(height: 16),
                  const Text(
                    'Error Loading App',
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 8),
                  Padding(
                    padding: const EdgeInsets.all(16),
                    child: Text(
                      e.toString(),
                      textAlign: TextAlign.center,
                      style: const TextStyle(fontSize: 14),
                    ),
                  ),
                ],
              ),
            ),
          );
        }
      },
    );
  }
}

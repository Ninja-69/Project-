import 'package:flutter/foundation.dart';
import 'package:supabase/supabase.dart';
import 'package:uuid/uuid.dart';
import '../models/user_model.dart';
import '../models/task_model.dart';
import '../models/chat_model.dart';
import '../main.dart';

class SupabaseService {
  SupabaseClient get _client => supabase;
  static const String _usersTable = 'users';
  static const String _tasksTable = 'tasks';
  static const String _chatSessionsTable = 'chat_sessions';
  static const String _chatMessagesTable = 'chat_messages';

  // User operations
  Future<UserModel> createUserProfile({
    required String userId,
    required String email,
    required String name,
  }) async {
    try {
      final now = DateTime.now();
      final response = await _client.from(_usersTable).insert({
        'id': userId,
        'email': email,
        'name': name,
        'is_onboarded': false,
        'created_at': now.toIso8601String(),
        'updated_at': now.toIso8601String(),
      }).select().single();

      return UserModel.fromJson(response);
    } catch (e) {
      throw Exception('Failed to create user profile: $e');
    }
  }

  Future<UserModel> getUserProfile(String userId) async {
    try {
      final response = await _client
          .from(_usersTable)
          .select()
          .eq('id', userId)
          .single();

      return UserModel.fromJson(response);
    } catch (e) {
      debugPrint('Get user profile error: $e');
      throw Exception('Failed to get user profile: $e');
    }
  }

  Future<UserModel> updateUserOnboarding({
    required String userId,
    required Map<String, dynamic> onboardingData,
  }) async {
    try {
      final response = await _client
          .from(_usersTable)
          .update({
            'is_onboarded': true,
            'onboarding_data': onboardingData,
            'updated_at': DateTime.now().toIso8601String(),
          })
          .eq('id', userId)
          .select()
          .single();

      return UserModel.fromJson(response);
    } catch (e) {
      throw Exception('Failed to update onboarding: $e');
    }
  }

  // Task operations
  Future<TaskModel> createTask(TaskModel task) async {
    try {
      final response = await _client.from(_tasksTable).insert(task.toJson()).select().single();
      return TaskModel.fromJson(response);
    } catch (e) {
      throw Exception('Failed to create task: $e');
    }
  }

  Future<List<TaskModel>> createMultipleTasks(List<TaskModel> tasks) async {
    try {
      final response = await _client
          .from(_tasksTable)
          .insert(tasks.map((t) => t.toJson()).toList())
          .select();

      return (response as List).map((t) => TaskModel.fromJson(t)).toList();
    } catch (e) {
      throw Exception('Failed to create tasks: $e');
    }
  }

  Future<List<TaskModel>> getUserTasks(String userId) async {
    try {
      final response = await _client
          .from(_tasksTable)
          .select()
          .eq('user_id', userId)
          .order('created_at', ascending: false);

      return (response as List).map((t) => TaskModel.fromJson(t)).toList();
    } catch (e) {
      throw Exception('Failed to get user tasks: $e');
    }
  }

  Future<TaskModel> updateTask(TaskModel task) async {
    try {
      final response = await _client
          .from(_tasksTable)
          .update(task.toJson())
          .eq('id', task.id)
          .select()
          .single();

      return TaskModel.fromJson(response);
    } catch (e) {
      throw Exception('Failed to update task: $e');
    }
  }

  Future<void> deleteTask(String taskId) async {
    try {
      await _client.from(_tasksTable).delete().eq('id', taskId);
    } catch (e) {
      throw Exception('Failed to delete task: $e');
    }
  }

  // Chat operations
  Future<ChatSession> createChatSession(String userId, String title) async {
    try {
      const uuid = Uuid();
      final sessionId = uuid.v4();
      final now = DateTime.now();

      final response = await _client
          .from(_chatSessionsTable)
          .insert({
            'id': sessionId,
            'user_id': userId,
            'title': title,
            'messages': [],
            'created_at': now.toIso8601String(),
            'updated_at': now.toIso8601String(),
          })
          .select()
          .single();

      return ChatSession.fromJson(response);
    } catch (e) {
      throw Exception('Failed to create chat session: $e');
    }
  }

  Future<List<ChatSession>> getUserChatSessions(String userId) async {
    try {
      final response = await _client
          .from(_chatSessionsTable)
          .select()
          .eq('user_id', userId)
          .order('created_at', ascending: false);

      return (response as List).map((s) => ChatSession.fromJson(s)).toList();
    } catch (e) {
      throw Exception('Failed to get chat sessions: $e');
    }
  }

  Future<void> saveChatMessage(ChatMessage message) async {
    try {
      await _client.from(_chatMessagesTable).insert(message.toJson());
    } catch (e) {
      throw Exception('Failed to save chat message: $e');
    }
  }

  Future<List<ChatMessage>> getChatMessages(String sessionId) async {
    try {
      final response = await _client
          .from(_chatMessagesTable)
          .select()
          .eq('session_id', sessionId)
          .order('created_at', ascending: true);

      return (response as List).map((m) => ChatMessage.fromJson(m)).toList();
    } catch (e) {
      throw Exception('Failed to get chat messages: $e');
    }
  }
}

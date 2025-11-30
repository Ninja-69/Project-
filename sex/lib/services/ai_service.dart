import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:uuid/uuid.dart';
import '../models/task_model.dart';
import '../models/chat_model.dart';

class AIService {
  final String _apiKey = dotenv.env['OPENAI_API_KEY'] ?? '';
  final String _apiUrl = 'https://api.openai.com/v1/chat/completions';
  static const uuid = Uuid();

  Future<Map<String, dynamic>> generateResponse({
    required String message,
    required Map<String, dynamic>? userPreferences,
    required List<ChatMessage> conversationHistory,
  }) async {
    try {
      final systemPrompt = _buildSystemPrompt(userPreferences);
      final messages = _buildMessages(message, conversationHistory, systemPrompt);

      final response = await http.post(
        Uri.parse(_apiUrl),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer $_apiKey',
        },
        body: jsonEncode({
          'model': 'gpt-4',
          'messages': messages,
          'temperature': 0.7,
          'max_tokens': 1000,
        }),
      );

      if (response.statusCode == 200) {
        final data = jsonDecode(response.body);
        final content = data['choices'][0]['message']['content'] as String;

        // Parse tasks from AI response
        final tasks = _parseTasksFromResponse(content);

        return {
          'response': content,
          'tasks': tasks,
          'task_ids': tasks.map((t) => t.id).toList(),
        };
      } else {
        throw Exception('Failed to get AI response: ${response.statusCode}');
      }
    } catch (e) {
      throw Exception('AI Service Error: $e');
    }
  }

  String _buildSystemPrompt(Map<String, dynamic>? userPreferences) {
    String prompt = '''You are an intelligent AI assistant helping users manage their tasks and plans. 
Your role is to:
1. Listen to user problems and plans
2. Ask clarifying questions when needed
3. Generate actionable to-do items
4. Suggest priorities and deadlines
5. Be supportive and encouraging

When generating tasks, format them clearly with:
- Task title
- Priority (low, medium, high, urgent)
- Suggested deadline (if applicable)

Be conversational, fun, and slightly cheeky in your responses.''';

    if (userPreferences != null && userPreferences.isNotEmpty) {
      prompt += '\n\nUser Preferences:\n';
      userPreferences.forEach((key, value) {
        prompt += '- $key: $value\n';
      });
    }

    return prompt;
  }

  List<Map<String, dynamic>> _buildMessages(
    String userMessage,
    List<ChatMessage> history,
    String systemPrompt,
  ) {
    final messages = [
      {
        'role': 'system',
        'content': systemPrompt,
      },
    ];

    // Add conversation history
    for (final msg in history.take(10)) {
      messages.add({
        'role': msg.role.name,
        'content': msg.content,
      });
    }

    // Add current message
    messages.add({
      'role': 'user',
      'content': userMessage,
    });

    return messages;
  }

  List<TaskModel> _parseTasksFromResponse(String response) {
    final tasks = <TaskModel>[];
    
    // Simple regex-based parsing for task patterns
    // Look for patterns like "- Task: ...", "Task: ...", etc.
    final taskPattern = RegExp(
      r'(?:^|\n)[-•*]?\s*(?:Task|TODO|Action):\s*(.+?)(?=\n|$)',
      multiLine: true,
      caseSensitive: false,
    );

    final matches = taskPattern.allMatches(response);
    
    for (final match in matches) {
      final taskTitle = match.group(1)?.trim() ?? '';
      if (taskTitle.isNotEmpty) {
        tasks.add(
          TaskModel(
            id: uuid.v4(),
            userId: '', // Will be set by the provider
            title: taskTitle,
            description: null,
            priority: _extractPriority(taskTitle),
            status: TaskStatus.pending,
            dueDate: _extractDueDate(taskTitle),
            scheduledDate: null,
            isAiGenerated: true,
            aiGeneratedFrom: response,
            createdAt: DateTime.now(),
            updatedAt: DateTime.now(),
          ),
        );
      }
    }

    return tasks;
  }

  TaskPriority _extractPriority(String text) {
    final lowerText = text.toLowerCase();
    if (lowerText.contains('urgent') || lowerText.contains('asap')) {
      return TaskPriority.urgent;
    } else if (lowerText.contains('high') || lowerText.contains('important')) {
      return TaskPriority.high;
    } else if (lowerText.contains('medium') || lowerText.contains('moderate')) {
      return TaskPriority.medium;
    }
    return TaskPriority.low;
  }

  DateTime? _extractDueDate(String text) {
    // Simple date extraction - can be enhanced
    final today = DateTime.now();
    final lowerText = text.toLowerCase();

    if (lowerText.contains('today')) {
      return today;
    } else if (lowerText.contains('tomorrow')) {
      return today.add(const Duration(days: 1));
    } else if (lowerText.contains('week')) {
      return today.add(const Duration(days: 7));
    } else if (lowerText.contains('month')) {
      return today.add(const Duration(days: 30));
    }

    return null;
  }
}

enum MessageRole { user, assistant }

class ChatMessage {
  final String id;
  final String userId;
  final String content;
  final MessageRole role;
  final List<String>? generatedTaskIds;
  final DateTime createdAt;

  ChatMessage({
    required this.id,
    required this.userId,
    required this.content,
    required this.role,
    this.generatedTaskIds,
    required this.createdAt,
  });

  factory ChatMessage.fromJson(Map<String, dynamic> json) {
    return ChatMessage(
      id: json['id'] as String,
      userId: json['user_id'] as String,
      content: json['content'] as String,
      role: MessageRole.values.byName(json['role'] as String),
      generatedTaskIds: (json['generated_task_ids'] as List<dynamic>?)?.cast<String>(),
      createdAt: DateTime.parse(json['created_at'] as String),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'user_id': userId,
      'content': content,
      'role': role.name,
      'generated_task_ids': generatedTaskIds,
      'created_at': createdAt.toIso8601String(),
    };
  }
}

class ChatSession {
  final String id;
  final String userId;
  final String title;
  final List<ChatMessage> messages;
  final DateTime createdAt;
  final DateTime updatedAt;

  ChatSession({
    required this.id,
    required this.userId,
    required this.title,
    required this.messages,
    required this.createdAt,
    required this.updatedAt,
  });

  factory ChatSession.fromJson(Map<String, dynamic> json) {
    return ChatSession(
      id: json['id'] as String,
      userId: json['user_id'] as String,
      title: json['title'] as String,
      messages: (json['messages'] as List<dynamic>?)
              ?.map((m) => ChatMessage.fromJson(m as Map<String, dynamic>))
              .toList() ??
          [],
      createdAt: DateTime.parse(json['created_at'] as String),
      updatedAt: DateTime.parse(json['updated_at'] as String),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'user_id': userId,
      'title': title,
      'messages': messages.map((m) => m.toJson()).toList(),
      'created_at': createdAt.toIso8601String(),
      'updated_at': updatedAt.toIso8601String(),
    };
  }
}

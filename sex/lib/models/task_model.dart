enum TaskPriority { low, medium, high, urgent }

enum TaskStatus { pending, inProgress, completed, cancelled }

class TaskModel {
  final String id;
  final String userId;
  final String title;
  final String? description;
  final TaskPriority priority;
  final TaskStatus status;
  final DateTime? dueDate;
  final DateTime? scheduledDate;
  final bool isAiGenerated;
  final String? aiGeneratedFrom;
  final DateTime createdAt;
  final DateTime updatedAt;

  TaskModel({
    required this.id,
    required this.userId,
    required this.title,
    this.description,
    required this.priority,
    required this.status,
    this.dueDate,
    this.scheduledDate,
    required this.isAiGenerated,
    this.aiGeneratedFrom,
    required this.createdAt,
    required this.updatedAt,
  });

  factory TaskModel.fromJson(Map<String, dynamic> json) {
    return TaskModel(
      id: json['id'] as String,
      userId: json['user_id'] as String,
      title: json['title'] as String,
      description: json['description'] as String?,
      priority: TaskPriority.values.byName(json['priority'] as String? ?? 'medium'),
      status: TaskStatus.values.byName(json['status'] as String? ?? 'pending'),
      dueDate: json['due_date'] != null ? DateTime.parse(json['due_date'] as String) : null,
      scheduledDate: json['scheduled_date'] != null ? DateTime.parse(json['scheduled_date'] as String) : null,
      isAiGenerated: json['is_ai_generated'] as bool? ?? false,
      aiGeneratedFrom: json['ai_generated_from'] as String?,
      createdAt: DateTime.parse(json['created_at'] as String),
      updatedAt: DateTime.parse(json['updated_at'] as String),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'user_id': userId,
      'title': title,
      'description': description,
      'priority': priority.name,
      'status': status.name,
      'due_date': dueDate?.toIso8601String(),
      'scheduled_date': scheduledDate?.toIso8601String(),
      'is_ai_generated': isAiGenerated,
      'ai_generated_from': aiGeneratedFrom,
      'created_at': createdAt.toIso8601String(),
      'updated_at': updatedAt.toIso8601String(),
    };
  }

  TaskModel copyWith({
    String? id,
    String? userId,
    String? title,
    String? description,
    TaskPriority? priority,
    TaskStatus? status,
    DateTime? dueDate,
    DateTime? scheduledDate,
    bool? isAiGenerated,
    String? aiGeneratedFrom,
    DateTime? createdAt,
    DateTime? updatedAt,
  }) {
    return TaskModel(
      id: id ?? this.id,
      userId: userId ?? this.userId,
      title: title ?? this.title,
      description: description ?? this.description,
      priority: priority ?? this.priority,
      status: status ?? this.status,
      dueDate: dueDate ?? this.dueDate,
      scheduledDate: scheduledDate ?? this.scheduledDate,
      isAiGenerated: isAiGenerated ?? this.isAiGenerated,
      aiGeneratedFrom: aiGeneratedFrom ?? this.aiGeneratedFrom,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
    );
  }
}

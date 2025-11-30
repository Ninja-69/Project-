class UserModel {
  final String id;
  final String email;
  final String? name;
  final bool isOnboarded;
  final Map<String, dynamic>? onboardingData;
  final DateTime createdAt;
  final DateTime updatedAt;

  UserModel({
    required this.id,
    required this.email,
    this.name,
    required this.isOnboarded,
    this.onboardingData,
    required this.createdAt,
    required this.updatedAt,
  });

  factory UserModel.fromJson(Map<String, dynamic> json) {
    return UserModel(
      id: json['id'] as String,
      email: json['email'] as String,
      name: json['name'] as String?,
      isOnboarded: json['is_onboarded'] as bool? ?? false,
      onboardingData: json['onboarding_data'] as Map<String, dynamic>?,
      createdAt: DateTime.parse(json['created_at'] as String),
      updatedAt: DateTime.parse(json['updated_at'] as String),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'email': email,
      'name': name,
      'is_onboarded': isOnboarded,
      'onboarding_data': onboardingData,
      'created_at': createdAt.toIso8601String(),
      'updated_at': updatedAt.toIso8601String(),
    };
  }

  UserModel copyWith({
    String? id,
    String? email,
    String? name,
    bool? isOnboarded,
    Map<String, dynamic>? onboardingData,
    DateTime? createdAt,
    DateTime? updatedAt,
  }) {
    return UserModel(
      id: id ?? this.id,
      email: email ?? this.email,
      name: name ?? this.name,
      isOnboarded: isOnboarded ?? this.isOnboarded,
      onboardingData: onboardingData ?? this.onboardingData,
      createdAt: createdAt ?? this.createdAt,
      updatedAt: updatedAt ?? this.updatedAt,
    );
  }
}

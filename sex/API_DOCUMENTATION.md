# AI Planner App - API Documentation

## Overview

This document describes the API endpoints and services used in the AI Planner App.

## Supabase Services

### Authentication

#### Sign Up
```dart
Future<bool> signUp(String email, String password, String name)
```
- Creates new user account
- Automatically creates user profile
- Returns success status

#### Sign In
```dart
Future<bool> signIn(String email, String password)
```
- Authenticates user
- Loads user profile
- Returns success status

#### Sign Out
```dart
Future<void> signOut()
```
- Logs out current user
- Clears local user data

### User Management

#### Get User Profile
```dart
Future<UserModel> getUserProfile(String userId)
```
- Retrieves user profile from database
- Returns `UserModel` with all user data

#### Create User Profile
```dart
Future<UserModel> createUserProfile({
  required String userId,
  required String email,
  required String name,
})
```
- Creates new user profile after signup
- Initializes with default values
- Returns created `UserModel`

#### Update Onboarding
```dart
Future<UserModel> updateUserOnboarding({
  required String userId,
  required Map<String, dynamic> onboardingData,
})
```
- Marks user as onboarded
- Saves onboarding preferences
- Returns updated `UserModel`

### Task Management

#### Create Task
```dart
Future<TaskModel> createTask(TaskModel task)
```
- Creates single task
- Validates user ownership
- Returns created `TaskModel`

#### Create Multiple Tasks
```dart
Future<List<TaskModel>> createMultipleTasks(List<TaskModel> tasks)
```
- Batch creates tasks
- Used for AI-generated tasks
- Returns list of created `TaskModel`s

#### Get User Tasks
```dart
Future<List<TaskModel>> getUserTasks(String userId)
```
- Retrieves all tasks for user
- Ordered by creation date (newest first)
- Returns list of `TaskModel`s

#### Update Task
```dart
Future<TaskModel> updateTask(TaskModel task)
```
- Updates existing task
- Validates user ownership
- Returns updated `TaskModel`

#### Delete Task
```dart
Future<void> deleteTask(String taskId)
```
- Deletes task permanently
- Validates user ownership

### Chat Management

#### Create Chat Session
```dart
Future<ChatSession> createChatSession(String userId, String title)
```
- Creates new chat session
- Initializes with empty messages
- Returns created `ChatSession`

#### Get User Chat Sessions
```dart
Future<List<ChatSession>> getUserChatSessions(String userId)
```
- Retrieves all chat sessions for user
- Ordered by creation date (newest first)
- Returns list of `ChatSession`s

#### Save Chat Message
```dart
Future<void> saveChatMessage(ChatMessage message)
```
- Saves message to database
- Links to chat session
- Stores generated task IDs

#### Get Chat Messages
```dart
Future<List<ChatMessage>> getChatMessages(String sessionId)
```
- Retrieves all messages in session
- Ordered by creation date (oldest first)
- Returns list of `ChatMessage`s

## OpenAI API

### Generate Response
```dart
Future<Map<String, dynamic>> generateResponse({
  required String message,
  required Map<String, dynamic>? userPreferences,
  required List<ChatMessage> conversationHistory,
})
```

**Request:**
- `message`: User's input message
- `userPreferences`: User's onboarding preferences
- `conversationHistory`: Previous messages in conversation

**Response:**
```json
{
  "response": "AI's text response",
  "tasks": [TaskModel, ...],
  "task_ids": ["uuid1", "uuid2", ...]
}
```

**Model:** GPT-4
**Temperature:** 0.7
**Max Tokens:** 1000

### System Prompt

The AI uses a system prompt that includes:
- Role definition (intelligent task assistant)
- Task generation guidelines
- User preferences context
- Conversational tone instructions

## Data Models

### UserModel
```dart
class UserModel {
  final String id;
  final String email;
  final String? name;
  final bool isOnboarded;
  final Map<String, dynamic>? onboardingData;
  final DateTime createdAt;
  final DateTime updatedAt;
}
```

### TaskModel
```dart
class TaskModel {
  final String id;
  final String userId;
  final String title;
  final String? description;
  final TaskPriority priority; // low, medium, high, urgent
  final TaskStatus status; // pending, inProgress, completed, cancelled
  final DateTime? dueDate;
  final DateTime? scheduledDate;
  final bool isAiGenerated;
  final String? aiGeneratedFrom;
  final DateTime createdAt;
  final DateTime updatedAt;
}
```

### ChatMessage
```dart
class ChatMessage {
  final String id;
  final String userId;
  final String content;
  final MessageRole role; // user, assistant
  final List<String>? generatedTaskIds;
  final DateTime createdAt;
}
```

### ChatSession
```dart
class ChatSession {
  final String id;
  final String userId;
  final String title;
  final List<ChatMessage> messages;
  final DateTime createdAt;
  final DateTime updatedAt;
}
```

## Error Handling

All services throw exceptions with descriptive messages:

```dart
try {
  final user = await supabaseService.getUserProfile(userId);
} catch (e) {
  print('Error: $e'); // "Failed to get user profile: ..."
}
```

Common errors:
- `Failed to create user profile`
- `Failed to get user tasks`
- `Failed to create task`
- `AI Service Error`
- `Failed to save chat message`

## Rate Limiting

### OpenAI API
- Default rate limits apply
- Monitor usage at https://platform.openai.com/account/usage
- Implement exponential backoff for retries

### Supabase
- Free tier: 50,000 requests/month
- Paid tier: Higher limits
- Monitor usage in Supabase dashboard

## Authentication & Security

### Row Level Security (RLS)
All tables have RLS policies:
- Users can only access their own data
- Policies enforce user_id matching
- Authenticated users only

### API Keys
- Store in `.env` file (never commit)
- Use environment variables
- Rotate keys regularly

## Pagination

For large datasets, implement pagination:

```dart
// Get tasks with limit and offset
final tasks = await _client
    .from('tasks')
    .select()
    .eq('user_id', userId)
    .range(0, 19) // First 20 items
    .order('created_at', ascending: false);
```

## Caching

Implement local caching for:
- User profile (cache for session)
- Tasks (cache with invalidation)
- Chat sessions (cache with refresh)

## Real-time Subscriptions

Supabase supports real-time updates:

```dart
final subscription = _client
    .from('tasks')
    .on(RealtimeListenTypes.all, (:payload) {
      // Handle real-time updates
    })
    .subscribe();
```

## Batch Operations

For multiple operations:

```dart
// Create multiple tasks
final tasks = await supabaseService.createMultipleTasks(taskList);

// Use transactions for consistency
```

## Monitoring & Logging

### Supabase Logs
- Authentication logs: Auth → Logs
- Database logs: Database → Logs
- API logs: Project Settings → Logs

### OpenAI Logs
- API usage: https://platform.openai.com/account/usage
- Error logs: Check response status codes

## Best Practices

1. **Error Handling**
   - Always wrap API calls in try-catch
   - Provide user-friendly error messages
   - Log errors for debugging

2. **Performance**
   - Use pagination for large lists
   - Implement caching where appropriate
   - Batch operations when possible

3. **Security**
   - Never expose API keys in code
   - Use environment variables
   - Validate user input
   - Implement rate limiting

4. **Data Validation**
   - Validate input before sending to API
   - Check response data types
   - Handle null values gracefully

## Testing

### Unit Tests
```dart
test('getUserProfile returns UserModel', () async {
  final user = await supabaseService.getUserProfile(userId);
  expect(user, isA<UserModel>());
});
```

### Integration Tests
```dart
testWidgets('Sign up flow works', (WidgetTester tester) async {
  // Test complete sign up flow
});
```

## Troubleshooting

### API Connection Issues
- Check internet connectivity
- Verify API keys are correct
- Check Supabase project status
- Review firewall/proxy settings

### Authentication Failures
- Verify credentials
- Check email confirmation
- Ensure auth is enabled
- Check user exists in database

### Task Generation Issues
- Verify OpenAI API key
- Check API quota
- Review AI response parsing
- Check network connectivity

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | Nov 2024 | Initial release |

## Support

For API issues:
1. Check error message
2. Review logs in Supabase/OpenAI dashboards
3. Verify configuration
4. Check documentation
5. Create issue with details

---

**Last Updated**: November 2024

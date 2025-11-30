# AI Planner App

A beautiful, modern Flutter app that combines to-do management, planning, and AI-powered task generation. Get intelligent assistance with your daily tasks and plans.

## Features

✨ **Core Features**
- Beautiful, modern UI/UX with smooth animations
- AI-powered task generation and planning
- To-do list management with priorities and deadlines
- Calendar-based planner view
- Real-time chat with AI assistant
- User authentication with Supabase

🤖 **AI Assistant**
- Conversational interface for discussing plans
- Automatic task generation from conversations
- Smart priority and deadline suggestions
- Personalized responses based on user preferences

📱 **User Experience**
- Splash screen on app launch
- Comprehensive onboarding flow
- Persistent authentication
- Smooth navigation between features
- Dark mode support

## Tech Stack

- **Frontend**: Flutter 3.0+
- **Backend**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **AI**: OpenAI API (GPT-4)
- **State Management**: Provider
- **UI Framework**: Material Design 3

## Project Structure

```
lib/
├── main.dart                 # App entry point
├── config/
│   └── theme.dart           # Theme configuration
├── models/
│   ├── user_model.dart      # User data model
│   ├── task_model.dart      # Task data model
│   └── chat_model.dart      # Chat data model
├── providers/
│   ├── auth_provider.dart   # Authentication state
│   ├── task_provider.dart   # Task management state
│   └── chat_provider.dart   # Chat state
├── services/
│   ├── supabase_service.dart # Supabase operations
│   └── ai_service.dart      # OpenAI integration
└── screens/
    ├── splash_screen.dart
    ├── auth/
    │   └── login_screen.dart
    ├── onboarding/
    │   └── onboarding_screen.dart
    └── dashboard/
        ├── dashboard_screen.dart
        ├── tabs/
        │   ├── tasks_tab.dart
        │   ├── planner_tab.dart
        │   ├── chat_tab.dart
        │   └── profile_tab.dart
        └── widgets/
            ├── task_card.dart
            └── chat_bubble.dart
```

## Setup Instructions

### 1. Prerequisites

- Flutter SDK 3.0 or higher
- Dart 3.0 or higher
- Supabase account
- OpenAI API key

### 2. Supabase Setup

1. Create a new Supabase project at https://supabase.com
2. Go to SQL Editor and run the schema from `supabase/schema.sql`
3. Copy your project URL and anon key

### 3. Environment Configuration

Create a `.env` file in the project root:

```env
SUPABASE_URL=your_supabase_url_here
SUPABASE_ANON_KEY=your_supabase_anon_key_here
OPENAI_API_KEY=your_openai_api_key_here
```

### 4. Install Dependencies

```bash
flutter pub get
```

### 5. Run the App

```bash
flutter run
```

## Authentication Flow

1. **Splash Screen**: Shows while checking authentication status
2. **Login/Sign Up**: Users can create account or sign in
3. **Onboarding**: New users answer preference questions
4. **Dashboard**: Main app interface with all features

## Onboarding Questions

The app collects user preferences through fun, engaging questions:
- Personality type (Organized, Flexible, Balanced)
- Work style (Early Bird, Night Owl, Whenever)
- Main goal (Career, Personal, Work-Life Balance, All)
- Planning frequency (Daily, Weekly, Monthly, As Needed)
- Main challenge (Procrastination, Too Many Tasks, Lack of Focus, Time Management)

## Database Schema

### Users Table
- `id`: UUID (Primary Key)
- `email`: User email
- `name`: User name
- `is_onboarded`: Onboarding status
- `onboarding_data`: JSONB with preferences
- `created_at`, `updated_at`: Timestamps

### Tasks Table
- `id`: UUID (Primary Key)
- `user_id`: Foreign key to users
- `title`: Task title
- `description`: Task description
- `priority`: low, medium, high, urgent
- `status`: pending, in_progress, completed, cancelled
- `due_date`: Optional deadline
- `scheduled_date`: Optional scheduled date
- `is_ai_generated`: Boolean flag
- `ai_generated_from`: Original AI response

### Chat Sessions Table
- `id`: UUID (Primary Key)
- `user_id`: Foreign key to users
- `title`: Session title
- `messages`: JSONB array of messages
- `created_at`, `updated_at`: Timestamps

### Chat Messages Table
- `id`: UUID (Primary Key)
- `user_id`: Foreign key to users
- `session_id`: Foreign key to chat_sessions
- `content`: Message content
- `role`: user or assistant
- `generated_task_ids`: Array of generated task IDs

## AI Integration

The app uses OpenAI's GPT-4 model to:
- Understand user input about plans and problems
- Generate actionable to-do items
- Suggest priorities and deadlines
- Provide personalized responses based on user preferences

### Task Parsing

The AI service parses responses to extract tasks using regex patterns:
- Looks for patterns like "Task: ...", "TODO: ...", "Action: ..."
- Automatically assigns priorities based on keywords
- Extracts due dates from natural language

## Features in Detail

### Tasks Tab
- View all tasks with filtering (All, Pending, Completed)
- Mark tasks as complete with one tap
- See task priority, due date, and AI generation status
- Delete or edit tasks

### Planner Tab
- Interactive calendar view
- View tasks scheduled for specific dates
- Navigate between months
- Visual priority indicators

### AI Chat Tab
- Real-time conversation with AI assistant
- Automatic task generation from chat
- View generated tasks count
- Multiple chat sessions support

### Profile Tab
- View user information
- See onboarding preferences
- Access settings
- Sign out option

## Error Handling

The app includes comprehensive error handling for:
- Network failures
- API errors
- Authentication issues
- Database operations
- AI service failures

## Security

- Row-Level Security (RLS) enabled on all tables
- Users can only access their own data
- Secure authentication with Supabase
- API keys stored in environment variables

## Future Enhancements

- Task reminders and notifications
- Recurring tasks
- Task categories and tags
- Collaboration features
- Advanced analytics
- Export/import functionality
- Offline support
- Voice input for tasks

## Troubleshooting

### App won't start
- Ensure `.env` file is properly configured
- Check Flutter SDK is up to date: `flutter upgrade`
- Clear build cache: `flutter clean`

### Authentication issues
- Verify Supabase credentials in `.env`
- Check Supabase project is active
- Ensure auth is enabled in Supabase

### AI not generating tasks
- Verify OpenAI API key is valid
- Check API quota and billing
- Review AI response parsing logic

### Database errors
- Ensure schema is properly created
- Check RLS policies are enabled
- Verify user has correct permissions

## License

This project is open source and available under the MIT License.

## Support

For issues and questions, please create an issue in the repository.

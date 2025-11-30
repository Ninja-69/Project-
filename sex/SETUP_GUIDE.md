# AI Planner App - Complete Setup Guide

## Step-by-Step Setup Instructions

### Step 1: Clone and Initial Setup

```bash
# Navigate to your projects directory
cd ~/projects

# Create project directory
mkdir ai_planner_app
cd ai_planner_app

# Initialize Flutter project (if not already done)
flutter create .
```

### Step 2: Configure Supabase

#### 2.1 Create Supabase Project
1. Go to https://supabase.com and sign up/login
2. Click "New Project"
3. Fill in project details:
   - Name: `ai-planner`
   - Database Password: Create a strong password
   - Region: Choose closest to you
4. Wait for project to initialize (2-3 minutes)

#### 2.2 Get Credentials
1. Go to Project Settings → API
2. Copy:
   - `Project URL` → `SUPABASE_URL`
   - `anon public` key → `SUPABASE_ANON_KEY`

#### 2.3 Create Database Schema
1. Go to SQL Editor
2. Click "New Query"
3. Copy entire content from `supabase/schema.sql`
4. Paste into SQL editor
5. Click "Run"
6. Verify all tables are created

#### 2.4 Enable Authentication
1. Go to Authentication → Providers
2. Ensure "Email" is enabled
3. Go to Authentication → URL Configuration
4. Add your app's redirect URL (for mobile: `io.supabase.ai-planner://login`)

### Step 3: Configure OpenAI

1. Go to https://platform.openai.com
2. Sign up/login
3. Go to API keys section
4. Click "Create new secret key"
5. Copy the key → `OPENAI_API_KEY`
6. Set up billing to ensure API access

### Step 4: Environment Configuration

Create `.env` file in project root:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key_here
OPENAI_API_KEY=sk-your_openai_key_here
```

**Important**: Never commit `.env` to version control. Add to `.gitignore`:

```
.env
.env.local
```

### Step 5: Install Dependencies

```bash
# Get all Flutter packages
flutter pub get

# Verify installation
flutter doctor
```

### Step 6: Run the App

```bash
# For iOS
flutter run -d ios

# For Android
flutter run -d android

# For Web (if supported)
flutter run -d chrome
```

## Testing the App

### Test Authentication
1. Launch app
2. Click "Sign Up"
3. Enter email and password
4. Verify email confirmation (check Supabase Auth)
5. Complete onboarding
6. Should see dashboard

### Test Onboarding
1. Answer all preference questions
2. Verify data saved in Supabase (check users table)
3. Returning users should skip onboarding

### Test Tasks
1. Go to Tasks tab
2. Should be empty initially
3. Go to AI Chat tab

### Test AI Chat
1. Type: "I need to finish my project report and prepare for tomorrow's meeting"
2. AI should respond and generate tasks
3. Check Tasks tab - new tasks should appear
4. Verify tasks have correct priority and AI flag

### Test Planner
1. Go to Planner tab
2. Click on dates to view scheduled tasks
3. Navigate between months

## Troubleshooting

### Issue: "flutter: Exception: Failed to initialize Supabase"
**Solution:**
- Verify `.env` file exists and has correct values
- Check Supabase project is active
- Ensure `flutter_dotenv` is in pubspec.yaml

### Issue: "Authentication failed"
**Solution:**
- Verify Supabase credentials
- Check email is valid
- Ensure auth is enabled in Supabase
- Check user exists in Supabase Auth

### Issue: "AI not generating tasks"
**Solution:**
- Verify OpenAI API key is valid
- Check API quota: https://platform.openai.com/account/usage
- Ensure billing is set up
- Check network connectivity

### Issue: "Tasks not appearing in database"
**Solution:**
- Verify RLS policies are enabled
- Check user_id matches authenticated user
- Ensure schema was created properly
- Check Supabase logs for errors

### Issue: "App crashes on startup"
**Solution:**
```bash
# Clean build
flutter clean

# Get dependencies again
flutter pub get

# Run with verbose output
flutter run -v
```

## Development Tips

### Hot Reload
```bash
# During development, use hot reload for faster iteration
flutter run
# Press 'r' to hot reload
# Press 'R' to hot restart
```

### Debugging
```bash
# Run with debug output
flutter run -v

# Check device logs
flutter logs
```

### Testing Database Queries
1. Go to Supabase Dashboard
2. SQL Editor
3. Write and test queries
4. Copy working queries to services

### Testing AI Responses
1. Use Supabase chat_messages table to see raw responses
2. Check if tasks are being parsed correctly
3. Adjust regex patterns in `ai_service.dart` if needed

## Production Deployment

### Before Deploying

1. **Security**
   - Remove debug prints
   - Enable ProGuard for Android
   - Set up proper error logging

2. **Testing**
   - Test on real devices
   - Test all authentication flows
   - Test AI task generation
   - Test offline scenarios

3. **Configuration**
   - Use production Supabase project
   - Set up production OpenAI account
   - Configure proper error tracking

### iOS Deployment

```bash
# Build for iOS
flutter build ios --release

# Follow Xcode instructions for App Store submission
```

### Android Deployment

```bash
# Build for Android
flutter build appbundle --release

# Upload to Google Play Console
```

## Monitoring

### Supabase Monitoring
- Check Auth logs: Authentication → Logs
- Check Database logs: Database → Logs
- Monitor API usage: Project Settings → Usage

### OpenAI Monitoring
- Check API usage: https://platform.openai.com/account/usage
- Monitor costs: https://platform.openai.com/account/billing/overview

## Performance Optimization

1. **Database**
   - Indexes are already created
   - Use pagination for large lists
   - Cache frequently accessed data

2. **API Calls**
   - Implement request debouncing
   - Cache AI responses
   - Use connection pooling

3. **UI**
   - Use `const` constructors
   - Implement lazy loading
   - Optimize images

## Next Steps

1. Customize theme colors in `lib/config/theme.dart`
2. Add more onboarding questions
3. Implement task categories
4. Add push notifications
5. Create backup/export features
6. Add more AI capabilities

## Support Resources

- Flutter Docs: https://flutter.dev/docs
- Supabase Docs: https://supabase.com/docs
- OpenAI Docs: https://platform.openai.com/docs
- Provider Package: https://pub.dev/packages/provider

## Common Commands

```bash
# Update dependencies
flutter pub upgrade

# Check for issues
flutter analyze

# Format code
dart format lib/

# Run tests
flutter test

# Build APK
flutter build apk

# Build iOS
flutter build ios
```

## Useful Links

- Supabase Dashboard: https://app.supabase.com
- OpenAI Dashboard: https://platform.openai.com
- Flutter Packages: https://pub.dev
- GitHub: https://github.com

---

**Last Updated**: November 2024
**Flutter Version**: 3.0+
**Dart Version**: 3.0+

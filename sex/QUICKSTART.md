# AI Planner App - Quick Start Guide

Get up and running in 5 minutes!

## Prerequisites

- Flutter 3.0+ installed
- Supabase account (free)
- OpenAI API key

## 1. Get Your API Keys (2 minutes)

### Supabase
1. Go to https://supabase.com → Sign up
2. Create new project
3. Go to Settings → API
4. Copy `Project URL` and `anon public` key

### OpenAI
1. Go to https://platform.openai.com → Sign up
2. Go to API keys
3. Create new secret key
4. Copy the key

## 2. Setup Project (2 minutes)

```bash
# Clone/download the project
cd ai_planner_app

# Create .env file
cat > .env << EOF
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_key
OPENAI_API_KEY=your_openai_key
EOF

# Install dependencies
flutter pub get
```

## 3. Setup Database (1 minute)

1. Go to Supabase Dashboard
2. SQL Editor → New Query
3. Copy-paste entire `supabase/schema.sql`
4. Click Run

## 4. Run App (1 minute)

```bash
# Run on your device/emulator
flutter run

# Or specific device
flutter run -d ios    # iPhone
flutter run -d android # Android
```

## 5. Test It Out

1. **Sign Up**: Create account with email/password
2. **Onboarding**: Answer 5 fun questions
3. **Chat**: Type "I need to finish my project and prepare for meeting"
4. **Tasks**: See AI-generated tasks appear
5. **Planner**: View tasks on calendar

## Common Issues

### "flutter: Exception: Failed to initialize Supabase"
```bash
# Check .env file exists and has correct values
cat .env

# Rebuild
flutter clean
flutter pub get
flutter run
```

### "Authentication failed"
- Verify email/password
- Check Supabase project is active
- Ensure auth is enabled

### "AI not generating tasks"
- Check OpenAI API key is valid
- Verify billing is set up
- Check network connection

## File Structure

```
lib/
├── main.dart              # App entry
├── config/theme.dart      # UI theme
├── models/                # Data models
├── providers/             # State management
├── services/              # API services
└── screens/               # UI screens
```

## Key Features

✅ Beautiful modern UI
✅ AI-powered task generation
✅ User authentication
✅ Calendar planner
✅ Real-time chat
✅ Dark mode support

## Next Steps

1. Customize theme in `lib/config/theme.dart`
2. Add more onboarding questions
3. Implement notifications
4. Add task categories
5. Deploy to app stores

## Useful Commands

```bash
# Hot reload (during development)
flutter run
# Press 'r' to reload

# Format code
dart format lib/

# Check for issues
flutter analyze

# Build for production
flutter build apk      # Android
flutter build ios      # iOS
```

## Documentation

- Full setup: See `SETUP_GUIDE.md`
- API docs: See `API_DOCUMENTATION.md`
- Full README: See `README.md`

## Support

- Flutter: https://flutter.dev/docs
- Supabase: https://supabase.com/docs
- OpenAI: https://platform.openai.com/docs

---

**You're all set! Happy planning! 🚀**

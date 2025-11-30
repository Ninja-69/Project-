# 🚀 START HERE - AI Planner App

Welcome! You have a complete, production-ready Flutter app. Let's get you started in 5 minutes.

## ⚡ Quick Start (5 Minutes)

### Step 1: Get Your API Keys (2 min)

**Supabase:**
1. Go to https://supabase.com
2. Sign up and create a new project
3. Go to Settings → API
4. Copy `Project URL` and `anon public` key

**OpenAI:**
1. Go to https://platform.openai.com
2. Sign up and go to API keys
3. Create new secret key
4. Copy the key

### Step 2: Create .env File (1 min)

Create a file named `.env` in the project root:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key_here
OPENAI_API_KEY=sk-your_openai_key_here
```

### Step 3: Setup Database (1 min)

1. Go to Supabase Dashboard
2. Click "SQL Editor"
3. Click "New Query"
4. Open `supabase/schema.sql` from this project
5. Copy entire content
6. Paste into SQL editor
7. Click "Run"

### Step 4: Install & Run (1 min)

```bash
# Install dependencies
flutter pub get

# Run the app
flutter run
```

**Done! 🎉**

---

## 📱 Test the App

1. **Sign Up**: Create account with email/password
2. **Onboarding**: Answer 5 fun questions
3. **Chat**: Type "I need to finish my project and prepare for meeting"
4. **Tasks**: See AI-generated tasks appear
5. **Planner**: View tasks on calendar

---

## 📚 Documentation

### For More Details
- **Full Setup**: See `SETUP_GUIDE.md`
- **API Reference**: See `API_DOCUMENTATION.md`
- **Features**: See `FEATURES.md`
- **Navigation**: See `INDEX.md`

### Quick Links
- [QUICKSTART.md](QUICKSTART.md) - 5-minute setup
- [SETUP_GUIDE.md](SETUP_GUIDE.md) - Detailed setup
- [README.md](README.md) - Full documentation
- [INDEX.md](INDEX.md) - Documentation index

---

## 🎯 What You Have

✅ Complete Flutter app with 8 screens
✅ AI-powered task generation
✅ User authentication
✅ Calendar planner
✅ Real-time chat
✅ Beautiful UI with dark mode
✅ Production-ready code
✅ Comprehensive documentation

---

## 🔧 Troubleshooting

### "flutter: Exception: Failed to initialize Supabase"
- Check `.env` file exists
- Verify Supabase URL and key are correct
- Run `flutter clean` then `flutter pub get`

### "Authentication failed"
- Verify email/password
- Check Supabase project is active
- Ensure auth is enabled

### "AI not generating tasks"
- Check OpenAI API key is valid
- Verify billing is set up
- Check network connection

See `SETUP_GUIDE.md` for more troubleshooting.

---

## 📁 Project Structure

```
lib/
├── main.dart              # App entry
├── config/theme.dart      # UI theme
├── models/                # Data models
├── providers/             # State management
├── services/              # API services
└── screens/               # UI screens
```

---

## 🎨 Customization

### Change Theme Colors
Edit `lib/config/theme.dart`:
- `primaryColor` - Main color
- `secondaryColor` - Secondary color
- `accentColor` - Accent color

### Change Onboarding Questions
Edit `lib/screens/onboarding/onboarding_screen.dart`:
- Modify `_questions` list
- Add/remove questions
- Change question text

### Change AI Behavior
Edit `lib/services/ai_service.dart`:
- Modify system prompt
- Change task parsing logic
- Adjust priority extraction

---

## 🚀 Next Steps

1. ✅ Complete the 5-minute setup above
2. ✅ Test all features
3. ✅ Customize theme (optional)
4. ✅ Read full documentation
5. ✅ Deploy to app stores

---

## 📞 Need Help?

### Quick Questions
- Check `QUICKSTART.md`
- See `SETUP_GUIDE.md` troubleshooting
- Review `API_DOCUMENTATION.md`

### Detailed Help
- Read `README.md` for full overview
- See `PROJECT_SUMMARY.md` for architecture
- Check `FEATURES.md` for feature details

### Navigation
- Use `INDEX.md` to find what you need

---

## 💡 Pro Tips

1. **Hot Reload**: Press 'r' during `flutter run` for fast development
2. **Dark Mode**: App automatically supports dark mode
3. **Responsive**: Works on all screen sizes
4. **AI Chat**: Try different prompts to see task generation
5. **Customization**: All colors and text are easily customizable

---

## 🎉 You're Ready!

Everything is set up and ready to go. Start with the 5-minute setup above, then explore the app!

### Quick Links
- [QUICKSTART.md](QUICKSTART.md) - 5-minute setup
- [SETUP_GUIDE.md](SETUP_GUIDE.md) - Detailed setup
- [INDEX.md](INDEX.md) - Documentation index
- [FEATURES.md](FEATURES.md) - Feature overview

---

## 📊 What's Included

- ✅ 15 Dart files (2000+ lines of code)
- ✅ 9 documentation files (2800+ lines)
- ✅ Complete database schema
- ✅ Configuration files
- ✅ All dependencies in pubspec.yaml

---

## 🎯 Your Journey

```
START HERE
    ↓
5-Minute Setup
    ↓
Test the App
    ↓
Customize (optional)
    ↓
Read Documentation
    ↓
Deploy to App Stores
```

---

**Let's build something amazing! 🚀**

Start with the 5-minute setup above. You'll have a working app in no time!

Questions? Check the documentation files or see `SETUP_GUIDE.md` for troubleshooting.

Happy coding! ✨

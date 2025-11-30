import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:smooth_page_indicator/smooth_page_indicator.dart';
import '../../providers/auth_provider.dart';
import '../../config/theme.dart';

class OnboardingScreen extends StatefulWidget {
  const OnboardingScreen({Key? key}) : super(key: key);

  @override
  State<OnboardingScreen> createState() => _OnboardingScreenState();
}

class _OnboardingScreenState extends State<OnboardingScreen> {
  final PageController _pageController = PageController();
  int _currentPage = 0;
  final Map<String, dynamic> _onboardingData = {};

  final List<OnboardingQuestion> _questions = [
    OnboardingQuestion(
      title: 'What\'s your vibe?',
      subtitle: 'Help us understand your personality',
      options: ['Organized & Structured', 'Flexible & Spontaneous', 'Balanced'],
      key: 'personality',
    ),
    OnboardingQuestion(
      title: 'How do you work best?',
      subtitle: 'Pick your productivity style',
      options: ['Early Bird 🌅', 'Night Owl 🌙', 'Whenever Works'],
      key: 'workStyle',
    ),
    OnboardingQuestion(
      title: 'What\'s your main goal?',
      subtitle: 'What do you want to achieve?',
      options: ['Career Growth', 'Personal Development', 'Work-Life Balance', 'All of the Above'],
      key: 'mainGoal',
    ),
    OnboardingQuestion(
      title: 'How often do you plan?',
      subtitle: 'Your planning frequency',
      options: ['Daily', 'Weekly', 'Monthly', 'As Needed'],
      key: 'planningFrequency',
    ),
    OnboardingQuestion(
      title: 'What\'s your biggest challenge?',
      subtitle: 'Tell us what you struggle with',
      options: ['Procrastination', 'Too Many Tasks', 'Lack of Focus', 'Time Management'],
      key: 'challenge',
    ),
  ];

  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
  }

  Future<void> _completeOnboarding() async {
    final authProvider = context.read<AuthProvider>();
    final success = await authProvider.completeOnboarding(_onboardingData);
    
    if (!success && mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(authProvider.error ?? 'Onboarding failed')),
      );
    }
  }

  void _selectOption(String key, String value) {
    setState(() {
      _onboardingData[key] = value;
    });
    
    if (_currentPage < _questions.length - 1) {
      _pageController.nextPage(
        duration: const Duration(milliseconds: 300),
        curve: Curves.easeInOut,
      );
    } else {
      _completeOnboarding();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: [
            Expanded(
              child: PageView.builder(
                controller: _pageController,
                onPageChanged: (index) {
                  setState(() => _currentPage = index);
                },
                itemCount: _questions.length,
                itemBuilder: (context, index) {
                  final question = _questions[index];
                  return OnboardingPage(
                    question: question,
                    onSelectOption: _selectOption,
                    selectedOption: _onboardingData[question.key],
                  );
                },
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(24),
              child: Column(
                children: [
                  SmoothPageIndicator(
                    controller: _pageController,
                    count: _questions.length,
                    effect: ExpandingDotsEffect(
                      dotColor: AppTheme.borderColor,
                      activeDotColor: AppTheme.primaryColor,
                      dotHeight: 8,
                      dotWidth: 8,
                      spacing: 8,
                    ),
                  ),
                  const SizedBox(height: 24),
                  Row(
                    children: [
                      if (_currentPage > 0)
                        Expanded(
                          child: OutlinedButton(
                            onPressed: () {
                              _pageController.previousPage(
                                duration: const Duration(milliseconds: 300),
                                curve: Curves.easeInOut,
                              );
                            },
                            child: const Text('Back'),
                          ),
                        ),
                      if (_currentPage > 0) const SizedBox(width: 12),
                      Expanded(
                        child: ElevatedButton(
                          onPressed: _currentPage < _questions.length - 1
                              ? () {
                                  _pageController.nextPage(
                                    duration: const Duration(milliseconds: 300),
                                    curve: Curves.easeInOut,
                                  );
                                }
                              : _completeOnboarding,
                          child: Text(
                            _currentPage < _questions.length - 1 ? 'Next' : 'Get Started',
                          ),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class OnboardingQuestion {
  final String title;
  final String subtitle;
  final List<String> options;
  final String key;

  OnboardingQuestion({
    required this.title,
    required this.subtitle,
    required this.options,
    required this.key,
  });
}

class OnboardingPage extends StatelessWidget {
  final OnboardingQuestion question;
  final Function(String, String) onSelectOption;
  final String? selectedOption;

  const OnboardingPage({
    Key? key,
    required this.question,
    required this.onSelectOption,
    this.selectedOption,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(24),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            question.title,
            style: Theme.of(context).textTheme.displayMedium,
          ),
          const SizedBox(height: 8),
          Text(
            question.subtitle,
            style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                  color: AppTheme.textSecondaryColor,
                ),
          ),
          const SizedBox(height: 48),
          ...question.options.map((option) {
            final isSelected = selectedOption == option;
            return Padding(
              padding: const EdgeInsets.only(bottom: 12),
              child: GestureDetector(
                onTap: () => onSelectOption(question.key, option),
                child: Container(
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    border: Border.all(
                      color: isSelected ? AppTheme.primaryColor : AppTheme.borderColor,
                      width: isSelected ? 2 : 1,
                    ),
                    borderRadius: BorderRadius.circular(12),
                    color: isSelected
                        ? AppTheme.primaryColor.withOpacity(0.1)
                        : Colors.transparent,
                  ),
                  child: Row(
                    children: [
                      Container(
                        width: 24,
                        height: 24,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          border: Border.all(
                            color: isSelected ? AppTheme.primaryColor : AppTheme.borderColor,
                            width: 2,
                          ),
                        ),
                        child: isSelected
                            ? Center(
                                child: Container(
                                  width: 12,
                                  height: 12,
                                  decoration: const BoxDecoration(
                                    shape: BoxShape.circle,
                                    color: AppTheme.primaryColor,
                                  ),
                                ),
                              )
                            : null,
                      ),
                      const SizedBox(width: 16),
                      Expanded(
                        child: Text(
                          option,
                          style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                                fontWeight: isSelected ? FontWeight.w600 : FontWeight.w500,
                              ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            );
          }).toList(),
        ],
      ),
    );
  }
}

import React, { useState, useEffect } from 'react';
import { Bot, FileText, Mic, Zap, Database, Layout, Layers, TrendingUp, CheckCircle2, User } from 'lucide-react';
import Reveal from './ui/Reveal';
import Badge from './ui/Badge';

const voiceConversations = [
  [
    { type: 'human', text: 'I need to schedule an appointment' },
    { type: 'ai', text: 'Sure! What date and time work best for you?' },
    { type: 'human', text: 'Tomorrow at 2 PM' },
    { type: 'ai', text: 'Perfect! Your appointment is confirmed for tomorrow at 2 PM.' }
  ],
  [
    { type: 'human', text: 'How can I track my order?' },
    { type: 'ai', text: 'I can help you with that. What\'s your order number?' },
    { type: 'human', text: 'It\'s ORD-12345' },
    { type: 'ai', text: 'Your order is on the way and will arrive in 2-3 days.' }
  ],
  [
    { type: 'human', text: 'Set a reminder for my meeting' },
    { type: 'ai', text: 'When would you like to be reminded?' },
    { type: 'human', text: 'One hour before the meeting' },
    { type: 'ai', text: 'Reminder set! You\'ll get notified one hour before.' }
  ],
  [
    { type: 'human', text: 'What\'s your current promotion?' },
    { type: 'ai', text: 'We have 30% off on all services this week!' },
    { type: 'human', text: 'That sounds great, how do I apply it?' },
    { type: 'ai', text: 'Use code SAVE30 at checkout. Offer ends Sunday!' }
  ],
  [
    { type: 'human', text: 'I have a technical issue' },
    { type: 'ai', text: 'I\'m here to help. What\'s the problem?' },
    { type: 'human', text: 'The app keeps crashing' },
    { type: 'ai', text: 'Try updating to the latest version. Let me know if it helps!' }
  ]
];

const chatbotConversations = [
  {
    title: 'Data Analytics',
    human: 'Analyze last 20 transactions',
    ai: 'Processing data...',
    visualization: 'graph'
  },
  {
    title: 'File Processing',
    human: 'Process my CSV file',
    ai: 'File processed successfully ✓',
    visualization: 'file'
  },
  {
    title: 'Lead Generation',
    human: 'Generate 50 leads',
    ai: 'Generated 50 qualified leads',
    visualization: 'list'
  },
  {
    title: 'Email Template',
    human: 'Create email template',
    ai: 'Email template created',
    visualization: 'email'
  },
  {
    title: 'Report Generation',
    human: 'Generate monthly report',
    ai: 'Report generated successfully',
    visualization: 'progress'
  },
  {
    title: 'Document Summarization',
    human: 'Summarize this document',
    ai: 'Summary: Key points extracted',
    visualization: 'document'
  },
  {
    title: 'Social Media Posts',
    human: 'Create 5 social posts',
    ai: '5 posts created with metrics',
    visualization: 'carousel'
  },
  {
    title: 'Code Generation',
    human: 'Generate login form code',
    ai: 'Code generated with syntax highlighting',
    visualization: 'code'
  },
  {
    title: 'Image Processing',
    human: 'Resize and compress images',
    ai: 'Images processed: 2.5MB → 450KB',
    visualization: 'image'
  },
  {
    title: 'Database Query',
    human: 'Query customer data',
    ai: 'Query executed: 1,250 results',
    visualization: 'table'
  },
  {
    title: 'Sentiment Analysis',
    human: 'Analyze customer feedback',
    ai: 'Sentiment: 78% positive, 15% neutral, 7% negative',
    visualization: 'chart'
  },
  {
    title: 'Invoice Processing',
    human: 'Extract invoice data',
    ai: 'Invoice data extracted and structured',
    visualization: 'invoice'
  }
];

const ChatbotDemo: React.FC = () => {
  const [conversationIndex, setConversationIndex] = useState(0);
  const [stage, setStage] = useState<'question' | 'thinking' | 'answer' | 'display' | 'clear'>('question');

  useEffect(() => {
    const timings = {
      question: 1600,
      thinking: 1000,
      answer: 1600,
      display: 1200,
      clear: 800
    };

    const timer = setTimeout(() => {
      if (stage === 'question') {
        setStage('thinking');
      } else if (stage === 'thinking') {
        setStage('answer');
      } else if (stage === 'answer') {
        setStage('display');
      } else if (stage === 'display') {
        setStage('clear');
      } else {
        setConversationIndex((conversationIndex + 1) % chatbotConversations.length);
        setStage('question');
      }
    }, timings[stage]);

    return () => clearTimeout(timer);
  }, [stage, conversationIndex]);

  const currentConversation = chatbotConversations[conversationIndex];

  const getMessageOpacity = (messageStage: 'question' | 'answer') => {
    if (stage === 'clear') return 'opacity-0';
    if (messageStage === 'question' && (stage === 'question' || stage === 'thinking' || stage === 'answer' || stage === 'display')) return 'opacity-100';
    if (messageStage === 'answer' && (stage === 'answer' || stage === 'display')) return 'opacity-100';
    return 'opacity-0';
  };

  const renderVisualization = () => {
    switch (currentConversation.visualization) {
      case 'graph':
        return (
          <div className="w-full h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-lg p-4 flex items-end justify-between gap-2">
            {[40, 60, 45, 75, 55, 80, 50].map((height, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t" style={{ height: `${height}%`, animation: stage === 'answer' || stage === 'display' ? `slideUp 0.6s ease-out` : 'none', animationDelay: `${i * 0.1}s` }}></div>
            ))}
          </div>
        );
      case 'file':
        return (
          <div className={`flex items-center justify-center gap-3 p-4 bg-orange-500/10 rounded-lg transition-all duration-500 ${stage === 'answer' || stage === 'display' ? 'opacity-100' : 'opacity-0'}`}>
            <FileText size={24} className="text-orange-400" />
            <div className="text-sm text-gray-300">
              <p className="font-semibold">data.csv</p>
              <p className="text-xs text-gray-500">2.4 MB ✓</p>
            </div>
          </div>
        );
      case 'list':
        return (
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`flex items-center gap-2 p-2 bg-orange-500/10 rounded transition-all duration-500 ${stage === 'answer' || stage === 'display' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <CheckCircle2 size={16} className="text-orange-400 flex-shrink-0" />
                <span className="text-xs text-gray-300">Lead #{i}: contact@example.com</span>
              </div>
            ))}
          </div>
        );
      case 'email':
        return (
          <div className={`bg-white/5 border border-white/10 rounded-lg p-4 text-xs text-gray-300 transition-all duration-500 ${stage === 'answer' || stage === 'display' ? 'opacity-100' : 'opacity-0'}`}>
            <p className="font-semibold text-orange-400 mb-2">Subject: Welcome to our service</p>
            <p>Hi there,</p>
            <p className="mt-2">Thank you for joining us...</p>
          </div>
        );
      case 'progress':
        return (
          <div className={`space-y-2 transition-all duration-500 ${stage === 'answer' || stage === 'display' ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Report Generation</span>
              <span>100%</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full" style={{ width: stage === 'answer' || stage === 'display' ? '100%' : '0%', transition: 'width 1.2s ease-out' }}></div>
            </div>
          </div>
        );
      case 'document':
        return (
          <div className={`bg-orange-500/10 rounded-lg p-4 text-xs text-gray-300 transition-all duration-500 ${stage === 'answer' || stage === 'display' ? 'opacity-100' : 'opacity-0'}`}>
            <p className="font-semibold text-orange-400 mb-2">📄 Summary</p>
            <p>Key points: Implementation strategy, timeline, budget allocation...</p>
          </div>
        );
      case 'carousel':
        return (
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`flex-shrink-0 w-32 h-20 bg-orange-500/10 rounded-lg p-2 text-xs text-gray-300 transition-all duration-500 ${stage === 'answer' || stage === 'display' ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <p className="font-semibold text-orange-400">Post #{i}</p>
                <p className="text-[10px] mt-1">👍 {100 * i} likes</p>
              </div>
            ))}
          </div>
        );
      case 'code':
        return (
          <div className={`bg-black/50 border border-orange-500/20 rounded-lg p-3 font-mono text-[10px] text-orange-300 transition-all duration-500 ${stage === 'answer' || stage === 'display' ? 'opacity-100' : 'opacity-0'}`}>
            <p>&lt;form&gt;</p>
            <p className="ml-2">&lt;input type="email" /&gt;</p>
            <p className="ml-2">&lt;button&gt;Login&lt;/button&gt;</p>
            <p>&lt;/form&gt;</p>
          </div>
        );
      case 'image':
        return (
          <div className={`flex items-center justify-between gap-2 p-3 bg-orange-500/10 rounded-lg text-xs text-gray-300 transition-all duration-500 ${stage === 'answer' || stage === 'display' ? 'opacity-100' : 'opacity-0'}`}>
            <div>Before: 2.5 MB</div>
            <div className="text-orange-400">→</div>
            <div>After: 450 KB</div>
          </div>
        );
      case 'table':
        return (
          <div className={`bg-white/5 rounded-lg overflow-hidden text-xs transition-all duration-500 ${stage === 'answer' || stage === 'display' ? 'opacity-100' : 'opacity-0'}`}>
            <div className="grid grid-cols-3 gap-2 p-2 border-b border-white/10">
              <div className="text-orange-400 font-semibold">ID</div>
              <div className="text-orange-400 font-semibold">Name</div>
              <div className="text-orange-400 font-semibold">Email</div>
            </div>
            <div className="grid grid-cols-3 gap-2 p-2 text-gray-400">
              <div>1001</div>
              <div>John</div>
              <div>john@...</div>
            </div>
          </div>
        );
      case 'chart':
        return (
          <div className={`flex items-center justify-center gap-4 p-4 transition-all duration-500 ${stage === 'answer' || stage === 'display' ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">78%</div>
              <div className="text-xs text-gray-400">Positive</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">15%</div>
              <div className="text-xs text-gray-400">Neutral</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">7%</div>
              <div className="text-xs text-gray-400">Negative</div>
            </div>
          </div>
        );
      case 'invoice':
        return (
          <div className={`bg-white/5 rounded-lg p-3 text-xs text-gray-300 space-y-1 transition-all duration-500 ${stage === 'answer' || stage === 'display' ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex justify-between"><span>Invoice #:</span><span className="text-orange-400">INV-2024-001</span></div>
            <div className="flex justify-between"><span>Amount:</span><span className="text-orange-400">$1,250.00</span></div>
            <div className="flex justify-between"><span>Status:</span><span className="text-green-400">✓ Extracted</span></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/5 rounded-3xl p-8 md:p-12 hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,0,0.2)] flex flex-col items-center justify-center min-h-[500px] overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-6">
        {/* Badge */}
        <div className="animate-fade-in-down">
          <div className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 shadow-[0_0_30px_rgba(255,107,0,0.4)] border border-orange-400/30 inline-block">
            <span className="text-white font-semibold text-sm tracking-wide">{currentConversation.title}</span>
          </div>
        </div>

        {/* Main Container */}
        <div className="w-full max-w-xl mx-auto flex-1 flex flex-col justify-center gap-4">
          {/* Conversation Box */}
          <div className="relative bg-gradient-to-br from-[#2a2a2a]/40 to-[#1a1a1a]/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            {/* Inner glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 space-y-4">
              {/* User Question */}
              <div className={`transition-all duration-500 ${getMessageOpacity('question')}`}>
                <div className="flex gap-3 justify-end">
                  <div className="max-w-xs px-4 py-2 rounded-2xl bg-orange-500/20 border border-orange-500/30 text-gray-100">
                    <p className="text-xs leading-relaxed">{currentConversation.human}</p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                    <User size={16} className="text-orange-400" />
                  </div>
                </div>
              </div>

              {/* Visualization */}
              <div className={`transition-all duration-500 ${stage === 'answer' || stage === 'display' ? 'opacity-100' : 'opacity-0'}`}>
                {renderVisualization()}
              </div>

              {/* AI Answer */}
              <div className={`transition-all duration-500 ${getMessageOpacity('answer')}`}>
                <div className="flex gap-3 justify-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-600/30 border border-orange-500/40 flex items-center justify-center">
                    <Bot size={16} className="text-orange-300" />
                  </div>
                  <div className="max-w-xs px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-gray-200">
                    <p className="text-xs leading-relaxed">{currentConversation.ai}</p>
                  </div>
                </div>
              </div>

              {/* Progress Dots */}
              <div className="flex gap-1 justify-center pt-2">
                {[0, 1, 2, 3].map((idx) => (
                  <div
                    key={idx}
                    className={`h-1 rounded-full transition-all duration-300 ${idx === conversationIndex % 4 ? 'bg-orange-500 w-4' : 'bg-white/20 w-1.5'
                      }`}
                  ></div>
                ))}
              </div>

              {/* Counter */}
              <div className="text-center text-xs text-gray-500 font-medium">
                {conversationIndex + 1} / {chatbotConversations.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VoiceAgentDemo: React.FC = () => {
  const [conversationIndex, setConversationIndex] = useState(0);
  const [stage, setStage] = useState<'question' | 'thinking' | 'answer' | 'display' | 'clear'>('question');

  useEffect(() => {
    const timings = {
      question: 1600,
      thinking: 1000,
      answer: 1600,
      display: 1200,
      clear: 800
    };

    const timer = setTimeout(() => {
      if (stage === 'question') {
        setStage('thinking');
      } else if (stage === 'thinking') {
        setStage('answer');
      } else if (stage === 'answer') {
        setStage('display');
      } else if (stage === 'display') {
        setStage('clear');
      } else {
        setConversationIndex((conversationIndex + 1) % voiceConversations.length);
        setStage('question');
      }
    }, timings[stage]);

    return () => clearTimeout(timer);
  }, [stage, conversationIndex]);

  const currentConversation = voiceConversations[conversationIndex];
  const userMessage = currentConversation[0];
  const aiMessage = currentConversation[1];

  const getMessageOpacity = (messageStage: 'question' | 'answer') => {
    if (stage === 'clear') return 'opacity-0';
    if (messageStage === 'question' && (stage === 'question' || stage === 'thinking' || stage === 'answer' || stage === 'display')) return 'opacity-100';
    if (messageStage === 'answer' && (stage === 'answer' || stage === 'display')) return 'opacity-100';
    return 'opacity-0';
  };

  return (
    <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/5 rounded-3xl p-8 md:p-12 hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,0,0.2)] flex flex-col items-center justify-center min-h-[500px] overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-6">
        {/* Badge */}
        <div className="animate-fade-in-down">
          <div className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 shadow-[0_0_30px_rgba(255,107,0,0.4)] border border-orange-400/30 inline-block">
            <span className="text-white font-semibold text-sm tracking-wide">Voice Agents</span>
          </div>
        </div>

        {/* Main Container */}
        <div className="w-full max-w-xl mx-auto flex-1 flex flex-col justify-center">
          {/* Waveform Visualization - Organic SVG waves */}
          <div className={`flex items-center justify-center h-16 mb-6 transition-all duration-500 ${stage === 'thinking' ? 'opacity-100' : 'opacity-60'
            }`}>
            <svg width="100%" height="100%" viewBox="0 0 400 80" preserveAspectRatio="xMidYMid meet" className="w-full">
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ea580c" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#ff6b00" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#ff8c00" stopOpacity="0.3" />
                </linearGradient>
                <filter id="waveGlow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Animated wave paths */}
              <path
                d="M0,40 Q25,20 50,40 T100,40 T150,40 T200,40 T250,40 T300,40 T350,40 T400,40"
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#waveGlow)"
                style={{
                  animation: `organicWave 3s ease-in-out infinite`,
                  opacity: stage === 'thinking' ? 1 : 0.7
                }}
              />
              <path
                d="M0,45 Q30,25 60,45 T120,45 T180,45 T240,45 T300,45 T360,45 T400,45"
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                filter="url(#waveGlow)"
                style={{
                  animation: `organicWave 3.5s ease-in-out infinite`,
                  animationDelay: '0.3s',
                  opacity: stage === 'thinking' ? 0.8 : 0.5
                }}
              />
              <path
                d="M0,50 Q20,30 40,50 T80,50 T120,50 T160,50 T200,50 T240,50 T280,50 T320,50 T360,50 T400,50"
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                filter="url(#waveGlow)"
                style={{
                  animation: `organicWave 4s ease-in-out infinite`,
                  animationDelay: '0.6s',
                  opacity: stage === 'thinking' ? 0.7 : 0.4
                }}
              />
            </svg>
          </div>

          {/* Conversation Box */}
          <div className="relative bg-gradient-to-br from-[#2a2a2a]/40 to-[#1a1a1a]/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
            {/* Inner glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 space-y-4">
              {/* User Question */}
              <div className={`transition-all duration-500 ${getMessageOpacity('question')}`}>
                <div className="flex gap-3 justify-end">
                  <div className="max-w-xs px-4 py-2 rounded-2xl bg-orange-500/20 border border-orange-500/30 text-gray-100">
                    <p className="text-xs leading-relaxed">{userMessage.text}</p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
                    <User size={16} className="text-orange-400" />
                  </div>
                </div>
              </div>

              {/* AI Answer */}
              <div className={`transition-all duration-500 ${getMessageOpacity('answer')}`}>
                <div className="flex gap-3 justify-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-600/30 border border-orange-500/40 flex items-center justify-center">
                    <Bot size={16} className="text-orange-300" />
                  </div>
                  <div className="max-w-xs px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-gray-200">
                    <p className="text-xs leading-relaxed">{aiMessage.text}</p>
                  </div>
                </div>
              </div>

              {/* Progress Dots */}
              <div className="flex gap-1 justify-center pt-2">
                {[0, 1, 2, 3].map((idx) => (
                  <div
                    key={idx}
                    className={`h-1 rounded-full transition-all duration-300 ${idx === conversationIndex % 5 ? 'bg-orange-500 w-4' : 'bg-white/20 w-1.5'
                      }`}
                  ></div>
                ))}
              </div>

              {/* Counter */}
              <div className="text-center text-xs text-gray-500 font-medium">
                {conversationIndex + 1} / {voiceConversations.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CoreServices: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Header */}
        <div className="mb-24">
          <Reveal effect="fade-up">
            <Badge className="mb-6 text-orange-400 border-orange-500/20 bg-orange-500/10">
              <Layers size={14} className="mr-2" /> Services
            </Badge>
          </Reveal>
          <Reveal effect="fade-up" delay={0.1}>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Our Services
            </h2>
          </Reveal>
        </div>

        <div className="space-y-32">

          {/* 1. Chatbot Development */}
          <div className="group">
            <Reveal effect="fade-up">
              <h3 className="text-3xl md:text-4xl font-semibold mb-6">Chatbot Development</h3>
              <p className="text-gray-400 text-lg max-w-2xl mb-12 leading-relaxed">
                We develop advanced AI-driven chatbots that handle repetitive tasks, manage data, and streamline your internal workflows to drive real results for your business.
              </p>
            </Reveal>

            <Reveal effect="zoom-in" delay={0.2} width="100%">
              <ChatbotDemo />
            </Reveal>
          </div>

          {/* 2. AI Consulting */}
          <div className="group">
            <Reveal effect="fade-up">
              <h3 className="text-3xl md:text-4xl font-semibold mb-6">AI Consulting</h3>
              <p className="text-gray-400 text-lg max-w-2xl mb-12 leading-relaxed">
                We dive into your organization to uncover AI-driven automation opportunities that can elevate your operational efficiency, quality, and speed, and reduce cost.
              </p>
            </Reveal>

            <Reveal effect="zoom-in" delay={0.2} width="100%">
              <div className="group relative bg-[#050505] border border-white/10 rounded-3xl p-4 md:p-12 hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.2)] relative overflow-hidden">
                <div className="relative z-10">
                  {/* Premium Graph Container */}
                  <div className="relative w-full mt-4 md:mt-8">
                    <div className="h-[300px] md:h-[450px] w-full">
                      {/* Animated Grid Background */}
                      <div className="absolute inset-0 opacity-30">
                        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                          <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="url(#gridGradient)" strokeWidth="0.5" />
                            </pattern>
                            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.1" />
                              <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                      </div>

                      {/* Main Chart SVG */}
                      <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1000 350">
                        <defs>
                          {/* Efficiency Gradient - Premium Orange */}
                          <linearGradient id="efficiencyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#FF8C00" stopOpacity="0.5" />
                            <stop offset="50%" stopColor="#FF6B00" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
                          </linearGradient>
                          {/* Cost Gradient - Premium Blue */}
                          <linearGradient id="costGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.4" />
                            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                          </linearGradient>
                          {/* Strong Glow Filter */}
                          <filter id="glow">
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                              <feMergeNode in="coloredBlur" />
                              <feMergeNode in="SourceGraphic" />
                            </feMerge>
                          </filter>
                          {/* Enhanced Glow for Lines */}
                          <filter id="strongGlow">
                            <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                            <feMerge>
                              <feMergeNode in="coloredBlur" />
                              <feMergeNode in="coloredBlur" />
                              <feMergeNode in="SourceGraphic" />
                            </feMerge>
                          </filter>
                        </defs>

                        {/* Efficiency Area Fill */}
                        <path
                          d="M0,280 C150,260 250,180 400,140 C550,100 700,80 900,60 L900,350 L0,350 Z"
                          fill="url(#efficiencyGradient)"
                          className="animate-fade-in"
                          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
                        />

                        {/* Cost Area Fill */}
                        <path
                          d="M0,200 C150,210 250,240 400,260 C550,280 700,290 900,300 L900,350 L0,350 Z"
                          fill="url(#costGradient)"
                          className="animate-fade-in"
                          style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
                        />

                        {/* Efficiency Line - Enhanced Glow */}
                        <path
                          d="M0,280 C150,260 250,180 400,140 C550,100 700,80 900,60"
                          fill="none"
                          stroke="#FF6B00"
                          strokeWidth="5"
                          filter="url(#strongGlow)"
                          className="animate-draw"
                          style={{ filter: 'drop-shadow(0 0 20px rgba(255,107,0,0.8))' }}
                        />

                        {/* Cost Line - Enhanced Glow */}
                        <path
                          d="M0,200 C150,210 250,240 400,260 C550,280 700,290 900,300"
                          fill="none"
                          stroke="#60A5FA"
                          strokeWidth="4"
                          strokeDasharray="8 4"
                          className="animate-draw"
                          style={{ filter: 'drop-shadow(0 0 15px rgba(96,165,250,0.6))' }}
                        />

                        {/* Data Points on Efficiency Line */}
                        {[0, 225, 450, 675, 900].map((x, i) => {
                          const y = 280 - (i * 44);
                          return (
                            <g key={`point-${i}`} className="animate-fade-in" style={{ animationDelay: `${0.8 + i * 0.15}s`, opacity: 0, animationFillMode: 'forwards' }}>
                              <circle cx={x} cy={y} r="6" fill="#FF6B00" opacity="0.3" />
                              <circle cx={x} cy={y} r="4" fill="#FF8C00" stroke="#FF6B00" strokeWidth="1.5" />
                              <circle cx={x} cy={y} r="12" fill="none" stroke="#FF6B00" strokeWidth="1" opacity="0.2" />
                            </g>
                          );
                        })}

                        {/* Axis Lines - Subtle */}
                        <line x1="0" y1="330" x2="900" y2="330" stroke="#FF6B00" strokeWidth="1" opacity="0.15" />
                        <line x1="0" y1="0" x2="0" y2="330" stroke="#FF6B00" strokeWidth="1" opacity="0.15" />
                      </svg>

                      {/* Floating Stat Cards - Desktop */}
                      <div className="absolute top-8 right-8 md:top-12 md:right-12 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-2xl border border-white/30 rounded-2xl md:rounded-3xl p-3 md:p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_0_40px_rgba(255,107,0,0.3),8px_8px_16px_rgba(0,0,0,0.3),-8px_-8px_16px_rgba(255,255,255,0.05)] animate-float hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_60px_rgba(255,107,0,0.5),12px_12px_24px_rgba(0,0,0,0.4),-12px_-12px_24px_rgba(255,255,255,0.1)] hover:border-orange-500/60 transition-all duration-300 group">
                        <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-orange-500/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-orange-400 animate-pulse shadow-[0_0_12px_rgba(255,165,0,0.9)]"></div>
                            <span className="text-xs md:text-xs text-orange-300 uppercase tracking-wider font-semibold">Efficiency</span>
                          </div>
                          <div className="text-2xl md:text-4xl font-bold text-white mt-2 md:mt-3 flex items-center gap-1 md:gap-2">
                            +48%
                            <span className="text-sm md:text-lg text-emerald-400 font-bold">↑</span>
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-2xl border border-white/30 rounded-2xl md:rounded-3xl p-3 md:p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_0_40px_rgba(96,165,250,0.3),8px_8px_16px_rgba(0,0,0,0.3),-8px_-8px_16px_rgba(255,255,255,0.05)] animate-float hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3),0_0_60px_rgba(96,165,250,0.5),12px_12px_24px_rgba(0,0,0,0.4),-12px_-12px_24px_rgba(255,255,255,0.1)] hover:border-blue-500/60 transition-all duration-300 group" style={{ animationDelay: '1s' }}>
                        <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-500/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 md:gap-3">
                            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-400 animate-pulse shadow-[0_0_12px_rgba(96,165,250,0.9)]"></div>
                            <span className="text-xs md:text-xs text-blue-300 uppercase tracking-wider font-semibold">Cost</span>
                          </div>
                          <div className="text-2xl md:text-4xl font-bold text-white mt-2 md:mt-3 flex items-center gap-1 md:gap-2">
                            -11%
                            <span className="text-sm md:text-lg text-emerald-400 font-bold">↓</span>
                          </div>
                        </div>
                      </div>

                      {/* Legend */}
                      <div className="absolute bottom-2 md:bottom-0 left-2 md:left-0 flex gap-4 md:gap-8 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-0.5 bg-orange-500 rounded-full"></div>
                          <span className="text-gray-400">Efficiency</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-0.5 bg-blue-500 rounded-full" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #3B82F6 0px, #3B82F6 4px, transparent 4px, transparent 8px)' }}></div>
                          <span className="text-gray-400">Cost</span>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* 3. Voice Agents */}
          <div className="group">
            <Reveal effect="fade-up">
              <h3 className="text-3xl md:text-4xl font-semibold mb-6">Voice Agents</h3>
              <p className="text-gray-400 text-lg max-w-2xl mb-12 leading-relaxed">
                We develop intelligent voice agents that use advanced natural language processing (NLP) to handle inbound and outbound calls for support, scheduling, reminders, and promotions.
              </p>
            </Reveal>

            <Reveal effect="zoom-in" delay={0.2} width="100%">
              <VoiceAgentDemo />
            </Reveal>
          </div>

          {/* 4. Workflow Automations */}
          <div className="group">
            <Reveal effect="fade-up">
              <h3 className="text-3xl md:text-4xl font-semibold mb-6">Workflow Automations</h3>
              <p className="text-gray-400 text-lg max-w-2xl mb-12 leading-relaxed">
                We streamline your processes with workflow automations that connect your favourite applications to eliminate repetitive tasks and enhance accuracy.
              </p>
            </Reveal>

            <Reveal effect="zoom-in" delay={0.2} width="100%">
              <div className="group relative bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.2)] relative overflow-hidden min-h-[500px] flex items-center justify-center">
                <div className="relative z-10 flex items-center justify-center w-full">
                  {/* Animated Background Grid */}
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full" preserveAspectRatio="none">
                      <defs>
                        <pattern id="workflowGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#FF6B00" strokeWidth="0.5" opacity="0.1" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#workflowGrid)" />
                    </svg>
                  </div>

                  <div className="flex flex-col relative z-10 max-w-2xl w-full space-y-8">

                    {/* Step 1 - Form Submission */}
                    <div className="flex gap-6 group/step animate-fade-in-up" style={{ animationDelay: '0s' }}>
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0f0f0f] border-2 border-white/20 flex items-center justify-center group-hover/step:border-orange-500/50 group-hover/step:shadow-[0_0_30px_rgba(255,107,0,0.3)] transition-all duration-300 z-10 relative">
                          <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover/step:opacity-100 transition-opacity duration-300"></div>
                          <Layout size={28} className="text-white relative z-10 group-hover/step:scale-110 transition-transform" />
                        </div>
                        <div className="h-16 w-1 bg-gradient-to-b from-white/20 via-orange-500/50 to-transparent my-2 relative">
                          <div className="absolute inset-0 bg-gradient-to-b from-orange-500 to-transparent animate-flow" style={{ animationDelay: '0.5s' }}></div>
                        </div>
                      </div>
                      <div className="flex-1 py-4">
                        <div className="group/content">
                          <h4 className="text-lg font-bold text-white mb-2 group-hover/step:text-orange-400 transition-colors">1. New Form Submission</h4>
                          <p className="text-gray-400 text-sm">Framer form triggers workflow</p>
                          <div className="mt-3 inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs text-orange-300 font-medium animate-pulse">
                            Trigger Event
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 2 - Data Processing */}
                    <div className="flex gap-6 group/step animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0f0f0f] border-2 border-orange-500/40 flex items-center justify-center group-hover/step:border-orange-500/80 group-hover/step:shadow-[0_0_30px_rgba(255,107,0,0.4)] transition-all duration-300 z-10 relative">
                          <div className="absolute inset-0 rounded-2xl bg-orange-500/10 opacity-0 group-hover/step:opacity-100 transition-opacity duration-300"></div>
                          <Zap size={28} className="text-orange-400 relative z-10 group-hover/step:scale-110 transition-transform animate-pulse" />
                        </div>
                        <div className="h-16 w-1 bg-gradient-to-b from-orange-500 via-orange-500/50 to-transparent my-2 relative">
                          <div className="absolute inset-0 bg-gradient-to-b from-orange-500 to-transparent animate-flow" style={{ animationDelay: '0.8s' }}></div>
                        </div>
                      </div>
                      <div className="flex-1 py-4">
                        <div className="group/content">
                          <h4 className="text-lg font-bold text-white mb-2 group-hover/step:text-orange-400 transition-colors">2. Format & Clean Data</h4>
                          <p className="text-gray-400 text-sm">Zapier processes and validates lead information</p>
                          <div className="mt-3 inline-block px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-xs text-orange-300 font-medium">
                            Processing...
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 3 - Database Storage */}
                    <div className="flex gap-6 group/step animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#0f0f0f] border-2 border-blue-500/40 flex items-center justify-center group-hover/step:border-blue-500/80 group-hover/step:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 z-10 relative">
                          <div className="absolute inset-0 rounded-2xl bg-blue-500/10 opacity-0 group-hover/step:opacity-100 transition-opacity duration-300"></div>
                          <Database size={28} className="text-blue-400 relative z-10 group-hover/step:scale-110 transition-transform" />
                        </div>
                      </div>
                      <div className="flex-1 py-4">
                        <div className="group/content">
                          <h4 className="text-lg font-bold text-white mb-2 group-hover/step:text-blue-400 transition-colors">3. Store in Database</h4>
                          <p className="text-gray-400 text-sm">Lead automatically saved to Airtable</p>
                          <div className="mt-3 inline-block px-3 py-1 rounded-full bg-green-500/20 border border-green-500/40 text-xs text-green-300 font-medium animate-pulse">
                            ✓ Complete
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Flow Summary */}
                    <div className="mt-8 pt-8 border-t border-white/10 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-orange-500/30 transition-all">
                          <div className="text-2xl font-bold text-orange-400">0.5s</div>
                          <div className="text-xs text-gray-500 mt-1">Trigger</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-orange-500/30 transition-all">
                          <div className="text-2xl font-bold text-orange-400">1.2s</div>
                          <div className="text-xs text-gray-500 mt-1">Processing</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-green-500/30 transition-all">
                          <div className="text-2xl font-bold text-green-400">2.0s</div>
                          <div className="text-xs text-gray-500 mt-1">Total Time</div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreServices;
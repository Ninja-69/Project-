import React from 'react';
import { Bot, FileText, Mic, Zap, Database, Layout, Layers, TrendingUp, CheckCircle2 } from 'lucide-react';
import Reveal from './ui/Reveal';
import Badge from './ui/Badge';

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
              <div className="bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[400px] flex flex-col justify-center">
                {/* Chat Interface */}
                <div className="max-w-2xl mx-auto w-full space-y-8">

                  {/* User Message */}
                  <div className="flex items-start gap-4 justify-end">
                    <div className="bg-[#1A1A1A] text-gray-200 px-6 py-4 rounded-2xl rounded-tr-sm max-w-md flex items-center gap-3 border border-white/5">
                      <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                        <span className="text-xs font-bold text-orange-500">You</span>
                      </div>
                      <span>Please create a graph of the profits in this file</span>
                      <FileText size={18} className="text-orange-500 ml-2" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10 flex-shrink-0">
                      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100" alt="User" className="w-full h-full rounded-full object-cover opacity-80" />
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(255,107,0,0.3)]">
                      <Bot size={20} className="text-white" />
                    </div>
                    <div className="space-y-2 w-full max-w-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-orange-500">AI Assistant</span>
                      </div>

                      {/* Bar Chart Visual */}
                      <div className="bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 w-full">
                        <div className="flex items-end justify-between h-32 gap-2 md:gap-4 px-2">
                          {[30, 45, 25, 60, 40, 75, 50, 80, 45, 60].map((height, i) => (
                            <div key={i} className="w-full bg-[#1A1A1A] rounded-t-sm relative group/bar transition-all duration-500 hover:bg-[#252525]" style={{ height: `${height}%` }}>
                              {i === 2 && ( // Highlighted bar
                                <div className="absolute inset-0 bg-gradient-to-t from-orange-600 to-orange-400 shadow-[0_0_20px_rgba(255,107,0,0.3)]"></div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
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
              <div className="bg-gradient-to-br from-[#050505] to-[#0a0a0a] border border-white/10 rounded-3xl p-6 md:p-12 relative overflow-hidden min-h-[500px]">
                {/* Premium Graph Container */}
                <div className="relative h-[350px] w-full mt-8">
                  {/* Animated Grid Background */}
                  <div className="absolute inset-0 opacity-30">
                    <svg className="w-full h-full" preserveAspectRatio="none">
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
                  <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 350">
                    <defs>
                      {/* Efficiency Gradient */}
                      <linearGradient id="efficiencyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
                      </linearGradient>
                      {/* Cost Gradient */}
                      <linearGradient id="costGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                      </linearGradient>
                      {/* Glow Filter */}
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
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

                    {/* Efficiency Line - Smooth Curve */}
                    <path
                      d="M0,280 C150,260 250,180 400,140 C550,100 700,80 900,60"
                      fill="none"
                      stroke="#FF6B00"
                      strokeWidth="4"
                      filter="url(#glow)"
                      className="animate-draw drop-shadow-[0_0_15px_rgba(255,107,0,0.6)]"
                    />

                    {/* Cost Line - Smooth Curve */}
                    <path
                      d="M0,200 C150,210 250,240 400,260 C550,280 700,290 900,300"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="3"
                      strokeDasharray="8 4"
                      className="animate-draw opacity-70"
                    />

                    {/* Data Points on Efficiency Line */}
                    {[0, 225, 450, 675, 900].map((x, i) => {
                      const y = 280 - (i * 44);
                      return (
                        <g key={`point-${i}`} className="animate-fade-in" style={{ animationDelay: `${0.8 + i * 0.15}s`, opacity: 0, animationFillMode: 'forwards' }}>
                          <circle cx={x} cy={y} r="5" fill="#000" stroke="#FF6B00" strokeWidth="2" />
                          <circle cx={x} cy={y} r="10" fill="none" stroke="#FF6B00" strokeWidth="1" opacity="0.3" />
                        </g>
                      );
                    })}

                    {/* Axis Lines */}
                    <line x1="0" y1="330" x2="900" y2="330" stroke="#FF6B00" strokeWidth="1" opacity="0.2" />
                    <line x1="0" y1="0" x2="0" y2="330" stroke="#FF6B00" strokeWidth="1" opacity="0.2" />
                  </svg>

                  {/* Floating Stat Cards */}
                  <div className="absolute top-8 right-8 bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-orange-500/30 rounded-2xl p-5 shadow-[0_0_30px_rgba(255,107,0,0.2)] animate-float hover:shadow-[0_0_40px_rgba(255,107,0,0.3)] transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse"></div>
                      <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Efficiency Gain</span>
                    </div>
                    <div className="text-4xl font-bold text-white mt-2 flex items-center gap-2">
                      +48%
                      <span className="text-lg text-green-400">↑</span>
                    </div>
                  </div>

                  <div className="absolute bottom-12 right-8 bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-blue-500/30 rounded-2xl p-5 shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-float hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                      <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Cost Reduction</span>
                    </div>
                    <div className="text-4xl font-bold text-white mt-2 flex items-center gap-2">
                      -11%
                      <span className="text-lg text-green-400">↓</span>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="absolute bottom-0 left-0 flex gap-8 text-xs">
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
            </Reveal>
          </div>

          {/* 3. Voice Assistants */}
          <div className="group">
            <Reveal effect="fade-up">
              <h3 className="text-3xl md:text-4xl font-semibold mb-6">Voice Assistants</h3>
              <p className="text-gray-400 text-lg max-w-2xl mb-12 leading-relaxed">
                We develop voice assistants that use advanced natural language processing (NLP) to handle inbound and outbound calls for support, scheduling, reminders, and promotions.
              </p>
            </Reveal>

            <Reveal effect="zoom-in" delay={0.2} width="100%">
              <div className="bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[500px] flex flex-col items-center justify-center">
                <div className="relative flex flex-col items-center justify-center w-full max-w-2xl gap-8">

                  {/* Waveform Visualization */}
                  <div className="flex items-center justify-center gap-1 h-20">
                    {[...Array(20)].map((_, i) => (
                      <div key={`wave-${i}`} className="w-1.5 bg-gradient-to-t from-orange-500 to-orange-300 rounded-full" style={{ height: `${30 + Math.sin(i * 0.5) * 40}%`, animation: `pulse 0.8s ease-in-out infinite`, animationDelay: `${i * 0.05}s` }}></div>
                    ))}
                  </div>

                  {/* Central Mic with Glow */}
                  <div className="relative">
                    <div className="absolute inset-0 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
                    <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center shadow-[0_0_60px_rgba(255,107,0,0.4)] border-2 border-orange-400/50">
                      <div className="absolute inset-2 rounded-full border-2 border-orange-300/30 animate-spin" style={{ animationDuration: '3s' }}></div>
                      <Mic size={48} className="text-white relative z-10 animate-pulse" />
                    </div>
                  </div>

                  {/* Status Text with Animation */}
                  <div className="text-center">
                    <div className="px-6 py-2 rounded-full bg-orange-500/20 border border-orange-500/40 inline-block mb-4">
                      <span className="text-orange-300 text-sm font-semibold animate-pulse">🎙️ Listening...</span>
                    </div>
                    <p className="text-gray-400 text-sm">Real-time voice processing with AI intelligence</p>
                  </div>

                  {/* Premium Chat Simulation */}
                  <div className="w-full max-w-md space-y-4 mt-8 bg-gradient-to-b from-white/5 to-transparent rounded-2xl p-4 border border-white/10">
                    {/* User Message */}
                    <div className="flex justify-end animate-fade-in-up" style={{ animationDelay: '0s' }}>
                      <div className="group relative max-w-xs">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                        <div className="relative bg-gradient-to-br from-orange-500/30 to-orange-600/20 border border-orange-500/50 rounded-2xl px-4 py-3 shadow-lg hover:shadow-[0_0_20px_rgba(255,107,0,0.3)] transition-all">
                          <p className="text-gray-100 text-sm font-medium">Can you help me track my order?</p>
                          <span className="text-xs text-gray-400 mt-1 block">Just now</span>
                        </div>
                      </div>
                    </div>

                    {/* Typing Indicator */}
                    <div className="flex justify-start animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                      <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-2xl">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-orange-400 animate-bounce" style={{ animationDelay: '0s' }}></div>
                          <div className="w-2 h-2 rounded-full bg-orange-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 rounded-full bg-orange-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                        <span className="text-xs text-gray-500">AI is thinking...</span>
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex justify-start animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
                      <div className="group relative max-w-xs">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-300"></div>
                        <div className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl px-4 py-3 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
                          <p className="text-gray-200 text-sm leading-relaxed">
                            <span className="font-semibold text-white">Order #12847</span> is on its way! 📦 Arriving tomorrow by 2 PM. Track it <span className="text-orange-400 font-medium">here</span>.
                          </p>
                          <span className="text-xs text-gray-500 mt-2 block">1s ago</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
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
              <div className="bg-gradient-to-br from-[#050505] to-[#0a0a0a] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[500px] flex items-center justify-center">
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
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoreServices;
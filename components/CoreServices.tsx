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
              <div className="group relative bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.2)]">
                <div className="relative z-10">
                  {/* Chat Animation */}
                  <div className="max-w-2xl mx-auto w-full space-y-6">
                    {/* User Message */}
                    <div className="flex items-start gap-4 justify-end animate-fade-in-up" style={{ animationDelay: '0s' }}>
                      <div className="bg-gradient-to-br from-orange-500/30 to-orange-600/20 border border-orange-500/50 rounded-2xl px-4 py-3 max-w-xs shadow-lg flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0 border border-orange-500/30">
                          <FileText size={16} className="text-orange-200" />
                        </div>
                        <p className="text-gray-100 text-sm font-medium">Please create a graph of the profits in this file</p>
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex items-start gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(255,107,0,0.3)]">
                        <Bot size={20} className="text-white" />
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 max-w-xs w-full">
                        <p className="text-gray-200 text-sm leading-relaxed mb-3">
                          <span className="font-semibold text-white">Done!</span> I've generated your profit graph. Revenue is up 48% this quarter.
                        </p>
                        {/* Graph Visualization */}
                        <div className="bg-black/20 rounded-lg p-3 border border-white/5">
                          <div className="flex items-end justify-between h-24 gap-2">
                            {/* Bars */}
                            <div className="w-full bg-orange-500/10 rounded-t-sm h-[40%] relative group overflow-hidden">
                              <div className="absolute bottom-0 w-full bg-orange-500 rounded-t-sm h-full opacity-60"></div>
                            </div>
                            <div className="w-full bg-orange-500/10 rounded-t-sm h-[60%] relative group overflow-hidden">
                              <div className="absolute bottom-0 w-full bg-orange-500 rounded-t-sm h-full opacity-60"></div>
                            </div>
                            <div className="w-full bg-orange-500/10 rounded-t-sm h-[45%] relative group overflow-hidden">
                              <div className="absolute bottom-0 w-full bg-orange-500 rounded-t-sm h-full opacity-60"></div>
                            </div>
                            <div className="w-full bg-orange-500/10 rounded-t-sm h-[85%] relative group overflow-hidden">
                              <div className="absolute bottom-0 w-full bg-gradient-to-t from-orange-600 to-orange-400 rounded-t-sm h-full shadow-[0_0_15px_rgba(255,107,0,0.4)]"></div>
                            </div>
                          </div>
                          <div className="flex justify-between mt-2 text-[10px] text-gray-500 font-medium uppercase tracking-wider">
                            <span>Q1</span>
                            <span>Q2</span>
                            <span>Q3</span>
                            <span>Q4</span>
                          </div>
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

          {/* 3. Voice Assistants */}
          <div className="group">
            <Reveal effect="fade-up">
              <h3 className="text-3xl md:text-4xl font-semibold mb-6">Voice Assistants</h3>
              <p className="text-gray-400 text-lg max-w-2xl mb-12 leading-relaxed">
                We develop voice assistants that use advanced natural language processing (NLP) to handle inbound and outbound calls for support, scheduling, reminders, and promotions.
              </p>
            </Reveal>

            <Reveal effect="zoom-in" delay={0.2} width="100%">
              <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/5 rounded-3xl p-8 md:p-12 hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,0,0.2)] flex flex-col items-center justify-center min-h-[500px] overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center w-full gap-8">

                  {/* Speech Recognition Badge */}
                  <div className="mb-4 animate-fade-in-down">
                    <div className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-600 to-orange-500 shadow-[0_0_30px_rgba(255,107,0,0.4)] border border-orange-400/30 inline-block">
                      <span className="text-white font-semibold text-sm tracking-wide">Speech Recognition</span>
                    </div>
                  </div>

                  {/* Main Card Container */}
                  <div className="w-full max-w-md mx-auto">
                    <div className="relative bg-gradient-to-br from-[#2a2a2a]/40 to-[#1a1a1a]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-orange-500/20 transition-all duration-300">

                      {/* Inner glow effect */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="relative z-10 flex items-center justify-between gap-6">

                        {/* Left: Mic Button */}
                        <div className="flex-shrink-0">
                          <div className="relative">
                            {/* Outer pulsing rings */}
                            <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-lg animate-pulse-glow" style={{ width: '100px', height: '100px', left: '-20px', top: '-20px' }}></div>
                            <div className="absolute inset-0 rounded-full border border-orange-500/30 animate-pulse" style={{ width: '90px', height: '90px', left: '-15px', top: '-15px', animationDelay: '0.3s' }}></div>
                            <div className="absolute inset-0 rounded-full border border-orange-500/20 animate-pulse" style={{ width: '80px', height: '80px', left: '-10px', top: '-10px', animationDelay: '0.6s' }}></div>

                            {/* Main button */}
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-600 to-orange-700 flex items-center justify-center shadow-[0_0_30px_rgba(255,107,0,0.5)] border border-orange-400/50 relative cursor-pointer hover:scale-110 transition-transform duration-300 group/mic">
                              {/* Inner glow */}
                              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-orange-400/30 to-transparent"></div>

                              {/* Mic Icon */}
                              <Mic size={24} className="text-white drop-shadow-lg relative z-10" />
                            </div>
                          </div>
                        </div>

                        {/* Right: Waveform Bars */}
                        <div className="flex-1 flex items-center justify-end gap-1.5 h-20">
                          {[...Array(24)].map((_, i) => {
                            const baseHeight = 30;
                            const randomHeight = Math.sin(i * 0.5) * 40 + baseHeight;
                            const delay = i * 0.05;

                            return (
                              <div
                                key={`bar-${i}`}
                                className="w-1 bg-gradient-to-t from-orange-600 via-orange-500 to-orange-400 rounded-full shadow-[0_0_10px_rgba(255,107,0,0.6)]"
                                style={{
                                  height: `${randomHeight}%`,
                                  animation: `waveformBars 1.2s ease-in-out infinite`,
                                  animationDelay: `${delay}s`,
                                  opacity: 0.7 + (Math.sin(i * 0.3) * 0.3)
                                }}
                              ></div>
                            );
                          })}
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
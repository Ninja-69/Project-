import React from 'react';
import { Bot, FileText, Mic, Zap, Database, Layout, ArrowUp, ArrowDown, TrendingUp, Layers } from 'lucide-react';
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
              <div className="bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[400px]">
                {/* Graph Container */}
                <div className="relative h-[300px] w-full mt-8">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 border-l border-b border-white/5">
                    {[...Array(24)].map((_, i) => (
                      <div key={i} className="border-r border-t border-white/5"></div>
                    ))}
                  </div>

                  {/* SVG Lines */}
                  <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Gradient Fill Area (Under the curve) */}
                    <path
                      d="M0,280 C200,270 300,200 500,150 C700,100 800,90 900,80 V300 H0 Z"
                      fill="url(#graphGradient)"
                      className="opacity-0 animate-fade-in"
                      style={{ animationDelay: '1s', animationFillMode: 'forwards', animationDuration: '1s' }}
                    />

                    {/* Dotted Line (Cost) - Animated */}
                    <path
                      d="M0,150 C100,150 200,180 300,220 C400,260 500,280 800,290"
                      fill="none"
                      stroke="#333"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                      className="animate-draw"
                      style={{ opacity: 0.5 }}
                    />

                    {/* Solid Line (Efficiency) - Animated */}
                    <path
                      d="M0,280 C200,270 300,200 500,150 C700,100 800,90 900,80"
                      fill="none"
                      stroke="#FF6B00"
                      strokeWidth="3"
                      className="drop-shadow-[0_0_10px_rgba(255,107,0,0.5)] animate-draw"
                    />

                    {/* End Point Dot with Pulse */}
                    <g className="animate-fade-in" style={{ animationDelay: '1.8s', opacity: 0, animationFillMode: 'forwards' }}>
                      <circle cx="900" cy="80" r="6" fill="#000" stroke="#FF6B00" strokeWidth="3" />
                      <circle cx="900" cy="80" r="12" fill="none" stroke="#FF6B00" strokeWidth="1" className="animate-ping opacity-50" />
                      <circle cx="900" cy="80" r="20" fill="none" stroke="#FF6B00" strokeWidth="0.5" className="animate-pulse-slow opacity-30" />
                    </g>
                  </svg>

                  {/* Floating Badges */}
                  <div className="absolute top-[20%] right-[15%] bg-[#111] border border-white/10 rounded-xl p-4 shadow-2xl animate-float">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      <span className="text-xs text-gray-400 uppercase tracking-wider">Efficiency</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-white">+48%</span>
                      <div className="bg-green-500/20 p-1 rounded">
                        <TrendingUp size={16} className="text-green-500" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-[10%] right-[25%] bg-[#111] border border-white/10 rounded-xl p-4 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                      <span className="text-xs text-gray-400 uppercase tracking-wider">Cost</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-white">-11%</span>
                      <div className="bg-green-500/20 p-1 rounded">
                        <ArrowDown size={16} className="text-green-500" />
                      </div>
                    </div>
                  </div>

                  {/* X-Axis Labels */}
                  <div className="absolute bottom-[-40px] left-0 w-full flex justify-between text-xs text-gray-600 font-mono uppercase px-4">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
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
              <div className="bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[400px] flex items-center justify-center">
                <div className="relative flex items-center justify-center w-full max-w-2xl">

                  {/* Left Waveform */}
                  <div className="flex items-center gap-1 h-16 opacity-50">
                    {[...Array(15)].map((_, i) => (
                      <div key={`l-${i}`} className="w-1 bg-orange-500 rounded-full animate-pulse" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }}></div>
                    ))}
                  </div>

                  {/* Central Mic */}
                  <div className="relative mx-8 z-10">
                    <div className="w-24 h-24 rounded-full bg-[#111] border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(255,107,0,0.15)] relative">
                      <div className="absolute inset-0 rounded-full border border-orange-500/30 animate-ping opacity-20"></div>
                      <Mic size={32} className="text-white" />
                    </div>
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span className="px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-medium">
                        Active Listening...
                      </span>
                    </div>
                  </div>

                  {/* Right Waveform */}
                  <div className="flex items-center gap-1 h-16 opacity-50">
                    {[...Array(15)].map((_, i) => (
                      <div key={`r-${i}`} className="w-1 bg-orange-500 rounded-full animate-pulse" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }}></div>
                    ))}
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
              <div className="bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[400px] flex items-center justify-center">

                <div className="flex flex-col relative z-10 max-w-lg w-full">

                  {/* Step 1 */}
                  <div className="flex gap-6 group/step">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center group-hover/step:border-white/30 transition-colors z-10">
                        <Layout size={24} className="text-white" />
                      </div>
                      <div className="h-12 w-[1px] bg-gradient-to-b from-white/10 to-orange-500/50 my-1"></div>
                    </div>
                    <span className="text-lg text-gray-300 font-medium py-3">1. New Framer form submission</span>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-6 group/step">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-orange-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(255,107,0,0.1)] z-10">
                        <Zap size={24} className="text-orange-500" />
                      </div>
                      <div className="h-12 w-[1px] bg-gradient-to-b from-orange-500/50 to-white/10 my-1"></div>
                    </div>
                    <span className="text-lg text-white font-medium py-3">2. Format & clean lead data in Zapier</span>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-6 group/step">
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center group-hover/step:border-white/30 transition-colors z-10">
                        <Database size={24} className="text-blue-400" />
                      </div>
                    </div>
                    <span className="text-lg text-gray-300 font-medium py-3">3. Add lead to Airtable database</span>
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
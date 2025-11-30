import React from 'react';
import Badge from './ui/Badge';
import { Mic, Sparkles, FileText, MousePointer2, Asterisk, Box, Layers, Zap, Bot } from 'lucide-react';
import Reveal from './ui/Reveal';

const CoreServices: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-900/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">

        {/* Header */}
        <div className="flex flex-col items-start mb-24">
          <Reveal effect="bounce-in" delay={0.1}>
            <Badge className="mb-6 text-orange-400 border-orange-500/20 bg-orange-500/10 rounded-lg px-3 py-1 hover:bg-orange-500/20 hover:border-orange-500/40 hover:shadow-[0_0_20px_rgba(255,107,0,0.2)] transition-all duration-300">
              <Layers size={14} className="mr-2" /> Services
            </Badge>
          </Reveal>

          <Reveal effect="3d-flip" delay={0.2} width="100%">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
              Our Services
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-col gap-24 md:gap-40">

          {/* --- 1. Chatbot Development --- */}
          <div className="flex flex-col gap-10">
            <Reveal effect="fade-up" delay={0.1}>
              <div className="max-w-3xl">
                <h3 className="text-3xl md:text-4xl font-medium mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Chatbot Development</h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                  We develop advanced AI-driven chatbots that handle repetitive tasks, manage data, and streamline your internal workflows to drive real results for your business.
                </p>
              </div>
            </Reveal>

            {/* Visual Card */}
            <Reveal effect="slide-right" delay={0.2} width="100%">
              <div className="w-full bg-[#050505] border border-white/10 rounded-3xl p-6 md:p-12 relative overflow-hidden hover:border-orange-500/20 hover:shadow-[0_0_40px_rgba(255,107,0,0.1)] transition-all duration-500 group">
                <div className="max-w-2xl mx-auto flex flex-col gap-8 font-sans relative z-10">

                  {/* User Input */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-10 h-10 rounded-full bg-orange-200 overflow-hidden border border-white/10">
                        <img src="https://picsum.photos/seed/user_avatar/100/100" alt="User" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-white text-base font-medium">You:</span>
                    </div>
                    <div className="bg-[#111] text-gray-200 px-6 py-5 rounded-2xl border border-white/5 flex items-center justify-between shadow-inner">
                      <span className="text-base md:text-lg font-light">Please create a graph of the profits in this file</span>
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                        <FileText size={20} className="text-orange-400" />
                      </div>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex flex-col gap-3 mt-4">
                    <div className="flex items-center gap-2 text-orange-500 mb-1">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/30">
                        <Sparkles size={14} fill="currentColor" />
                      </div>
                      <span className="text-base font-medium text-white">AI Assistant</span>
                    </div>

                    {/* Chart Visualization */}
                    <div className="bg-transparent pt-4 px-2">
                      <div className="flex items-end justify-between h-40 gap-3 md:gap-6">
                        {/* Bars */}
                        {[20, 35, 75, 25, 40, 30, 45, 35, 40, 25, 45, 30].map((height, i) => (
                          <div key={i} className="w-full bg-[#1a1a1a] rounded-sm relative group h-full flex items-end">
                            {/* The highlighted bar */}
                            {i === 2 ? (
                              <div className="w-full bg-gradient-to-t from-orange-600 via-orange-400 to-white rounded-sm shadow-[0_0_20px_rgba(255,107,0,0.3)]" style={{ height: `${height}%` }}></div>
                            ) : (
                              <div className="w-full bg-[#161616] rounded-sm" style={{ height: `${height}%` }}></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

                {/* Subtle background gradient */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-orange-500/5 to-transparent opacity-0 group-hover:opacity-30 pointer-events-none transition-opacity duration-700"></div>
              </div>
            </Reveal>
          </div>

          {/* --- 2. Voice Assistants --- */}
          <div className="flex flex-col gap-10">
            <Reveal effect="fade-up" delay={0.1}>
              <div className="max-w-3xl">
                <h3 className="text-3xl md:text-4xl font-medium mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Voice Assistants</h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                  We develop voice assistants that use advanced natural language processing (NLP) to handle inbound and outbound calls for support, scheduling, reminders, and promotions.
                </p>
              </div>
            </Reveal>

            {/* Visual Card */}
            <Reveal effect="slide-left" delay={0.2} width="100%">
              <div className="w-full bg-[#050505] border border-white/10 rounded-3xl p-10 md:p-20 relative overflow-hidden flex flex-col items-center justify-center min-h-[400px]">

                {/* Dot Pattern Background inside card */}
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                <div className="relative z-10 flex flex-col items-center justify-center w-full">

                  <div className="flex items-center justify-center gap-1.5 h-32 mb-8 w-full max-w-2xl">
                    {/* Left Waveform */}
                    {[20, 30, 45, 30, 55, 40, 65, 50, 75, 45, 60, 35, 20, 40, 60, 30].reverse().map((h, i) => (
                      <div
                        key={`l-${i}`}
                        className="w-1 bg-gradient-to-b from-transparent via-orange-500 to-transparent rounded-full opacity-80"
                        style={{ height: `${h}%` }}
                      />
                    ))}

                    {/* Central Circle - Upgraded High Quality Icon Container */}
                    <div className="mx-6 md:mx-10 relative flex-shrink-0">
                      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-b from-[#1a1a1a] to-black border border-white/10 flex items-center justify-center shadow-[0_0_60px_rgba(255,107,0,0.15)] relative z-10 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50"></div>
                        {/* Premium Mic Icon Representation */}
                        <div className="relative z-10 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                          <Mic size={40} strokeWidth={1.5} />
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-full border border-orange-500/30 scale-125 animate-pulse-slow"></div>
                      <div className="absolute inset-0 bg-orange-500/10 blur-2xl rounded-full"></div>
                    </div>

                    {/* Right Waveform */}
                    {[20, 30, 45, 30, 55, 40, 65, 50, 75, 45, 60, 35, 20, 40, 60, 30].map((h, i) => (
                      <div
                        key={`r-${i}`}
                        className="w-1 bg-gradient-to-b from-transparent via-orange-500 to-transparent rounded-full opacity-80"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>

                  <div className="px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-sm font-medium tracking-wide shadow-[0_0_20px_rgba(255,107,0,0.1)]">
                    Active Listening...
                  </div>

                </div>
              </div>
            </Reveal>
          </div>

          {/* --- 3. Workflow Automations --- */}
          <div className="flex flex-col gap-10">
            <Reveal effect="fade-up" delay={0.1}>
              <div className="max-w-3xl">
                <h3 className="text-3xl md:text-4xl font-medium mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Workflow Automations</h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                  We streamline your processes with workflow automations that connect your favourite applications to eliminate repetitive tasks and enhance accuracy.
                </p>
              </div>
            </Reveal>

            {/* Visual Card */}
            <Reveal effect="slide-right" delay={0.2} width="100%">
              <div className="w-full bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-16 flex justify-center items-center min-h-[400px]">
                <div className="w-full max-w-xl relative pl-8">

                  {/* Step 1: Framer */}
                  <div className="relative z-10 flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center border border-white/10 shrink-0 shadow-lg group-hover:border-orange-500/30 transition-colors">
                      <MousePointer2 className="text-white rotate-[-45deg]" size={28} fill="currentColor" />
                    </div>
                    <span className="text-white font-medium text-lg">1. New Framer form submission</span>
                  </div>

                  {/* Connector 1 - gradient line */}
                  <div className="ml-[31px] h-20 w-[2px] bg-gradient-to-b from-[#333] via-orange-500 to-[#333] my-2 relative opacity-80"></div>

                  {/* Step 2: Zapier */}
                  <div className="relative z-10 flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center border border-white/10 shrink-0 shadow-lg group-hover:border-orange-500/30 transition-colors">
                      <Asterisk className="text-orange-500" size={32} />
                    </div>
                    <span className="text-white font-medium text-lg">2. Format & clean lead data in Zapier</span>
                  </div>

                  {/* Connector 2 */}
                  <div className="ml-[31px] h-20 w-[2px] bg-gradient-to-b from-[#333] via-orange-500 to-[#333] my-2 relative opacity-80"></div>

                  {/* Step 3: Airtable */}
                  <div className="relative z-10 flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center border border-white/10 shrink-0 shadow-lg group-hover:border-orange-500/30 transition-colors">
                      <Box className="text-blue-400" size={28} />
                    </div>
                    <span className="text-white font-medium text-lg">3. Add lead to Airtable database</span>
                  </div>

                </div>
              </div>
            </Reveal>
          </div>

          {/* --- 4. AI Consulting --- */}
          <div className="flex flex-col gap-10">
            <Reveal effect="fade-up" delay={0.1}>
              <div className="max-w-3xl">
                <h3 className="text-3xl md:text-4xl font-medium mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">AI Consulting</h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                  We dive into your organization to uncover AI-driven automation opportunities that can elevate your operational efficiency, quality, and speed, and reduce cost.
                </p>
              </div>
            </Reveal>

            {/* Visual Card - OVERHAULED GRAPH */}
            <Reveal effect="slide-left" delay={0.2} width="100%">
              <div className="w-full bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden flex items-center justify-center min-h-[500px]">

                {/* Graph Container */}
                <div className="relative w-full max-w-4xl h-96 bg-[#080808] rounded-2xl border border-white/5 p-8 shadow-2xl overflow-hidden">

                  {/* Grid Lines */}
                  <div className="absolute inset-8 grid grid-cols-6 grid-rows-5 gap-0 opacity-10 pointer-events-none">
                    {Array.from({ length: 30 }).map((_, i) => (
                      <div key={i} className="border-r border-t border-white/30 last:border-r-0"></div>
                    ))}
                  </div>

                  {/* SVG Graph */}
                  <svg className="absolute inset-0 w-full h-full p-8 overflow-visible" viewBox="0 0 800 320" preserveAspectRatio="xMidYMid meet">
                    <defs>
                      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                      <linearGradient id="efficiencyGradient" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#ffa04d" stopOpacity="1" />
                      </linearGradient>
                      <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#ff6b00" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Line 2: Cost (Going Down) - Subtle, dashed, neutral */}
                    <path
                      d="M0,80 Q250,90 400,160 T800,280"
                      fill="none"
                      stroke="#444"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                      className="opacity-70"
                    />

                    {/* Line 1: Efficiency (Going Up) - Prominent, gradient, glowing */}
                    <path
                      d="M0,280 Q250,260 400,140 T800,40"
                      fill="none"
                      stroke="url(#efficiencyGradient)"
                      strokeWidth="5"
                      strokeLinecap="round"
                      filter="url(#glow)"
                      className="drop-shadow-lg"
                    />

                    {/* Area under Efficiency curve */}
                    <path
                      d="M0,280 Q250,260 400,140 T800,40 V320 H0 Z"
                      fill="url(#areaGradient)"
                      className="opacity-60"
                    />

                    {/* Data Points */}
                    {/* Point 1: Efficiency End */}
                    <circle cx="800" cy="40" r="8" fill="#ff6b00" stroke="white" strokeWidth="2" className="animate-pulse shadow-[0_0_15px_#ff6b00]" />

                    {/* Point 2: Cost End */}
                    <circle cx="800" cy="280" r="5" fill="#444" stroke="#222" strokeWidth="2" />
                  </svg>

                  {/* Floating Metric Card: Efficiency - Better Integration */}
                  <div className="absolute top-[20px] right-[40px] bg-[#111]/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] animate-float-slow z-20 hover:border-orange-500/30 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-orange-500 box-shadow-[0_0_8px_orange]"></div>
                      <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Efficiency</span>
                    </div>
                    <div className="text-3xl font-bold text-white flex items-center gap-2">
                      +48%
                      <span className="text-xs text-green-400 bg-green-500/10 border border-green-500/20 px-1.5 py-0.5 rounded flex items-center">
                        ↗
                      </span>
                    </div>
                  </div>

                  {/* Floating Metric Card: Cost - Better Integration */}
                  <div className="absolute bottom-[30px] right-[120px] bg-[#111]/90 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] animate-float-medium z-20 hover:border-white/20 transition-colors">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                      <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Cost</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-300 flex items-center gap-2">
                      -11%
                      <span className="text-xs text-green-400 bg-green-500/10 border border-green-500/20 px-1.5 py-0.5 rounded flex items-center">
                        ↘
                      </span>
                    </div>
                  </div>

                  {/* X-Axis Labels */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between px-8 py-2 text-xs font-mono text-gray-600 uppercase tracking-widest z-10">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
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
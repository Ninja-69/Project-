import React, { useState, useEffect, useRef } from 'react';
import Badge from './ui/Badge';
import { Box, Settings, Mail, Layout, Grid, GitBranch, Zap, Bot, Database, Server, Code2, Folder, Wrench } from 'lucide-react';
import Reveal from './ui/Reveal';

const Services: React.FC = () => {
  // --- Typewriter Logic for Custom Projects ---
  const codeLines = [
    { text: "Class ChatBot extends AI {", color: "text-orange-500" },
    { text: "  address public owner;", color: "text-gray-300" },
    { text: "  Model private gpt_core;", color: "text-gray-300" },
    { text: "  constructor() {", color: "text-orange-500" },
    { text: "    owner = msg.sender;", color: "text-gray-300" },
    { text: "    gpt_core = new Model('v4');", color: "text-gray-400" },
    { text: "  }", color: "text-orange-500" },
    { text: "  ", color: "text-transparent" }, // spacer
    { text: "  function process(input) {", color: "text-orange-500" },
    { text: "    if (!input.isValid()) return;", color: "text-gray-300" },
    { text: "    let context = db.fetch(user);", color: "text-gray-400" },
    { text: "    return gpt_core.ask(input);", color: "text-primary" },
    { text: "  }", color: "text-orange-500" },
    { text: "  ", color: "text-transparent" },
    { text: "  function optimize() {", color: "text-orange-500" },
    { text: "    // AI optimization logic", color: "text-green-500/70" },
    { text: "    return true;", color: "text-primary" },
    { text: "  }", color: "text-orange-500" },
    { text: "}", color: "text-orange-500" },
  ];
  
  const [displayedText, setDisplayedText] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Flatten the code for typing effect
  const fullText = codeLines.map(line => line.text).join('\n');
  
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    if (displayedText.length < fullText.length) {
      // Faster typing speed
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 10); 
    } else {
      // Reset phase
      timeout = setTimeout(() => {
        setDisplayedText("");
      }, 1500); 
    }

    return () => clearTimeout(timeout);
  }, [displayedText, fullText]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayedText]);

  const renderCode = () => {
    let currentLength = 0;
    return codeLines.map((line, idx) => {
      const lineStart = currentLength;
      currentLength += line.text.length + 1;

      if (displayedText.length < lineStart) return null;
      
      const visibleLength = Math.max(0, Math.min(line.text.length, displayedText.length - lineStart));
      const visibleText = line.text.slice(0, visibleLength);

      if (visibleLength === 0) return (
        <div key={idx} className="flex h-5">
           <span className="w-6 text-gray-700 select-none text-right mr-3 text-[10px] leading-5">{idx + 1}</span>
        </div>
      );

      // Syntax highlighting helper
      const highlight = (text: string, baseColor: string) => {
          return text.split(/(\s+)/).map((part, i) => {
             let color = baseColor;
             if (['Class', 'extends', 'new', 'return', 'if', 'function', 'constructor', 'public', 'private'].includes(part.trim())) color = 'text-primary font-semibold';
             if (['ChatBot', 'AI', 'Model'].includes(part.trim())) color = 'text-white font-bold';
             if (part.includes('(') || part.includes(')') || part.includes('{') || part.includes('}')) color = 'text-orange-300';
             return <span key={i} className={color}>{part}</span>
          });
      };

      return (
        <div key={idx} className="flex min-h-[1.25rem]">
          <span className="w-6 text-gray-700 select-none text-right mr-3 text-[10px] pt-0.5">{idx + 1}</span>
          <span className={`${line.color} whitespace-pre font-mono text-[11px]`}>{highlight(visibleText, line.color)}</span>
        </div>
      );
    });
  };

  // --- Automation Animation State ---
  const [activeNode, setActiveNode] = useState(0); // 0: Trigger, 1: Logic, 2: Action
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <Reveal effect="fade-up">
            <Badge>
              <Wrench size={14} className="mr-2" /> Our Services
            </Badge>
          </Reveal>
          
          <Reveal effect="blur-in" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
              Expertise That Drives Quality
            </h2>
          </Reveal>
          
          <Reveal effect="fade-up" delay={0.4}>
            <p className="text-gray-400 max-w-2xl">
              With deep expertise, we deliver quality solutions that drive success and exceed industry standards consistently.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          {/* --- Card 1: Plan & Organize (Orbital Hub) --- */}
          <Reveal effect="slide-left" delay={0.2} className="h-full" width="100%">
            <div className="group bg-surface-light border border-white/5 rounded-3xl p-6 md:p-8 hover:border-white/10 transition-colors flex flex-col overflow-hidden relative h-full hover:shadow-2xl hover:-translate-y-2 transform duration-500">
              <h3 className="text-2xl font-semibold text-center mb-8 relative z-10">Plan & Organize</h3>
              
              {/* Visual */}
              <div className="h-64 bg-[#0d0d0d] rounded-xl mb-8 relative flex items-center justify-center overflow-hidden border border-white/5 shadow-inner">
                  {/* Space Background */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/20 via-black to-black opacity-80"></div>
                  
                  {/* Orbit Rings */}
                  <div className="absolute w-48 h-48 border border-white/5 rounded-full animate-spin-slower"></div>
                  <div className="absolute w-32 h-32 border border-white/10 rounded-full animate-spin-reverse-slow"></div>

                  {/* Central Hub */}
                  <div className="relative z-20 w-16 h-16 rounded-xl bg-surface-lighter border border-primary/50 flex items-center justify-center shadow-[0_0_40px_rgba(255,107,0,0.3)] group-hover:scale-105 transition-transform duration-500">
                    <Box className="text-primary relative z-10" size={32} />
                    <div className="absolute inset-0 rounded-xl border border-primary/30 animate-ping-slow"></div>
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse-fast"></div>
                  </div>

                  {/* Satellites Container - Orbit 1 */}
                  <div className="absolute inset-0 animate-spin-slower">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-lg bg-surface-light border border-white/10 flex items-center justify-center shadow-lg animate-spin-reverse-slower">
                        <Folder size={16} className="text-blue-400"/>
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-10 h-10 rounded-lg bg-surface-light border border-white/10 flex items-center justify-center shadow-lg animate-spin-reverse-slower">
                        <Database size={16} className="text-purple-400"/>
                    </div>
                  </div>

                  {/* Satellites Container - Orbit 2 (Reverse) */}
                  <div className="absolute inset-0 animate-spin-reverse-slow">
                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-surface-light border border-white/10 flex items-center justify-center shadow-lg animate-spin-slower">
                        <Layout size={14} className="text-green-400"/>
                    </div>
                    <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-surface-light border border-white/10 flex items-center justify-center shadow-lg animate-spin-slower">
                        <Server size={14} className="text-orange-400"/>
                    </div>
                  </div>
              </div>

              <p className="text-gray-400 text-center text-sm leading-relaxed mt-auto relative z-10">
                We enhance efficiency by integrating apps and reducing downtime.
              </p>
            </div>
          </Reveal>

          {/* --- Card 2: Custom Projects (Matrix Terminal) --- */}
          <Reveal effect="fade-up" delay={0.4} className="h-full" width="100%">
            <div className="group bg-surface-light border border-white/5 rounded-3xl p-6 md:p-8 hover:border-white/10 transition-colors flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transform duration-500">
              <h3 className="text-2xl font-semibold text-center mb-8">Custom Projects</h3>
              
              {/* Visual */}
              <div className="h-64 bg-[#0d0d0d] rounded-xl mb-8 relative border border-white/5 overflow-hidden flex flex-col font-mono text-xs shadow-2xl">
                  
                  {/* Terminal Header */}
                  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5 bg-white/5 backdrop-blur-sm z-10">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="ml-auto flex items-center gap-1 text-[10px] text-gray-500 font-sans opacity-60">
                        <Code2 size={10} />
                        <span>bot_logic.sol</span>
                    </div>
                  </div>

                  {/* Code Content */}
                  <div 
                      ref={scrollRef}
                      className="flex-1 p-4 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar-none bg-black/50"
                  >
                      {renderCode()}
                      {/* Active Line Cursor */}
                      <div className="flex items-center mt-1 animate-pulse">
                          <span className="text-primary mr-2 opacity-80">➜</span>
                          <span className="inline-block w-2 h-4 bg-primary align-middle animate-cursor-blink shadow-[0_0_8px_rgba(255,107,0,0.8)]"></span>
                      </div>
                  </div>
              </div>
              
              <p className="text-gray-400 text-center text-sm leading-relaxed mt-auto">
                We created a versatile chatbot that understands diverse questions.
              </p>
            </div>
          </Reveal>

          {/* --- Card 3: Smart Automation (Neural Network Graph) --- */}
          <Reveal effect="slide-right" delay={0.2} className="h-full" width="100%">
            <div className="group bg-surface-light border border-white/5 rounded-3xl p-6 md:p-8 hover:border-white/10 transition-colors flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transform duration-500">
              <h3 className="text-2xl font-semibold text-center mb-8">Smart Automation</h3>
              
              {/* Visual */}
              <div className="h-64 bg-[#0d0d0d] rounded-xl mb-8 relative border border-white/5 overflow-hidden flex items-center justify-center p-2">
                  
                  {/* Background Grid */}
                  <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '15px 15px'}}></div>

                  {/* Connecting Lines SVG */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                      {/* Path from Trigger to Logic */}
                      <path 
                        d="M 20% 50% Q 35% 50% 50% 50%" 
                        stroke="rgba(255,255,255,0.1)" 
                        strokeWidth="2" 
                        fill="none" 
                      />
                      {/* Path from Logic to Action */}
                      <path 
                        d="M 50% 50% Q 65% 50% 80% 50%" 
                        stroke="rgba(255,255,255,0.1)" 
                        strokeWidth="2" 
                        fill="none" 
                      />

                      {/* Animated Data Packet 1 */}
                      <circle r="3" fill="#ff6b00" className="animate-pulse">
                        <animateMotion 
                          dur="2s" 
                          repeatCount="indefinite" 
                          path="M 20% 50% Q 35% 50% 50% 50%" 
                          keyPoints="0;1"
                          keyTimes="0;1"
                          calcMode="linear"
                        />
                      </circle>
                      
                      {/* Animated Data Packet 2 */}
                      <circle r="3" fill="#ff6b00" className="animate-pulse">
                        <animateMotion 
                          dur="2s" 
                          begin="1s"
                          repeatCount="indefinite" 
                          path="M 50% 50% Q 65% 50% 80% 50%" 
                          keyPoints="0;1"
                          keyTimes="0;1"
                          calcMode="linear"
                        />
                      </circle>
                  </svg>

                  {/* Node 1: Trigger */}
                  <div className={`absolute left-[10%] top-1/2 -translate-y-1/2 p-3 rounded-xl border transition-all duration-300 flex flex-col items-center gap-2 z-10 backdrop-blur-md
                      ${activeNode === 0 ? 'bg-white/10 border-primary shadow-[0_0_20px_rgba(255,107,0,0.2)] scale-110' : 'bg-surface-lighter border-white/10 scale-100'}
                  `}>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeNode === 0 ? 'text-primary' : 'text-gray-500'}`}>
                          <Zap size={18} />
                      </div>
                      <span className="text-[9px] text-gray-400 font-mono">WEBHOOK</span>
                  </div>

                  {/* Node 2: Logic */}
                  <div className={`absolute left-[50%] -translate-x-1/2 top-1/2 -translate-y-1/2 p-3 rounded-xl border transition-all duration-300 flex flex-col items-center gap-2 z-10 backdrop-blur-md
                      ${activeNode === 1 ? 'bg-white/10 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)] scale-110' : 'bg-surface-lighter border-white/10 scale-100'}
                  `}>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeNode === 1 ? 'text-blue-400' : 'text-gray-500'}`}>
                          <Bot size={18} />
                      </div>
                      <span className="text-[9px] text-gray-400 font-mono">PROCESS</span>
                  </div>

                  {/* Node 3: Action */}
                  <div className={`absolute right-[10%] top-1/2 -translate-y-1/2 p-3 rounded-xl border transition-all duration-300 flex flex-col items-center gap-2 z-10 backdrop-blur-md
                      ${activeNode === 2 ? 'bg-white/10 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.2)] scale-110' : 'bg-surface-lighter border-white/10 scale-100'}
                  `}>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${activeNode === 2 ? 'text-green-400' : 'text-gray-500'}`}>
                          <Mail size={18} />
                      </div>
                      <span className="text-[9px] text-gray-400 font-mono">ACTION</span>
                  </div>
              </div>
              
              <p className="text-gray-400 text-center text-sm leading-relaxed mt-auto">
                We analyze operations and suggest AI solutions to boost efficiency.
              </p>
            </div>
          </Reveal>

        </div>

        {/* Bottom Tags */}
        <div className="max-w-4xl mx-auto mt-20 flex flex-wrap justify-center gap-4">
            {[
                { icon: <Box size={14}/>, text: "AI-Driven Solutions" },
                { icon: <Layout size={14}/>, text: "Serverless Computing" },
                { icon: <GitBranch size={14}/>, text: "Cloud Integration" },
                { icon: <Grid size={14}/>, text: "Data Insight" },
                { icon: <Settings size={14}/>, text: "Analytics" },
                { icon: <Folder size={14}/>, text: "API Security" },
            ].map((tag, i) => (
                <Reveal key={i} effect="zoom-in" delay={0.5 + (i * 0.1)}>
                  <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all cursor-default group hover:scale-105">
                      <span className="text-primary group-hover:scale-110 transition-transform">{tag.icon}</span>
                      <span className="text-sm font-medium">{tag.text}</span>
                  </div>
                </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
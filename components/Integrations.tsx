import React from 'react';
import Badge from './ui/Badge';
import { Check, X, Bot, Zap, Linkedin, Twitter, Link } from 'lucide-react';
import Reveal from './ui/Reveal';

const Integrations: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-900/10 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* --- Section 1: Seamless Integrations (Radar) --- */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <Reveal effect="zoom-in" delay={0.1}>
            <Badge className="mb-6 border-orange-500/30 text-orange-300 bg-orange-500/10">
              <Link size={14} className="mr-2" /> Integrations
            </Badge>
          </Reveal>
          
          <Reveal effect="blur-in" delay={0.2} width="100%">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
              Seamless Integrations
            </h2>
          </Reveal>
          
          <Reveal effect="fade-up" delay={0.3}>
            <p className="text-gray-400 max-w-xl">
              Connect with your favorite tools to streamline workflows
            </p>
          </Reveal>

          {/* Radar Visualization */}
          <Reveal effect="zoom-in" delay={0.4} width="100%" className="flex justify-center">
            <div className="mt-20 relative w-full max-w-4xl aspect-[1.5/1] md:aspect-[2/1] flex items-center justify-center">
              
              {/* Center Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-transparent via-orange-900/10 to-transparent pointer-events-none"></div>

              {/* Crosshair Lines */}
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
              <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-orange-500/20 to-transparent"></div>

              {/* Central Hub */}
              <div className="relative z-20 w-24 h-24 rounded-3xl bg-[#0A0A0A] border border-orange-500/30 shadow-[0_0_50px_rgba(255,107,0,0.3)] flex items-center justify-center">
                  <div className="absolute inset-0 rounded-3xl border border-orange-500/50 animate-ping-slow"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-400 rounded-xl flex items-center justify-center shadow-inner">
                      <Zap className="text-white fill-white" size={32} />
                  </div>
                  {/* Ripple Effects */}
                  <div className="absolute inset-0 rounded-3xl border border-orange-500/20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                  <div className="absolute inset-0 rounded-3xl border border-orange-500/20 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_1.5s]"></div>
              </div>

              {/* Integration Nodes */}
              
              {/* Top: OpenAI */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 flex flex-col items-center gap-4 group cursor-pointer">
                  <div className="w-16 h-16 rounded-2xl bg-[#0f0f0f] border border-white/10 flex items-center justify-center shadow-lg group-hover:border-orange-500/50 group-hover:shadow-[0_0_20px_rgba(255,107,0,0.2)] transition-all duration-300">
                      <Bot className="text-gray-400 group-hover:text-orange-400 transition-colors" size={28} />
                  </div>
                  <p className="text-sm text-gray-500 text-center max-w-[180px] opacity-0 group-hover:opacity-100 transition-opacity absolute top-20 pointer-events-none">
                      GPT models to generate content and build intelligent agents.
                  </p>
              </div>

              {/* Right: Notion */}
              <div className="absolute right-[10%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 group cursor-pointer translate-x-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#0f0f0f] border border-white/10 flex items-center justify-center shadow-lg group-hover:border-orange-500/50 group-hover:shadow-[0_0_20px_rgba(255,107,0,0.2)] transition-all duration-300">
                      <div className="font-serif text-2xl font-bold text-gray-400 group-hover:text-orange-400 transition-colors">N</div>
                  </div>
                  <p className="text-sm text-gray-500 text-center max-w-[180px] opacity-0 group-hover:opacity-100 transition-opacity absolute top-20 pointer-events-none w-48">
                      Summarize tasks, and organize info using Notion's powerful AI assistant.
                  </p>
              </div>

              {/* Bottom: X */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 flex flex-col items-center gap-4 group cursor-pointer">
                  <div className="w-16 h-16 rounded-2xl bg-[#0f0f0f] border border-white/10 flex items-center justify-center shadow-lg group-hover:border-orange-500/50 group-hover:shadow-[0_0_20px_rgba(255,107,0,0.2)] transition-all duration-300">
                      <Twitter className="text-gray-400 group-hover:text-orange-400 transition-colors" size={28} />
                  </div>
                  <p className="text-sm text-gray-500 text-center max-w-[180px] opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-20 pointer-events-none">
                      Connect with Twitter and with dozens of other tools in it without code
                  </p>
              </div>

              {/* Left: LinkedIn */}
              <div className="absolute left-[10%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 group cursor-pointer -translate-x-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#0f0f0f] border border-white/10 flex items-center justify-center shadow-lg group-hover:border-orange-500/50 group-hover:shadow-[0_0_20px_rgba(255,107,0,0.2)] transition-all duration-300">
                      <Linkedin className="text-gray-400 group-hover:text-orange-400 transition-colors" size={28} />
                  </div>
                  <p className="text-sm text-gray-500 text-center max-w-[180px] opacity-0 group-hover:opacity-100 transition-opacity absolute top-20 pointer-events-none w-48">
                      Connect with Linked In and with dozens of other tools in it
                  </p>
              </div>

              {/* Connection Beams (Decoration) */}
              <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full opacity-20">
                      <path d="M 50% 50% L 50% 10%" stroke="url(#grad1)" strokeWidth="1" strokeDasharray="4 4" />
                      <path d="M 50% 50% L 90% 50%" stroke="url(#grad1)" strokeWidth="1" strokeDasharray="4 4" />
                      <path d="M 50% 50% L 50% 90%" stroke="url(#grad1)" strokeWidth="1" strokeDasharray="4 4" />
                      <path d="M 50% 50% L 10% 50%" stroke="url(#grad1)" strokeWidth="1" strokeDasharray="4 4" />
                      <defs>
                          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#ff6b00" stopOpacity="0" />
                              <stop offset="50%" stopColor="#ff6b00" stopOpacity="1" />
                              <stop offset="100%" stopColor="#ff6b00" stopOpacity="0" />
                          </linearGradient>
                      </defs>
                  </svg>
              </div>
            </div>
          </Reveal>
        </div>


        {/* --- Section 2: Comparison --- */}
        <div className="flex flex-col items-center mt-32">
            <Reveal effect="zoom-in">
              <Badge className="mb-8 border-orange-500/30 text-orange-300 bg-orange-500/10 uppercase tracking-widest">
                  <Zap size={14} className="mr-2" /> Comparison
              </Badge>
            </Reveal>

            <Reveal effect="blur-in" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">Why Automatix Stands Out</h2>
            </Reveal>
            
            <Reveal effect="fade-up" delay={0.3}>
              <p className="text-gray-400 mb-16">See how we compare against others in performance, growth</p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                
                {/* Card: Automatix */}
                <Reveal effect="slide-right" delay={0.2} className="h-full" width="100%">
                  <div className="bg-[#05050A] border border-orange-500/20 rounded-3xl p-8 md:p-10 relative overflow-hidden group h-full">
                      <div className="absolute inset-0 bg-orange-900/5 pointer-events-none group-hover:bg-orange-900/10 transition-colors duration-500"></div>
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-orange-400"></div>
                      
                      <div className="flex items-center gap-3 mb-10">
                          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                              <Zap className="text-white fill-white" size={18} />
                          </div>
                          <span className="text-2xl font-bold text-white">Automatix</span>
                      </div>

                      <div className="flex flex-col gap-6">
                          {[
                              "Effortless global collaboration",
                              "Highly scalable & flexible solutions",
                              "Advanced dashboard control",
                              "Built-in data-driven analytics",
                              "Latest automation solutions"
                          ].map((item, i) => (
                              <div key={i} className="flex items-center gap-4 py-3 border-b border-white/5 last:border-0">
                                  <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
                                      <Check size={12} className="text-orange-400" strokeWidth={3} />
                                  </div>
                                  <span className="text-gray-300 text-sm md:text-base">{item}</span>
                              </div>
                          ))}
                      </div>
                  </div>
                </Reveal>

                {/* Card: Others */}
                <Reveal effect="slide-left" delay={0.4} className="h-full" width="100%">
                  <div className="bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 md:p-10 relative overflow-hidden h-full">
                      
                      <div className="flex items-center gap-3 mb-10 opacity-70">
                          <div className="w-8 h-8 rounded flex items-center justify-center bg-white/5">
                            <div className="w-4 h-4 border-2 border-gray-500 rounded-sm"></div>
                          </div>
                          <span className="text-2xl font-bold text-gray-400">Others</span>
                      </div>

                      <div className="flex flex-col gap-6 opacity-70 hover:opacity-100 transition-opacity duration-300">
                          {[
                              "Limited global collaboration",
                              "Rigid and non-scalable options",
                              "Basic dashboard functionalities",
                              "Lack of advanced analytics",
                              "Outdated and complex interfaces"
                          ].map((item, i) => (
                              <div key={i} className="flex items-center gap-4 py-3 border-b border-white/5 last:border-0">
                                  <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                                      <X size={12} className="text-gray-500" strokeWidth={3} />
                                  </div>
                                  <span className="text-gray-500 text-sm md:text-base">{item}</span>
                              </div>
                          ))}
                      </div>
                  </div>
                </Reveal>

            </div>
        </div>

      </div>
    </section>
  );
};

export default Integrations;
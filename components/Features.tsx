import React from 'react';
import Badge from './ui/Badge';
import { TrendingUp, CheckCircle2, Zap, Bot, Mic } from 'lucide-react';
import Reveal from './ui/Reveal';

const Features: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal effect="fade-up">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Experience The Benefits<br />Of Our Expertise
            </h2>
          </Reveal>
          <Reveal effect="fade-up" delay={0.1}>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover the key benefits of partnering with us.
            </p>
          </Reveal>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Benefit 1 - Cost Reduction */}
          <Reveal effect="zoom-in" delay={0.1} width="100%">
            <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 rounded-3xl p-8 hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.2)]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-6 group-hover:bg-orange-500/30 transition-colors">
                  <TrendingUp size={24} className="text-orange-400" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Cost reduction</h4>
                <p className="text-gray-400 leading-relaxed">
                  Optimize business processes and streamline operations to significantly minimize costs and maximize overall efficiency.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Benefit 2 - Improved Outcomes */}
          <Reveal effect="zoom-in" delay={0.2} width="100%">
            <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 rounded-3xl p-8 hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.2)]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-6 group-hover:bg-orange-500/30 transition-colors">
                  <CheckCircle2 size={24} className="text-orange-400" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Improved outcomes</h4>
                <p className="text-gray-400 leading-relaxed">
                  Leverage powerful data-driven insights and innovative strategies to enhance business performance and achieve superior outcomes.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Benefit 3 - Increased Productivity (Full Width) */}
        <Reveal effect="zoom-in" delay={0.3} width="100%">
          <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 rounded-3xl p-8 hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.2)]">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-6 group-hover:bg-orange-500/30 transition-colors">
                <Zap size={24} className="text-orange-400" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Increased productivity</h4>
              <p className="text-gray-400 leading-relaxed">
                Enhance group performance and output by automating redundant tasks, refining processes, and speeding up business functions.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Chatbot Development */}
        <div className="mt-32 space-y-32">
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
                      <div className="bg-gradient-to-br from-orange-500/30 to-orange-600/20 border border-orange-500/50 rounded-2xl px-4 py-3 max-w-xs shadow-lg">
                        <p className="text-gray-100 text-sm font-medium">Please create a graph of the profits in this file</p>
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex items-start gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(255,107,0,0.3)]">
                        <Bot size={20} className="text-white" />
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 max-w-xs">
                        <p className="text-gray-200 text-sm leading-relaxed">
                          <span className="font-semibold text-white">Done!</span> I've generated your profit graph. Revenue is up 48% this quarter.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Voice Assistants */}
          <div className="group">
            <Reveal effect="fade-up">
              <h3 className="text-3xl md:text-4xl font-semibold mb-6">Voice Assistants</h3>
              <p className="text-gray-400 text-lg max-w-2xl mb-12 leading-relaxed">
                We develop voice assistants that use advanced natural language processing (NLP) to handle inbound and outbound calls for support, scheduling, reminders, and promotions.
              </p>
            </Reveal>

            <Reveal effect="zoom-in" delay={0.2} width="100%">
              <div className="group relative bg-[#050505] border border-white/10 rounded-3xl p-8 md:p-12 hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,107,0,0.2)]">
                <div className="relative z-10">
                  {/* Voice Conversation */}
                  <div className="max-w-2xl mx-auto w-full space-y-6">
                    {/* User Message */}
                    <div className="flex items-start gap-4 justify-end animate-fade-in-up" style={{ animationDelay: '0s' }}>
                      <div className="bg-gradient-to-br from-orange-500/30 to-orange-600/20 border border-orange-500/50 rounded-2xl px-4 py-3 max-w-xs shadow-lg">
                        <p className="text-gray-100 text-sm font-medium">Can you help me schedule a call for tomorrow at 2 PM?</p>
                      </div>
                    </div>

                    {/* AI Response with Waveform */}
                    <div className="flex items-start gap-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(255,107,0,0.3)]">
                        <Mic size={20} className="text-white" />
                      </div>
                      <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 w-full max-w-md">
                        {/* Waveform Visualization */}
                        <div className="flex items-center justify-center gap-0.5 h-12">
                          {[...Array(16)].map((_, i) => (
                            <div key={`wave-${i}`} className="w-1 bg-gradient-to-t from-orange-500 to-orange-300 rounded-full" style={{ height: `${20 + Math.sin(i * 0.5) * 30}%`, animation: `pulse 0.8s ease-in-out infinite`, animationDelay: `${i * 0.05}s` }}></div>
                          ))}
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

export default Features;

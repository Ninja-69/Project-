import React from 'react';
import Badge from './ui/Badge';
import { TrendingUp, CheckCircle2, Zap } from 'lucide-react';
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
      </div>
    </section>
  );
};

export default Features;

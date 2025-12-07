import React from 'react';
import Badge from './ui/Badge';
import { Sparkles, Info } from 'lucide-react';
import Reveal from './ui/Reveal';

const About: React.FC = () => {
  return (
    <section className="pt-0 pb-20 md:pb-24 bg-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-10 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <Reveal effect="zoom-in" delay={0.2} threshold={0.5}>
            <Badge className="mb-10 text-orange-300 border-orange-500/20 bg-orange-500/5">
              <Info size={14} className="mr-2" /> About us
            </Badge>
          </Reveal>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight md:leading-tight max-w-4xl mx-auto">
            {/* Staggered Blur-In Text Effect */}
            <Reveal effect="blur-in" delay={0.3} width="100%" threshold={0.3}>
              <span className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">Hi, we're Kynnex</span>{' '}
              <span className="inline-flex items-center justify-center align-middle mx-1 w-10 h-10 md:w-14 md:h-14 rounded-xl bg-surface-light border border-white/10 relative top-[-4px] animate-pulse-slow shadow-[0_0_15px_rgba(255,107,0,0.2)]">
                <Sparkles className="w-5 h-5 md:w-7 md:h-7 text-orange-500 fill-orange-500" />
              </span>{' '}
            </Reveal>

            <Reveal effect="blur-in" delay={0.5} width="100%" threshold={0.3}>
              <span className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent block mt-2">We craft cutting edge AI solutions to make organizations more effective.</span>
            </Reveal>

            <Reveal effect="blur-in" delay={0.7} width="100%" threshold={0.3}>
              <span className="bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent block mt-4">
                We do so with a motivated team
                <span className="inline-flex items-center align-middle mx-3 relative top-[-4px]">
                  {/* Overlapping Avatars */}
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="inline-block relative z-10 hover:z-20 transition-all duration-300 transform hover:scale-110">
                        <img
                          src={`https://picsum.photos/seed/${i + 55}/100/100`}
                          alt="Team member"
                          className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-black object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </span>
                of 9 experts.
              </span>
            </Reveal>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;
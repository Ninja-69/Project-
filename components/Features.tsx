
import React, { useState } from 'react';
import Badge from './ui/Badge';
import { Brain, ThumbsUp, Users, Star } from 'lucide-react';
import Reveal from './ui/Reveal';

const Features: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const features = [
    {
      icon: <Brain size={32} className="text-white" />,
      title: "Innovative Approach",
      description: "Look for works that reflect a unique character and differentiate in a crowded marketplace.",
      delay: 0.2,
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <ThumbsUp size={32} className="text-white" />,
      title: "Seamless Experience",
      description: "A seamless user experience across all devices, ensuring every interaction connects with the user.",
      delay: 0.4,
      color: "from-orange-500 to-pink-500"
    },
    {
      icon: <Users size={32} className="text-white" />,
      title: "Ongoing Partnership",
      description: "Find a new partner easily, not just providers, who offer ongoing support even after the project ends.",
      delay: 0.6,
      color: "from-green-500 to-teal-500"
    },
  ];

  return (
    <section id="features" className="py-20 md:py-24 bg-black relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none animate-pulse-slow"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <Reveal effect="bounce-in">
            <Badge>
              <Star size={14} className="mr-2" /> Why Us
            </Badge>
          </Reveal>

          <Reveal effect="magnetic" delay={0.2} width="100%">
            <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-4 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
              Experience The Benefits<br />Of Our Expertise
            </h2>
          </Reveal>

          <Reveal effect="fade-up" delay={0.3}>
            <p className="text-gray-400 text-lg">That drives impactful gain powerful results</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <Reveal key={idx} effect="spring" delay={feature.delay} className="h-full" width="100%">
              <div
                className="group relative p-8 rounded-2xl bg-surface-light border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden h-full flex flex-col cursor-pointer"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  transform: hoveredCard === idx ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)',
                  boxShadow: hoveredCard === idx ? '0 20px 60px rgba(0,0,0,0.7), 0 0 40px rgba(255,107,0,0.1)' : '0 4px 20px rgba(0,0,0,0.3)'
                }}
              >

                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-2xl pointer-events-none`}></div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>

                {/* Shimmer Effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                    backgroundSize: '200% 100%',
                    animation: hoveredCard === idx ? 'shimmer 2s infinite' : 'none'
                  }}
                ></div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
                  <div className="absolute top-10 right-10 w-1 h-1 bg-white/60 rounded-full animate-float-slow"></div>
                  <div className="absolute bottom-20 left-10 w-1.5 h-1.5 bg-primary/40 rounded-full animate-float-medium delay-1000"></div>
                  <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-white/80 rounded-full animate-float-fast delay-500"></div>
                  {hoveredCard === idx && (
                    <>
                      <div className="absolute top-20 left-20 w-1 h-1 bg-orange-500/60 rounded-full animate-bounce-subtle"></div>
                      <div className="absolute bottom-10 right-20 w-1 h-1 bg-orange-500/40 rounded-full animate-wave"></div>
                    </>
                  )}
                </div>

                <div className="relative z-10 flex flex-col items-center text-center flex-grow">
                  {/* Advanced Animated Icon Container */}
                  <div className={`
                    w-full h-48 mb-8 rounded-xl bg-black border flex items-center justify-center relative overflow-hidden
                    transition-all duration-500
                    ${hoveredCard === idx
                      ? 'border-primary/50 shadow-[0_0_30px_rgba(255,107,0,0.3)]'
                      : 'border-white/10'
                    }
                  `}>

                    {/* 1. Scrolling Grid Animation */}
                    <div className={`
                       absolute inset-0 opacity-20 transition-opacity duration-500
                       ${hoveredCard === idx ? 'animate-grid-scroll opacity-40' : ''}
                     `}
                      style={{
                        backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                      }}>
                    </div>

                    {/* 2. Radial Gradient Overlay */}
                    <div className="absolute inset-0 bg-radial-gradient from-transparent to-black opacity-80"></div>

                    {/* 3. Scanning Laser Beam */}
                    <div className={`
                       absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_15px_rgba(255,107,0,0.8)] z-10
                       ${hoveredCard === idx ? 'animate-scan-beam' : 'opacity-0'}
                     `}></div>

                    {/* 4. Central Reactor Ring */}
                    <div className={`
                       relative z-20 w-20 h-20 rounded-full bg-surface-lighter/80 backdrop-blur-sm flex items-center justify-center border shadow-[0_0_30px_rgba(255,107,0,0.1)]
                       transition-all duration-500
                       ${hoveredCard === idx
                        ? 'scale-125 border-primary/30 shadow-[0_0_50px_rgba(255,107,0,0.4)] rotate-12'
                        : 'scale-100 border-white/10'
                      }
                     `}>
                      <div className={`
                         absolute inset-0 rounded-full border border-primary/20
                         ${hoveredCard === idx ? 'animate-pulse-slow' : ''}
                       `}></div>
                      <div className={`
                         w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-inner
                         transition-all duration-500
                         ${hoveredCard === idx ? 'animate-glow-pulse' : ''}
                       `}>
                        {feature.icon}
                      </div>

                      {/* Orbiting Particles */}
                      {hoveredCard === idx && (
                        <>
                          <div className="absolute top-0 left-1/2 w-2 h-2 bg-orange-500 rounded-full animate-spin-slow"></div>
                          <div className="absolute bottom-0 right-1/2 w-1.5 h-1.5 bg-orange-400 rounded-full animate-spin-reverse-slow"></div>
                        </>
                      )}
                    </div>

                  </div>

                  <h3 className={`
                    text-xl font-semibold mb-4 transition-all duration-300
                    ${hoveredCard === idx ? 'text-white scale-105' : 'text-gray-200'}
                  `}>
                    {feature.title}
                  </h3>

                  <p className={`
                    text-gray-400 leading-relaxed text-sm mt-auto transition-all duration-300
                    ${hoveredCard === idx ? 'text-gray-300' : ''}
                  `}>
                    {feature.description}
                  </p>

                  {/* Hover Indicator */}
                  {hoveredCard === idx && (
                    <div className="mt-4 flex items-center gap-2 text-orange-500 text-sm font-medium animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <span>Learn More</span>
                      <svg className="w-4 h-4 animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

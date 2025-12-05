import React, { useState } from 'react';
import { Check, MessageSquare, Coins } from 'lucide-react';
import Reveal from './ui/Reveal';

const Pricing: React.FC<{ onBookCall?: () => void }> = ({ onBookCall }) => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const plans = [
    {
      name: "Basic",
      price: isAnnual ? "$797" : "$997",
      period: "/month",
      description: "For organizations looking to get started with AI & automations.",
      features: [
        "1 dedicated developer",
        "Custom workflow automations",
        "AI business consulting",
        "Chatbot & LLM development",
        "Voice Assistant development",
        "Cancel & pause anytime"
      ],
      glow: false
    },
    {
      name: "Professional",
      price: isAnnual ? "$3,197" : "$3,997",
      period: "/month",
      description: "For organizations looking to unlock the full power of AI & automations.",
      features: [
        "2 dedicated developers",
        "Custom workflow automations",
        "AI business consulting",
        "Chatbot & LLM development",
        "Voice Assistant development",
        "Cancel & pause anytime"
      ],
      glow: true // This triggers the radial gradient effect
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "/month",
      description: "For large organizations requiring advanced AI-solutions.",
      features: [
        "X dedicated developers",
        "Custom workflow automations",
        "AI business consulting",
        "Chatbot & LLM development",
        "Voice Assistant development",
        "Cancel & pause anytime"
      ],
      glow: false
    }
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Ambient Background Glow for section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24">

          <Reveal effect="bounce-in" delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A1A1E] border border-white/10 mb-8 backdrop-blur-sm shadow-inner hover:border-orange-500/30 hover:shadow-[0_0_20px_rgba(255,107,0,0.1)] transition-all duration-300">
              <Coins size={16} className="text-gray-300 fill-gray-300/20" />
              <span className="text-sm font-medium text-gray-300">Pricing</span>
            </div>
          </Reveal>

          <Reveal effect="magnetic" delay={0.2} width="100%">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal mb-10 tracking-tight leading-[1.1] bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
              Unlock premium features.
              <br />
              save big today.
            </h2>
          </Reveal>

          {/* Monthly / Yearly Toggle */}
          <Reveal effect="fade-up" delay={0.3}>
            <div className="flex items-center gap-4 text-lg">
              <span
                className={`${!isAnnual ? 'text-white font-medium' : 'text-gray-500'} transition-colors cursor-pointer select-none`}
                onClick={() => setIsAnnual(false)}
              >
                Monthly
              </span>

              <button
                className="w-14 h-8 rounded-full bg-[#1A1A1E] border border-white/10 relative p-1 transition-colors hover:border-white/20 focus:outline-none"
                onClick={() => setIsAnnual(!isAnnual)}
              >
                <div
                  className={`w-6 h-6 rounded-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`}
                ></div>
              </button>

              <span
                className={`${isAnnual ? 'text-white font-medium' : 'text-gray-500'} transition-colors cursor-pointer select-none`}
                onClick={() => setIsAnnual(true)}
              >
                Yearly
              </span>
            </div>
          </Reveal>

        </div>

        {/* Pricing Cards Grid - Centered */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
          {plans.map((plan, index) => (
            <Reveal key={index} effect="spring" delay={0.2 + (index * 0.1)} className="h-full mx-auto w-full" width="100%">
              <div
                className={`
                          relative flex flex-col p-8 md:p-10 rounded-[24px] border transition-all duration-500 group h-full cursor-pointer
                          ${plan.glow ? 'z-10' : 'z-0'}
                          ${hoveredPlan === index ? 'border-orange-500/40' : 'border-[#2A2A2A]'}
                      `}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
                style={{
                  background: plan.glow
                    ? 'radial-gradient(circle at top left, rgba(212, 137, 107, 0.15) 0%, rgba(30, 30, 30, 0) 60%), #0A0A0A'
                    : '#0A0A0A',
                  boxShadow: hoveredPlan === index
                    ? '0 20px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(255, 107, 0, 0.15)'
                    : plan.glow
                      ? '0 12px 48px rgba(0, 0, 0, 0.5)'
                      : '0 8px 32px rgba(0, 0, 0, 0.3)',
                  transform: hoveredPlan === index ? 'translateY(-16px) scale(1.02)' : 'translateY(0) scale(1)'
                }}
              >
                {/* Header */}
                <div className="mb-2">
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#D4896B] to-[#E6A57C] bg-clip-text text-transparent inline-block">
                    {plan.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-4 h-14">
                  <span className="text-4xl md:text-5xl font-bold text-white tracking-tight animate-in fade-in duration-300 key={isAnnual}">
                    {plan.price}
                  </span>
                  <span className="text-[#666] font-normal text-lg ml-1">
                    {plan.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#888] text-sm leading-relaxed mb-8 min-h-[40px] font-light">
                  {plan.description}
                </p>

                {/* Action Button */}
                <button
                  onClick={onBookCall}
                  className="w-full py-4 px-6 mb-8 bg-[#141414] border border-[#2A2A2A] border-b-[3px] border-b-[#D4896B] rounded-xl text-white font-semibold uppercase tracking-wider text-sm hover:border-b-[#FF9800] hover:bg-[#1A1A1A] transition-all duration-300 shadow-lg relative overflow-hidden group-hover:shadow-orange-900/20"
                >
                  Book a call
                </button>

                {/* Divider with Star */}
                <div className="relative flex items-center justify-center w-full mb-8">
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-[#D4896B]/30 to-transparent w-full absolute"></div>
                  <div className="relative z-10 text-[#D4896B]">
                    {/* Decorative 4-point star/sparkle */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                    </svg>
                  </div>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-4 mt-auto">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 min-w-[20px] text-[#D4896B]">
                        <Check size={18} strokeWidth={3} />
                      </div>
                      <span className="text-[#999] text-sm font-light">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
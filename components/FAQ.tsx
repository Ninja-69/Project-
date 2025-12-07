import React, { useState } from 'react';
import Badge from './ui/Badge';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Reveal from './ui/Reveal';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    "What Makes Kynnex Different From Other Agencies?",
    "How Does AI Enhance The Services Provided By Kynnex?",
    "How Does Kynnex Ensure The Quality Of Its AI Solutions?",
    "Does Kynnex Offer Customized Solutions?"
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="flex flex-col items-center text-center mb-16">
          <Reveal effect="zoom-in" delay={0.1}>
            <Badge>
              <HelpCircle size={14} className="mr-2" /> Need to Know
            </Badge>
          </Reveal>
          
          <Reveal effect="blur-in" delay={0.2} width="100%">
            <h2 className="text-4xl md:text-5xl font-bold mt-6 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </Reveal>
        </div>

        <div className="space-y-4">
          {questions.map((q, i) => (
            <Reveal key={i} effect="fade-up" delay={0.2 + (i * 0.1)} width="100%">
              <div className="border-b border-white/10 pb-4">
                <button 
                  className="w-full flex items-center justify-between py-4 text-left group"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="text-lg md:text-xl font-medium text-gray-300 group-hover:text-white transition-colors pr-8">
                    {q}
                  </span>
                  <ChevronDown 
                    className={`text-gray-500 transition-transform duration-300 flex-shrink-0 ${openIndex === i ? 'rotate-180 text-white' : ''}`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="pb-6 text-gray-400 leading-relaxed">
                    We combine cutting-edge AI technology with deep industry expertise to deliver tailored automation solutions that drive real business results. Our focus is on long-term partnership and continuous optimization.
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
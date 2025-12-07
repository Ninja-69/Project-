import React, { useState } from 'react';
import Badge from './ui/Badge';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Reveal from './ui/Reveal';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Why Do Most AI Automation Projects Fail?",
      answer: "Most agencies treat AI like a checkbox—they implement it and disappear. We've seen it a thousand times: expensive tools gathering dust, workflows that don't integrate, teams left confused. The difference? We don't just build systems. We build systems that your team actually uses. We obsess over adoption, training, and continuous optimization. Your success isn't our end goal—it's our only metric."
    },
    {
      question: "How Much Can We Actually Save With AI Automation?",
      answer: "The real question isn't how much you'll save—it's how much you're currently wasting. Our clients typically see 40-60% reduction in manual work within 90 days. But here's what matters: that's not just cost savings. That's your team freed up to do strategic work. That's faster decision-making. That's competitive advantage. We've seen companies go from 50 employees to 15 doing the same work—better. The ROI usually pays for itself in 3-4 months."
    },
    {
      question: "What If Our Workflows Are Too Complex For AI?",
      answer: "That's exactly what we specialize in. Simple workflows don't need us—they need a template. Complex workflows? That's where AI shines. We've automated everything from multi-step approval processes to real-time customer support across 12 channels. The more complex your operation, the more value we unlock. We start by mapping your actual workflows (not the ones in your documentation), then build AI systems that handle the edge cases, exceptions, and nuances that make your business unique."
    },
    {
      question: "How Long Until We See Results?",
      answer: "Quick wins in 2-3 weeks. Meaningful transformation in 60-90 days. Full optimization in 6 months. We don't believe in the 'big bang' approach. We implement in phases, measure everything, and iterate. You'll see your first automation live within 30 days. You'll see ROI within 90. And you'll see your team's productivity fundamentally shift within 6 months. We're transparent about timelines because we're confident in our process."
    },
    {
      question: "What Happens If The AI Makes Mistakes?",
      answer: "It will. And that's by design. We build guardrails, not guardrails that prevent mistakes—guardrails that catch them before they matter. Every AI system we deploy has human oversight built in. Critical decisions get flagged for review. Patterns that deviate from normal get alerts. We use AI to handle 95% of routine work perfectly, and humans handle the 5% that needs judgment. It's not AI replacing humans—it's AI amplifying them."
    },
    {
      question: "Can You Really Integrate With Our Existing Systems?",
      answer: "Yes. We've integrated with everything from legacy mainframes to cutting-edge SaaS platforms. Your tech stack doesn't matter—we speak the language of APIs, webhooks, databases, and custom integrations. We've built connectors for systems you didn't even know could be connected. The question isn't whether we can integrate—it's whether your current systems are worth integrating. Sometimes the real win is replacing outdated tools entirely."
    }
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
          {faqs.map((faq, i) => (
            <Reveal key={i} effect={(['fade-up', 'slide-up', 'blur-in', 'zoom-in', 'bounce-in', 'flip-in'] as const)[i % 6]} delay={0.2 + (i * 0.1)} width="100%">
              <div className="border-b border-white/10 pb-4 group hover:border-orange-500/30 transition-colors">
                <button 
                  className="w-full flex items-center justify-between py-4 text-left"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="text-lg md:text-xl font-semibold text-gray-300 group-hover:text-white transition-colors pr-8 text-left">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`text-gray-500 transition-transform duration-300 flex-shrink-0 ${openIndex === i ? 'rotate-180 text-orange-400' : 'group-hover:text-gray-300'}`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="pb-6 text-gray-400 leading-relaxed text-base">
                    {faq.answer}
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
import React, { useState, useRef } from 'react';
import Badge from './ui/Badge';
import { Wrench, Zap, Bot, Code2, Sparkles, ArrowUpRight, Layers } from 'lucide-react';
import Reveal from './ui/Reveal';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  size?: 'small' | 'medium' | 'large';
  delay: number;
  features?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  gradient,
  size = 'medium',
  delay,
  features = []
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });

    // Calculate tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * 10;
    const tiltY = ((x - centerX) / centerX) * -10;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const sizeClasses = {
    small: 'md:col-span-1 md:row-span-1',
    medium: 'md:col-span-1 md:row-span-2',
    large: 'md:col-span-2 md:row-span-2'
  };

  return (
    <Reveal effect="slide-up" delay={delay} width="100%">
      <div
        ref={cardRef}
        className={`group relative ${sizeClasses[size]} h-full min-h-[300px] rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02]`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`}></div>
        </div>

        {/* Glow effect following cursor */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,107,0,0.15), transparent 40%)`
          }}
        />

        {/* Card content */}
        <div className="relative h-full bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col">

          {/* Icon with micro-interactions */}
          <div className="mb-6 relative">
            <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradient} relative group-hover:scale-110 transition-transform duration-500`}>
              <Icon
                className="w-8 h-8 text-white relative z-10 group-hover:rotate-12 transition-transform duration-500"
              />
              {/* Pulsing glow */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} blur-xl opacity-50 group-hover:opacity-100 animate-pulse transition-opacity`}></div>
            </div>
            {/* Sparkle effect on hover */}
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-orange-500 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 animate-pulse" />
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent group-hover:from-white group-hover:via-white group-hover:to-white transition-all duration-300">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {description}
          </p>

          {/* Features (if provided) */}
          {features.length > 0 && (
            <div className="space-y-2 mb-6 flex-grow">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${gradient}`}></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA Button - reveals on hover */}
          <div className="mt-auto opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <button className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${gradient} text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-300 shadow-lg`}>
              Learn More
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Animated border glow */}
          <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}>
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${gradient} opacity-20 blur-2xl animate-pulse`}></div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

const CoreServices: React.FC = () => {
  const services = [
    {
      title: "AI Automation",
      description: "Transform your workflows with intelligent automation that learns and adapts to your business needs.",
      icon: Bot,
      gradient: "from-orange-500 to-red-600",
      size: "large" as const,
      delay: 0.1,
      features: [
        "Custom AI models",
        "Workflow optimization",
        "24/7 automated operations",
        "Intelligent decision making"
      ]
    },
    {
      title: "Custom Development",
      description: "Bespoke solutions tailored to your unique business requirements and goals.",
      icon: Code2,
      gradient: "from-blue-500 to-cyan-600",
      size: "medium" as const,
      delay: 0.2,
      features: [
        "Full-stack development",
        "API integrations",
        "Scalable architecture"
      ]
    },
    {
      title: "Process Optimization",
      description: "Streamline operations and maximize efficiency with data-driven insights.",
      icon: Zap,
      gradient: "from-purple-500 to-pink-600",
      size: "medium" as const,
      delay: 0.3,
      features: [
        "Performance analytics",
        "Bottleneck identification",
        "Continuous improvement"
      ]
    },
    {
      title: "Integration Services",
      description: "Seamlessly connect your tools and platforms for unified operations.",
      icon: Wrench,
      gradient: "from-green-500 to-emerald-600",
      size: "small" as const,
      delay: 0.4,
      features: [
        "API connections",
        "Data synchronization"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Reveal effect="fade-up">
            <Badge>
              <Layers size={14} className="mr-2" /> Our Services
            </Badge>
          </Reveal>

          <Reveal effect="blur-in" delay={0.2}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-4 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
              Expertise That Drives Quality
            </h2>
          </Reveal>

          <Reveal effect="fade-up" delay={0.4}>
            <p className="text-gray-400 max-w-2xl text-lg">
              With deep expertise, we deliver quality solutions that drive success and exceed industry standards consistently.
            </p>
          </Reveal>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(300px,auto)] gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal effect="fade-up" delay={0.6}>
          <div className="text-center mt-16">
            <p className="text-gray-400 mb-6">
              Need something custom? We've got you covered.
            </p>
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,107,0,0.3)] hover:shadow-[0_0_60px_rgba(255,107,0,0.5)]">
              Discuss Your Project
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CoreServices;
import React, { useState } from 'react';
import Badge from './ui/Badge';
import { Scan } from 'lucide-react';
import Reveal from './ui/Reveal';

interface Project {
  id: number;
  label: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  stats: { value: string; label: string }[];
  image: string;
}

const Mission: React.FC = () => {
  const [activeId, setActiveId] = useState(1);

  const projects: Project[] = [
    {
      id: 1,
      label: "PROJECT 1",
      number: "01",
      title: "MedixCare",
      subtitle: "AI Triage Assistant",
      description: "We built a custom AI triage assistant that evaluates symptoms and routes patients to the appropriate care level efficiently.",
      stats: [
        { value: "40%", label: "Reduced average wait" },
        { value: "30%", label: "Rise in patient satisfaction" }
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 2,
      label: "PROJECT 2",
      number: "02",
      title: "NeoMart",
      subtitle: "Smart Product Recommendations",
      description: "Integrated AI-driven product recommendations based on real-time user behavior and historical data to maximize conversions.",
      stats: [
        { value: "20%", label: "Boosted order value" },
        { value: "17%", label: "Reduced cart dropoff" }
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: 3,
      label: "PROJECT 3",
      number: "03",
      title: "Workwise",
      subtitle: "Automated HR Workflow Bot",
      description: "Developed an AI-powered workflow automation bot for onboarding, leave requests, and FAQ handling to streamline HR ops.",
      stats: [
        { value: "60%", label: "Saved admin time" },
        { value: "35%", label: "Improved team output" }
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  const activeProject = projects.find(p => p.id === activeId) || projects[0];

  return (
    <section id="mission" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Reveal effect="zoom-in" delay={0.1}>
            <Badge className="mb-6 uppercase tracking-widest bg-white/5 text-gray-300 border-white/10">
              <Scan size={14} className="mr-2" /> Projects
            </Badge>
          </Reveal>
          
          <Reveal effect="blur-in" delay={0.2} width="100%">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
              Proven Impact & Results
            </h2>
          </Reveal>

          <Reveal effect="fade-up" delay={0.3}>
            <p className="text-gray-400 text-lg">
              Explore Projects that reflect our AI expertise & real world impact
            </p>
          </Reveal>
        </div>

        {/* Tab Navigation */}
        <Reveal effect="fade-in" delay={0.4} width="100%">
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            {projects.map((project, idx) => (
              <button
                key={project.id}
                onClick={() => setActiveId(project.id)}
                className={`
                  px-12 py-4 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 w-full md:w-auto uppercase
                  ${activeId === project.id 
                    ? 'bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.2)] scale-105' 
                    : 'bg-surface-lighter text-gray-500 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/10'
                  }
                `}
              >
                {project.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Active Project Content Card */}
        <Reveal effect="fade-up" delay={0.2} duration={0.6} key={activeId} width="100%">
          <div className="bg-[#0A0A0A] border border-white/10 rounded-[32px] p-6 md:p-12 relative overflow-hidden min-h-[550px] transition-all duration-500 shadow-2xl">
            
            {/* Content Wrapper */}
            <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
              
              {/* Left: Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group border border-white/5 shadow-2xl">
                  <img 
                    src={activeProject.image} 
                    alt={activeProject.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Right: Text & Stats */}
              <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                <span className="text-gray-500 font-mono text-sm mb-6 block tracking-widest animate-in fade-in duration-700">{activeProject.number}</span>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-3 text-white leading-tight animate-in slide-in-from-bottom-4 duration-500">
                  {activeProject.title} <span className="text-gray-600 font-light mx-1">—</span> {activeProject.subtitle}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-10 text-lg font-light animate-in fade-in duration-700 delay-100">
                  {activeProject.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 w-full animate-in zoom-in-95 duration-500 delay-200">
                  {activeProject.stats.map((stat, i) => (
                    <div key={i} className="bg-[#111] border border-white/5 rounded-2xl p-6 md:p-8 text-center hover:border-white/10 transition-colors shadow-lg">
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Mission;
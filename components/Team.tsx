import React from 'react';
import Badge from './ui/Badge';
import { Users } from 'lucide-react';
import Reveal from './ui/Reveal';

const Team: React.FC = () => {
  const team = [
    { name: "Alif Kepanjen", role: "CEO", img: "https://picsum.photos/seed/alif/300/300" },
    { name: "Jennifer Sukun", role: "Business Development", img: "https://picsum.photos/seed/jen/300/300" },
    { name: "David Pakis", role: "Tech Officer", img: "https://picsum.photos/seed/dave/300/300" },
    { name: "Radu Klojen", role: "Infrastructure", img: "https://picsum.photos/seed/radu/300/300" },
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <Reveal effect="zoom-in" delay={0.1}>
            <Badge>
              <Users size={14} className="mr-2" /> Our Creative Minds
            </Badge>
          </Reveal>
          
          <Reveal effect="blur-in" delay={0.2} width="100%">
            <h2 className="text-4xl md:text-5xl font-bold mt-6 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
              The People Behind The Magic
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, i) => (
            <Reveal key={i} effect="fade-up" delay={0.2 + (i * 0.1)}>
              <div className="flex flex-col items-center text-center group">
                <div className="w-full aspect-square rounded-3xl overflow-hidden mb-6 bg-surface-light border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
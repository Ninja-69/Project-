import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Instagram, Twitter, Youtube, Github, Linkedin, Mail, MapPin, ArrowUpRight, Copy, Check } from 'lucide-react';
import Reveal from './ui/Reveal';

interface FooterProps {
  onNavigateLegal?: (view: 'privacy' | 'terms' | 'cookies') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigateLegal }) => {
  const [email, setEmail] = useState('');
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState('');

  // Update time every minute
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@kynnex.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'GitHub', icon: Github, url: '#' },
    { name: 'YouTube', icon: Youtube, url: '#' },
  ];

  const footerLinks = [
    {
      title: 'Sitemap',
      links: [
        { name: 'Home', href: '#' },
        { name: 'Services', href: '#services' },
        { name: 'Process', href: '#process' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
      ]
    },
    {
      title: 'Socials',
      links: [
        { name: 'Twitter (X)', href: '#' },
        { name: 'Instagram', href: '#' },
        { name: 'LinkedIn', href: '#' },
        { name: 'Dribbble', href: '#' },
        { name: 'Behance', href: '#' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: 'privacy' },
        { name: 'Terms of Service', href: 'terms' },
        { name: 'Cookie Policy', href: 'cookies' },
      ]
    }
  ];

  return (
    <footer className="bg-black relative pt-20 md:pt-32 pb-10 overflow-hidden">
      {/* Background Noise & Gradient */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-black via-transparent to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-20">

        {/* Massive CTA Section */}
        <div className="mb-24 md:mb-32 flex flex-col items-center text-center">
          <Reveal effect="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium text-gray-300">Available for new projects</span>
            </div>
          </Reveal>

          <Reveal effect="blur-in" delay={0.1}>
            <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-[0.9] text-white mb-10 mix-blend-overlay opacity-90">
              LET'S TALK
            </h2>
          </Reveal>

          <Reveal effect="fade-up" delay={0.2}>
            <button className="group relative px-12 py-6 bg-white text-black rounded-full text-xl md:text-2xl font-bold overflow-hidden transition-transform hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-3">
                Start a Project
                <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </button>
          </Reveal>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 border-t border-white/10 pt-16 pb-16">

          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Kynnex.</h3>
              <p className="text-gray-400 max-w-sm text-lg leading-relaxed mb-8">
                We build digital products, brands, and experiences that connect with the people who matter most.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={handleCopyEmail}
                  className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-95"
                >
                  <Mail className="w-5 h-5 text-gray-300" />
                  <span className="text-gray-300 group-hover:text-white">hello@kynnex.com</span>
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-500 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all" />}
                </button>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>San Francisco, CA • {time}</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((column, idx) => (
              <div key={idx}>
                <h4 className="text-white font-semibold mb-6">{column.title}</h4>
                <ul className="space-y-4">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          if (column.title === 'Legal' && onNavigateLegal) {
                            e.preventDefault();
                            onNavigateLegal(link.href as 'privacy' | 'terms' | 'cookies');
                          }
                        }}
                        className="text-gray-500 hover:text-white transition-colors text-base block w-fit relative group"
                      >
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Kynnex Agency. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform duration-200"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Big Text Background Overlay */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02]">
        <h1 className="text-[20vw] font-bold text-white whitespace-nowrap leading-none select-none">
          KYNNEX
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
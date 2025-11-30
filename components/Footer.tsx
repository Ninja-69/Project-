
import React from 'react';
import { ArrowRight, Heart, Instagram, Twitter, Youtube, Play, Send } from 'lucide-react';
import Reveal from './ui/Reveal';
import Button from './ui/Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-10 pb-10 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* --- CTA Card Section --- */}
        <Reveal effect="fade-up" delay={0.1} width="100%">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-[#111] to-black border border-white/10 p-8 md:p-20 text-center mb-24 group">

            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-medium text-gray-300">Join Us Now</span>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                Each Project we Undertake<br />
                is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Unique Opportunity.</span>
              </h2>

              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Ready to take the next step? Join us now and start transforming your vision into reality with expert support.
              </p>

              <Button variant="primary" className="px-8 py-4 text-base rounded-full shadow-[0_0_30px_rgba(255,107,0,0.3)] hover:shadow-[0_0_50px_rgba(255,107,0,0.5)]">
                Book an Appointment
              </Button>
            </div>
          </div>
        </Reveal>

        {/* --- Footer Main Content --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 border-t border-white/5 pt-20">

          {/* Column 1: Brand & Newsletter (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <Reveal effect="fade-up" delay={0.2}>
              <div>
                <div className="flex items-center gap-2 text-white font-bold text-2xl mb-6">
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-orange-300">
                    Automatix
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1"></div>
                </div>
                <p className="text-gray-500 text-sm mb-8 flex items-center gap-1.5">
                  Made remotely with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> and passion
                  <br />- Automatix Studio.
                </p>

                {/* Newsletter */}
                <div className="relative max-w-xs">
                  <input
                    type="email"
                    placeholder="Enter Your Email..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-32 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <button className="absolute right-1 top-1 bottom-1 bg-primary hover:bg-orange-600 text-white text-xs font-bold px-4 rounded-lg transition-colors shadow-lg shadow-orange-900/20">
                    Subscribe Us
                  </button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Column 2: Template Pages (2 cols) */}
          <div className="md:col-span-2">
            <Reveal effect="fade-up" delay={0.3}>
              <h4 className="text-white font-semibold mb-6">Template Pages</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                {['Home', 'About', 'Portfolio', 'Contact', 'FAQ'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Column 3: Social (2 cols) */}
          <div className="md:col-span-2">
            <Reveal effect="fade-up" delay={0.4}>
              <h4 className="text-white font-semibold mb-6">Social</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Twitter size={16} /> Twitter (X)</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Instagram size={16} /> Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Youtube size={16} /> Youtube</a></li>
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L24 12H12V24L0 12H12V0Z" /></svg> Framer</a></li>
              </ul>
            </Reveal>
          </div>

          {/* Column 4: Sales Video (4 cols) */}
          <div className="md:col-span-4 flex flex-col items-start md:items-end">
            <Reveal effect="fade-up" delay={0.5} className="w-full max-w-xs">
              <div className="w-full">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  <span className="text-xs font-medium text-gray-300">Sales - 7,360,109</span>
                </div>

                {/* Video Thumbnail */}
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-black"></div>
                  {/* Abstract shapes in thumbnail */}
                  <div className="absolute inset-0 opacity-50">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-500/30 blur-xl rounded-full"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-2xl rounded-full"></div>
                  </div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-5 h-5 text-white fill-white ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 mt-12 border-t border-white/5 text-xs text-gray-600">
          <Reveal effect="fade-in" delay={0.6}>
            <p>© 2024 Automatix</p>
          </Reveal>

          <Reveal effect="fade-in" delay={0.7}>
            <div className="flex items-center gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-400 transition-colors">Terms & Conditions</a>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
                <span className="font-bold text-white">Made in Framer</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
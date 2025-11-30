import React from 'react';
import Badge from './ui/Badge';
import { Mail, Send } from 'lucide-react';
import Reveal from './ui/Reveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-black">
      {/* Background Glows - Subtle and Integrated */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"
      ></div>
      
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <Reveal effect="zoom-in" delay={0.1}>
            <Badge className="mb-6 tracking-[0.2em] text-gray-400 border-white/5 bg-white/5 uppercase">
              <Mail size={14} className="mr-2" /> Contact
            </Badge>
          </Reveal>
          
          <Reveal effect="blur-in" delay={0.2} width="100%">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
              Get in touch!
            </h2>
          </Reveal>
          
          <Reveal effect="fade-up" delay={0.3}>
            <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
              We'd love to talk about how we can integrate AI into your business. Leave us a message and we'll get back to you within 24 hours.
            </p>
          </Reveal>
        </div>

        {/* Form Container - Blended Style */}
        <Reveal effect="fade-up" delay={0.4} width="100%" className="max-w-2xl mx-auto">
          <div className="relative">
            
            {/* Form Background */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/5 shadow-2xl"></div>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5 relative z-10 p-8 md:p-10">
              
              {/* First Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-gray-500 text-xs uppercase tracking-wider font-semibold ml-1">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  placeholder="Jane"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-700 focus:bg-black/60 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all duration-200"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-gray-500 text-xs uppercase tracking-wider font-semibold ml-1">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  placeholder="Smith"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-700 focus:bg-black/60 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all duration-200"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-gray-500 text-xs uppercase tracking-wider font-semibold ml-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="jane@company.com"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-700 focus:bg-black/60 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all duration-200"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-gray-500 text-xs uppercase tracking-wider font-semibold ml-1">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-700 focus:bg-black/60 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all duration-200"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="message" className="text-gray-500 text-xs uppercase tracking-wider font-semibold ml-1">Message</label>
                <textarea 
                  id="message" 
                  placeholder="Tell us about your project needs..."
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-700 focus:bg-black/60 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all duration-200 min-h-[120px] resize-y"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 mt-4">
                <button 
                  type="submit"
                  className="group relative w-full inline-flex items-center justify-center bg-white text-black hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:shadow-[0_0_35px_rgba(255,255,255,0.2)] hover:-translate-y-0.5"
                >
                  <span>Send Message</span>
                  <Send size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>

            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
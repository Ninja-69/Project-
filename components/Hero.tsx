import React from 'react';
import { ArrowDownRight, Sparkles } from 'lucide-react';
import Button from './ui/Button';
import Reveal from './ui/Reveal';

// SVG Logos for Real Companies
const Logos = {
  OpenAI: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.0462 6.0462 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.5364-.7846l2.2629-1.3057.2665-.1523.511-.2951a.7508.7508 0 0 0 .2855-.2618.7508.7508 0 0 0 .0904-.376v-5.0667l2.5411 1.4661v5.7176a4.485 4.485 0 0 1-3.4163 1.0587zm4.3557-2.618a4.4993 4.4993 0 0 1-2.22 2.1136v-5.2666l-2.2106-1.2771 2.6886-1.5518a.746.746 0 0 0 .3855-.6569V7.1247l4.4363 2.5657v5.6272a4.5088 4.5088 0 0 1-3.0845 2.5024zm2.1488-8.2443a4.485 4.485 0 0 1-.5062 3.0131l-4.4316-2.5609-2.3486 1.3533.2094-2.7314a.7508.7508 0 0 0-.0857-.4046.746.746 0 0 0-.3093-.2951l-4.522-2.6085 4.9573-2.8655a4.4898 4.4898 0 0 1 7.0367 7.1044zm-9.7408-4.9906a4.4708 4.4708 0 0 1 2.5317.7846l-2.2629 1.3057-.2665.1523-.511.2951a.746.746 0 0 0-.376.6379v5.0667L6.657 9.8732V4.1553a4.4755 4.4755 0 0 1 3.364-1.0349zm-6.505 5.2571a4.4993 4.4993 0 0 1 2.22-2.1136v5.2666l2.2106 1.2771-2.6886 1.5518a.746.746 0 0 0-.3855.6569v5.4883l-4.4363-2.5657V8.8166a4.5136 4.5136 0 0 1 3.0798-2.4881z" />
    </svg>
  ),
  GitHub: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  Vercel: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
      <path d="M24 22.525H0l12-21.05 12 21.05z" />
    </svg>
  ),
  Stripe: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.895-1.356 2.414-1.356 1.85 0 3.779.64 5.344 1.57l1.325-3.355c-1.745-1.002-4.113-1.603-6.521-1.603-4.945 0-8.241 2.502-8.241 6.828 0 6.602 9.06 6.31 9.06 9.608 0 .97-1.216 1.486-2.735 1.486-2.333 0-4.832-.871-6.502-2.1l-1.408 3.398c1.939 1.138 4.674 1.83 7.828 1.83 5.34 0 8.799-2.449 8.799-6.852.001-5.694-9.006-5.998-9.006-9.157l2.999 2.11z" />
    </svg>
  ),
  Figma: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
      <path d="M8.33 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0 8c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.34-8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4v4zm0 8c2.21 0 4-1.79 4-4v-4h-4c-2.21 0-4 1.79-4 4s1.79 4 4 4h4z" />
    </svg>
  ),
  Linear: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
      <path d="M12.0002 0.730469C11.5202 0.730469 11.0802 0.930469 10.7702 1.28047L0.860166 15.6905C0.300166 16.5005 0.880166 17.6205 1.86017 17.6205H9.95017V22.6605C9.95017 23.3305 10.7402 23.6805 11.2302 23.2305L21.1402 14.1805C21.7502 13.6205 21.3502 12.6005 20.5302 12.6005H14.0502V1.60047C14.0502 1.12047 13.5802 0.730469 13.1002 0.730469H12.0002Z" />
    </svg>
  ),
  Raycast: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
      <path d="M16 2L21 7V21.5L13 14L16 2ZM8 2L3 7V21.5L11 14L8 2Z" />
    </svg>
  ),
  Docker: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.119a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.186.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V3.574a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V3.574a.185.185 0 00-.186-.185H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.186.186.186m5.893 2.715h2.119a.186.186 0 00.186-.185V6.29a.186.186 0 00-.186-.185h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V6.29a.185.185 0 00-.184-.185H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V6.29a.186.186 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m-2.929 0h2.12a.185.185 0 00.185-.185V6.29a.186.186 0 00-.185-.185H2.207a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V6.29a.186.186 0 00-.185-.185H-0.757a.186.186 0 00-.186.185v1.888c0 .102.083.185.186.185m.717 11.31c.204.073.456.12.753.136.262.015.53-.024.79-.089.43-.106.843-.277 1.229-.487.35-.19.68-.415.986-.672.443-.372.844-.793 1.196-1.252.017-.024.032-.05.045-.078a.22.22 0 00-.16-.307.227.227 0 00-.063 0c-.394.062-.782.148-1.166.248-.363.095-.72.208-1.07.34a.222.222 0 00-.142.208c.005.188-.13.349-.313.376a2.27 2.27 0 01-.849-.074c-.201-.055-.353-.223-.393-.427a.224.224 0 00-.332-.128c-.417.26-.826.533-1.226.818-.035.025-.065.056-.088.09a.22.22 0 00.083.313c.22.115.466.2.719.284" />
    </svg>
  )
};

const Hero: React.FC = () => {
  const companies = [
    { name: 'OpenAI', icon: Logos.OpenAI },
    { name: 'GitHub', icon: Logos.GitHub },
    { name: 'Stripe', icon: Logos.Stripe },
    { name: 'Vercel', icon: Logos.Vercel },
    { name: 'Figma', icon: Logos.Figma },
    { name: 'Linear', icon: Logos.Linear },
    { name: 'Raycast', icon: Logos.Raycast },
    { name: 'Docker', icon: Logos.Docker },
  ];

  const marqueeCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="relative flex flex-col items-center justify-center pt-32 pb-0 overflow-hidden bg-black selection:bg-primary/30 min-h-[90vh]">

      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[600px] bg-primary/10 blur-[150px] rounded-[100%] pointer-events-none z-0 mix-blend-screen animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[600px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-orange-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center flex flex-col items-center">

        {/* Availability Badge - Fade In */}
        <Reveal effect="scale-in" duration={0.6} delay={0}>
          <div className="mb-8 md:mb-12 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(255,107,0,0.15)] transition-all duration-500 cursor-default group shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"></span>
            </span>
            <span className="text-xs md:text-sm text-gray-300 font-medium tracking-wide uppercase group-hover:text-white transition-colors">Available now, 3 spots left</span>
          </div>
        </Reveal>

        {/* Hero Heading - Blur In Effect */}
        <div className="relative mb-8">
          <Reveal effect="blur-in" duration={1} delay={0.1} width="100%">
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tight leading-[1.1] md:leading-[1.05] drop-shadow-2xl max-w-7xl mx-auto bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
              <span className="block">Automation Agency</span>
            </h1>
          </Reveal>

          <Reveal effect="blur-in" duration={1} delay={0.2} width="100%">
            <div className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tight leading-[1.1] md:leading-[1.05] max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-2 md:gap-6 my-2 md:my-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500">Beyond</span>
              <div className="relative flex items-center justify-center w-12 h-12 md:w-20 md:h-20 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/20 backdrop-blur-lg shadow-[0_0_30px_rgba(255,255,255,0.1)] animate-pulse-slow hover:scale-110 transition-transform duration-500">
                <Sparkles className="w-6 h-6 md:w-10 md:h-10 text-primary drop-shadow-[0_0_15px_rgba(255,107,0,0.8)]" fill="currentColor" />
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500">Limits.</span>
            </div>
          </Reveal>

          <Reveal effect="blur-in" duration={1} delay={0.3} width="100%">
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tight leading-[1.1] md:leading-[1.05] max-w-7xl mx-auto">
              <span className="block bg-gradient-to-r from-primary via-orange-300 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-shine">
                Amplified With AI.
              </span>
            </h1>
          </Reveal>
        </div>

        <Reveal effect="fade-up" duration={0.8} delay={0.4}>
          <p className="max-w-2xl mx-auto text-gray-400 mb-10 text-lg md:text-xl leading-relaxed font-light">
            Design services at your fingertips. <span className="text-white font-medium">Pause or cancel anytime.</span><br className="hidden md:block" />
            We build the systems that build your business.
          </p>
        </Reveal>

        {/* CTA Buttons - Scale In */}
        <Reveal effect="zoom-in" duration={0.6} delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 md:mb-24 w-full sm:w-auto">
            <Button variant="primary" className="w-full sm:w-auto px-10 py-4 text-lg rounded-full shadow-[0_0_40px_rgba(255,107,0,0.3)] hover:shadow-[0_0_60px_rgba(255,107,0,0.5)] hover:scale-105 transition-all duration-300">
              Book a Call
            </Button>
            <Button icon={false} variant="outline" className="w-full sm:w-auto px-10 py-4 text-lg rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white backdrop-blur-sm transition-all duration-300 group">
              View Our Work <ArrowDownRight size={20} className="ml-2 group-hover:rotate-[-45deg] transition-transform duration-300" />
            </Button>
          </div>
        </Reveal>

        {/* Marquee Section - Pushed to absolute bottom to avoid gap */}
        <Reveal effect="fade-in" duration={1} delay={0.6} className="w-full mt-auto">
          <div className="w-full relative border-t border-white/5 pt-10 pb-12 bg-gradient-to-b from-transparent to-black/80">
            <p className="text-xs md:text-sm text-gray-500 mb-8 uppercase tracking-[0.3em] font-semibold">Trusted by Innovative Companies</p>

            <div className="w-full overflow-hidden relative mask-linear-gradient">
              <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

              <div className="flex w-max items-center gap-12 md:gap-24 animate-marquee hover:[animation-play-state:paused] pb-4">
                {marqueeCompanies.map((company, i) => (
                  <div key={i} className="flex items-center gap-3 md:gap-4 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer group grayscale hover:grayscale-0 transform hover:scale-110">
                    <div className="p-2 md:p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-primary/50 group-hover:bg-primary/10 transition-colors">
                      <company.icon />
                    </div>
                    <span className="text-xl md:text-2xl font-bold tracking-tight text-white/80 group-hover:text-white font-sans">{company.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
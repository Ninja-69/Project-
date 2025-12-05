import React from 'react';
import { ArrowUpRight, Sparkles, Eye } from 'lucide-react';
import Button from './ui/Button';
import Reveal from './ui/Reveal';

// Official Brand Logos (Actual SVGs)
const Logos = {
  OpenAI: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.0462 6.0462 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.5364-.7846l.0415-.0207 2.2629-1.3057a.3677.3677 0 0 0 .1855-.3183v-5.0667l2.5411 1.4661v5.7176a4.485 4.485 0 0 1-3.4163 1.0587zm-7.9736-3.3983a4.4708 4.4708 0 0 1-.5346-3.0131l.0415.0207 2.2629 1.3057a.3677.3677 0 0 0 .3711 0l5.5236-3.1895v2.9322l-4.9573 2.8655a4.4898 4.4898 0 0 1-6.1072-1.8215zm-1.0498-8.2443a4.4993 4.4993 0 0 1 2.3486-1.9739v5.2666a.3677.3677 0 0 0 .1855.3183l5.5236 3.1895-2.5411 1.4661-4.9573-2.8655a4.5088 4.5088 0 0 1-1.5593-5.4011zm13.5093 3.5462l-5.5236-3.1895 2.5411-1.4661 4.9573 2.8655a4.4898 4.4898 0 0 1-1.6787 8.2443v-5.2666a.3677.3677 0 0 0-.1855-.3183zm2.5411-3.8473a4.4755 4.4755 0 0 1-.0415.0207l-2.2629-1.3057a.3677.3677 0 0 0-.3711 0l-5.5236 3.1895V7.1247l4.9573-2.8655a4.4898 4.4898 0 0 1 6.6418 4.6632zm-10.7408-4.9906a4.4708 4.4708 0 0 1 2.3486.6379l-.0415.0207-2.2629 1.3057a.3677.3677 0 0 0-.1855.3183v5.0667L6.657 9.8732V4.1553a4.4755 4.4755 0 0 1 3.364-1.0349zm-1.0498 3.8473l2.4595-1.4203 2.4595 1.4203v2.8406l-2.4595 1.4203-2.4595-1.4203z" />
    </svg>
  ),
  GitHub: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  Vercel: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
      <path d="M24 22.525H0l12-21.05 12 21.05z" />
    </svg>
  ),
  Stripe: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
    </svg>
  ),
  Figma: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
      <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
    </svg>
  ),
  Notion: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
    </svg>
  ),
  Supabase: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
      <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z" />
    </svg>
  ),
  n8n: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
      <path d="M18.667 14.667V24L12 18.667 5.333 24v-9.333L12 9.333l6.667 5.334zM12 0l6.667 5.333v9.334L12 9.333 5.333 14.667V5.333L12 0z" />
    </svg>
  ),
  Slack: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
    </svg>
  ),
  Tailwind: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
    </svg>
  ),
  Docker: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.119a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.186.185.186m0 2.716h2.119a.186.186 0 00.186-.185V6.29a.186.186 0 00-.186-.185h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.93 0h2.12a.186.186 0 00.184-.185V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.186.186 0 00.185-.185V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.888c0 .102.084.185.186.185m5.893 2.715h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186H8.1a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.186.186 0 00-.186-.186H5.136a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m21.964 7.852c0-1.992-1.616-3.608-3.608-3.608-1.992 0-3.608 1.616-3.608 3.608s1.616 3.608 3.608 3.608c1.992 0 3.608-1.616 3.608-3.608m-3.608-2.608c1.44 0 2.608 1.168 2.608 2.608s-1.168 2.608-2.608 2.608-2.608-1.168-2.608-2.608 1.168-2.608 2.608-2.608" />
    </svg>
  )
};

const Hero: React.FC<{ onViewWork?: () => void; onBookCall?: () => void }> = ({ onViewWork, onBookCall }) => {
  const companies = [
    { name: 'OpenAI', icon: Logos.OpenAI },
    { name: 'GitHub', icon: Logos.GitHub },
    { name: 'Stripe', icon: Logos.Stripe },
    { name: 'Vercel', icon: Logos.Vercel },
    { name: 'Figma', icon: Logos.Figma },
    { name: 'Notion', icon: Logos.Notion },
    { name: 'Supabase', icon: Logos.Supabase },
    { name: 'n8n', icon: Logos.n8n },
    { name: 'Slack', icon: Logos.Slack },
    { name: 'Docker', icon: Logos.Docker },
    { name: 'Tailwind', icon: Logos.Tailwind },
  ];

  const marqueeCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="relative flex flex-col items-center justify-center pt-20 pb-0 overflow-hidden bg-black selection:bg-primary/30 min-h-[85vh]">

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
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 md:mb-16 w-full sm:w-auto">
            <Button
              variant="primary"
              onClick={onBookCall}
              className="w-full sm:w-auto px-10 py-4 text-lg rounded-full shadow-[0_0_40px_rgba(255,107,0,0.3)] hover:shadow-[0_0_60px_rgba(255,107,0,0.5)] hover:scale-105 transition-all duration-300"
            >
              Book a Call
            </Button>
            <Button
              icon={false}
              variant="outline"
              onClick={onViewWork}
              className="w-full sm:w-auto px-10 py-4 text-lg rounded-full border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white backdrop-blur-sm transition-all duration-300 group"
            >
              View Our Work <Eye size={20} className="ml-2 group-hover:scale-110 transition-transform duration-300" />
            </Button>
          </div>
        </Reveal>

        {/* Marquee Section - Pushed to absolute bottom to avoid gap */}
        <Reveal effect="fade-in" duration={1} delay={0.6} className="w-full mt-auto">
          <div className="w-full relative border-t border-white/5 pt-8 pb-6 bg-gradient-to-b from-transparent to-black/80">
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
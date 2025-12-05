import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Smartphone, ShoppingCart, Bot, BarChart3, ArrowUpRight, Play, Volume2, Pause, Plane, Stethoscope } from 'lucide-react';
import Reveal from './ui/Reveal';
import Badge from './ui/Badge';

interface Project {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    description: string;
    image: string;
    icon: React.ElementType;
    gradient: string;
    link: string;
    linkText: string;
    stats: { label: string; value: string }[];
    tags: string[];
    hasAudio?: boolean;
    audioFile?: string;
}

const projects: Project[] = [
    {
        id: 'luxewix',
        title: 'LuxeWix',
        subtitle: 'Travel',
        category: 'Travel Automation',
        description: 'Revolutionizing travel bookings with "Speed to Lead" technology. We engineered an instant-response system that triggers an automated call to agents the exact second a lead is generated anywhere on the web. This zero-latency connection ensures agents reach potential travelers while interest is at its peak.',
        image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1600&auto=format&fit=crop', // Luxury resort blue
        icon: Plane,
        gradient: 'from-cyan-500 to-blue-600',
        link: '#',
        linkText: 'Listen to Call Flow',
        hasAudio: true,
        audioFile: '/audio/voice1.mp3',
        tags: ['Speed to Lead', 'Auto-Dialer', 'Travel Tech'],
        stats: [
            { label: 'Response Time', value: '< 5s' },
            { label: 'Bookings', value: '+300%' },
        ]
    },
    {
        id: 'jellliey',
        title: 'Jellliey',
        subtitle: 'Property Management',
        category: 'Real Estate Automation',
        description: 'Transforming property management with intelligent voice automation. We deployed AI agents that act as top-tier sales representatives—handling inbound calls, qualifying potential buyers, and managing property listings with human-like fluency. This system eliminated missed calls and skyrocketed lead conversion rates.',
        image: 'https://images.unsplash.com/photo-1600596542815-2a4d9fdd4070?q=80&w=1600&auto=format&fit=crop', // Modern warm mansion
        icon: Volume2,
        gradient: 'from-orange-500 to-pink-600',
        link: '#',
        linkText: 'Listen to Demo Call',
        hasAudio: true,
        audioFile: '/audio/voice2.mp3',
        tags: ['Inbound Automation', 'Lead Qualification', '24/7 Availability'],
        stats: [
            { label: 'Leads Qualified', value: '10k+' },
            { label: 'Response Time', value: 'Instant' },
        ]
    },
    {
        id: 'nexily',
        title: 'Nexily',
        subtitle: 'Ecommerce',
        category: 'Ecommerce Automation',
        description: 'A comprehensive automation suite for high-volume ecommerce stores. Features automated call confirmations, smart upsell suggestions based on purchase history, and abandoned cart recovery bots.',
        image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1600&auto=format&fit=crop', // Reliable mall image
        icon: ShoppingCart,
        gradient: 'from-orange-500 to-red-600',
        link: '#',
        linkText: 'View Case Study',
        tags: ['Ecommerce', 'Conversion Rate', 'Retention'],
        stats: [
            { label: 'Conversion', value: '+35%' },
            { label: 'Revenue', value: '$2.4M' },
        ]
    },
    {
        id: 'nti-dental',
        title: 'NTI Dental',
        subtitle: 'Clinic',
        category: 'Healthcare Automation',
        description: 'Streamlining patient care with intelligent voice automation. Our AI receptionists handle appointment scheduling, answer common dental queries, and manage emergency triage 24/7. This system reduced missed calls to zero and increased booking efficiency by 40%.',
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop', // Modern dental clinic
        icon: Stethoscope,
        gradient: 'from-teal-500 to-emerald-600',
        link: '#',
        linkText: 'Listen to Appointment',
        hasAudio: true,
        audioFile: '/audio/voice3.mp3',
        tags: ['Appointment Booking', 'Patient Triage', '24/7 Reception'],
        stats: [
            { label: 'Missed Calls', value: '0%' },
            { label: 'Booking Eff.', value: '+40%' },
        ]
    },
    {
        id: 'heightx',
        title: 'HeightX',
        subtitle: 'App',
        category: 'Mobile Application',
        description: 'A fitness and wellness application designed to help users maximize their height potential through scientifically backed exercises, nutrition plans, and progress tracking.',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800',
        icon: Smartphone,
        gradient: 'from-blue-500 to-cyan-500',
        link: '#',
        linkText: 'Get on Play Store',
        tags: ['Mobile App', 'Health & Fitness', 'Growth'],
        stats: [
            { label: 'Downloads', value: '50k+' },
            { label: 'Rating', value: '4.8/5' },
        ]
    }
];

interface WorkProps {
    onBack: () => void;
    onViewCaseStudy?: (projectId: string) => void;
}

const Work: React.FC<WorkProps> = ({ onBack, onViewCaseStudy }) => {
    const [playing, setPlaying] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Handle audio ending
    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            const handleEnded = () => setPlaying(null);
            audio.addEventListener('ended', handleEnded);
            return () => audio.removeEventListener('ended', handleEnded);
        }
    }, []);

    const togglePlay = (project: Project) => {
        if (playing === project.id) {
            audioRef.current?.pause();
            setPlaying(null);
        } else {
            if (audioRef.current && project.audioFile) {
                audioRef.current.src = project.audioFile;
                audioRef.current.play().catch(e => {
                    console.warn("Audio play failed (file might be missing):", e);
                    alert(`Please place the audio file at: public${project.audioFile}`);
                    setPlaying(null);
                });
                setPlaying(project.id);
            }
        }
    };

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-20 relative overflow-hidden">
            {/* Hidden Audio Element */}
            <audio ref={audioRef} className="hidden" />

            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-orange-900/20 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="mb-16">
                    <Reveal effect="fade-up">
                        <button
                            onClick={onBack}
                            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </button>
                    </Reveal>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <Reveal effect="blur-in" delay={0.1}>
                            <div>
                                <Badge className="mb-6 text-orange-400 border-orange-500/20 bg-orange-500/10">
                                    <Play size={14} className="mr-2 fill-current" /> Selected Work
                                </Badge>
                                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                                    Our Portfolio
                                </h1>
                            </div>
                        </Reveal>

                        <Reveal effect="fade-up" delay={0.2}>
                            <p className="text-gray-400 max-w-md text-lg leading-relaxed">
                                A curated selection of projects where we've helped ambitious brands automate, scale, and dominate their industries.
                            </p>
                        </Reveal>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 gap-12 md:gap-20">
                    {projects.map((project, index) => (
                        <Reveal key={project.id} effect="slide-up" delay={index * 0.1} width="100%">
                            <div className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-6 md:p-10 hover:border-white/20 transition-all duration-500 hover:bg-white/[0.04]">

                                {/* Image Section (Large) */}
                                <div className="lg:col-span-7 relative overflow-hidden rounded-[2rem] h-[300px] md:h-[400px]">
                                    {/* Background Image with GTA Filter & Blur */}
                                    <div className="absolute inset-0">
                                        <img
                                            src={project.id === 'jellliey' ? '/jellliey_banner.png' : project.image}
                                            alt={project.title}
                                            className={`w-full h-full object-cover gta-filter blur-[2px] scale-105 group-hover:scale-110 transition-transform duration-700 ${project.id === 'jellliey' ? 'object-center' : ''}`}
                                        />
                                        {/* Color Overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 mix-blend-overlay`}></div>
                                        {/* Dark Overlay for Text Readability */}
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500"></div>
                                    </div>

                                    {/* Overlay Title (Premium Cursive) */}
                                    {(project.id === 'jellliey' || project.id === 'luxewix' || project.id === 'nexily' || project.id === 'nti-dental') && (
                                        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-4">
                                            <h2 className="font-cursive text-7xl md:text-8xl text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)] text-center leading-none transition-transform duration-500">
                                                {project.title}
                                            </h2>
                                            <span className="font-serif-display text-xl md:text-2xl text-white/90 tracking-[0.2em] uppercase mt-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                                                {project.subtitle}
                                            </span>
                                        </div>
                                    )}

                                    {/* Floating Icon */}
                                    <div className="absolute top-6 right-6 z-20 w-12 h-12 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center">
                                        <project.icon className="w-6 h-6 text-white" />
                                    </div>

                                    {/* Audio Visualizer Overlay */}
                                    {project.hasAudio && playing === project.id && (
                                        <div className="absolute bottom-6 left-6 right-6 z-30 bg-black/80 backdrop-blur-xl rounded-xl p-4 border border-orange-500/30 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-300 shadow-[0_0_30px_rgba(255,107,0,0.2)]">
                                            <div className="flex items-center gap-1 h-8">
                                                {[...Array(12)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className="w-1 bg-orange-500 rounded-full animate-pulse"
                                                        style={{
                                                            height: `${Math.random() * 100}%`,
                                                            animationDelay: `${i * 0.05}s`,
                                                            animationDuration: '0.5s'
                                                        }}
                                                    ></div>
                                                ))}
                                            </div>
                                            <span className="text-sm font-medium text-white">Playing Demo Call...</span>
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="lg:col-span-5 flex flex-col justify-center">
                                    <div className="mb-6">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} bg-opacity-10 text-white bg-clip-text text-transparent bg-opacity-100 border border-white/10`}>
                                                {project.category}
                                            </span>
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-400 border border-white/5">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed mb-8">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Stats */}
                                    <div className="grid grid-cols-2 gap-6 mb-8 border-t border-white/10 pt-6">
                                        {project.stats.map((stat, i) => (
                                            <div key={i}>
                                                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                                <div className="text-sm text-gray-500">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA / Audio Player */}
                                    {project.id === 'nexily' ? (
                                        <button
                                            onClick={() => onViewCaseStudy?.('nexily')}
                                            className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold bg-white text-black hover:bg-gray-200 transition-all duration-300"
                                        >
                                            <BarChart3 className="w-5 h-5" />
                                            <span>{project.linkText}</span>
                                        </button>
                                    ) : project.hasAudio ? (
                                        <button
                                            onClick={() => togglePlay(project)}
                                            className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${playing === project.id ? 'bg-orange-500 text-white shadow-[0_0_20px_rgba(255,107,0,0.4)]' : 'bg-white text-black hover:bg-gray-200'}`}
                                        >
                                            {playing === project.id ? (
                                                <>
                                                    <Pause className="w-5 h-5 fill-current" />
                                                    <span>Pause Demo</span>
                                                </>
                                            ) : (
                                                <>
                                                    <Play className="w-5 h-5 fill-current" />
                                                    <span>{project.linkText}</span>
                                                </>
                                            )}
                                        </button>
                                    ) : (
                                        <a
                                            href={project.link}
                                            className="inline-flex items-center gap-2 text-white font-semibold group/link"
                                        >
                                            <span className="border-b border-white/30 pb-0.5 group-hover/link:border-orange-500 transition-colors">
                                                {project.linkText}
                                            </span>
                                            <ArrowUpRight className="w-5 h-5 text-orange-500 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                        </a>
                                    )}
                                </div>

                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-24 text-center">
                    <Reveal effect="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                            Have a project in mind?
                        </h2>
                        <button className="px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                            Let's Build It Together
                        </button>
                    </Reveal>
                </div>

            </div>
        </div>
    );
};

export default Work;

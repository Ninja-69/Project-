import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUp } from 'lucide-react';
import Reveal from '../ui/Reveal';

interface LegalLayoutProps {
    title: string;
    lastUpdated: string;
    children: React.ReactNode;
    onBack: () => void;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ title, lastUpdated, children, onBack }) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScrollProgress(Number(scroll));
            setShowBackToTop(totalScroll > 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden selection:bg-orange-500/30">
            {/* Scroll Progress Bar */}
            <div className="fixed top-0 left-0 h-1 bg-orange-500 z-50 transition-all duration-100 ease-out" style={{ width: `${scrollProgress * 100}%` }}></div>

            {/* Background Effects */}
            <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
            <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none animate-pulse"></div>
            <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

            {/* Floating Particles (Simulated) */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-10 w-2 h-2 bg-white/20 rounded-full animate-bounce-subtle"></div>
                <div className="absolute bottom-1/3 right-20 w-3 h-3 bg-orange-500/20 rounded-full animate-pulse"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
                {/* Navigation */}
                <Reveal effect="fade-down" delay={0.1}>
                    <button
                        onClick={onBack}
                        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 sm:mb-16 px-3 sm:px-4 py-2 rounded-full hover:bg-white/5 border border-transparent hover:border-white/10 text-sm sm:text-base"
                    >
                        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-x-1" />
                        <span>Back to Home</span>
                    </button>
                </Reveal>

                {/* Header */}
                <div className="max-w-4xl mx-auto mb-16 sm:mb-20 text-center">
                    <Reveal effect="magnetic" delay={0.2}>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent mb-4 sm:mb-6 tracking-tight">
                            {title}
                        </h1>
                    </Reveal>
                    <Reveal effect="fade-up" delay={0.3}>
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                            Last Updated: {lastUpdated}
                        </div>
                    </Reveal>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto">
                    <Reveal effect="fade-up" delay={0.4}>
                        <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 backdrop-blur-sm shadow-2xl relative overflow-hidden">
                            {/* Content Glow */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                            <div className="space-y-12">
                                {children}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 p-4 rounded-full bg-orange-500 text-white shadow-lg transition-all duration-500 z-50 hover:bg-orange-600 hover:scale-110 ${showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
                <ArrowUp className="w-6 h-6" />
            </button>
        </div>
    );
};

export default LegalLayout;

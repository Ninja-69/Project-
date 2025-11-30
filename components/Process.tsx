import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, Code, Globe, Zap, BarChart3, LineChart, Layout } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import Badge from './ui/Badge';

// Constants for better maintainability
const ANIMATION_CONFIG = {
    STEP_DURATION: 5000, // 5 seconds per step
    TYPING_SPEED: 50, // ms per character
    COUNTER_SPEED: 20, // ms per increment
    EFFICIENCY_TARGET: 90,
    REVENUE_TARGET: 80,
} as const;

const steps = [
    {
        title: "AI-Powered Workflow Automation",
        description: "We analyze your current processes and identify bottlenecks that can be eliminated through intelligent automation.",
        icon: Code,
        color: "from-orange-500 to-red-500"
    },
    {
        title: "Services for All Sectors",
        description: "Our solutions are adaptable across various industries, providing tailored insights and tools for growth.",
        icon: Globe,
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "System Efficiency",
        description: "Optimize your resource allocation and operational speed with our advanced efficiency algorithms.",
        icon: Zap,
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Business Growth Automation",
        description: "Scale your revenue and client base automatically with data-driven growth strategies.",
        icon: BarChart3,
        color: "from-green-500 to-emerald-500"
    }
] as const;

const codeSnippet = `class AutoWorkflow {
  async execute() {
    await this.analyze();
    await this.optimize();
    return "Deployed";
  }
}`;

export default function Process() {
    const [activeStep, setActiveStep] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [progress, setProgress] = useState(0);
    const [typedCode, setTypedCode] = useState('');
    const [efficiencyScore, setEfficiencyScore] = useState(0);
    const [revenue, setRevenue] = useState(0);

    // Properly typed refs
    const progressAnimationRef = useRef<number | null>(null);
    const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const efficiencyIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const revenueIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const lastTimestampRef = useRef<number>(0);

    // Cleanup all intervals
    const cleanupIntervals = useCallback(() => {
        if (progressAnimationRef.current) {
            cancelAnimationFrame(progressAnimationRef.current);
            progressAnimationRef.current = null;
        }
        if (typingIntervalRef.current) {
            clearInterval(typingIntervalRef.current);
            typingIntervalRef.current = null;
        }
        if (efficiencyIntervalRef.current) {
            clearInterval(efficiencyIntervalRef.current);
            efficiencyIntervalRef.current = null;
        }
        if (revenueIntervalRef.current) {
            clearInterval(revenueIntervalRef.current);
            revenueIntervalRef.current = null;
        }
    }, []);

    // Handle manual step click
    const handleStepClick = useCallback((index: number) => {
        cleanupIntervals();
        setActiveStep(index);
        setProgress(0);
        lastTimestampRef.current = 0;
    }, [cleanupIntervals]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                handleStepClick((activeStep - 1 + steps.length) % steps.length);
            } else if (e.key === 'ArrowRight') {
                handleStepClick((activeStep + 1) % steps.length);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [activeStep, handleStepClick]);

    // Smooth progress animation using requestAnimationFrame (60 FPS)
    useEffect(() => {
        if (isPaused) {
            if (progressAnimationRef.current) {
                cancelAnimationFrame(progressAnimationRef.current);
                progressAnimationRef.current = null;
            }
            return;
        }

        lastTimestampRef.current = 0;

        const animate = (timestamp: number) => {
            if (lastTimestampRef.current === 0) {
                lastTimestampRef.current = timestamp;
            }

            const elapsed = timestamp - lastTimestampRef.current;
            const newProgress = (elapsed / ANIMATION_CONFIG.STEP_DURATION) * 100;

            if (newProgress >= 100) {
                // Step complete - move to next
                setProgress(0);
                setActiveStep((current) => (current + 1) % steps.length);
                lastTimestampRef.current = 0;
            } else {
                setProgress(newProgress);
                progressAnimationRef.current = requestAnimationFrame(animate);
            }
        };

        progressAnimationRef.current = requestAnimationFrame(animate);

        return () => {
            if (progressAnimationRef.current) {
                cancelAnimationFrame(progressAnimationRef.current);
            }
        };
    }, [isPaused, activeStep]);

    // Animation Effects based on Active Step
    useEffect(() => {
        // Cleanup previous animations
        if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
        if (efficiencyIntervalRef.current) clearInterval(efficiencyIntervalRef.current);
        if (revenueIntervalRef.current) clearInterval(revenueIntervalRef.current);

        // Reset states
        setTypedCode('');
        setEfficiencyScore(0);
        setRevenue(0);

        if (activeStep === 0) {
            // Typing Animation
            let i = 0;
            typingIntervalRef.current = setInterval(() => {
                if (i < codeSnippet.length) {
                    setTypedCode(codeSnippet.slice(0, i + 1));
                    i++;
                } else {
                    if (typingIntervalRef.current) {
                        clearInterval(typingIntervalRef.current);
                        typingIntervalRef.current = null;
                    }
                }
            }, ANIMATION_CONFIG.TYPING_SPEED);
        } else if (activeStep === 2) {
            // Efficiency Counter
            let score = 0;
            efficiencyIntervalRef.current = setInterval(() => {
                if (score < ANIMATION_CONFIG.EFFICIENCY_TARGET) {
                    score += 2;
                    setEfficiencyScore(Math.min(score, ANIMATION_CONFIG.EFFICIENCY_TARGET));
                } else {
                    if (efficiencyIntervalRef.current) {
                        clearInterval(efficiencyIntervalRef.current);
                        efficiencyIntervalRef.current = null;
                    }
                }
            }, ANIMATION_CONFIG.COUNTER_SPEED);
        } else if (activeStep === 3) {
            // Revenue Counter
            let rev = 0;
            revenueIntervalRef.current = setInterval(() => {
                if (rev < ANIMATION_CONFIG.REVENUE_TARGET) {
                    rev += 1;
                    setRevenue(Math.min(rev, ANIMATION_CONFIG.REVENUE_TARGET));
                } else {
                    if (revenueIntervalRef.current) {
                        clearInterval(revenueIntervalRef.current);
                        revenueIntervalRef.current = null;
                    }
                }
            }, ANIMATION_CONFIG.COUNTER_SPEED);
        }

        return () => {
            if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
            if (efficiencyIntervalRef.current) clearInterval(efficiencyIntervalRef.current);
            if (revenueIntervalRef.current) clearInterval(revenueIntervalRef.current);
        };
    }, [activeStep]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            cleanupIntervals();
        };
    }, [cleanupIntervals]);

    const renderVisual = () => {
        switch (activeStep) {
            case 0: // AI-Powered Workflow Automation - TYPING & SCROLLING
                return (
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                        <div className="relative w-full max-w-md bg-[#0F0F0F] border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden group">
                            {/* Animated Border Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-purple-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-gradient-shift"></div>

                            {/* Header */}
                            <div className="flex justify-between items-center mb-4 relative z-10">
                                <Reveal effect="blur-in" delay={0.1}>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-[10px] text-gray-400 font-mono">WORKFLOW_ACTIVE</span>
                                    </div>
                                </Reveal>
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
                                </div>
                            </div>

                            {/* Code Editor with Typing Effect */}
                            <div className="bg-black/80 border border-white/5 rounded-xl p-4 mb-4 h-40 relative overflow-hidden font-mono text-[12px] shadow-inner">
                                <div className="absolute left-0 top-0 bottom-0 w-8 bg-white/5 border-r border-white/5 flex flex-col items-center pt-4 gap-1 text-[9px] text-gray-700 select-none">
                                    {[1, 2, 3, 4, 5, 6].map(n => <span key={n}>{n}</span>)}
                                </div>
                                <div className="pl-10 relative z-10 text-gray-300 whitespace-pre-wrap">
                                    {typedCode}
                                    <span className="inline-block w-1.5 h-4 bg-orange-500 ml-0.5 animate-cursor-blink align-middle"></span>
                                </div>
                                {/* Scanning Beam */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent h-[200%] w-full animate-scan-beam pointer-events-none"></div>
                            </div>

                            {/* Deploy Button */}
                            <Reveal effect="fade-up" delay={0.3} width="100%">
                                <button className="w-full py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-900/20 hover:shadow-orange-900/40 transition-all duration-300 group/btn relative z-10">
                                    <span>Deploy System</span>
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </Reveal>
                        </div>
                    </div>
                );

            case 1: // Services for All Sectors - SCANNING & HOVER
                return (
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                        <div className="w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                            {/* Scanning Spotlight */}
                            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 animate-shimmer pointer-events-none"></div>

                            <div className="mb-6 relative z-10">
                                <Reveal effect="blur-in" delay={0.1}>
                                    <h3 className="text-lg font-semibold text-white mb-1 flex items-center gap-2">
                                        <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400"><Globe className="w-4 h-4" /></div>
                                        Global Analysis
                                    </h3>
                                </Reveal>
                                <Reveal effect="blur-in" delay={0.2}>
                                    <p className="text-xs text-gray-500 ml-9">Real-time sector monitoring</p>
                                </Reveal>
                            </div>

                            <div className="space-y-2.5 relative z-10">
                                {[
                                    { name: 'Web Services', icon: Globe, growth: 84, color: 'bg-blue-500' },
                                    { name: 'SaaS Startups', icon: Zap, growth: 92, color: 'bg-purple-500' },
                                    { name: 'Marketing', icon: BarChart3, growth: 76, color: 'bg-orange-500' },
                                    { name: 'E-commerce', icon: Layout, growth: 88, color: 'bg-green-500' }
                                ].map((item, i) => (
                                    <Reveal key={i} effect="slide-left" delay={0.1 * i} width="100%">
                                        <div className="flex items-center justify-between p-3 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 cursor-pointer group">
                                            <div className="flex items-center gap-3 flex-1">
                                                <div className={`p-2 rounded-lg ${item.color}/20 text-white group-hover:scale-110 transition-transform`}>
                                                    <item.icon className="w-4 h-4" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex justify-between mb-1">
                                                        <span className="text-xs font-medium text-gray-300 group-hover:text-white">{item.name}</span>
                                                        <span className="text-[10px] text-gray-500">{item.growth}%</span>
                                                    </div>
                                                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                                        <div
                                                            className={`h-full ${item.color} transition-all duration-1000 ease-out`}
                                                            style={{ width: `${item.growth}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </div>
                );

            case 2: // System Efficiency - PARTICLES & COUNTER
                return (
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                        <div className="relative w-full max-w-sm h-80 flex items-center justify-center">
                            {/* Animated Connection Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                                <defs>
                                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="rgba(255,107,0,0)" />
                                        <stop offset="50%" stopColor="rgba(255,107,0,0.5)" />
                                        <stop offset="100%" stopColor="rgba(255,107,0,0)" />
                                    </linearGradient>
                                </defs>
                                <line x1="20%" y1="40%" x2="50%" y2="50%" stroke="url(#lineGrad)" strokeWidth="1" className="animate-pulse" />
                                <line x1="80%" y1="70%" x2="50%" y2="50%" stroke="url(#lineGrad)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s' }} />
                                {/* Moving Particles */}
                                <circle r="2" fill="#f97316">
                                    <animateMotion dur="3s" repeatCount="indefinite" path="M60,100 L150,140" />
                                </circle>
                                <circle r="2" fill="#f97316">
                                    <animateMotion dur="4s" repeatCount="indefinite" path="M250,200 L150,140" />
                                </circle>
                            </svg>

                            {/* Main Center Bubble */}
                            <Reveal effect="zoom-in" delay={0.1}>
                                <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-orange-500/10 to-black border border-orange-500/30 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(249,115,22,0.2)] z-20 backdrop-blur-md">
                                    <div className="absolute inset-0 rounded-full border border-orange-500/20 animate-ping-slow"></div>
                                    <div className="absolute inset-2 rounded-full border border-orange-500/10 animate-spin-slow border-t-orange-500/50"></div>
                                    <div className="text-center relative z-10">
                                        <div className="text-5xl font-bold text-white mb-1 tabular-nums tracking-tight">
                                            {efficiencyScore}<span className="text-2xl text-orange-500">%</span>
                                        </div>
                                        <div className="text-[10px] text-orange-400 uppercase tracking-[0.2em] font-medium">Efficiency</div>
                                    </div>
                                </div>
                            </Reveal>

                            {/* Satellite Bubbles */}
                            <div className="absolute left-4 top-12 w-24 h-24 rounded-full bg-black/80 border border-white/10 flex flex-col items-center justify-center shadow-xl z-10 backdrop-blur-sm animate-float-slow">
                                <span className="text-[10px] text-gray-500 mb-1">LEGACY</span>
                                <span className="text-xl font-bold text-gray-400">45%</span>
                            </div>
                            <div className="absolute right-4 bottom-12 w-20 h-20 rounded-full bg-black/80 border border-white/10 flex items-center justify-center shadow-xl z-10 backdrop-blur-sm animate-float-medium">
                                <span className="text-lg font-bold text-gray-500">30%</span>
                            </div>
                        </div>
                    </div>
                );

            case 3: // Business Growth - LIVE GRAPH & COUNTER
                return (
                    <div className="relative w-full h-full flex items-center justify-center p-4">
                        <div className="w-full max-w-md bg-[#0F0F0F] border border-white/10 rounded-2xl p-6 shadow-2xl animate-in fade-in duration-700">
                            <div className="flex justify-between items-center mb-8">
                                <Reveal effect="blur-in" delay={0.1}>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1 flex items-center gap-2">
                                            <div className="p-1.5 rounded-lg bg-green-500/20 text-green-400"><LineChart className="w-4 h-4" /></div>
                                            Revenue Growth
                                        </h3>
                                        <p className="text-xs text-gray-500 ml-9">Live performance tracking</p>
                                    </div>
                                </Reveal>
                                <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono font-bold animate-pulse">
                                    +{revenue > 0 ? ((revenue / ANIMATION_CONFIG.REVENUE_TARGET) * 127).toFixed(0) : 0}%
                                </div>
                            </div>

                            <div className="relative h-48 mb-6 bg-gradient-to-b from-white/5 to-transparent rounded-xl p-4 border border-white/5 overflow-hidden">
                                {/* Grid Lines */}
                                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-4 opacity-10 pointer-events-none">
                                    {[...Array(16)].map((_, i) => <div key={i} className="border-r border-t border-white"></div>)}
                                </div>

                                {/* Graph SVG */}
                                <svg className="absolute inset-0 w-full h-full p-4 overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#10b981" stopOpacity="0.5" />
                                            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d="M0,50 L20,45 L40,35 L60,25 L80,15 L100,5 V50 H0 Z"
                                        fill="url(#growthGrad)"
                                        className="animate-fade-in-up"
                                    />
                                    <path
                                        d="M0,50 L20,45 L40,35 L60,25 L80,15 L100,5"
                                        fill="none"
                                        stroke="#10b981"
                                        strokeWidth="1"
                                        strokeLinecap="round"
                                        className="drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                                    />
                                    {/* Animated Points */}
                                    <circle cx="20" cy="45" r="1.5" fill="#10b981" className="animate-ping-slow" />
                                    <circle cx="60" cy="25" r="1.5" fill="#10b981" className="animate-ping-slow" style={{ animationDelay: '0.5s' }} />
                                    <circle cx="100" cy="5" r="2" fill="#fff" stroke="#10b981" strokeWidth="1" className="animate-pulse" />
                                </svg>

                                {/* Floating Tooltip */}
                                <div className="absolute top-4 right-4 bg-green-900/90 backdrop-blur-md border border-green-500/50 px-3 py-2 rounded-lg shadow-xl z-20 animate-bounce-subtle">
                                    <div className="text-[9px] text-green-300 uppercase tracking-wider mb-0.5">Current Revenue</div>
                                    <div className="text-lg font-bold text-white tabular-nums">${revenue}K</div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-xs font-bold shadow-lg">PK</div>
                                    <div>
                                        <div className="text-xs font-bold text-white">Pranav Kumar</div>
                                        <div className="text-[10px] text-gray-500">Premium Plan</div>
                                    </div>
                                </div>
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_5px_rgba(249,115,22,0.5)]"></div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                );

            default: return null;
        }
    };

    return (
        <section className="py-24 bg-black relative overflow-hidden" id="process">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <Reveal effect="fade-up">
                        <Badge className="mb-6">
                            <Zap size={14} className="mr-2" /> Our Process
                        </Badge>
                    </Reveal>
                    <Reveal effect="blur-in" delay={0.2}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                            How We Transform Your Business
                        </h2>
                    </Reveal>
                    <Reveal effect="fade-up" delay={0.4}>
                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
                            Our proven methodology combines AI innovation with strategic execution to deliver measurable results.
                        </p>
                    </Reveal>
                </div>

                {/* Main Content Area - Hovering anywhere here pauses the loop */}
                <div
                    className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    role="region"
                    aria-label="Process steps"
                >
                    {/* Left Column: Steps */}
                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative pl-8 py-4 transition-all duration-500 cursor-pointer group ${activeStep === index ? 'opacity-100' : 'opacity-40 hover:opacity-60'}`}
                                onClick={() => handleStepClick(index)}
                                role="button"
                                tabIndex={0}
                                aria-label={`Step ${index + 1}: ${step.title}`}
                                aria-current={activeStep === index ? 'step' : undefined}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        handleStepClick(index);
                                    }
                                }}
                            >
                                {/* Progress Bar for Active Step */}
                                {activeStep === index && (
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/10 rounded-full overflow-hidden">
                                        <div
                                            className={`absolute top-0 left-0 w-full bg-gradient-to-b ${step.color} transition-all duration-100 ease-linear`}
                                            style={{ height: `${progress}%` }}
                                        ></div>
                                    </div>
                                )}
                                {/* Static Bar for Inactive Steps */}
                                {activeStep !== index && (
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors"></div>
                                )}

                                <div className="flex items-center gap-4 mb-2">
                                    <Reveal effect="blur-in" delay={0.1}>
                                        <h3 className={`text-xl font-semibold ${activeStep === index ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>
                                            {step.title}
                                        </h3>
                                    </Reveal>
                                    {activeStep === index && (
                                        <Reveal effect="zoom-in" delay={0.2}>
                                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold bg-gradient-to-r ${step.color} text-white shadow-lg`}>
                                                STEP 0{index + 1}
                                            </span>
                                        </Reveal>
                                    )}
                                </div>
                                <Reveal effect="fade-up" delay={0.2}>
                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {step.description}
                                    </p>
                                </Reveal>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Visual Card */}
                    <div className="relative h-[500px] w-full perspective-1000">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/10 will-change-transform">
                            {renderVisual()}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
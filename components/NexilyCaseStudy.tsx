import React from 'react';
import { ArrowLeft, TrendingUp, Users, Zap, ShoppingCart, BarChart3, Cpu, Database, Brain, Gauge, Target, MessageSquare, Phone } from 'lucide-react';
import Reveal from './ui/Reveal';
import Badge from './ui/Badge';

interface NexilyCaseStudyProps {
    onBack: () => void;
}

const NexilyCaseStudy: React.FC<NexilyCaseStudyProps> = ({ onBack }) => {

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-20 relative overflow-hidden">
            {/* Premium Background Effects */}
            <div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-orange-900/30 via-orange-900/10 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-900/15 blur-[200px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-7xl relative z-10">

                {/* Header */}
                <div className="mb-20">
                    <Reveal effect="fade-up">
                        <button
                            onClick={onBack}
                            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            Back to Projects
                        </button>
                    </Reveal>

                    <Reveal effect="blur-in" delay={0.1}>
                        <div className="mb-12">
                            <Badge className="mb-6 text-orange-400 border-orange-500/20 bg-orange-500/10">
                                <ShoppingCart size={14} className="mr-2" /> Case Study
                            </Badge>
                            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent leading-tight mb-4">
                                Nexily
                            </h1>
                            <p className="text-xl text-gray-400">How One Person Built a $600K/Month AI-Powered Ecommerce Empire in 12 Months</p>
                        </div>
                    </Reveal>

                    {/* Premium Stats Grid */}
                    <Reveal effect="fade-up" delay={0.2} width="100%">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { label: 'Peak Revenue', value: '$600K', subtext: 'Monthly', icon: TrendingUp },
                                { label: 'Growth Timeline', value: '12mo', subtext: 'From $50K to $600K', icon: Gauge },
                                { label: 'Conversion Rate', value: '35%', subtext: 'Industry avg: 2-3%', icon: Target },
                                { label: 'Team Size', value: '1', subtext: 'Fully Automated', icon: Users },
                            ].map((stat, i) => (
                                <Reveal key={i} effect={(['blur-in', 'fade-up', 'slide-left', 'zoom-in', 'flip-in'] as const)[i % 5]} delay={0.1 + i * 0.1} width="100%">
                                    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,107,0,0.2)]">
                                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="relative z-10">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{stat.label}</span>
                                                <stat.icon className="w-5 h-5 text-orange-400/60 group-hover:text-orange-400 transition-colors animate-pulse-glow" />
                                            </div>
                                            <div className="text-4xl font-bold text-white mb-2 animate-gradient-text">{stat.value}</div>
                                            <div className="text-xs text-gray-500">{stat.subtext}</div>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </Reveal>
                </div>

                {/* Hero Image Section */}
                <Reveal effect="zoom-in" delay={0.3} width="100%">
                    <div className="relative overflow-hidden rounded-[2.5rem] h-[450px] md:h-[550px] mb-24 group">
                        <img
                            src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1600&auto=format&fit=crop"
                            alt="Nexily"
                            className="w-full h-full object-cover gta-filter blur-[2px] scale-105 group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 opacity-40 mix-blend-overlay"></div>
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500"></div>

                        {/* Overlay Stats */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-4">
                            <h2 className="font-cursive text-7xl md:text-8xl text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)] text-center leading-none">
                                Nexily
                            </h2>
                            <span className="font-serif-display text-xl md:text-2xl text-white/90 tracking-[0.2em] uppercase mt-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                                Ecommerce Automation
                            </span>
                        </div>
                    </div>
                </Reveal>

                {/* The Origin Story */}
                <Reveal effect="fade-up" delay={0.4} width="100%">
                    <div className="mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                            The Origin
                        </h2>
                        
                        <div className="space-y-8">
                            {[
                                {
                                    title: 'The Acquisition',
                                    text: 'Started by acquiring an existing ecommerce business generating $50K/month. The foundation was solid, but the operations were manual, inefficient, and leaving massive revenue on the table. Every customer interaction was a missed opportunity for optimization.'
                                },
                                {
                                    title: 'The Problem Identified',
                                    text: 'Traditional ecommerce was hemorrhaging money: 70% of carts abandoned without recovery, zero personalization, customer support bottlenecks, missed upsell opportunities, and fragmented marketing. The business had potential but needed intelligent automation at every touchpoint.'
                                },
                                {
                                    title: 'The AI Revolution',
                                    text: 'Deployed a custom LLM stack combining GPT-4, Claude, and specialized models for different use cases. Built AI agents for customer service, product recommendations, pricing optimization, and marketing. Integrated WhatsApp, email, SMS, and voice channels into one intelligent system.'
                                },
                                {
                                    title: 'The Result',
                                    text: '$50K → $150K in 3 months. $150K → $400K in 6 months. $400K → $600K in 12 months. One person. Zero human support staff. 35% conversion rate (vs 2-3% industry average). Fully autonomous system handling 50,000+ customer interactions daily.'
                                }
                            ].map((block, i) => (
                                <Reveal key={i} effect={(['slide-left', 'fade-up', 'blur-in', 'flip-in'] as const)[i % 4]} delay={0.1 + i * 0.15} width="100%">
                                    <div className="relative pl-8 border-l-2 border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 group hover:pl-10">
                                        <div className="absolute -left-4 top-0 w-6 h-6 rounded-full bg-orange-500/20 border-2 border-orange-500 group-hover:bg-orange-500/40 group-hover:scale-125 transition-all duration-300 animate-pulse-glow"></div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">{block.title}</h3>
                                            <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors">
                                                {block.text}
                                            </p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </Reveal>

                {/* The 6 Pillars of Growth */}
                <Reveal effect="fade-up" delay={0.5} width="100%">
                    <div className="mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                            The 6 Pillars of Growth
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Intelligent Product Recommendations',
                                    description: 'Custom LLM analyzing purchase history, browsing patterns, and behavioral signals. Delivered personalized recommendations in real-time.',
                                    impact: '+45% AOV',
                                    icon: Brain,
                                    color: 'from-blue-500/20 to-cyan-500/20'
                                },
                                {
                                    title: 'Abandoned Cart Recovery',
                                    description: 'Multi-channel recovery system (email, SMS, WhatsApp) with AI-generated personalized offers. Recovered 28% of abandoned carts.',
                                    impact: '+$120K/mo',
                                    icon: ShoppingCart,
                                    color: 'from-orange-500/20 to-red-500/20'
                                },
                                {
                                    title: 'WhatsApp AI Agents',
                                    description: 'Conversational AI handling customer inquiries, order tracking, and support 24/7. Response time: <2 seconds. Satisfaction: 94%.',
                                    impact: '50K+ chats/day',
                                    icon: MessageSquare,
                                    color: 'from-green-500/20 to-emerald-500/20'
                                },
                                {
                                    title: 'Voice Call Automation',
                                    description: 'Intelligent voice agents for order confirmations, upsells, and support. Handled 10,000+ calls daily. Conversion on upsells: 32%.',
                                    impact: '+$180K/mo',
                                    icon: Phone,
                                    color: 'from-purple-500/20 to-pink-500/20'
                                },
                                {
                                    title: 'Dynamic Marketing Engine',
                                    description: 'AI-optimized campaigns across Facebook, Instagram, Google. Real-time budget allocation. CAC: $8. LTV: $240.',
                                    impact: '30:1 ROAS',
                                    icon: Target,
                                    color: 'from-yellow-500/20 to-orange-500/20'
                                },
                                {
                                    title: 'Influencer Marketplace',
                                    description: 'Automated UGC content generation and influencer coordination. Managed 500+ creators. Content production: 100+ pieces/week.',
                                    impact: '+$95K/mo',
                                    icon: Users,
                                    color: 'from-red-500/20 to-pink-500/20'
                                },
                            ].map((item, i) => (
                                <Reveal key={i} effect={(['zoom-in', 'fade-up', 'slide-right', 'blur-in', 'flip-in', 'bounce-in'] as const)[i % 6]} delay={0.1 + i * 0.12} width="100%">
                                    <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${item.color} border border-white/10 p-8 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,107,0,0.3)]`}>
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="relative z-10">
                                            <div className="flex items-start justify-between mb-4">
                                                <item.icon className="w-8 h-8 text-orange-400 group-hover:animate-spin" />
                                                <div className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 group-hover:bg-orange-500/40 transition-all animate-pulse">
                                                    <span className="text-sm font-bold text-orange-300">{item.impact}</span>
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">{item.title}</h3>
                                            <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">{item.description}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </Reveal>

                {/* Growth Timeline */}
                <Reveal effect="fade-up" delay={0.6} width="100%">
                    <div className="mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                            12-Month Growth Timeline
                        </h2>
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-orange-500 to-transparent"></div>

                            {/* Timeline Items */}
                            <div className="space-y-12">
                                {[
                                    { 
                                        phase: 'Phase 1: Foundation',
                                        timeline: 'Month 1-3',
                                        revenue: '$50K → $150K',
                                        growth: '+200%',
                                        milestones: ['Acquired existing $50K/mo business', 'Implemented product recommendations', 'Built WhatsApp integration'],
                                        focus: 'Core AI Systems'
                                    },
                                    { 
                                        phase: 'Phase 2: Expansion',
                                        timeline: 'Month 4-6',
                                        revenue: '$150K → $280K',
                                        growth: '+87%',
                                        milestones: ['Deployed voice call agents', 'Launched cart recovery system', 'Integrated email automation'],
                                        focus: 'Multi-Channel Automation'
                                    },
                                    { 
                                        phase: 'Phase 3: Acceleration',
                                        timeline: 'Month 7-9',
                                        revenue: '$280K → $420K',
                                        growth: '+50%',
                                        milestones: ['Optimized marketing campaigns', 'Built influencer marketplace', 'Implemented dynamic pricing'],
                                        focus: 'Revenue Optimization'
                                    },
                                    { 
                                        phase: 'Phase 4: Mastery',
                                        timeline: 'Month 10-12',
                                        revenue: '$420K → $600K',
                                        growth: '+43%',
                                        milestones: ['Full system optimization', 'Achieved 35% conversion rate', 'Handled 50K+ daily interactions'],
                                        focus: 'Peak Performance'
                                    },
                                ].map((item, i) => (
                                    <Reveal key={i} effect={(['slide-left', 'fade-up', 'blur-in', 'zoom-in'] as const)[i % 4]} delay={0.1 + i * 0.2} width="100%">
                                        <div className="relative pl-24 group">
                                            {/* Timeline Dot */}
                                            <div className="absolute left-0 top-2 w-16 h-16 rounded-full bg-gradient-to-br from-orange-500/20 to-red-500/20 border-2 border-orange-500 flex items-center justify-center group-hover:scale-125 group-hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] transition-all duration-300 animate-pulse-glow">
                                                <div className="w-8 h-8 rounded-full bg-orange-500 group-hover:animate-spin"></div>
                                            </div>

                                            {/* Content Card */}
                                            <div className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 group-hover:bg-white/[0.08] group-hover:shadow-[0_0_40px_rgba(255,107,0,0.2)]">
                                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-6">
                                                    <div>
                                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">{item.phase}</h3>
                                                        <p className="text-sm text-gray-400">{item.timeline}</p>
                                                    </div>
                                                    <div className="flex items-center gap-6">
                                                        <div>
                                                            <div className="text-sm text-gray-400 mb-1">Revenue</div>
                                                            <div className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">{item.revenue}</div>
                                                        </div>
                                                        <div className="px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 group-hover:bg-orange-500/40 group-hover:scale-110 transition-all animate-pulse">
                                                            <span className="text-lg font-bold text-orange-300">{item.growth}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <div>
                                                        <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-3">Key Milestones</div>
                                                        <ul className="space-y-2">
                                                            {item.milestones.map((milestone, j) => (
                                                                <li key={j} className="flex items-start gap-3 text-gray-400 text-sm group-hover:text-gray-300 transition-colors animate-fade-in-up" style={{ animationDelay: `${j * 0.1}s` }}>
                                                                    <span className="text-orange-500 mt-1 group-hover:animate-bounce">→</span>
                                                                    {milestone}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div className="flex items-center justify-center">
                                                        <div className="px-6 py-4 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 group-hover:from-orange-500/20 group-hover:to-red-500/20 transition-all group-hover:scale-110">
                                                            <div className="text-xs text-gray-400 mb-2">Focus Area</div>
                                                            <div className="text-lg font-bold text-orange-300">{item.focus}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Tech Stack */}
                <Reveal effect="fade-up" delay={0.7} width="100%">
                    <div className="mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                            Technology Stack
                        </h2>
                        
                        <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-12 overflow-hidden relative">
                            {/* Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>

                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                                {[
                                    {
                                        category: 'AI & LLM Layer',
                                        icon: Brain,
                                        items: [
                                            { name: 'GPT-4', role: 'Primary reasoning engine' },
                                            { name: 'Claude 3', role: 'Content generation & analysis' },
                                            { name: 'Llama 2', role: 'Local inference & cost optimization' },
                                            { name: 'Custom Fine-tuned Models', role: 'Domain-specific tasks' }
                                        ]
                                    },
                                    {
                                        category: 'Automation & Integration',
                                        icon: Zap,
                                        items: [
                                            { name: 'Twilio', role: 'Voice & SMS automation' },
                                            { name: 'WhatsApp Business API', role: 'Conversational commerce' },
                                            { name: 'Zapier', role: 'Workflow orchestration' },
                                            { name: 'Make.com', role: 'Complex automation flows' }
                                        ]
                                    },
                                    {
                                        category: 'Infrastructure & Data',
                                        icon: Database,
                                        items: [
                                            { name: 'AWS Lambda', role: 'Serverless compute' },
                                            { name: 'PostgreSQL', role: 'Primary database' },
                                            { name: 'Redis', role: 'Real-time caching' },
                                            { name: 'S3', role: 'Media & backup storage' }
                                        ]
                                    },
                                    {
                                        category: 'Marketing & Ads',
                                        icon: Target,
                                        items: [
                                            { name: 'Facebook Ads API', role: 'Social advertising' },
                                            { name: 'Google Ads API', role: 'Search & display ads' },
                                            { name: 'Segment', role: 'Customer data platform' },
                                            { name: 'Mixpanel', role: 'Event analytics' }
                                        ]
                                    },
                                    {
                                        category: 'Content & UGC',
                                        icon: Cpu,
                                        items: [
                                            { name: 'Midjourney API', role: 'Image generation' },
                                            { name: 'Synthesia', role: 'Video creation' },
                                            { name: 'Runway ML', role: 'Video editing' },
                                            { name: 'Buffer', role: 'Social scheduling' }
                                        ]
                                    },
                                    {
                                        category: 'Analytics & Monitoring',
                                        icon: BarChart3,
                                        items: [
                                            { name: 'Looker Studio', role: 'Real-time dashboards' },
                                            { name: 'Amplitude', role: 'User behavior analytics' },
                                            { name: 'Datadog', role: 'System monitoring' },
                                            { name: 'Stripe', role: 'Payment processing' }
                                        ]
                                    }
                                ].map((stack, i) => (
                                    <Reveal key={i} effect={(['zoom-in', 'fade-up', 'slide-left', 'blur-in', 'flip-in', 'bounce-in'] as const)[i % 6]} delay={0.1 + i * 0.1} width="100%">
                                        <div className="group hover:scale-105 transition-transform duration-300">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center group-hover:from-orange-500/40 group-hover:to-red-500/40 group-hover:scale-125 transition-all group-hover:animate-spin">
                                                    <stack.icon className="w-5 h-5 text-orange-400" />
                                                </div>
                                                <h3 className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors">{stack.category}</h3>
                                            </div>
                                            <div className="space-y-4">
                                                {stack.items.map((item, j) => (
                                                    <div key={j} className="pl-4 border-l-2 border-orange-500/20 hover:border-orange-500/60 transition-all duration-300 group-hover:pl-6 animate-fade-in-up" style={{ animationDelay: `${j * 0.08}s` }}>
                                                        <div className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">{item.name}</div>
                                                        <div className="text-xs text-gray-500 mt-1 group-hover:text-gray-400 transition-colors">{item.role}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>

                            {/* Cost Breakdown */}
                            <div className="mt-12 pt-12 border-t border-white/10">
                                <h4 className="text-lg font-bold text-white mb-6">Monthly Cost Structure</h4>
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                    {[
                                        { label: 'AI/LLM APIs', cost: '$8K', percent: '35%' },
                                        { label: 'Infrastructure', cost: '$5K', percent: '22%' },
                                        { label: 'Integrations', cost: '$4K', percent: '17%' },
                                        { label: 'Analytics & Tools', cost: '$5K', percent: '26%' }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                                            <div className="text-xs text-gray-400 mb-2">{item.label}</div>
                                            <div className="text-2xl font-bold text-white mb-2">{item.cost}</div>
                                            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-orange-500 to-red-600" style={{ width: item.percent }}></div>
                                            </div>
                                            <div className="text-xs text-gray-500 mt-2">{item.percent} of total</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                                    <div className="text-sm text-gray-300">
                                        <span className="font-semibold text-orange-300">Total Monthly Cost: $22K</span> | <span className="text-gray-400">Revenue: $600K</span> | <span className="font-semibold text-green-300">Margin: 96.3%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Key Insights */}
                <Reveal effect="fade-up" delay={0.8} width="100%">
                    <div className="mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                            Critical Insights & Learnings
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: 'Automation is Revenue',
                                    description: 'Every automated touchpoint directly correlated with revenue growth. The more processes we automated, the more we scaled without adding headcount.'
                                },
                                {
                                    title: 'Data Drives Decisions',
                                    description: 'Real-time analytics and A/B testing revealed that personalization increased conversion rates by 35%. Data-driven optimization was non-negotiable.'
                                },
                                {
                                    title: 'Multi-Channel Strategy',
                                    description: 'Customers don\'t have channel preferences—they want seamless experiences. Integrating WhatsApp, email, SMS, and calls created a unified customer journey.'
                                },
                                {
                                    title: 'AI Agents Scale Infinitely',
                                    description: 'Unlike human agents, AI scales without cost. We handled 10,000+ customer interactions daily with zero additional operational overhead.'
                                },
                                {
                                    title: 'Psychology Matters',
                                    description: 'Understanding customer psychology—urgency, social proof, personalization—was as important as the technology. We leveraged behavioral economics in every automation.'
                                },
                                {
                                    title: 'Continuous Optimization',
                                    description: 'The system never stopped learning. Weekly optimizations, monthly strategy reviews, and quarterly pivots kept us ahead of market trends.'
                                },
                            ].map((insight, i) => (
                                <Reveal key={i} effect={(['fade-up', 'slide-left', 'blur-in', 'zoom-in', 'flip-in', 'bounce-in'] as const)[i % 6]} delay={0.1 + i * 0.12} width="100%">
                                    <div className="group bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-500/20 rounded-2xl p-8 hover:from-orange-500/20 hover:to-red-600/20 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,107,0,0.2)]">
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">{insight.title}</h3>
                                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{insight.description}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </Reveal>

                {/* Founder's Perspective */}
                <Reveal effect="fade-up" delay={0.9} width="100%">
                    <div className="mb-24">
                        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent">
                            Founder's Perspective
                        </h2>
                        <Reveal effect="blur-in" delay={0.2} width="100%">
                            <div className="group bg-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden hover:border-orange-500/50 hover:bg-white/[0.04] transition-all duration-300">
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-red-600 group-hover:w-2 transition-all duration-300"></div>
                                <div className="pl-6 space-y-6">
                                    <p className="text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors animate-fade-in-up">
                                        "Nexily wasn't about building another ecommerce platform. It was about proving that one person, armed with AI, could compete with teams of hundreds. The psychology behind it was simple: remove friction, add personalization, and let the system learn."
                                    </p>
                                    <p className="text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                                        "Every feature was designed with a specific psychological principle in mind. Urgency in cart recovery emails. Social proof in product recommendations. Reciprocity in loyalty rewards. The technology was just the vehicle for human psychology at scale."
                                    </p>
                                    <p className="text-lg text-gray-300 leading-relaxed group-hover:text-white transition-colors animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                                        "The real breakthrough came when I realized that customers don't want to talk to humans—they want their problems solved instantly. AI agents provided that. No wait times. No frustration. Just results. That's when we hit $600K/month."
                                    </p>
                                    <div className="mt-8 pt-8 border-t border-white/10 group-hover:border-orange-500/30 transition-colors">
                                        <div className="text-sm text-gray-400 group-hover:text-orange-300 transition-colors">Founder, Nexily</div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </Reveal>

                {/* Bottom CTA */}
                <Reveal effect="zoom-in" delay={1.0} width="100%">
                    <div className="text-center group">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 group-hover:text-orange-300 transition-colors animate-fade-in-up">
                            Ready to Scale Your Business?
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto group-hover:text-gray-300 transition-colors animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            Learn how AI automation can transform your ecommerce operation. Let's build your next success story.
                        </p>
                        <button className="px-10 py-5 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg hover:scale-110 hover:shadow-[0_0_60px_rgba(255,107,0,0.5)] transition-all duration-300 shadow-[0_0_40px_rgba(255,107,0,0.3)] animate-pulse-glow">
                            Start Your Case Study
                        </button>
                    </div>
                </Reveal>

            </div>
        </div>
    );
};

export default NexilyCaseStudy;

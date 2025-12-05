import React, { useState } from 'react';
import { Calendar, Shield, Clock, CheckCircle, Users, AlertCircle, ArrowDown, ChevronDown } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { bookingTestimonials, trustStats } from '../data/testimonials';
import { bookingFAQ } from '../data/faq';
import {
    PremiumCheck,
    PremiumCross,
    PremiumClock,
    PremiumShield,
    PremiumStar,
    PremiumUsers,
    PremiumInfo,
    PremiumArrowDown,
    PremiumCalendar,
    PremiumQuestion,
    PremiumChevronDown,
    PremiumTarget,
    PremiumBlock
} from './ui/PremiumIcons';

export const Booking = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div id="booking" className="min-h-screen bg-black text-white py-16 md:py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

            <div className="container mx-auto px-4 relative z-10">

                {/* HERO SECTION */}
                <div className="max-w-5xl mx-auto mb-20 md:mb-28">
                    <Reveal effect="blur-in" duration={1} delay={0.1}>
                        <div className="text-center mb-12">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 md:mb-8">
                                <span className="bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
                                    See How to{' '}
                                </span>
                                <span className="block mt-2 bg-gradient-to-r from-primary via-orange-400 to-primary bg-clip-text text-transparent">
                                    2-3x Your Pipeline
                                </span>
                                <span className="block mt-2 bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent">
                                    Without Hiring SDRs
                                </span>
                            </h1>

                            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
                                Free 20-minute strategy call for <span className="text-white font-medium">B2B agencies and founders doing $1k–$50k/month</span> who want to automate outreach using AI—without replacing your entire stack or hiring technical people.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10 text-left">
                                {[
                                    "A custom AI automation roadmap mapped to your current funnel and bottlenecks",
                                    "2-3 specific quick-win opportunities you can implement this month",
                                    "Clear next steps—whether you work with us or build in-house",
                                    "Honest assessment of whether AI automation makes sense for your niche right now"
                                ].map((benefit, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md">
                                        <PremiumCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-sm md:text-base text-gray-300">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col items-center gap-3">
                                <PremiumArrowDown className="w-6 h-6 text-primary animate-bounce" />
                                <p className="text-sm text-gray-500">Book Your Free Strategy Call Below</p>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* WHO IS THIS FOR - PREMIUM DESIGN */}
                <div className="max-w-5xl mx-auto mb-20 md:mb-28">
                    <Reveal effect="fade-up" duration={0.8} delay={0.2}>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
                                Is This For You?
                            </h2>
                        </div>
                    </Reveal>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Perfect For - Clean Design */}
                        <Reveal effect="fade-up" duration={0.7} delay={0.3}>
                            <div className="relative group">
                                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-green-500/30 transition-all duration-500 shadow-lg hover:shadow-xl">
                                    <div className="flex items-center gap-3 mb-6">
                                        <PremiumTarget className="w-8 h-8 text-green-500" />
                                        <h3 className="text-xl font-bold text-white">Perfect if you:</h3>
                                    </div>
                                    <ul className="space-y-4">
                                        {[
                                            "Run a B2B agency, consultancy, or service business doing $1k–$50k/month",
                                            "Already have some traffic or leads but struggle with consistent outreach at scale",
                                            "Know AI is the future but don't know where to start or how to avoid the 'robotic' trap",
                                            "Want leverage without hiring more people or blowing up your current workflow"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="text-green-500 mt-1 text-lg">✓</span>
                                                <span className="text-gray-300 leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Reveal>

                        {/* Not For - Clean Design */}
                        <Reveal effect="fade-up" duration={0.7} delay={0.45}>
                            <div className="relative group">
                                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-red-500/30 transition-all duration-500 shadow-lg hover:shadow-xl">
                                    <div className="flex items-center gap-3 mb-6">
                                        <PremiumBlock className="w-8 h-8 text-red-500" />
                                        <h3 className="text-xl font-bold text-white">Not for you if:</h3>
                                    </div>
                                    <ul className="space-y-4">
                                        {[
                                            "You have zero traffic or warm leads yet (you need fundamentals first)",
                                            "You're just curious about AI but have no intention to implement in the next 90 days",
                                            "You're looking for a $500 DIY course—we focus on done-for-you and done-with-you"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="text-red-500 mt-1 text-lg">✗</span>
                                                <span className="text-gray-300 leading-relaxed">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* FAQ SECTION - EXPANDABLE */}
                <div className="max-w-4xl mx-auto mb-20 md:mb-28">
                    <Reveal effect="fade-up" duration={0.8} delay={0.2}>
                        <div className="text-center mb-14">
                            <p className="text-xs font-semibold text-primary/80 tracking-[0.15em] uppercase mb-4">
                                Frequently Asked
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
                                Questions & Answers
                            </h2>
                            <p className="text-base text-gray-400 max-w-xl mx-auto">
                                Everything you need to know about the call.
                            </p>
                        </div>
                    </Reveal>

                    <div className="space-y-3">
                        {bookingFAQ.map((faq, idx) => (
                            <Reveal key={idx} effect="fade-up" duration={0.5} delay={0.05 + idx * 0.03}>
                                <div className="group/faq">
                                    <div
                                        className={`relative rounded-2xl transition-all duration-400 bg-white/5 backdrop-blur-md border border-white/10 ${openFAQ === idx
                                            ? 'shadow-lg'
                                            : 'hover:shadow-md'
                                            }`}
                                    >
                                        {/* Subtle top border */}
                                        <div className={`absolute top-0 left-0 right-0 h-[1px] rounded-t-2xl transition-opacity duration-400 ${openFAQ === idx ? 'opacity-100 bg-gradient-to-r from-transparent via-white/10 to-transparent' : 'opacity-0'
                                            }`}></div>

                                        {/* Question Button - CLICKABLE */}
                                        <button
                                            onClick={() => toggleFAQ(idx)}
                                            className="relative w-full px-6 py-5 md:px-7 md:py-6 flex items-center gap-4 text-left"
                                        >
                                            {/* Number Badge */}
                                            <div
                                                className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-400 ${openFAQ === idx
                                                    ? 'bg-primary text-white shadow-[0_4px_14px_rgba(234,88,12,0.25)]'
                                                    : 'bg-white/[0.06] text-gray-400 neumorphic'
                                                    }`}
                                                style={{
                                                    transform: openFAQ === idx ? 'scale(1.05)' : 'scale(1)'
                                                }}
                                            >
                                                {String(idx + 1).padStart(2, '0')}
                                            </div>

                                            {/* Question Text */}
                                            <div className="flex-1 min-w-0">
                                                <h3 className={`text-base md:text-lg font-semibold transition-colors duration-300 ${openFAQ === idx ? 'text-white' : 'text-gray-300 group-hover/faq:text-white'
                                                    }`}>
                                                    {faq.question}
                                                </h3>
                                                {/* Popular badge */}
                                                {faq.priority === 1 && (
                                                    <span className="inline-flex items-center gap-1.5 mt-2 px-2 py-0.5 rounded-md bg-primary/10 text-primary text-[10px] font-semibold tracking-wide uppercase">
                                                        <PremiumStar className="w-2.5 h-2.5" />
                                                        Most Asked
                                                    </span>
                                                )}
                                            </div>

                                            {/* Chevron - ANIMATED */}
                                            <div
                                                className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-400 ${openFAQ === idx
                                                    ? 'bg-white/[0.08] rotate-180'
                                                    : 'bg-white/[0.04] group-hover/faq:bg-white/[0.06]'
                                                    }`}
                                            >
                                                <PremiumChevronDown className="w-4 h-4 text-gray-400" />
                                            </div>
                                        </button>

                                        {/* Answer - EXPANDABLE */}
                                        <div
                                            className={`grid transition-all duration-400 ease-out ${openFAQ === idx ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                                }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="px-6 pb-6 md:px-7 md:pb-7 pl-[4.5rem] md:pl-[5rem]">
                                                    <div className="h-[1px] w-full bg-gradient-to-r from-white/5 via-white/10 to-white/5 mb-5"></div>

                                                    <p className="text-[15px] md:text-base text-gray-400 leading-relaxed">
                                                        {faq.answer}
                                                    </p>

                                                    {idx === 0 && (
                                                        <div className="mt-5 pt-5 border-t border-white/5">
                                                            <div className="flex items-start gap-3 px-4 py-3 rounded-xl bg-white/[0.03]">
                                                                <PremiumInfo className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                                                <p className="text-sm text-gray-500 leading-relaxed">
                                                                    This is a genuine strategy session, not a disguised sales call.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <Reveal effect="fade-up" duration={0.5} delay={0.4}>
                        <div className="mt-10 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center shadow-md">
                                    <PremiumQuestion className="w-6 h-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-base font-semibold text-white mb-0.5">Still have questions?</p>
                                    <p className="text-sm text-gray-500">Book a call and we&apos;ll answer them live.</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* BOOKING WIDGET SECTION - FULL WIDTH EDGE TO EDGE */}
                <div className="w-full mb-20 md:mb-28">
                    <Reveal effect="fade-up" duration={0.8} delay={0.2}>
                        <div className="text-center mb-8 px-4">
                            <h2 className="text-3xl md:text-4xl font-black mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent">
                                Ready to See Your AI Opportunities?
                            </h2>

                            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10">
                                <div className="flex items-center gap-2 text-gray-400">
                                    <PremiumClock className="w-5 h-5 text-primary" />
                                    <span className="text-sm">20 Minutes</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <PremiumShield className="w-5 h-5 text-primary" />
                                    <span className="text-sm">No Sales Pitch</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <PremiumCheck className="w-5 h-5 text-primary" />
                                    <span className="text-sm">Value Guaranteed</span>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal effect="fade-up" duration={0.8} delay={0.4} width="100%">
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="relative group">
                                {/* Premium outer glow */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-orange-500/30 to-primary/40 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700 animate-pulse"></div>

                                {/* Main container with smooth edges */}
                                <div className="relative rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl overflow-hidden shadow-2xl group-hover:shadow-primary/40 transition-all duration-700">
                                    {/* Header section */}
                                    <div className="px-6 sm:px-8 md:px-10 py-6 border-b border-white/10 bg-gradient-to-r from-white/5 to-transparent">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white text-center">
                                            Choose Your Time
                                        </h3>
                                        <p className="text-sm text-gray-400 text-center mt-2">
                                            Pick a slot that works best for you
                                        </p>
                                    </div>

                                    {/* Cal.com Widget - Optimized sizing */}
                                    <div className="relative w-full h-[600px] sm:h-[700px] md:h-[800px] bg-white/95 backdrop-blur-sm rounded-b-3xl overflow-hidden">
                                        {/* Loading skeleton */}
                                        <div className="absolute inset-0 animate-skeleton z-0 rounded-b-3xl"></div>

                                        <iframe
                                            src="https://cal.com/ninjaxhustlerr/15min"
                                            className="w-full h-full border-none relative z-10 rounded-b-3xl"
                                            style={{ display: 'block' }}
                                            title="Book a Meeting"
                                            allowFullScreen
                                        ></iframe>
                                    </div>

                                    {/* Bottom accent line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                </div>
                            </div>

                            {/* Decorative dots below widget */}
                            <div className="mt-8 flex justify-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse"></div>
                                <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse delay-100"></div>
                                <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse delay-200"></div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* EMAIL FALLBACK */}
                <div className="max-w-2xl mx-auto">
                    <Reveal effect="fade-up" duration={0.6} delay={0.2}>
                        <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                            <p className="text-sm text-gray-500 mb-3">
                                Prefer to Email First?
                            </p>
                            <a
                                href="mailto:hello@youragency.com"
                                className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-sm">hello@youragency.com</span>
                            </a>
                            <p className="text-xs text-gray-600 mt-2">We&apos;ll respond within 24 hours</p>
                        </div>
                    </Reveal>
                </div>

            </div>
        </div>
    );
};

export default Booking;

import React from 'react';
import { ArrowUpRight, LayoutGrid } from 'lucide-react'; // LayoutGrid as placeholder for badge icon
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-badge">
                <LayoutGrid size={14} /> Radison - AI Automation Partner
            </div>

            <h1 className="hero-title">
                Transforming workflows with <br />
                AI powered automation
            </h1>

            <p className="hero-subtitle">
                Experience the future of business with intelligent, scalable automation
                solutions tailored to your needs
            </p>

            <div className="hero-actions">
                <button className="primary-btn">
                    Our Services <ArrowUpRight size={18} />
                </button>
                <button className="secondary-btn">
                    See Plans
                </button>
            </div>

            <div className="logo-carousel">
                <div className="logo-item">Logoipsum</div>
                <div className="logo-item">Logoipsum</div>
                <div className="logo-item">Logoipsum</div>
            </div>
        </section>
    );
};

export default Hero;

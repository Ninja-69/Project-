import React, { useState } from 'react';
import './Plans.css';
import { Check, ArrowUpRight, Layers, Box, Building2 } from 'lucide-react';

const Plans = () => {
    const [billing, setBilling] = useState('annually');

    return (
        <section id="plans" className="plans-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Plans</span>
                    <h2 className="section-title">Flexible plans for growth</h2>
                    <p className="section-subtitle">Transparent pricing designed to fit your requirements.</p>
                </div>

                <div className="pricing-toggle">
                    <button
                        className={`toggle-btn ${billing === 'annually' ? 'active' : ''}`}
                        onClick={() => setBilling('annually')}
                    >
                        Annually
                    </button>
                    <button
                        className={`toggle-btn ${billing === 'monthly' ? 'active' : ''}`}
                        onClick={() => setBilling('monthly')}
                    >
                        Monthly
                    </button>
                </div>

                <div className="plans-grid">
                    {/* Basic Plan */}
                    <div className="plan-card">
                        <div className="plan-header">
                            <div className="plan-icon"><Layers size={24} /></div>
                            <div className="plan-name">Basic</div>
                            <div className="plan-price">
                                $480<span className="plan-period">/month</span>
                            </div>
                            <p className="plan-desc">Essential tools and features for starting your journey with ease.</p>
                        </div>
                        <button className="plan-btn">Go with this plan <ArrowUpRight size={18} /></button>
                        <ul className="plan-features">
                            <li><Check size={16} className="check-icon" /> Basic workflow automation</li>
                            <li><Check size={16} className="check-icon" /> Basic chatbot development</li>
                            <li><Check size={16} className="check-icon" /> 60 content request</li>
                            <li><Check size={16} className="check-icon" /> E-mail support</li>
                            <li><Check size={16} className="check-icon" /> 1 consultation a month</li>
                        </ul>
                    </div>

                    {/* Professional Plan */}
                    <div className="plan-card">
                        <div className="plan-header">
                            <div className="plan-icon"><Box size={24} /></div>
                            <div className="plan-name">Professional</div>
                            <div className="plan-price">
                                $960<span className="plan-period">/month</span>
                            </div>
                            <p className="plan-desc">Advanced capabilities designed to meet growing business needs.</p>
                        </div>
                        <button className="plan-btn">Go with this plan <ArrowUpRight size={18} /></button>
                        <ul className="plan-features">
                            <li><Check size={16} className="check-icon" /> Advance workflow automation</li>
                            <li><Check size={16} className="check-icon" /> Advance chatbot development</li>
                            <li><Check size={16} className="check-icon" /> 150 content request</li>
                            <li><Check size={16} className="check-icon" /> E-mail support</li>
                            <li><Check size={16} className="check-icon" /> 2 consultation a month</li>
                        </ul>
                    </div>

                    {/* Custom Plan */}
                    <div className="plan-card full-width">
                        <div className="plan-header">
                            <div className="plan-icon"><Building2 size={24} /></div>
                            <div className="plan-name">Enterprises</div>
                            <div className="plan-price" style={{ fontSize: '2.5rem' }}>
                                Custom
                            </div>
                            <p className="plan-desc">Comprehensive solutions tailored for large-scale business success.</p>
                        </div>
                        <button className="plan-btn">Schedule a call <ArrowUpRight size={18} /></button>
                        <ul className="plan-features">
                            <li><Check size={16} className="check-icon" /> Custom workflow automation</li>
                            <li><Check size={16} className="check-icon" /> Custom chatbot development</li>
                            <li><Check size={16} className="check-icon" /> Unlimited content request</li>
                            <li><Check size={16} className="check-icon" /> 24hr priority support</li>
                            <li><Check size={16} className="check-icon" /> Unlimited consultation a month</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Plans;

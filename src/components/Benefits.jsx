import React from 'react';
import './Benefits.css';
import { Zap, CheckCircle2, TrendingUp } from 'lucide-react';

const Benefits = () => {
    return (
        <section id="benefits" className="benefits-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Benefits</span>
                    <h2 className="section-title">Maximize efficiency and impact</h2>
                    <p className="section-subtitle">Discover the key benefits of partnering with us.</p>
                </div>

                <div className="benefits-grid">
                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <Zap size={24} />
                        </div>
                        <h3>Cost reduction</h3>
                        <p>Optimize business processes and streamline operations to significantly minimize costs and maximize overall efficiency.</p>
                    </div>

                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <CheckCircle2 size={24} />
                        </div>
                        <h3>Improved outcomes</h3>
                        <p>Leverage powerful data-driven insights and innovative strategies to enhance business performance and achieve superior outcomes.</p>
                    </div>

                    <div className="benefit-card">
                        <div className="benefit-icon">
                            <TrendingUp size={24} />
                        </div>
                        <h3>Increased productivity</h3>
                        <p>Enhance group performance and output by automating redundant tasks, refining processes, and speeding up business functions.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Benefits;

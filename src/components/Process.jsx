import React from 'react';
import './Process.css';
import { Target } from 'lucide-react';

const Process = () => {
    return (
        <section id="process" className="process-section">
            <div className="container">

                <div className="who-we-are">
                    <span className="who-tag">Who We Are</span>
                    <h2 className="who-text">
                        We are Radison, we help founders like you to automate their day to day business operations with the help of AI
                    </h2>
                </div>

                <div className="section-header">
                    <span className="section-tag">Process</span>
                    <h2 className="section-title">Your path to excellence</h2>
                    <p className="section-subtitle">A simple, effective approach to deliver excellence.</p>
                </div>

                <div className="process-grid">
                    {/* Card 1 */}
                    <div className="process-card">
                        <div className="process-visual">
                            <div className="mock-dashboard">
                                <div className="mock-dash-panel">
                                    <div style={{ height: '40%', background: '#333', borderRadius: '4px 4px 0 0', margin: 10 }}></div>
                                    <div style={{ height: 4, width: '60%', background: '#333', margin: '0 10px' }}></div>
                                    <div style={{ height: 4, width: '40%', background: '#333', margin: '5px 10px' }}></div>
                                </div>
                                <div className="mock-dash-panel" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Target size={40} color="#555" />
                                </div>
                            </div>
                        </div>
                        <div className="process-info">
                            <h3>Discovery & Analysis</h3>
                            <p>We dive deep into your needs, exploring ideas and defining strategies for long-term success.</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="process-card">
                        <div className="process-visual">
                            <div className="mock-terminal">
                                <div style={{ display: 'flex', gap: 4, marginBottom: 10 }}>
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#f44' }}></div>
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#fb4' }}></div>
                                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4b4' }}></div>
                                </div>
                                <div>&gt; npm install radison-ai</div>
                                <div style={{ color: '#333' }}>&gt; installing dependencies...</div>
                                <div style={{ color: '#333' }}>&gt; done.</div>
                            </div>
                        </div>
                        <div className="process-info">
                            <h3>Development & Test</h3>
                            <p>We craft tailored solutions for your goals and rigorously test them for top-notch reliability.</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="process-card">
                        <div className="process-visual">
                            <div className="mock-status">
                                <div className="mock-sidebar">
                                    <div style={{ width: '80%', height: 6, background: '#333', marginBottom: 8 }}></div>
                                    <div style={{ width: '60%', height: 6, background: '#333', marginBottom: 8 }}></div>
                                    <div style={{ width: '70%', height: 6, background: '#333' }}></div>
                                </div>
                                <div className="mock-main">
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: 24, marginBottom: 4 }}>↻</div>
                                        <div style={{ fontSize: 10, color: '#555' }}>Updating</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="process-info">
                            <h3>Launch & Maintain</h3>
                            <p>We deploy your solution seamlessly and ensure its continued performance with ongoing care.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Process;

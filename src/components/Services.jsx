import React from 'react';
import './Services.css';
import { MessageSquare, FileText, Users, BarChart3, BrainCircuit, Mic, Sparkles } from 'lucide-react';

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Services</span>
                    <h2 className="section-title">Our Services</h2>
                </div>

                <div className="services-grid">
                    {/* Card 1: Chatbot Development */}
                    <div className="service-card span-2-md">
                        <div className="service-info">
                            <h3>Chatbot Development</h3>
                            <p>We develop advanced AI-driven chatbots that handle repetitive tasks, manage data, and streamline your internal workflows to drive real results for your business.</p>
                        </div>
                        <div className="card-visual chatbot-visual">
                            <div className="chat-interface">
                                <div className="chat-row user">
                                    <div className="avatar user-avatar"></div>
                                    <div className="message-content">
                                        <span className="sender-name">You:</span>
                                        <div className="message-bubble">
                                            Please create a graph of the profits in this file <FileText size={14} className="inline-icon" />
                                        </div>
                                    </div>
                                </div>
                                <div className="chat-row ai">
                                    <div className="avatar ai-avatar"><Sparkles size={14} /></div>
                                    <div className="message-content">
                                        <span className="sender-name ai-name">AI Assistant</span>
                                        <div className="chart-container">
                                            <div className="bar-chart">
                                                <div className="bar" style={{height: '40%'}}></div>
                                                <div className="bar highlight" style={{height: '70%'}}></div>
                                                <div className="bar" style={{height: '50%'}}></div>
                                                <div className="bar" style={{height: '30%'}}></div>
                                                <div className="bar" style={{height: '60%'}}></div>
                                                <div className="bar" style={{height: '45%'}}></div>
                                                <div className="bar" style={{height: '80%'}}></div>
                                                <div className="bar" style={{height: '55%'}}></div>
                                                <div className="bar" style={{height: '35%'}}></div>
                                                <div className="bar" style={{height: '65%'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Voice Assistants */}
                    <div className="service-card span-2-md">
                        <div className="service-info">
                            <h3>Voice Assistants</h3>
                            <p>We develop voice assistants that use advanced natural language processing (NLP) to handle inbound and outbound calls for support, scheduling, reminders, and promotions.</p>
                        </div>
                        <div className="card-visual voice-visual">
                            <div className="voice-interface">
                                <div className="waveform-container">
                                    {[...Array(20)].map((_, i) => (
                                        <div key={i} className="wave-bar" style={{
                                            height: `${Math.random() * 40 + 10}%`,
                                            animationDelay: `${i * 0.05}s`
                                        }}></div>
                                    ))}
                                </div>
                                <div className="mic-circle">
                                    <Mic size={24} />
                                </div>
                                <div className="waveform-container right">
                                    {[...Array(20)].map((_, i) => (
                                        <div key={i} className="wave-bar" style={{
                                            height: `${Math.random() * 40 + 10}%`,
                                            animationDelay: `${i * 0.05}s`
                                        }}></div>
                                    ))}
                                </div>
                                <div className="voice-label">Voice Assistant</div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Lead Generation (Full Width) */}
                    <div className="service-card span-2">
                        <div className="card-visual lead-gen-visual">
                            <div className="lead-list">
                                <div className="lead-item">
                                    <div className="lead-avatar"></div>
                                    <div className="lead-details">
                                        <div className="lead-name">Jack Daniel</div>
                                        <div className="lead-role">Founder</div>
                                    </div>
                                    <div className="lead-arrow"></div>
                                </div>
                                <div className="lead-item active">
                                    <div className="lead-avatar"></div>
                                    <div className="lead-details">
                                        <div className="lead-name">Justin Rocks</div>
                                        <div className="lead-role">Marketing head</div>
                                    </div>
                                    <div className="lead-arrow"></div>
                                </div>
                                <div className="lead-expanded-details">
                                    <div className="detail-row">
                                        <div className="detail-col">
                                            <span className="label">E-mail</span>
                                            <span className="value">justin@main.com</span>
                                        </div>
                                        <div className="detail-col">
                                            <span className="label">Phone</span>
                                            <span className="value">+1(812)90XXX</span>
                                        </div>
                                    </div>
                                    <div className="detail-row">
                                        <div className="detail-col">
                                            <span className="label">Company</span>
                                            <span className="value">XYZ LLC</span>
                                        </div>
                                        <div className="detail-col">
                                            <span className="label">Verified</span>
                                            <span className="value">Yes</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="generate-leads-btn">Generate Leads</div>
                            </div>
                        </div>
                        <div className="service-info">
                            <h3>Lead Generation</h3>
                            <p>Strengthen your sales pipeline by identifying, targeting, and attracting high-quality prospects with precision.</p>
                        </div>
                    </div>

                    {/* Card 4: Data Insights */}
                    <div className="service-card">
                        <div className="card-visual">
                            <div className="data-insights-visual">
                                <div className="chart-header">
                                    <span>Work Efficiency</span>
                                    <span className="chart-value">+23%</span>
                                </div>
                                <div className="chart-area">
                                    {/* Simple SVG Line Chart */}
                                    <svg viewBox="0 0 100 40" className="efficiency-chart">
                                        <path d="M0 35 Q 20 35, 30 25 T 60 20 T 100 5" fill="none" stroke="#7c3aed" strokeWidth="2" />
                                        <line x1="10" y1="0" x2="10" y2="40" stroke="#333" strokeWidth="1" strokeDasharray="2 2" />
                                    </svg>
                                    <div className="chart-labels">
                                        <span>May 1</span>
                                        <span>May 2</span>
                                        <span>May 3</span>
                                        <span>May 4</span>
                                        <span>May 5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="service-info">
                            <h3>Data Insights</h3>
                            <p>Extract actionable insights from complex data sets to drive informed decisions and accelerate business growth.</p>
                        </div>
                    </div>

                    {/* Card 5: AI Consulting */}
                    <div className="service-card">
                        <div className="card-visual">
                            <div className="ai-consulting-grid">
                                <div className="consult-card">
                                    <div className="consult-dot purple"></div>
                                    <span>AI Developer</span>
                                </div>
                                <div className="consult-card">
                                    <div className="consult-icon-circle"></div>
                                    <span>Sales expert</span>
                                </div>
                                <div className="consult-card">
                                    <div className="consult-icon-circle"></div>
                                    <span>Marketing expert</span>
                                </div>
                                <div className="consult-card">
                                    <div className="consult-dot purple"></div>
                                    <span>HR</span>
                                </div>
                            </div>
                        </div>
                        <div className="service-info">
                            <h3>AI Consulting</h3>
                            <p>Work with our experts to develop personalized AI strategies that streamline operations and deliver impactful results.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;

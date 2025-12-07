import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Footer.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">Ready to transform your business?</h2>
                <p className="contact-subtitle">Join the revolution of AI automation today.</p>
                <button className="primary-btn" style={{ margin: '0 auto' }}>
                    Get in touch <ArrowUpRight size={18} />
                </button>
            </div>
        </section>
    );
};

export default Contact;

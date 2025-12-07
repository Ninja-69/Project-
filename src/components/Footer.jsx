import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="logo" style={{ fontSize: '1rem' }}>
                    Radison
                </div>
                <div className="footer-links">
                    <a href="#process">Process</a>
                    <a href="#services">Services</a>
                    <a href="#benefits">Benefits</a>
                    <a href="#plans">Plans</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="footer-copyright">
                    © 2024 Radison. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

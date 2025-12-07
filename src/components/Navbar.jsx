import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="navbar-content">
                <div className="logo">
                    <svg className="logo-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM6 12C6 10.9 6.9 10 8 10C9.1 10 10 10.9 10 12C10 13.1 9.1 14 8 14C6.9 14 6 13.1 6 12ZM12 18C10.9 18 10 18.9 10 20C10 21.1 10.9 22 12 22C13.1 22 14 21.1 14 20C14 18.9 13.1 18 12 18ZM18 12C18 13.1 17.1 14 16 14C14.9 14 14 13.1 14 12C14 10.9 14.9 10 16 10C17.1 10 18 10.9 18 12Z" />
                        <circle cx="12" cy="12" r="2" />
                    </svg>
                    <span>Radison</span>
                </div>
                <div className="nav-links">
                    <a href="#process">Process</a>
                    <a href="#services">Services</a>
                    <a href="#benefits">Benefits</a>
                    <a href="#plans">Plans</a>
                    <a href="#contact">Contact</a>
                </div>
                <button className="nav-cta">
                    Get in touch <ArrowUpRight size={16} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

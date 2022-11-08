import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black text-white">
            <div>
                <span className="footer-title">Services</span>
                <a href='/'>Branding</a>
                <a href='/'>Design</a>
                <a href='/'>Marketing</a>
                <a href='/'>Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a href='/'>About us</a>
                <a href='/'>Contact</a>
                <a href='/'>Jobs</a>
                <a href='/'>Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a href='/'>Terms of use</a>
                <a href='/'>Privacy policy</a>
                <a href='/'>Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;
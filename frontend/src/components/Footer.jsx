import React from 'react';
import { scrollToSection } from '../utils/scroll';

const Footer = () => {
  return (
    <footer className="bg-[var(--bg-color)] border-t border-[var(--border-color)] text-gray-300 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="font-heading font-extrabold text-2xl tracking-tighter flex items-center mb-4">
              <span className="text-white">CS</span>
              <span className="text-[var(--color-brand-accent)]">_</span>
              <span className="text-gray-400 text-xl font-medium ml-1">CodeStart</span>
            </div>
            <p className="text-sm text-gray-500 max-w-sm font-body">
              Empowering the next generation of creators through accessible, high-quality coding education.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold font-heading mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" onClick={(e) => scrollToSection(e, 'home', 1500)} className="hover:text-[var(--color-brand-accent)] transition-colors">Home</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about', 1500)} className="hover:text-[var(--color-brand-accent)] transition-colors">About Us</a></li>
              <li><a href="#courses" onClick={(e) => scrollToSection(e, 'courses', 1500)} className="hover:text-[var(--color-brand-accent)] transition-colors">Courses</a></li>
              <li><a href="#team" onClick={(e) => scrollToSection(e, 'team', 1500)} className="hover:text-[var(--color-brand-accent)] transition-colors">Team</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold font-heading mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:cscodestart@gmail.com" className="hover:text-[var(--color-brand-accent)] transition-colors">cscodestart@gmail.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[var(--border-color)] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} CS Code Start. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

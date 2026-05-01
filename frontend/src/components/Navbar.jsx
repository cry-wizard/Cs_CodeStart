import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToSection } from '../utils/scroll';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, 'home', 1500)}
          className="flex items-center gap-2 group"
        >
          <div className="font-heading font-extrabold text-2xl tracking-tighter flex items-center">
            <span className="text-[var(--text-color)] group-hover:text-[var(--color-brand-accent)] transition-colors">CS</span>
            <span className="text-[var(--color-brand-accent)]">_</span>
            <span className="text-[var(--text-muted)] text-xl font-medium ml-1">CodeStart</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={(e) => scrollToSection(e, link.href.substring(1), 1500)}
                  className="font-body font-medium text-[var(--text-muted)] hover:text-[var(--color-brand-accent)] transition-colors text-sm uppercase tracking-wider"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l border-[var(--border-color)] pl-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-[var(--card-bg)] transition-colors text-[var(--text-color)]"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <a 
              href="#courses"
              onClick={(e) => scrollToSection(e, 'courses', 1500)}
              className="px-5 py-2 rounded-full bg-[var(--color-brand-accent)] text-white font-medium hover:opacity-90 transition-colors shadow-lg shadow-[var(--color-brand-accent)]/30 glow-accent"
            >
              Enroll Now
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 text-[var(--text-color)]"
          >
            {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[var(--text-color)] p-1"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-[var(--border-color)] overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      scrollToSection(e, link.href.substring(1), 1500);
                    }}
                    className="block font-body text-lg font-medium text-[var(--text-color)]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#courses"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    scrollToSection(e, 'courses', 1500);
                  }}
                  className="inline-block mt-2 px-6 py-3 w-full text-center rounded-xl bg-[var(--color-brand-accent)] text-white font-medium glow-accent"
                >
                  Enroll Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

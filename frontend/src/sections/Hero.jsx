import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { scrollToSection } from '../utils/scroll';
import { FiCode, FiTerminal, FiLayers } from 'react-icons/fi';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden perspective-1000">
      {/* Background Decorative Elements with Parallax */}
      <motion.div style={{ y: y1, opacity }} className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob"></motion.div>
      <motion.div style={{ y: y2, opacity }} className="absolute top-1/3 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></motion.div>
      <motion.div style={{ y: y1, opacity }} className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-4000"></motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] backdrop-blur-md mb-6">
              <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-brand-accent)]">
                For Classes 7 to 10
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading leading-tight mb-6 text-[var(--text-color)]">
              Start Coding Early. <br />
              <span className="text-gradient">Build Your Future.</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-muted)] font-body mb-8 max-w-lg">
              Empower your child with the skills of tomorrow. We teach real-world programming, website development, and logical thinking in a fun, beginner-friendly way.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#courses"
                onClick={(e) => scrollToSection(e, 'courses', 1500)}
                className="px-8 py-4 rounded-xl bg-[var(--color-brand-accent)] text-white font-semibold text-lg hover:bg-blue-700 transition-colors shadow-xl shadow-blue-500/30"
              >
                Get Started
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#about"
                onClick={(e) => scrollToSection(e, 'about', 1500)}
                className="px-8 py-4 rounded-xl glass text-[var(--text-color)] font-semibold text-lg hover:bg-[var(--card-bg)] transition-colors flex items-center gap-2"
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>

          {/* 2D Visual Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden md:flex items-center justify-center h-[500px] w-full"
            style={{ y: y2 }}
          >
            {/* Central Animated Element */}
            <motion.div 
              animate={{ 
                y: [-20, 20, -20],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10 w-64 h-64 glass rounded-[2rem] flex items-center justify-center border-2 border-[var(--color-brand-accent)]/30 shadow-[0_0_50px_rgba(37,99,235,0.3)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-[2rem] filter blur-md"></div>
              <div className="text-8xl text-[var(--color-brand-accent)] font-heading font-black drop-shadow-2xl">
                &lt;/&gt;
              </div>
            </motion.div>
            
            {/* Orbiting Elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-[400px] h-[400px] rounded-full border border-[var(--border-color)] border-dashed opacity-30 relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-blue-400 shadow-lg border border-gray-700">
                  <FiCode size={24} />
                </div>
                <div className="absolute bottom-10 -right-4 w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-purple-400 shadow-lg border border-gray-700">
                  <FiTerminal size={24} />
                </div>
                <div className="absolute bottom-10 -left-4 w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-pink-400 shadow-lg border border-gray-700">
                  <FiLayers size={24} />
                </div>
              </div>
            </motion.div>
            
            {/* Overlay Glass Elements */}
            <div className="absolute top-1/4 -left-10 glass p-4 rounded-2xl animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="text-[var(--color-brand-accent)] font-mono font-bold">&lt;Code /&gt;</div>
            </div>
            <div className="absolute bottom-1/4 -right-10 glass p-4 rounded-2xl animate-bounce" style={{ animationDuration: '4s' }}>
              <div className="text-purple-500 font-mono font-bold">{"{ Logic }"}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

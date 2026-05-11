import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Background Image/Gradient */}
      <div className="absolute inset-0 z-0 flex items-center justify-end">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10 lg:w-2/3" />
        <img 
          src="/hero_device.jpg" 
          alt="Advanced Beauty Device" 
          className="absolute right-0 h-full w-full lg:w-3/4 object-cover object-center opacity-80"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-semibold tracking-wider mb-6">
              INNOVATIVE BEAUTY TECH
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight mb-6">
              Advanced Beauty <br />
              <span className="text-secondary">Tech Solutions</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
              Empowering global beauty brands through cutting-edge R&D, world-class manufacturing, and innovative device technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#services" className="px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-secondary transition-colors shadow-xl shadow-primary/20 flex items-center gap-2">
              Our Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
            <a href="#about" className="px-8 py-4 bg-white/80 backdrop-blur-sm text-primary border border-gray-200 rounded-full font-medium hover:border-accent hover:text-accent transition-colors">
              Discover Cypress LAB
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

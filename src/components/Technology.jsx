import React from 'react';
import { motion } from 'framer-motion';

const Technology = () => {
  const technologies = [
    {
      name: 'Electroporation',
      description: 'Advanced needle-free mesotherapy that temporarily opens micro-channels in the skin for exceptional active ingredient absorption.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      name: 'EMS (Electrical Muscle Stimulation)',
      description: 'Targeted micro-currents stimulate facial muscles to improve tone, lift sagging skin, and enhance natural contours.',
      icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
    },
    {
      name: 'LED Light Therapy',
      description: 'Multi-wavelength photon therapy to target diverse skin concerns including acne, hyperpigmentation, and collagen production.',
      icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
    },
    {
      name: 'RF (Radio Frequency)',
      description: 'Deep dermal heating technology that stimulates collagen and elastin synthesis for firmer, tighter skin.',
      icon: 'M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    }
  ];

  return (
    <section id="technology" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <span className="text-secondary font-semibold tracking-wider text-sm mb-2 block uppercase">Core Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold">Proprietary Technologies</h2>
            <div className="w-16 h-1 bg-accent mt-6 rounded-full"></div>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="md:w-1/2 text-gray-300"
          >
            <p className="text-lg">
              We leverage cutting-edge scientific principles to develop non-invasive beauty solutions that deliver professional-grade results at home.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {technologies.map((tech, idx) => (
            <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="flex gap-6 p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
               <div className="flex-shrink-0 mt-1">
                 <div className="w-14 h-14 bg-gradient-to-br from-secondary/40 to-accent/20 rounded-xl flex items-center justify-center text-accent ring-1 ring-accent/30 shadow-inner">
                   <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={tech.icon} />
                   </svg>
                 </div>
               </div>
               <div>
                  <h3 className="text-xl font-bold mb-3">{tech.name}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">{tech.description}</p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;

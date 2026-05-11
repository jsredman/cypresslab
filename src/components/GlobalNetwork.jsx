import React from 'react';
import { motion } from 'framer-motion';

const GlobalNetwork = () => {
  return (
    <section id="global" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-secondary font-semibold tracking-wider text-sm mb-2 block uppercase">Global Reach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Expanding Horizons Worldwide</h2>
            <div className="w-16 h-1 bg-accent mb-8 rounded-full"></div>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Cypress LAB is rapidly expanding its footprint across the globe. We specialize in export-driven growth, targeting key emerging markets with high demand for premium K-beauty technology.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
               <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                 <h3 className="text-4xl font-bold text-secondary mb-2">15+</h3>
                 <p className="text-gray-600 font-medium tracking-wide">Countries Exported</p>
               </div>
               <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                 <h3 className="text-3xl font-bold text-secondary mb-2">SE Asia & CIS</h3>
                 <p className="text-gray-600 font-medium tracking-wide">Key Target Regions</p>
               </div>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="lg:w-1/2 w-full relative"
          >
             <div className="relative bg-white border border-gray-100 shadow-2xl rounded-2xl p-8 sm:p-12 overflow-hidden w-full max-w-md mx-auto">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
               
               <h3 className="text-2xl font-bold text-primary mb-8 relative z-10">Strategic Markets</h3>
               
               <div className="space-y-6 relative z-10">
                 <div>
                   <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Southeast Asia</h4>
                   <ul className="space-y-3">
                     {['Vietnam', 'Thailand', 'Indonesia', 'Malaysia'].map((country, idx) => (
                       <li key={idx} className="flex items-center gap-3">
                         <span className="w-2 h-2 rounded-full bg-accent"></span>
                         <span className="text-gray-700 font-medium">{country}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
                 
                 <div>
                   <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 mt-6">CIS & Eastern Europe</h4>
                   <ul className="space-y-3">
                     {['Russia', 'Kazakhstan', 'Uzbekistan'].map((country, idx) => (
                       <li key={idx} className="flex items-center gap-3">
                         <span className="w-2 h-2 rounded-full bg-secondary"></span>
                         <span className="text-gray-700 font-medium">{country}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;

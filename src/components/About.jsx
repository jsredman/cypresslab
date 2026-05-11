import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-semibold tracking-wider text-sm mb-2 block uppercase">About Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Pioneering Beauty Innovation</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            Cypress LAB specializes in the research, development, and advanced manufacturing of premium beauty devices. 
            We combine medical-grade technology with elegant design to deliver transformative skincare solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
             { title: 'World-Class R&D', desc: 'Our dedicated research team continuously develops next-generation beauty technologies with clinically proven efficacy.' },
             { title: 'Premium Manufacturing', desc: 'State-of-the-art facilities ensuring the highest standards of quality control and precision engineering.' },
             { title: 'Innovative Design', desc: 'Merging ergonomic functionality with sleek, modern aesthetics for a superior user experience.' }
          ].map((feature, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="p-8 rounded-2xl bg-background border border-gray-100 hover:shadow-xl hover:border-accent/30 transition-all group duration-300"
             >
               <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 text-secondary group-hover:text-accent group-hover:-translate-y-1 transition-all">
                 <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={idx === 0 ? "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" : idx === 1 ? "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" : "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"} />
                 </svg>
               </div>
               <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
               <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

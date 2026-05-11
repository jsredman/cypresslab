import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const steps = [
    { num: '01', title: '기획 (Planning)', desc: 'Market analysis and bespoke product conceptualization tailored to brand identity.' },
    { num: '02', title: '설계 (Design)', desc: 'Engineering and industrial design focusing on ergonomics and technological integration.' },
    { num: '03', title: '인증 (Certification)', desc: 'Rigorous clinical testing and obtaining necessary global medical and safety certifications.' },
    { num: '04', title: '생산 (Production)', desc: 'Precision manufacturing in cutting-edge facilities with strict quality control.' }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <span className="text-secondary font-semibold tracking-wider text-sm mb-2 block uppercase">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">OEM / ODM Services</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From initial concept to final production, we provide an end-to-end manufacturing solution for global beauty brands.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
               <motion.div
                 key={idx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: idx * 0.15 }}
                 className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative group hover:shadow-xl transition-all hover:-translate-y-2"
               >
                 <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-xl font-bold text-secondary mb-6 border-4 border-white shadow-sm mx-auto md:mx-0 group-hover:bg-secondary group-hover:text-white transition-colors">
                   {step.num}
                 </div>
                 <h3 className="text-xl font-bold text-primary mb-3 text-center md:text-left">{step.title}</h3>
                 <p className="text-gray-600 text-center md:text-left text-sm leading-relaxed">{step.desc}</p>
               </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

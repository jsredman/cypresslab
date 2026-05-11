import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <span className="text-secondary font-semibold tracking-wider text-sm mb-2 block uppercase">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Partner With Cypress LAB</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Interested in our OEM/ODM services or distributing our products? Let's discuss how we can expand your horizons.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-0 bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          <div className="lg:w-2/5 bg-primary p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <ul className="space-y-8">
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-accent mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-200">Headquarters & Factory</h4>
                    <p className="text-gray-400 leading-relaxed">Gyeonggi-do, South Korea<br/>(Detailed address provided upon request)</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-accent mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                   <div>
                    <h4 className="font-semibold mb-1 text-gray-200">Email</h4>
                    <p className="text-gray-400">partnership@cypresslab.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:w-3/5 p-8 md:p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-gray-50 focus:bg-white" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input type="text" id="company" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-gray-50 focus:bg-white" placeholder="Your Brand Inc." />
                </div>
              </div>
              
               <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-gray-50 focus:bg-white" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                  <select id="inquiryType" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-gray-50 focus:bg-white">
                    <option>OEM/ODM Manufacturing</option>
                    <option>Global Distribution</option>
                    <option>R&D Collaboration</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all resize-none bg-gray-50 focus:bg-white" placeholder="Tell us about your project..."></textarea>
              </div>

              <button type="submit" className="w-full px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-secondary transition-colors shadow-lg shadow-primary/20 flex justify-center items-center gap-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

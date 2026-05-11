import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-gray-300 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
             <div className="flex items-center gap-3 mb-4">
              <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-secondary" stroke="currentColor" strokeWidth="1.5">
               <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V5M12 10l-4-4M12 14l-5-4M12 18l-6-4M12 5l4 4M12 9l5 4M12 13l6 4" />
              </svg>
              <div>
                <span className="text-xl font-bold text-white tracking-tight leading-none block">Cypresslab Inc.</span>
              </div>
            </div>
            <p className="text-xs tracking-[0.2em] text-gray-500 font-medium">
              EXPANDING HORIZONS
            </p>
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center md:text-left text-sm text-gray-500 flex flex-col md:flex-row justify-between">
          <p>&copy; {new Date().getFullYear()} Cypress LAB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

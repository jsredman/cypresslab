import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technology from './components/Technology';
import Services from './components/Services';
import GlobalNetwork from './components/GlobalNetwork';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-primary font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technology />
        <Services />
        <GlobalNetwork />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

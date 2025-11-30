
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Mission from './components/Mission';
import Pricing from './components/Pricing';
import Integrations from './components/Integrations';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CoreServices from './components/CoreServices';
import Process from './components/Process';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CoreServices />
        <Features />
        <Process />
        <Mission />
        <Pricing />
        <Integrations />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

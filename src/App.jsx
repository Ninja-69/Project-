import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Plans from './components/Plans';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Process />
      <Services />
      <Benefits />
      <Plans />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


import React, { useState, useEffect } from 'react';
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
import Work from './components/Work';
import Booking from './components/Booking';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsOfService from './components/legal/TermsOfService';
import CookiePolicy from './components/legal/CookiePolicy';

type ViewState = 'home' | 'work' | 'booking' | 'privacy' | 'terms' | 'cookies';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-primary selection:text-white">
      <Navbar onLogoClick={() => setCurrentView('home')} />
      <main>
        {currentView === 'home' ? (
          <>
            <Hero
              onViewWork={() => setCurrentView('work')}
              onBookCall={() => setCurrentView('booking')}
            />
            <About />
            <CoreServices />
            <Features />
            <Process />
            <Mission />
            <Pricing onBookCall={() => setCurrentView('booking')} />
            <Integrations />
            <Testimonials />
            <FAQ />
            <Contact />
          </>
        ) : currentView === 'work' ? (
          <Work onBack={() => setCurrentView('home')} />
        ) : currentView === 'booking' ? (
          <Booking onBack={() => setCurrentView('home')} />
        ) : currentView === 'privacy' ? (
          <PrivacyPolicy onBack={() => setCurrentView('home')} />
        ) : currentView === 'terms' ? (
          <TermsOfService onBack={() => setCurrentView('home')} />
        ) : currentView === 'cookies' ? (
          <CookiePolicy onBack={() => setCurrentView('home')} />
        ) : null}
      </main>
      <Footer onNavigateLegal={(view) => setCurrentView(view)} />
    </div>
  );
}

export default App;

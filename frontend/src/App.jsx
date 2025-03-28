import { useEffect } from 'react';
import { useApp } from './context/AppContext';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const { emitSystemEvent } = useApp();

  useEffect(() => {
    emitSystemEvent('app_mounted', { timestamp: new Date() });
    return () => {
      emitSystemEvent('app_unmounted', { timestamp: new Date() });
    };
  }, [emitSystemEvent]);

  return (
    <div className="app-container">
      <Navbar />
      <main className="app-main">
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App

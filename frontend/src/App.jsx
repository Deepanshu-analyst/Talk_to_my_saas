import { useEffect, useState } from 'react';
import { useApp } from './context/AppContext';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import EngagementPopup from './components/EngagementPopup';
import ProgressTracker from './components/ProgressTracker';
import LimitedTimeOffer from './components/LimitedTimeOffer';

function App() {
  const { emitSystemEvent, emitUserAction } = useApp();
  const [showEngagementPopup, setShowEngagementPopup] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [sessionTime, setSessionTime] = useState(0);
  const [showLimitedOffer, setShowLimitedOffer] = useState(false);

  // Track user session time
  useEffect(() => {
    const startTime = new Date();
    const timer = setInterval(() => {
      setSessionTime(Math.floor((new Date() - startTime) / 1000));
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Show limited time offer after 30 seconds
  useEffect(() => {
    if (sessionTime === 30 && !localStorage.getItem('offerShown')) {
      setShowLimitedOffer(true);
      localStorage.setItem('offerShown', 'true');
    }
  }, [sessionTime]);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Show engagement popup when user reaches 70% of the page
      if (progress > 70 && !showEngagementPopup && !localStorage.getItem('popupShown')) {
        setShowEngagementPopup(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    emitSystemEvent('app_mounted', { timestamp: new Date() });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      emitSystemEvent('app_unmounted', { timestamp: new Date() });
    };
  }, [emitSystemEvent, showEngagementPopup]);

  // Record user interactions
  const trackUserInteraction = (element) => {
    emitUserAction('element_clicked', { element, timestamp: new Date() });
  };

  return (
    <div className="app-container relative">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
      
      {/* Progress tracker */}
      <ProgressTracker progress={scrollProgress} />
      
      {/* Engagement popup */}
      {showEngagementPopup && (
        <EngagementPopup onClose={() => {
          setShowEngagementPopup(false);
          localStorage.setItem('popupShown', 'true');
        }} />
      )}
      
      {/* Limited time offer */}
      {showLimitedOffer && (
        <LimitedTimeOffer onClose={() => setShowLimitedOffer(false)} />
      )}
    </div>
  );
}

export default App;

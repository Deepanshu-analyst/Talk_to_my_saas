import { useEffect, useState, useCallback } from 'react';
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
import SpecialOffer from './components/SpecialOffer';

function App() {
  const { emitSystemEvent, emitUserAction } = useApp();
  const [showEngagementPopup, setShowEngagementPopup] = useState(false);
  const [sessionTime, setSessionTime] = useState(0);
  const [showSpecialOffer, setShowSpecialOffer] = useState(false);

  // Track user session time
  useEffect(() => {
    const startTime = new Date();
    const timer = setInterval(() => {
      setSessionTime(Math.floor((new Date() - startTime) / 1000));
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Show special offer after 20 seconds
  useEffect(() => {
    if (sessionTime === 20 && !localStorage.getItem('specialOfferShown')) {
      setShowSpecialOffer(true);
    }
  }, [sessionTime]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      
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

  const trackUserInteraction = useCallback((element) => {
    emitUserAction('element_clicked', { element, timestamp: new Date() });
  }, [emitUserAction]);

  const handleSpecialOfferClose = () => {
    setShowSpecialOffer(false);
    localStorage.setItem('specialOfferShown', 'true');
  };

  return (
    <div className="app-container relative">
      <Header onInteraction={trackUserInteraction} />
      <Hero onInteraction={trackUserInteraction} />
      <Features onInteraction={trackUserInteraction} />
      <Pricing onInteraction={trackUserInteraction} />
      <Testimonials onInteraction={trackUserInteraction} />
      <CTA onInteraction={trackUserInteraction} />
      <Footer onInteraction={trackUserInteraction} />
      
      {/* Engagement popup */}
      {showEngagementPopup && (
        <EngagementPopup onClose={() => {
          setShowEngagementPopup(false);
          localStorage.setItem('popupShown', 'true');
        }} />
      )}
      
      {/* Special offer */}
      {showSpecialOffer && (
        <SpecialOffer onClose={handleSpecialOfferClose} />
      )}
    </div>
  );
}

export default App;

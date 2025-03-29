import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';

const SpecialOffer = ({ onClose }) => {
  const { emitUserAction } = useApp();
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  
  useEffect(() => {
    // Animation entrance - more subtle
    setTimeout(() => setIsVisible(true), 300);
    
    // Countdown timer
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const handleClaim = () => {
    emitUserAction('special_offer_claimed', { timeLeft });
    onClose();
  };
  
  if (isMinimized) {
    return (
      <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}>
        <button 
          onClick={() => setIsMinimized(false)}
          className="bg-dark-800/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-dark-700 flex items-center space-x-2 hover:shadow-xl transition-all"
        >
          <span className="text-secondary-400 font-bold">{formatTime(timeLeft)}</span>
          <span className="text-white">Special Offer</span>
          <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    );
  }
  
  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
    }`}>
      <div className="relative bg-dark-800/90 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-dark-700 max-w-sm">
        <div className="absolute top-2 right-2 flex space-x-2">
          <button 
            onClick={() => setIsMinimized(true)}
            className="text-white/70 hover:text-secondary-400 transition-colors"
            title="Minimize"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button 
            onClick={onClose}
            className="text-white/70 hover:text-secondary-400 transition-colors"
            title="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="absolute -top-4 -left-4 bg-secondary-500 text-dark-900 font-bold px-3 py-1 rounded-lg transform rotate-6 shadow-lg">
          Limited Time!
        </div>
        
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white mb-2">Special Launch Offer!</h3>
          <p className="text-gray-300">Get 30% off any annual plan when you sign up today!</p>
        </div>
        
        <div className="bg-dark-900/50 rounded-lg p-3 mb-4 text-center">
          <div className="text-sm text-gray-300 mb-1">Offer expires in:</div>
          <div className="text-2xl font-mono font-bold text-secondary-400">{formatTime(timeLeft)}</div>
          
          {/* Progress bar */}
          <div className="mt-2 h-1 bg-dark-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
              style={{ width: `${(timeLeft / 600) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <button
          onClick={handleClaim}
          className="w-full py-3 px-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all shadow-lg hover:shadow-glow transform hover:-translate-y-1"
        >
          Claim 30% Discount Now
        </button>
        
        <div className="text-xs text-center mt-3 text-gray-400">
          *Applies to first year of subscription only
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
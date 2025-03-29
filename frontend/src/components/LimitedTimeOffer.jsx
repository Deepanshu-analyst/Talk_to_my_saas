import React, { useState, useEffect } from 'react';

const LimitedTimeOffer = ({ onClose }) => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
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
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-sm w-full animate-fade-in">
      <div className="bg-dark-800/90 backdrop-blur-sm rounded-xl shadow-2xl p-5 border border-dark-700 relative overflow-hidden text-white">
        <h3 className="text-lg font-bold text-white">Limited Time Offer</h3>
        <span className="ml-2 bg-primary-600 text-xs px-2 py-0.5 rounded text-white">PRO</span>
      </div>
      
      <p className="text-gray-300 text-sm mb-3">
        Get 30% off your first month when you sign up today!
      </p>
      
      {/* Countdown timer styled like dashboard element */}
      <div className="bg-dark-900/80 rounded-lg p-2 mb-3 border border-dark-700">
        <div className="flex justify-between items-center">
          <div className="text-xs text-gray-300">
            Offer expires in: 
          </div>
          <div className="bg-dark-700 text-secondary-400 px-2 py-1 rounded text-xs font-mono font-bold flex items-center">
            <span className="w-2 h-2 bg-secondary-500 rounded-full mr-1 animate-pulse"></span>
            {formatTime(timeLeft)}
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-2 h-1 bg-dark-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-secondary-500 to-primary-500"
            style={{ width: `${(timeLeft / (15 * 60)) * 100}%` }}
          ></div>
        </div>
      </div>
      
      <div className="flex items-center mb-3">
        <span className="bg-dark-700 text-xs px-2 py-0.5 rounded text-primary-400 mr-2">POPULAR</span>
        <span className="bg-dark-700 text-xs px-2 py-0.5 rounded text-green-400">BEST VALUE</span>
      </div>
      
      <button className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-2 px-4 rounded-lg font-medium hover:from-primary-700 hover:to-secondary-700 transition-all shadow-lg hover:shadow-glow transform hover:-translate-y-1 text-sm">
        Claim Your Discount Now
      </button>
    </div>
  );
};

export default LimitedTimeOffer;
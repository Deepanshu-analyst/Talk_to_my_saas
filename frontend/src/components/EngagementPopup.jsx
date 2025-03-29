import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const EngagementPopup = ({ onClose }) => {
  const { emitUserAction } = useApp();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emitUserAction('email_submitted', { email });
    setSubmitted(true);
    
    // Artificial delay to show success message
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-dark-800/90 backdrop-blur-sm rounded-xl shadow-2xl p-6 max-w-md w-full animate-fade-in relative overflow-hidden text-white border border-dark-700">
        {/* Dashboard-style header */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-400 to-primary-600"></div>
        
        {/* Badge */}
        <div className="absolute -top-2 -left-2 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform -rotate-12">
          EXCLUSIVE
        </div>
        
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {!submitted ? (
          <>
            <div className="bg-dark-900 rounded-t-xl p-3 border-b border-dark-700 flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-xs text-gray-400">Exclusive Offer</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-xs bg-dark-700 px-2 py-1 rounded-md flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  Live
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">You're Almost There!</h3>
            <p className="text-gray-300 mb-4">
              <span className="font-semibold text-secondary-400">95% of visitors</span> who reached this point signed up for our exclusive tips and saved an average of $2,500 on their business operations.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white"
                    placeholder="you@example.com"
                  />
                  <div className="absolute right-3 top-2.5 text-xs bg-dark-900 px-2 py-0.5 rounded text-primary-400">
                    REQUIRED
                  </div>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-2 px-4 rounded-lg font-medium hover:from-primary-700 hover:to-secondary-700 transition-all shadow-lg hover:shadow-glow transform hover:-translate-y-1"
              >
                Get Exclusive Tips
              </button>
            </form>
            
            {/* Social proof and scarcity with dashboard style */}
            <div className="mt-4 bg-dark-900/80 rounded-lg p-3 border border-dark-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-300">
                  <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Joined by <span className="text-secondary-400 font-mono">2,347</span> business owners</span>
                </div>
                <div className="text-xs bg-dark-700 px-2 py-1 rounded-md text-yellow-400">
                  HOT
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-dark-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-gray-300">
              You've been added to our list. Check your inbox for a special welcome gift!
            </p>
            <div className="mt-4 text-xs bg-dark-700 px-3 py-1.5 rounded-full inline-flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span>
              Processing your request...
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EngagementPopup;
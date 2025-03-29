import React, { useState, useEffect } from 'react';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-primary-800 to-dark-800 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-20 w-80 h-80 bg-primary-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-secondary-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className={`lg:w-1/2 mb-10 lg:mb-0 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="inline-block bg-primary-800/50 backdrop-blur-sm px-3 py-1 rounded-full text-primary-200 text-sm font-medium mb-4 border border-primary-700/50">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-secondary-400 rounded-full mr-2 animate-pulse"></span>
                Ready to get started?
              </span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Transform Your Business Today</h2>
            <p className="text-xl text-gray-300">
              Join thousands of businesses that trust our platform for their daily operations.
              Get started today and experience the difference.
            </p>
            
            <div className="mt-8 space-y-4">
              {[
                'Free 14-day trial, no credit card required',
                'Dedicated onboarding support',
                'Cancel anytime, no questions asked'
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <svg className="w-5 h-5 text-secondary-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-primary-100">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`lg:w-1/2 lg:pl-16 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-dark-800/80 backdrop-blur-sm rounded-xl shadow-2xl border border-dark-700 overflow-hidden">
              {/* Dashboard-style header */}
              <div className="bg-dark-900 p-4 border-b border-dark-700 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-400">Get Started Form</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-xs bg-dark-700 px-2 py-1 rounded-md flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                    Secure
                  </div>
                  <div className="text-xs bg-primary-600 px-2 py-1 rounded-md">
                    PRIORITY
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Full Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                      required
                    />
                    <div className="absolute right-3 top-3 text-xs bg-dark-900 px-2 py-0.5 rounded text-primary-400">
                      REQUIRED
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                    <div className="absolute right-3 top-3 text-xs bg-dark-900 px-2 py-0.5 rounded text-primary-400">
                      REQUIRED
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="company" className="block text-gray-300 font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-dark-600 text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:outline-none transition-colors"
                    placeholder="Your Company"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all shadow-lg hover:shadow-glow transform hover:-translate-y-1"
                >
                  Get Started Now
                </button>
                
                <div className="mt-4 text-center text-primary-700 text-sm flex items-center justify-center">
                  <svg className="w-4 h-4 mr-1 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Your information is secure and encrypted
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
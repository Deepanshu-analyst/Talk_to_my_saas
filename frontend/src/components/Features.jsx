import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const features = [
    {
      title: 'Web Scraping',
      description: 'Powerful web scraping capabilities to gather valuable data from any source, helping you make informed business decisions.',
      icon: (
        <div className="w-16 h-16 flex items-center justify-center bg-primary-100 text-primary-600 rounded-2xl mb-4 shadow-md">
          <img src="/images/web-scraping-icon.svg" alt="Web Scraping" className="w-8 h-8" />
        </div>
      ),
      badge: 'POPULAR'
    },
    {
      title: 'WhatsApp Marketing',
      description: 'Reach your customers directly through WhatsApp with automated messaging, broadcasts, and campaign management.',
      icon: (
        <div className="w-16 h-16 flex items-center justify-center bg-secondary-100 text-secondary-600 rounded-2xl mb-4 shadow-md">
          <img src="/images/whatsapp-icon.svg" alt="WhatsApp Marketing" className="w-8 h-8" />
        </div>
      ),
      badge: 'NEW'
    },
    {
      title: 'Business Applications',
      description: 'Complete suite of business tools including inventory management, CRM, accounting, and more.',
      icon: (
        <div className="w-16 h-16 flex items-center justify-center bg-primary-100 text-primary-600 rounded-2xl mb-4 shadow-md">
          <img src="/images/business-icon.svg" alt="Business Applications" className="w-8 h-8" />
        </div>
      ),
      badge: 'PREMIUM'
    },
  ];

  return (
    <section ref={ref} id="features" className="py-24 bg-gradient-to-b from-primary-800 to-dark-800 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-20 w-80 h-80 bg-primary-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-secondary-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block bg-primary-100 px-3 py-1 rounded-full text-primary-600 text-sm font-medium mb-4">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
              Powerful Features
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">Everything You Need to Succeed</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Streamline your business operations with our comprehensive suite of tools</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-primary-100 hover:border-primary-300 transform hover:-translate-y-2 relative ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs px-2 py-0.5 rounded">
                {feature.badge}
              </div>
              
              {feature.icon}
              <h3 className="text-xl font-semibold text-primary-800 mb-3">{feature.title}</h3>
              <p className="text-primary-600">{feature.description}</p>
              
              <a href="#" className="inline-flex items-center mt-4 text-primary-600 font-medium hover:text-primary-700 group">
                Learn more
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        {/* Feature highlight section with dashboard styling */}
        <div className={`mt-24 bg-dark-800/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-dark-700 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <div className="inline-block bg-dark-700 px-3 py-1 rounded-full text-secondary-400 text-sm font-medium mb-4">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-secondary-500 rounded-full mr-2 animate-pulse"></span>
                  FEATURED
                </span>
              </div>
              <h3 className="text-3xl font-bold text-primary-900 mt-2 mb-4">Advanced Analytics Dashboard</h3>
              <p className="text-primary-700 mb-6">Get real-time insights into your business performance with our advanced analytics dashboard. Track key metrics, visualize data trends, and make data-driven decisions.</p>
              
              <ul className="space-y-3">
                {['Real-time data visualization', 'Customizable reports', 'Export to multiple formats', 'AI-powered insights'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-secondary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className="mt-8 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-lg font-medium hover:from-primary-700 hover:to-secondary-700 transition-all shadow-lg hover:shadow-glow transform hover:-translate-y-1 inline-flex items-center group">
                <span>Try the demo</span>
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            <div className="bg-dark-900 flex items-center justify-center p-8">
              <div className="relative">
                {/* Badge */}
                <div className="absolute -top-2 -right-2 bg-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12 z-10">
                  LIVE DEMO
                </div>
                <img 
                  src="/images/analytics-dashboard.png" 
                  alt="Analytics Dashboard" 
                  className="rounded-lg shadow-lg max-w-full h-auto transform transition-all duration-500 hover:scale-105 border border-dark-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
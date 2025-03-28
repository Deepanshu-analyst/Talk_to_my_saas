import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Web Scraping',
      description: 'Powerful web scraping capabilities to gather valuable data from any source, helping you make informed business decisions.',
      icon: (
        <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-2xl mb-4">
          <img src="/images/web-scraping-icon.svg" alt="Web Scraping" className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: 'WhatsApp Marketing',
      description: 'Reach your customers directly through WhatsApp with automated messaging, broadcasts, and campaign management.',
      icon: (
        <div className="w-16 h-16 flex items-center justify-center bg-green-100 text-green-600 rounded-2xl mb-4">
          <img src="/images/whatsapp-icon.svg" alt="WhatsApp Marketing" className="w-8 h-8" />
        </div>
      ),
    },
    {
      title: 'Business Applications',
      description: 'Complete suite of business tools including inventory management, CRM, accounting, and more.',
      icon: (
        <div className="w-16 h-16 flex items-center justify-center bg-purple-100 text-purple-600 rounded-2xl mb-4">
          <img src="/images/business-icon.svg" alt="Business Applications" className="w-8 h-8" />
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">Powerful Features for Your Business</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need to streamline your business operations in one place</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              
              <a href="#" className="inline-flex items-center mt-4 text-blue-600 font-medium hover:text-blue-700">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
        
        {/* Add a feature highlight section */}
        <div className="mt-24 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Featured</span>
              <h3 className="text-3xl font-bold text-gray-800 mt-2 mb-4">Advanced Analytics Dashboard</h3>
              <p className="text-gray-600 mb-6">Get real-time insights into your business performance with our advanced analytics dashboard. Track key metrics, visualize data trends, and make data-driven decisions.</p>
              
              <ul className="space-y-3">
                {['Real-time data visualization', 'Customizable reports', 'Export to multiple formats', 'AI-powered insights'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center">
                <span>Try the demo</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            <div className="bg-gray-100 flex items-center justify-center p-8">
              <img 
                src="/images/analytics-dashboard.png" 
                alt="Analytics Dashboard" 
                className="rounded-lg shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
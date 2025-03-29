import React, { useEffect, useState, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Hero = () => {
  const { emitUserAction } = useApp();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [chartData, setChartData] = useState([
    { day: 'Mon', value: 35 },
    { day: 'Tue', value: 55 },
    { day: 'Wed', value: 40 },
    { day: 'Thu', value: 65 },
    { day: 'Fri', value: 45 }
  ]);
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Your All-in-One Business Solution";
  const [typedText, setTypedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [notifications, setNotifications] = useState([
    { type: 'success', message: 'Sales +24%', time: 'Just now', isNew: true },
    { type: 'warning', message: 'New Leads: 12', time: '5 min ago', isNew: false },
    { type: 'info', message: 'Conversion: 8.7%', time: '1 hour ago', isNew: false }
  ]);

  // Ref for smooth scrolling
  const featuresRef = useRef(null);

  // Typing effect
  useEffect(() => {
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(prev => prev + fullText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [charIndex]);

  // Entrance animations and data updates
  useEffect(() => {
    setIsVisible(true);

    // Simulate real-time data updates
    const chartInterval = setInterval(() => {
      setChartData(prev => {
        const newData = prev.map(data => ({
          ...data,
          value: Math.floor(Math.random() * 40) + 30
        }));
        return newData;
      });
    }, 3000);

    // Simulate new notifications
    const notificationInterval = setInterval(() => {
      const notificationTypes = ['success', 'warning', 'info'];
      const notificationMessages = [
        'New user signed up', 
        'Campaign performance +15%', 
        'API usage increased', 
        'New feature request', 
        'Support ticket resolved'
      ];

      const randomType = notificationTypes[Math.floor(Math.random() * notificationTypes.length)];
      const randomMessage = notificationMessages[Math.floor(Math.random() * notificationMessages.length)];

      setNotifications(prev => {
        const newNotifications = [
          { 
            type: randomType, 
            message: randomMessage, 
            time: 'Just now', 
            isNew: true 
          },
          ...prev.slice(0, 2).map(n => ({...n, isNew: false}))
        ];
        return newNotifications;
      });
    }, 8000);

    return () => {
      clearInterval(chartInterval);
      clearInterval(notificationInterval);
    };
  }, []);

  // Smooth scroll to features
  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Real-time clock state
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Update clock every second
  useEffect(() => {
    const clockInterval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(clockInterval);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-primary-900 via-primary-800 to-dark-900 text-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse-slow"></div>
        <div className="absolute top-40 -left-20 w-80 h-80 bg-secondary-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-full h-1/2 bg-gradient-to-t from-dark-900 to-transparent opacity-30"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 py-24 z-10 max-w-full w-full">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Enhanced Left Side Content */}
          <div className={`md:w-1/2 mb-12 md:mb-0 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative">
              <h1 className="text-5xl font-bold text-white mb-4 leading-tight animate-fade-in">
                {typedText}
                {isTyping && <span className="animate-pulse">|</span>}
                <span className="block text-secondary-400 mt-2">Powered by AI</span>
              </h1>
            </div>
            <p className="text-xl mb-8 text-blue-100 max-w-lg animate-fade-in">
              Streamline your business operations with our comprehensive ERP system featuring advanced web scraping, 
              WhatsApp marketing, and essential business applications.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                className="group bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all shadow-lg hover:shadow-glow transform hover:-translate-y-1 border-0 flex items-center hover:scale-105"
                onClick={() => {
                  emitUserAction('get_started_clicked', {});
                  scrollToFeatures();
                }}
              >
                <span>Get Started</span>
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button 
                className="group border-2 border-white px-8 py-4 rounded-lg font-semibold text-white hover:bg-white/10 transition-all shadow-lg hover:shadow-glow transform hover:-translate-y-1 flex items-center hover:scale-105"
                onClick={() => emitUserAction('watch_demo_clicked', {})}
              >
                <span>Watch Demo</span>
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
            
            {/* Enhanced Trust Badges */}
            <div className={`mt-12 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center mb-4">
                <div className="flex -space-x-2 mr-4">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="w-8 h-8 rounded-full border-2 border-primary-800 overflow-hidden">
                      <img 
                        src={`/images/testimonial-${(num % 3) + 1}.jpg`} 
                        alt={`User ${num}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-blue-200">Trusted by 2,000+ businesses</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Modern Analytics Dashboard */}
          <div className={`md:w-1/2 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative bg-dark-800/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-dark-700 hover:shadow-glow-lg transition-all duration-500 transform hover:scale-[1.02]">
              {/* Dashboard Header */}
              <div className="bg-dark-900 rounded-t-xl p-3 border-b border-dark-700 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-400">Business Intelligence Dashboard</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-xs bg-dark-700 px-2 py-1 rounded-md flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                    Live Data
                  </div>
                  <div className="text-xs bg-dark-700 px-2 py-1 rounded-md flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                    {currentTime}
                  </div>
                </div>
              </div>
              
              {/* Dashboard Tabs */}
              <div className="bg-dark-800 p-2 flex space-x-1 border-b border-dark-700">
                {['Overview', 'Analytics', 'Campaigns', 'Customers'].map((tab) => (
                  <button
                    key={tab}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                      activeTab === tab.toLowerCase() 
                        ? 'bg-primary-600 text-white' 
                        : 'text-gray-400'
                    }`}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              {/* Dashboard Content */}
              <div className="bg-dark-800 p-4 rounded-b-xl">
                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {[
                    { 
                      label: 'Total Revenue', 
                      value: '$24,568', 
                      change: '+12%', 
                      icon: 'M12 8c-1.657 0-3 .895-3 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                      color: 'from-green-600 to-green-400'
                    },
                    { 
                      label: 'Conversion Rate', 
                      value: '8.7%', 
                      change: '+2.4%', 
                      icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
                      color: 'from-blue-600 to-blue-400'
                    },
                  ].map((stat, index) => (
                    <div 
                      key={index} 
                      className="bg-dark-700 rounded-lg p-3 border border-dark-600 hover:border-primary-500 transition-colors transform hover:translate-y-[-2px] duration-300"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-xs text-gray-400">{stat.label}</p>
                          <p className="text-lg font-bold mt-1">{stat.value}</p>
                        </div>
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center text-white`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                          </svg>
                        </div>
                      </div>
                      <div className="mt-2 text-xs">
                        <span className={`${stat.change.includes('+') ? 'text-green-400' : 'text-red-400'} font-medium`}>
                          {stat.change}
                        </span>
                        <span className="text-gray-400 ml-1">vs last month</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Chart */}
                <div className="bg-dark-700 rounded-lg p-4 border border-dark-600 mb-4 transform hover:translate-y-[-2px] duration-300">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Performance Metrics</h3>
                    <div className="flex space-x-2 text-xs">
                      {['Weekly', 'Monthly'].map((period) => (
                        <button
                          key={period}
                          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                            period === 'Weekly' 
                              ? 'bg-primary-600 text-white' 
                              : 'text-gray-400 hover:bg-dark-700'
                          }`}
                        >
                          {period}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Chart Visualization */}
                  <ResponsiveContainer width="100%" height={150}>
                    <LineChart data={chartData}>
                      <CartesianGrid stroke="#ccc" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip contentStyle={{ backgroundColor: '#333', borderRadius: '5px', border: 'none' }} />
                      <Line type="monotone" dataKey="value" stroke="#8884d8" strokeDasharray="0" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                {/* Activity Feed - Renamed and Enhanced */}
                <div className="bg-dark-700 rounded-lg p-4 border border-dark-600 transform hover:translate-y-[-2px] duration-300">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium">Live Updates</h3>
                    <button className="text-xs text-primary-400 hover:text-primary-300">View All</button>
                  </div>
                  
                  <div className="space-y-2 max-h-24 overflow-y-auto pr-2 custom-scrollbar">
                    {notifications.map((notification, index) => (
                      <div 
                        key={index} 
                        className={`flex items-start p-2 rounded-lg ${
                          notification.isNew ? 'bg-primary-900/30' : 'bg-dark-600/50'
                        } hover:bg-dark-600 transition-all duration-500 transform ${
                          notification.isNew ? 'scale-102' : ''
                        }`}
                      >
                        <div className={`w-2 h-2 mt-1.5 rounded-full mr-2 ${
                          notification.type === 'success' ? 'bg-green-500' : 
                          notification.type === 'warning' ? 'bg-yellow-500' : 
                          'bg-blue-500'
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-sm">{notification.message}</p>
                          <p className="text-xs text-gray-400">{notification.time}</p>
                        </div>
                        {notification.isNew && (
                          <span className="px-1.5 py-0.5 bg-primary-500 text-white text-xs rounded-full animate-pulse">
                            New
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dynamic Floating notification cards */}
            {notifications.map((notification, index) => (
              index < 2 && (
                <div 
                  key={index}
                  className={`absolute ${
                    index === 0 
                      ? '-right-8 top-1/4' 
                      : '-left-12 bottom-1/3'
                  } bg-dark-700/90 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-dark-600 transform ${
                    index === 0 ? 'rotate-6' : '-rotate-3'
                  } hover:rotate-0 transition-all duration-300 z-10 ${
                    notification.isNew ? 'animate-float-fast' : 'animate-float'
                  }`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 ${
                      notification.type === 'success' ? 'bg-green-400' : 
                      notification.type === 'warning' ? 'bg-yellow-400' : 
                      'bg-blue-400'
                    } rounded-full ${notification.isNew ? 'animate-pulse' : ''}`}></div>
                    <span className="text-white text-sm">{notification.message}</span>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
      
      {/* AI Assistant Floating Button */}
      <div className="fixed right-8 bottom-8 z-50">
        <button 
          className="w-14 h-14 rounded-full bg-secondary-500 text-white shadow-lg hover:shadow-glow-teal flex items-center justify-center transform hover:scale-110 transition-all group"
          onClick={() => emitUserAction('ai_assistant_clicked', {})}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.357 2.059l.37.185c.115.058.232.107.351.146a2.25 2.25 0 002.11-3.754L15.5 9.5M4.249 12.184a2.25 2.25 0 001.009 1.889l.37.185c.115.058.232.107.351.146a2.25 2.25 0 002.11-3.754L5 7.5" />
          </svg>
          <span className="absolute right-full mr-3 bg-dark-800 text-white text-xs py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            AI Assistant
          </span>
        </button>
      </div>
      
      {/* Reference for smooth scrolling */}
      <div ref={featuresRef}></div>
    </section>
  );
};

export default Hero;
import React, { useState, useEffect } from 'react';

const Header = ({ onInteraction }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled past threshold
      setIsScrolled(currentScrollY > 50);
      
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isHidden ? '-translate-y-full' : 'translate-y-0'
    } ${isScrolled ? 'bg-dark-800/90 backdrop-blur-sm py-2 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="/" 
          className={`text-2xl md:text-3xl font-bold transition-all duration-500 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}
          onClick={() => onInteraction('logo_clicked')}
        >
          <span className="text-white">Talk</span>
          <span className="text-secondary-400">2</span>
          <span className="text-white">SaaS</span>
        </a>
        
        <nav className="hidden md:flex space-x-6">
          {['Features', 'Pricing', 'Testimonials', 'Contact'].map((item, index) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`font-medium text-white hover:text-secondary-400 transition-all duration-300 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => onInteraction(`nav_${item.toLowerCase()}_clicked`)}
            >
              {item}
            </a>
          ))}
        </nav>
        
        <div className={`flex items-center space-x-4 transition-all duration-500 transform ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}>
          <button 
            className="hidden md:block px-4 py-2 rounded-lg border border-white/30 hover:bg-primary-600/80 text-white transition-all"
            onClick={() => onInteraction('login_clicked')}
          >
            Log In
          </button>
          
          <button 
            className="px-4 py-2 bg-secondary-600/90 text-white rounded-lg font-medium hover:bg-secondary-700 transition-all shadow-md hover:shadow-glow transform hover:-translate-y-1 hover:scale-105"
            onClick={() => onInteraction('get_started_clicked')}
          >
            Get Started
          </button>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => onInteraction('mobile_menu_clicked')}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
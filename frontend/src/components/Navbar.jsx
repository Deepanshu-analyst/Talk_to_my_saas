import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
              ERP Suite
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-100'}`}>Features</a>
            <a href="#about" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-100'}`}>About</a>
            <a href="#pricing" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-100'}`}>Pricing</a>
            <a href="#contact" className={`transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-100'}`}>Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className={`px-6 py-2 rounded-lg border border-transparent transition-colors ${isScrolled ? 'text-blue-600 hover:text-blue-700 hover:border-blue-600' : 'text-white hover:text-blue-100 hover:border-white'}`}>
              Login
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
              Sign Up
            </button>
          </div>

          <button 
            className={`md:hidden transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg width="24" height="24" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> :
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <a href="#features" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Features</a>
            <a href="#about" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">About</a>
            <a href="#pricing" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Pricing</a>
            <a href="#contact" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">Contact</a>
            <div className="border-t border-gray-200 mt-2 pt-2 px-4 flex flex-col space-y-2">
              <button className="py-2 text-blue-600 hover:text-blue-700 transition-colors">Login</button>
              <button className="py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Zap className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-xl font-bold">VamceAds</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-purple-400 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
            <a 
              href="#cta" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              Get Started
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <a 
              href="#about" 
              className="block hover:text-purple-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="block hover:text-purple-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a 
              href="#portfolio" 
              className="block hover:text-purple-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </a>
            <a 
              href="#contact" 
              className="block hover:text-purple-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#cta" 
              className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-5 py-2 rounded-md hover:opacity-90 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
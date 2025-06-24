import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Mail, Award } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            <p>venkat</p>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Home size={18} />
              <span>Home</span>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <User size={18} />
              <span>About</span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Briefcase size={18} />
              <span>Projects</span>
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Award size={18} />
              <span>Skills</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all"
            >
              <Mail size={18} />
              <span>Contact</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg">
            <div className="py-4 px-6 space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors w-full"
              >
                <Home size={18} />
                <span>Home</span>
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors w-full"
              >
                <User size={18} />
                <span>About</span>
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors w-full"
              >
                <Briefcase size={18} />
                <span>Projects</span>
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors w-full"
              >
                <Award size={18} />
                <span>Skills</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all w-full justify-center"
              >
                <Mail size={18} />
                <span>Contact</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
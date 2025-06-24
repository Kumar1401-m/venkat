import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Chembeti Naga Venkata Kumar
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Transforming visionary ideas into successful ventures through innovation, creativity, and strategic thinking.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About Me
                </button>
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </button>
                <button 
                  onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Skills
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 cnvkumar@entrepreneur.com</p>
                <p>📱 +91 98765 43210</p>
                <p>📍 Hyderabad, India</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-gray-400 flex items-center justify-center md:justify-start space-x-2">
                  <span>© 2024 Chembeti Naga Venkata Kumar. Made with</span>
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                  <span>All rights reserved.</span>
                </p>
              </div>

              {/* Back to Top Button */}
              <button 
                onClick={scrollToTop}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

          {/* Additional Footer Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Designed and developed to showcase entrepreneurial excellence and creative innovation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
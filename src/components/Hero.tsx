import React from 'react';
import { ArrowDown, Sparkles, Target, Lightbulb } from 'lucide-react';
import BubbleAnimation from './BubbleAnimation';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <BubbleAnimation />
      </div>
      
      {/* Geometric Shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-lg animate-bounce"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
              <img 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                alt="Chembeti Naga Venkata Kumar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent font-serif">
          Chembeti Naga
          <br />
          <span className="text-4xl md:text-6xl">Venkata Kumar</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Visionary Entrepreneur & Creative Innovator
          <br />
          <span className="text-lg md:text-xl text-blue-600 font-medium">
            Transforming Ideas into Revolutionary Solutions
          </span>
        </p>

        {/* Key Highlights */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <Target className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700 font-medium">Strategic Vision</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <Lightbulb className="w-5 h-5 text-yellow-600" />
            <span className="text-gray-700 font-medium">Creative Innovation</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <span className="text-gray-700 font-medium">Market Disruption</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Explore My Work
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300"
          >
            Let's Connect
          </button>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
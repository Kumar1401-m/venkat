import React from 'react';
import { Lightbulb, Target, Zap, Heart, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A creative entrepreneur with a passion for innovation and a track record of transforming visionary ideas into successful ventures.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Entrepreneurial Evolution
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                With a creative mindset and strategic vision, I've dedicated my career to identifying market gaps and developing innovative solutions that create meaningful impact. My journey as an entrepreneur has been driven by the belief that every challenge presents an opportunity for revolutionary thinking.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From conceptualizing disruptive business models to leading cross-functional teams, I thrive on the dynamic nature of entrepreneurship. My approach combines analytical thinking with creative problem-solving to deliver results that exceed expectations.
              </p>
              
              {/* Key Achievements */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Clients Served</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="project copy.jpg" 
                  alt="Professional workspace"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl -z-10"></div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Innovation First</h4>
              <p className="text-gray-600">
                Constantly pushing boundaries and challenging conventional thinking to create breakthrough solutions.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Strategic Focus</h4>
              <p className="text-gray-600">
                Maintaining clear vision and strategic direction while adapting to market dynamics and opportunities.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-pink-50 to-yellow-50 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-yellow-600 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Impact Driven</h4>
              <p className="text-gray-600">
                Creating meaningful value for stakeholders and contributing positively to society through every venture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { BarChart3, Lightbulb, Users, Globe, Zap, Target, Award, TrendingUp } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Strategic Leadership",
      icon: <Target className="w-8 h-8" />,
      skills: [
        { name: "Business Strategy", level: 95 },
        { name: "Market Analysis", level: 90 },
        { name: "Vision Setting", level: 98 },
        { name: "Decision Making", level: 92 }
      ]
    },
    {
      title: "Innovation & Creativity",
      icon: <Lightbulb className="w-8 h-8" />,
      skills: [
        { name: "Creative Problem Solving", level: 96 },
        { name: "Product Innovation", level: 88 },
        { name: "Design Thinking", level: 85 },
        { name: "Ideation & Brainstorming", level: 94 }
      ]
    },
    {
      title: "Business Development",
      icon: <TrendingUp className="w-8 h-8" />,
      skills: [
        { name: "Market Development", level: 91 },
        { name: "Partnership Building", level: 89 },
        { name: "Revenue Growth", level: 93 },
        { name: "Scaling Operations", level: 87 }
      ]
    },
    {
      title: "Team Leadership",
      icon: <Users className="w-8 h-8" />,
      skills: [
        { name: "Team Building", level: 94 },
        { name: "Mentorship", level: 96 },
        { name: "Communication", level: 92 },
        { name: "Conflict Resolution", level: 88 }
      ]
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Entrepreneur of the Year",
      description: "Recognized for outstanding innovation in technology sector",
      year: "2023"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation Excellence Award",
      description: "Honored for developing breakthrough solutions",
      year: "2022"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Impact Recognition",
      description: "Acknowledged for sustainable business practices",
      year: "2021"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership Excellence",
      description: "Celebrated for exceptional team leadership",
      year: "2020"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive skill set built through years of entrepreneurial experience and continuous learning.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    {React.cloneElement(category.icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-blue-600 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Recognition & Achievements
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    {React.cloneElement(achievement.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <div className="text-blue-600 font-bold text-sm mb-2">{achievement.year}</div>
                  <h4 className="font-bold text-gray-900 mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-8">
              Ready to leverage these skills for your next venture?
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
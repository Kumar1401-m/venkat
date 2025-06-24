import React from 'react';
import { ExternalLink, Github, ArrowRight, Zap, TrendingUp, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "TechStart Incubator",
      description: "Co-founded a technology incubator that has supported over 25 startups, providing mentorship, funding, and resources for emerging entrepreneurs.",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tags: ["Leadership", "Mentorship", "Funding", "Strategy"],
      icon: <Zap className="w-6 h-6" />,
      stats: "25+ Startups Supported"
    },
    {
      title: "Digital Transformation Suite",
      description: "Developed a comprehensive digital transformation platform that helped traditional businesses modernize their operations and increase efficiency by 60%.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tags: ["Digital Strategy", "Automation", "Analytics", "Growth"],
      icon: <TrendingUp className="w-6 h-6" />,
      stats: "60% Efficiency Increase"
    },
    {
      title: "Sustainable Energy Initiative",
      description: "Launched a renewable energy consulting firm that has implemented sustainable solutions for over 100 organizations, reducing carbon footprint by 40%.",
      image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tags: ["Sustainability", "Consulting", "Innovation", "Impact"],
      icon: <Globe className="w-6 h-6" />,
      stats: "40% Carbon Reduction"
    },
    {
      title: "FinTech Innovation Lab",
      description: "Established a financial technology laboratory focused on developing blockchain-based solutions for secure and transparent financial transactions.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tags: ["FinTech", "Blockchain", "Security", "Innovation"],
      icon: <Zap className="w-6 h-6" />,
      stats: "Blockchain Pioneer"
    },
    {
      title: "E-commerce Accelerator",
      description: "Built a comprehensive e-commerce platform that has helped over 500 small businesses establish their online presence and increase sales by 300%.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tags: ["E-commerce", "Platform", "Growth", "SMB"],
      icon: <TrendingUp className="w-6 h-6" />,
      stats: "500+ Businesses Helped"
    },
    {
      title: "AI-Powered Analytics",
      description: "Developed an artificial intelligence platform that provides predictive analytics for business decision-making, improving forecast accuracy by 85%.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      tags: ["AI/ML", "Analytics", "Prediction", "Data Science"],
      icon: <Globe className="w-6 h-6" />,
      stats: "85% Accuracy Improvement"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the innovative ventures and transformative solutions I've created to drive business success and market disruption.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    {project.icon}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.stats}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium group-hover:translate-x-2 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-8">
              Interested in collaborating on innovative projects?
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Let's Build Something Amazing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
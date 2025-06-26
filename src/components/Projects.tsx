import React from 'react';
import { ExternalLink, Github, Star, Clock } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Deployed':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'Research':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      default:
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Deployed':
        return <ExternalLink size={12} />;
      case 'Research':
        return <Star size={12} />;
      default:
        return <Clock size={12} />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Innovative solutions at the intersection of AI and quantum computing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700 transform hover:-translate-y-2 ${
                project.featured ? 'lg:col-span-2' : ''
              } ${isVisible ? `opacity-100 translate-y-0 delay-${index * 200}` : 'opacity-0 translate-y-8'} transition-all duration-1000`}
            >
              {/* Project Status Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(project.status)}`}>
                  {getStatusIcon(project.status)}
                  {project.status}
                </span>
                {project.featured && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 text-amber-800 dark:text-amber-300 rounded-full text-sm font-semibold">
                    <Star size={12} />
                    Featured
                  </span>
                )}
              </div>

              <div className={`${project.featured ? 'lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center' : ''}`}>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    {project.subtitle}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/50 dark:bg-black/30 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.featured && (
                  <div className="hidden lg:block">
                    <div className="relative">
                      <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 to-purple-900 rounded-2xl flex items-center justify-center border border-blue-200 dark:border-blue-700">
                        <div className="text-6xl opacity-20">🚀</div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-2xl" />
                    </div>
                  </div>
                )}
              </div>

              <div className="flex gap-3 pt-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                  <Github size={16} />
                  Code
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-colors">
                  <ExternalLink size={16} />
                  Demo
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { education } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Education: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Academic excellence across multiple disciplines
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700 group hover:-translate-y-1 ${
                isVisible ? `opacity-100 translate-y-0 delay-${index * 200}` : 'opacity-0 translate-y-8'
              } transition-all duration-1000`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                  <GraduationCap size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {edu.institution}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {edu.degree}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Calendar size={16} />
                  <span className="font-medium">{edu.period}</span>
                </div>
                
                {edu.cgpa && (
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Award size={16} />
                    <span className="font-medium">CGPA: {edu.cgpa}</span>
                  </div>
                )}
              </div>

              

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
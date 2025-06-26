import React from 'react';
import { Trophy, Award, Users, BookOpen, Music, Palette } from 'lucide-react';
import { awards, societies, coCurriculars } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Achievements: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const getIcon = (category: string) => {
    switch (category) {
      case 'Music':
        return <Music size={20} className="text-purple-500" />;
      case 'Arts':
        return <Palette size={20} className="text-pink-500" />;
      case 'Literature':
        return <BookOpen size={20} className="text-blue-500" />;
      default:
        return <Award size={20} className="text-yellow-500" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-600 to-red-600 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Recognition for excellence across academics, research, and creative pursuits
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Awards */}
          <div className={`bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-yellow-200 dark:border-yellow-800 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-6">
              <Trophy size={28} className="text-yellow-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Awards</h3>
            </div>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white/50 dark:bg-black/20 rounded-xl hover:bg-white/70 dark:hover:bg-black/30 transition-colors">
                  <Award size={16} className="text-yellow-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{award}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Societies */}
          <div className={`bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-3 mb-6">
              <Users size={28} className="text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Leadership</h3>
            </div>
            <div className="space-y-4">
              {societies.map((society, index) => (
                <div key={index} className="p-4 bg-white/50 dark:bg-black/20 rounded-xl hover:bg-white/70 dark:hover:bg-black/30 transition-colors">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{society.name}</h4>
                  <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">{society.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      

        {/* Co-Curriculars */}
        <div className={`bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen size={28} className="text-purple-600" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Creative Pursuits</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coCurriculars.map((activity, index) => (
              <div key={index} className="bg-white/50 dark:bg-black/20 rounded-xl p-6 hover:bg-white/70 dark:hover:bg-black/30 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  {getIcon(activity.category)}
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white">{activity.category}</h4>
                </div>
                <div className="space-y-2">
                  {activity.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
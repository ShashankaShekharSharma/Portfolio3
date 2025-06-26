import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';
import AnimatedName from './AnimatedName';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const offsetY = useParallax();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic animated background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-[var(--scroll-gradient,linear-gradient(135deg,hsl(220,70%,95%)_0%,hsl(280,60%,98%)_100%))] dark:bg-[var(--scroll-gradient-dark,linear-gradient(135deg,hsl(220,30%,8%)_0%,hsl(280,25%,5%)_100%))] transition-all duration-1000"
          style={{ transform: `translateY(${offsetY * 0.5}px)` }}
        />
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-60">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-cyan-400/20 animate-gradient-shift" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.15),transparent_50%)] animate-pulse-slow" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(147,51,234,0.15),transparent_50%)] animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i * 0.5}s`
              }}
            >
              <div className={`w-${2 + (i % 3)} h-${2 + (i % 3)} bg-gradient-to-r from-blue-400 to-purple-400 ${i % 2 === 0 ? 'rounded-full' : 'rounded-lg rotate-45'} blur-sm`} />
            </div>
          ))}
        </div>
      </div>

      <div ref={ref} className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <AnimatedName />
        </div>

        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-4 font-light animate-fade-in-up">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent font-semibold">
              {personalInfo.role}
            </span>
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            <span className="relative">
              {personalInfo.tagline}
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse" />
            </span>
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Explore My Resume */}
            <a
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] text-white rounded-2xl font-semibold hover:bg-[position:100%_0] transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3 animate-gradient-x overflow-hidden"
            >
              <span className="relative z-10">Explore My Resume</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />
            </a>

            {/* Mail Redirect */}
            <a
              href="mailto:shashankadps@gmail.com"
              className="group p-5 bg-white/10 dark:bg-black/10 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 hover:scale-110 hover:-rotate-3"
            >
              <Mail size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Ambient particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/60 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

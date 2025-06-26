import React, { useEffect, useState } from 'react';

interface ScrollAnimationsProps {
  children: React.ReactNode;
}

const ScrollAnimations: React.FC<ScrollAnimationsProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = currentScrollY / maxScroll;

      setScrollY(currentScrollY);
      setScrollProgress(progress);

      // Dynamic background gradient based on scroll
      const hue1 = 220 + (progress * 60); // Blue to purple
      const hue2 = 280 + (progress * 40); // Purple to pink
      
      document.documentElement.style.setProperty(
        '--scroll-gradient',
        `linear-gradient(135deg, hsl(${hue1}, 70%, 95%) 0%, hsl(${hue2}, 60%, 98%) 100%)`
      );
      
      document.documentElement.style.setProperty(
        '--scroll-gradient-dark',
        `linear-gradient(135deg, hsl(${hue1}, 30%, 8%) 0%, hsl(${hue2}, 25%, 5%) 100%)`
      );
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 transform origin-left transition-transform duration-100 ease-out"
           style={{ transform: `scaleX(${scrollProgress})` }} />

      {/* Floating elements that move with scroll */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full animate-pulse"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
              transform: `translateY(${scrollY * (0.1 + i * 0.05)}px) rotate(${scrollY * 0.1}deg)`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Parallax background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(circle at 60% 40%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)',
            transform: `translateY(${scrollY * -0.2}px)`
          }}
        />
      </div>

      {children}
    </div>
  );
};

export default ScrollAnimations;
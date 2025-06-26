import React, { useEffect, useState } from 'react';

const AnimatedName: React.FC = () => {
  const [sparkles, setSparkles] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);
  const firstName = "Shashanka ";
  const lastName = "Shekhar Sharma";

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 6 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 3
      }));
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 4000);
    return () => clearInterval(interval);
  }, []);

  const renderAnimatedText = (text: string, startIndex: number = 0) => {
    return text.split('').map((char, index) => (
      <span
        key={startIndex + index}
        className="inline-block transition-all duration-300 hover:text-white hover:scale-110"
        style={{
          animation: `letterFloat 4s ease-in-out infinite`,
          animationDelay: `${(startIndex + index) * 0.1}s`
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div className="relative inline-block w-full">
      <div className="flex items-center justify-between max-w-5xl mx-auto px-4 mb-3 md:px-8 min-w-[400px]">
        {/* Animated Name on the left */}
        <h1 className="relative text-4xl md:text-7xl lg:text-8xl font-bold leading-tight text-left group">
          <div
            className="bg-gradient-to-r from-purple-600 via-blue-500 via-cyan-400 via-amber-400 to-purple-600 bg-clip-text text-transparent animate-gradient-x group-hover:text-white transition-colors duration-300"
            style={{
              backgroundSize: '400% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))'
            }}
          >
            <div className="block">
              {renderAnimatedText(firstName, 0)}
            </div>
            <div className="block">
              {renderAnimatedText(lastName, firstName.length)}
            </div>
          </div>

          {/* Sparkles */}
          {sparkles.map((sparkle) => (
            <div
              key={sparkle.id}
              className="absolute w-2 h-2 animate-sparkle pointer-events-none"
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
                animationDelay: `${sparkle.delay}s`
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-yellow-300 to-white rounded-full shadow-lg shadow-yellow-300/50" />
            </div>
          ))}

          {/* Glow behind text */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-500/10 to-cyan-400/10 blur-3xl animate-pulse-glow -z-10"
            style={{ transform: 'scale(1.2)' }}
          />
        </h1>

        {/* Profile image with glowing background */}
        <div className="relative">
          <div className="absolute inset-0 w-full h-full rounded-full blur-2xl bg-blue-500 opacity-30 animate-pulse -z-10" />
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover shadow-2xl ring-4 ring-blue-400/40 ml-6 relative z-10"
          />
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute -inset-12 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i * 0.5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedName;

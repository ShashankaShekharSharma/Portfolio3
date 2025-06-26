import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
  velocity: { x: number; y: number };
}

const CustomCursor: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [, forceRender] = useState(false); // Trigger rerenders for animation

  const positionRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const particleId = useRef(0);

  useEffect(() => {
    let animationFrame: number;

    const updateCursor = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };

    const createParticle = () => {
      const { x, y } = positionRef.current;

      if (Math.random() > 0.5) {
        const newParticle: Particle = {
          id: particleId.current++,
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          opacity: 1,
          scale: Math.random() * 0.5 + 0.5,
          velocity: {
            x: (Math.random() - 0.5) * 1.5,
            y: (Math.random() - 0.5) * 1.5 - 0.5
          }
        };

        setParticles(prev => [...prev.slice(-20), newParticle]);
      }
    };

    const animate = () => {
      // Move cursor using transform (GPU-accelerated)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${positionRef.current.x - 12}px, ${positionRef.current.y - 12}px, 0)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${positionRef.current.x - 24}px, ${positionRef.current.y - 24}px, 0) scale(${isHovering ? 1.5 : 1})`;
      }

      // Update particles
      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            x: p.x + p.velocity.x,
            y: p.y + p.velocity.y,
            opacity: p.opacity - 0.02,
            scale: p.scale * 0.98
          }))
          .filter(p => p.opacity > 0)
      );

      createParticle();

      forceRender(s => !s); // To re-render particles visually
      animationFrame = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => {
      setIsHovering(false);
      setIsVisible(false);
    };

    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isHovering]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] mix-blend-difference">
      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className={`fixed w-6 h-6 rounded-full transition-all duration-200 ease-out ${
          isHovering
            ? 'bg-gradient-to-r from-purple-400 via-blue-400 to-yellow-300 scale-150 shadow-lg shadow-blue-400/50'
            : 'bg-gradient-to-r from-blue-400 to-purple-400 scale-100'
        }`}
        style={{
          background: isHovering
            ? 'radial-gradient(circle, rgba(147, 51, 234, 0.8) 0%, rgba(59, 130, 246, 0.6) 50%, rgba(251, 191, 36, 0.4) 100%)'
            : 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(147, 51, 234, 0.6) 100%)',
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* Particles */}
      {particles.map(p => (
        <div
          key={p.id}
          className="fixed w-1 h-1 bg-white rounded-full"
          style={{
            transform: `translate3d(${p.x}px, ${p.y}px, 0) scale(${p.scale})`,
            opacity: p.opacity,
            boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)',
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Trailing Glow */}
      <div
        ref={glowRef}
        className="fixed w-12 h-12 rounded-full opacity-20 blur-md transition-transform duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%)'
        }}
      />
    </div>
  );
};

export default CustomCursor;

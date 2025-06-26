import { useLayoutEffect, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import CustomCursor from './components/CustomCursor';
import ScrollAnimations from './components/ScrollAnimations';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

function App() {
  // PREVENT BROWSER SCROLL TO #HASH - Enhanced version
  useLayoutEffect(() => {
    // Disable scroll restoration immediately
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Store original scroll behavior
    const originalScrollBehavior = document.documentElement.style.scrollBehavior;
    
    // Disable smooth scrolling temporarily
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Force scroll to top before anything renders
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Remove any hash from URL that might cause auto-scroll
    if (window.location.hash) {
      // Use pushState instead of replaceState to avoid back button issues
      const newUrl = window.location.pathname + window.location.search;
      history.replaceState(null, '', newUrl);
    }

    // Restore scroll behavior after a brief delay
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = originalScrollBehavior;
    }, 100);
  }, []);

  // Additional safety net to prevent any delayed scrolling
  useEffect(() => {
    const preventAutoScroll = () => {
      if (window.scrollY > 0) {
        window.scrollTo(0, 0);
      }
    };

    // Check for unwanted scrolling in the first few seconds after load
    const intervals = [100, 200, 500, 1000].map(delay => 
      setTimeout(preventAutoScroll, delay)
    );

    // Also listen for any scroll events in the first second and reset
    const handleEarlyScroll = (e: Event) => {
      if (Date.now() - loadTime < 1000) {
        e.preventDefault();
        window.scrollTo(0, 0);
      }
    };

    const loadTime = Date.now();
    window.addEventListener('scroll', handleEarlyScroll, { passive: false });

    return () => {
      intervals.forEach(clearTimeout);
      window.removeEventListener('scroll', handleEarlyScroll);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-500 overflow-x-hidden">
        <CustomCursor />
        <ScrollAnimations>
          <Navigation />

          <main>
            <Hero />
            <Experience />
            <Projects />
            <Education />
            <Achievements />
            <Certifications />
          </main>

          <Footer />
        </ScrollAnimations>
      </div>
    </ThemeProvider>
  );
}

export default App;
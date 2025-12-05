import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // seconds
  duration?: number; // seconds
  effect?: 
    | 'fade-up' 
    | 'fade-in' 
    | 'blur-in' 
    | 'slide-left' 
    | 'slide-right' 
    | 'zoom-in'
    | 'fade-down'
    | 'slide-up'
    | 'slide-down'
    | 'rotate-in'
    | 'flip-in'
    | 'scale-in'
    | 'bounce-in'
    | 'swing-in'
    | '3d-flip'
    | 'magnetic'
    | 'spring'
    | 'elastic';
  threshold?: number;
  width?: 'fit-content' | '100%';
  once?: boolean; // Trigger animation only once
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.8,
  effect = 'fade-up',
  threshold = 0.1, // Lower threshold for earlier trigger
  width = 'fit-content',
  once = true
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  useEffect(() => {
    // Check if element is already in viewport on mount (for hero section)
    const checkInitialVisibility = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        // If element is in top 20% of viewport, show immediately
        if (rect.top >= 0 && rect.top <= windowHeight * 0.2) {
          setIsVisible(true);
          setHasAnimated(true);
          return true;
        }
      }
      return false;
    };

    // Check immediately
    const isInitiallyVisible = checkInitialVisibility();

    if (!isInitiallyVisible) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              setHasAnimated(true);
              observer.disconnect();
            }
          } else if (!once && hasAnimated) {
            setIsVisible(false);
          }
        }, 
        { 
          threshold: threshold,
          rootMargin: '0px 0px -80px 0px' // Trigger slightly before element is fully visible
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }
  }, [threshold, once, hasAnimated]);

  const getEffectClass = () => {
    switch(effect) {
      // Original effects
      case 'fade-up': 
        return 'translate-y-16 opacity-0';
      case 'fade-down': 
        return '-translate-y-16 opacity-0';
      case 'fade-in': 
        return 'opacity-0';
      case 'blur-in': 
        return 'blur-lg opacity-0 scale-95';
      case 'slide-left': 
        return '-translate-x-20 opacity-0';
      case 'slide-right': 
        return 'translate-x-20 opacity-0';
      case 'slide-up': 
        return 'translate-y-20 opacity-0';
      case 'slide-down': 
        return '-translate-y-20 opacity-0';
      case 'zoom-in': 
        return 'scale-75 opacity-0';
      
      // New 3D & Advanced effects
      case 'rotate-in': 
        return 'rotate-12 scale-90 opacity-0';
      case 'flip-in': 
        return '[transform:rotateY(90deg)] opacity-0';
      case 'scale-in': 
        return 'scale-50 opacity-0';
      case 'bounce-in': 
        return 'scale-0 opacity-0';
      case 'swing-in': 
        return 'rotate-45 scale-75 opacity-0';
      case '3d-flip': 
        return '[transform:perspective(1000px)_rotateX(-90deg)] opacity-0';
      case 'magnetic': 
        return 'translate-y-32 scale-90 blur-sm opacity-0';
      case 'spring': 
        return 'scale-80 translate-y-12 opacity-0';
      case 'elastic': 
        return 'scale-110 opacity-0';
      default: 
        return 'opacity-0';
    }
  };

  const getVisibleClass = () => {
    switch(effect) {
      // Original effects
      case 'fade-up': 
      case 'fade-down': 
        return 'translate-y-0 opacity-100';
      case 'fade-in': 
        return 'opacity-100';
      case 'blur-in': 
        return 'blur-0 opacity-100 scale-100';
      case 'slide-left': 
      case 'slide-right': 
        return 'translate-x-0 opacity-100';
      case 'slide-up': 
      case 'slide-down': 
        return 'translate-y-0 opacity-100';
      case 'zoom-in': 
      case 'scale-in': 
      case 'bounce-in': 
      case 'spring': 
      case 'elastic': 
        return 'scale-100 opacity-100';
      
      // New 3D & Advanced effects
      case 'rotate-in': 
      case 'swing-in': 
        return 'rotate-0 scale-100 opacity-100';
      case 'flip-in': 
        return '[transform:rotateY(0deg)] opacity-100';
      case '3d-flip': 
        return '[transform:perspective(1000px)_rotateX(0deg)] opacity-100';
      case 'magnetic': 
        return 'translate-y-0 scale-100 blur-0 opacity-100';
      default: 
        return 'opacity-100';
    }
  };

  const getEasing = () => {
    switch(effect) {
      case 'bounce-in': 
        return 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'; // Bounce
      case 'spring': 
        return 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'; // Spring
      case 'elastic': 
        return 'cubic-bezier(0.68, -0.6, 0.32, 1.6)'; // Elastic
      case 'magnetic': 
        return 'cubic-bezier(0.34, 1.56, 0.64, 1)'; // Magnetic pull
      case '3d-flip': 
      case 'flip-in': 
        return 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'; // Smooth flip
      default: 
        return 'cubic-bezier(0.16, 1, 0.3, 1)'; // Smooth ease-out
    }
  };

  return (
    <div 
      ref={ref} 
      className={`${className} transition-all ${isVisible ? getVisibleClass() : getEffectClass()}`}
      style={{ 
        transitionDuration: prefersReducedMotion ? '0s' : `${duration}s`, 
        transitionDelay: prefersReducedMotion ? '0s' : `${delay}s`,
        transitionTimingFunction: getEasing(),
        width: width,
        willChange: 'transform, opacity, filter',
        backfaceVisibility: 'hidden', // Prevent flickering
        WebkitBackfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
        perspective: effect === '3d-flip' || effect === 'flip-in' ? '1000px' : undefined
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
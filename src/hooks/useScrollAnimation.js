import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * Applies animation classes when elements enter the viewport
 * 
 * Usage:
 * const { ref } = useScrollAnimation('fadeInUp', 0.2);
 * <div ref={ref}>Content</div>
 */
export const useScrollAnimation = (animationClass = 'fadeInUp', threshold = 0.2) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Create Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Element is in viewport - add animation class
          entry.target.classList.add(animationClass);
          // Optional: stop observing after animation
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px', // Trigger before element fully visible
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [animationClass, threshold]);

  return { ref };
};

/**
 * Advanced hook for staggered animations on multiple children
 * Usage:
 * const containerRef = useStaggerAnimation('fadeInUp', 0.1);
 * <div ref={containerRef}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </div>
 */
export const useStaggerAnimation = (animationClass = 'fadeInUp', delayIncrement = 0.1) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = entry.target.querySelectorAll('[data-stagger]');
          children.forEach((child, index) => {
            child.style.opacity = '0';
            child.style.animation = `${animationClass} 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`;
            child.style.animationDelay = `${index * delayIncrement}s`;
          });
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(container);

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [animationClass, delayIncrement]);

  return { containerRef };
};

export default useScrollAnimation;

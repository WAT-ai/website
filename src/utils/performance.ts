/**
 * Performance configuration and utilities for WAT.ai website
 * Centralizes performance settings to maintain optimal user experience
 * across different devices and network conditions
 */
export const PERFORMANCE_CONFIG = {
  // Intersection Observer settings for lazy loading
  LAZY_LOADING_THRESHOLD: 0.1, // Trigger when 10% visible
  LAZY_LOADING_ROOT_MARGIN: '50px', // Pre-load 50px before viewport
  
  // Particle animation limits based on device capability
  PARTICLE_COUNT_MOBILE: 100, // Increased for testing visibility
  PARTICLE_COUNT_DESKTOP: 200, // Increased for testing visibility
  PARTICLE_LINK_RADIUS: 250, // Increased for better connectivity
  
  // Vis.js network graph optimization
  PHYSICS_ITERATIONS: 100, // Faster stabilization vs visual quality tradeoff
  STABILIZATION_ENABLED: true, // Allow automatic layout optimization
  
  // Webpack bundle optimization
  CHUNK_SIZE_WARNING_LIMIT: 500000, // 500KB chunks for optimal loading
  
  // Cache management
  CACHE_DURATION: 3600000, // 1 hour for static assets
};

/**
 * Development-only performance monitoring utility
 * Measures execution time of functions to identify bottlenecks
 */
export const trackPerformance = (name: string, fn: () => void) => {
  if (process.env.NODE_ENV === 'development') {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
  } else {
    fn();
  }
};

/**
 * Debounce utility to limit function execution frequency
 * Prevents excessive API calls or expensive operations during rapid user input
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

// Throttle function for scroll/resize events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(null, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), delay);
    }
  };
};

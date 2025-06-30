// Performance configuration and optimizations
export const PERFORMANCE_CONFIG = {
  // Image loading
  LAZY_LOADING_THRESHOLD: 0.1,
  LAZY_LOADING_ROOT_MARGIN: '50px',
  
  // Animation settings
  PARTICLE_COUNT_MOBILE: 30,
  PARTICLE_COUNT_DESKTOP: 60,
  PARTICLE_LINK_RADIUS: 150, // Reduced from 200
  
  // Network graph optimizations
  PHYSICS_ITERATIONS: 100, // Reduced from default 1000
  STABILIZATION_ENABLED: true,
  
  // Bundle splitting
  CHUNK_SIZE_WARNING_LIMIT: 500000, // 500KB
  
  // Caching
  CACHE_DURATION: 3600000, // 1 hour in milliseconds
};

// Performance monitoring
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

// Debounce function for performance optimization
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

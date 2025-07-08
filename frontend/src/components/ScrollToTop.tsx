// Scrolls to top on route change. Place inside Router to reset scroll position.
// No UI. Edit for custom scroll behavior if needed.
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component that automatically scrolls to the top
 * whenever the route changes. This ensures users always start
 * at the top of new pages when navigating.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;

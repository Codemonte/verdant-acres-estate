import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay to let layout settle (images, fonts) before smooth scrolling.
    // Prevents visual jitter where content shifts while the browser is animating.
    const id = window.setTimeout(() => {
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (e) {
        // fallback
        window.scrollTo(0, 0);
      }
    }, 60);

    return () => window.clearTimeout(id);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
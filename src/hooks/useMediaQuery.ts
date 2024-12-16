import { useState, useEffect } from 'react';

/**
 * Custom hook to track media query matches
 * @param {string} query - CSS media query string
 * @returns {boolean} Whether the media query currently matches
 */
export function useMediaQuery(query: string): boolean {
  // Create a media query list object
  const mediaQuery = typeof window !== 'undefined' 
    ? window.matchMedia(query) 
    : null;

  // State to track whether the query matches
  const [matches, setMatches] = useState<boolean>(
    mediaQuery ? mediaQuery.matches : false
  );

  useEffect(() => {
    // Skip if in server-side rendering
    if (!mediaQuery) return;

    // Handler to update matches when media query changes
    const handleChange = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // Add event listener
    mediaQuery.addEventListener('change', handleChange);

    // Initial check (in case it changed before listener was added)
    setMatches(mediaQuery.matches);

    // Cleanup listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}

// Preset breakpoint hooks for convenience
export function useIsDesktop(): boolean {
  return useMediaQuery('(min-width: 1024px)');
}

export function useIsTablet(): boolean {
  return useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
}

export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 767px)');
}

// Example of how to use custom breakpoints
export function useCustomBreakpoint(minWidth: number, maxWidth?: number): boolean {
  const query = maxWidth 
    ? `(min-width: ${minWidth}px) and (max-width: ${maxWidth}px)` 
    : `(min-width: ${minWidth}px)`;
  
  return useMediaQuery(query);
}
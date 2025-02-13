import { useState, useEffect } from 'react';

type MediaQueryResult = [boolean, boolean];

/**
 * Custom hook for handling responsive media queries with SSR support
 * @param query The media query string to evaluate
 * @returns A tuple containing [mounted, matches]
 * mounted: boolean indicating if component is mounted
 * matches: boolean indicating if the media query matches
 */
export const useMediaQuery = (query: string): MediaQueryResult => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    
    // Create media query list
    const mediaQuery = window.matchMedia(query);
    
    // Set initial match state
    setMatches(mediaQuery.matches);

    // Create event listener function
    const handleChange = (event: MediaQueryListEvent): void => {
      setMatches(event.matches);
    };

    // Add listener for media query changes
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup function
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []); // Empty dependency array since query shouldn't change

  return [mounted, matches];
};

// Example usage:
// const [mounted, isMobile] = useMediaQuery('(max-width: 768px)');
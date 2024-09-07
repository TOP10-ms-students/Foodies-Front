import { useState, useEffect } from "react";

/**
 * useMediaQuery hook
 *
 * @param {{ query: string }} props
 * @prop {string} query - The media query string
 * @returns {boolean} - Whether the media query matches or not
 *
 * @example
 * const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
 * return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>;
 */
const useMediaQuery = ({ query }) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Define the listener as a separate function to avoid recreating it on each render
    const listener = () => setMatches(media.matches);

    // Use 'change' instead of 'resize' for better performance
    media.addEventListener("change", listener);

    // Cleanup function to remove the event listener
    return () => media.removeEventListener("change", listener);
  }, [matches, query]); // Only recreate the listener when 'matches' or 'query' changes

  return matches;
};

export default useMediaQuery;

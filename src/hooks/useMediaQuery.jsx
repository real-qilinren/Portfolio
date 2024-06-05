import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
       if (mediaQuery.matches) {
            setMatches(true);
        }

        const listener = () => {
           setMatches(mediaQuery.matches);
        }
       window.addEventListener('resize', listener);
         return () => window.removeEventListener('resize', listener);
    }, [matches, query]);

    return matches;
}

export default useMediaQuery;
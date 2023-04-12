import { useEffect, useRef } from 'react';

export const useWindowLocation = () => {
  const location = useRef<null | Location>(null);

  useEffect(() => {
    location.current = window.location;
  }, []);

  return location.current;
};

import { useEffect, useState } from 'react';

export const useWindowLocation = (isReady: boolean) => {
  const [location, setLocation] = useState<null | Location>(null);

  useEffect(() => {
    if (isReady) {
      setLocation(window.location);
    }
  }, [isReady]);

  return location;
};

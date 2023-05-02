import { useRef, useEffect, useState } from 'react';

export const useClientOnlyRef = (selector: string) => {
  const ref = useRef<HTMLDivElement | null>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector) as HTMLDivElement;
    setMounted(true);
  }, [selector]);

  return mounted ? ref.current : null;
};

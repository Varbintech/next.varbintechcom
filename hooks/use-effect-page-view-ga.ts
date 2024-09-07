import { useEffect } from 'react';

import { useRouter } from 'next/router';

import { pageview } from '../lib/gtag';

export const useEffectPageView = () => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    const handleRouteChange = (url: URL) => {
      pageview(url, document.title);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};

import type { NextWebVitalsMetric } from 'next/app';

export function sendToGA({ id, name, label, value }: NextWebVitalsMetric) {
  const categoryWebVitals = 'Web Vitals';
  const categoryNextVitals = 'Next.js Vitals';
  const isWebVitalLabel = label === 'web-vital';

  const prepareValue = (v: number) => {
    if (name === 'CLS') {
      return Math.round(v * 1000); // multiply by 1000 to scale CLS for better granularity in analytics
    }

    if (name === 'LCP' || name === 'INP' || name === 'FID' || name === 'TTFB') {
      return Math.round(v); // already in milliseconds
    }

    return v;
  };

  // Assumes the global `gtag()` function exists, see:
  // https://developers.google.com/analytics/devguides/collection/gtagjs
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, {
      event_category: isWebVitalLabel ? categoryWebVitals : categoryNextVitals,
      value: prepareValue(value),
      event_label: id, // id unique to current page load
      non_interaction: true, // avoids affecting bounce rate.
    });
  }
}

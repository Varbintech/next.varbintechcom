export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (
  action: Gtag.EventNames | string,
  { event_category, event_label, value }: Gtag.EventParams | Gtag.CustomParams,
) => {
  window.gtag('event', action, {
    event_category,
    event_label,
    value,
  });
};

export const generateEvent = (eventName: string, id: string) => {
  event(`${eventName}Id_click`, {
    event_category: `user_action_${eventName}_click`,
    event_label: `${eventName}Id_${id}`,
    value: id,
  });
};

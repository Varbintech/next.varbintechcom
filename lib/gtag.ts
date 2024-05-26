export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';

interface GenerateClickEventParams {
  id: string;
  url: string;
  text: string;
  eventName: string;
}

// https://developers.google.com/analytics/devguides/collection/ga4/views?client_type=gtag
export const pageview = (url: URL, title: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url,
    page_title: title,
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

export const generateClickEvent = ({ id, url, text, eventName }: GenerateClickEventParams) => {
  window.gtag('event', `${eventName}Id_click`, {
    link_id: id,
    link_url: url,
    link_text: text,
  });
};

// @deprecated
export const generateEvent = (eventName: string, id: string) => {
  event(`${eventName}Id_click`, {
    event_category: `user_action_${eventName}_click`,
    event_label: `${eventName}Id_${id}`,
    value: id,
  });
};

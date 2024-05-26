import { type MouseEventHandler, useCallback } from 'react';

import { generateClickEvent } from '../lib/gtag';

export const useGenerateEventGa = (element: 'button' | 'link') => {
  const handleClick: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = useCallback(
    ({ currentTarget }) => {
      generateClickEvent({
        eventName: element,
        id: currentTarget.id,
        url: currentTarget.getAttribute('href') ?? 'No href attribute found',
        text: currentTarget.innerText,
      });
    },
    [element],
  );

  return handleClick;
};

import { type MouseEventHandler, useCallback } from 'react';

import { generateEvent } from '../lib/gtag';

export const useGenerateEventGa = (element: 'button' | 'link') => {
  const handleClick: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = useCallback(
    event => {
      console.warn('handleClick: ', element, event.currentTarget.id);

      generateEvent(element, event.currentTarget.id);
    },
    [element],
  );

  return handleClick;
};

import { type ReactElement, cloneElement } from 'react';

import useScrollTrigger from '@mui/material/useScrollTrigger';

interface ElevationScrollProps {
  children: ReactElement;
}

const ElevationScroll = ({ children }: ElevationScrollProps) => {

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

export default ElevationScroll;

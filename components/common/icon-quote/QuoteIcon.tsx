import type { FC } from 'react';

import SvgIcon, { type SvgIconProps } from '@mui/material/SvgIcon';

const QuoteIcon: FC<SvgIconProps> = props => {
  return (
    <SvgIcon {...props} viewBox="0 0 16 16">
      <path d="M0 0h6.4L3.2 16H0V0ZM9.6 0H16l-3.2 16H9.6V0Z" fill="#333" />
    </SvgIcon>
  );
};

export default QuoteIcon;

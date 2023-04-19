import type { FC } from 'react';

import SvgIcon, { type SvgIconProps } from '@mui/material/SvgIcon';

const RectangleBoxIconInverse: FC<SvgIconProps> = props => {
  return (
    <SvgIcon {...props} viewBox="0 0 80 80" sx={{ width: '100%', height: '100%' }}>
      <path
        stroke="#e9e9e9" fill="none"
        d="M19.055 17.289 48 .577 76.945 17.29V50.71L48 67.423 19.055 50.71V17.29Z"
      />
      <path stroke="#e9e9e9" fill="none" d="M76.9 17.34 48 35.36v31.96M19.102 17.34l28.9 18.02" />
    </SvgIcon>
  );
};

export default RectangleBoxIconInverse;

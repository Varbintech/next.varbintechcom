import type { FC } from 'react';

import SvgIcon, { type SvgIconProps } from '@mui/material/SvgIcon';

const FrameIcon: FC<SvgIconProps> = props => {
  const { width = 48, height = 49, ...restProps } = props;

  return (
    <SvgIcon
      {...restProps}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      sx={{ width: `${width}px`, height: `${height}px` }}
    >
      <path d="M9.9 41.163c-.8 0-1.483-.283-2.05-.85a2.794 2.794 0 0 1-.85-2.05v-7.8h2.25v7.8c0 .167.067.317.2.45s.283.2.45.2h7.8v2.25H9.9Zm20.4 0v-2.25h7.8a.622.622 0 0 0 .45-.2.622.622 0 0 0 .2-.45v-7.8H41v7.8c0 .8-.283 1.483-.85 2.05-.567.567-1.25.85-2.05.85h-7.8Zm-13.1-11-6-6 6-6 1.6 1.65-4.35 4.35 4.35 4.35-1.6 1.65Zm13.6 0-1.6-1.65 4.35-4.35-4.35-4.35 1.6-1.65 6 6-6 6ZM7 17.863v-7.8c0-.8.283-1.483.85-2.05a2.794 2.794 0 0 1 2.05-.85h7.8v2.25H9.9a.622.622 0 0 0-.45.2.622.622 0 0 0-.2.45v7.8H7Zm31.75 0v-7.8a.622.622 0 0 0-.2-.45.622.622 0 0 0-.45-.2h-7.8v-2.25h7.8c.8 0 1.483.283 2.05.85.567.567.85 1.25.85 2.05v7.8h-2.25Z" />
    </SvgIcon>
  );
};

export default FrameIcon;

import type { FC } from 'react';

import SvgIcon, { type SvgIconProps } from '@mui/material/SvgIcon';

const DataObjectIcon: FC<SvgIconProps> = props => {
  const { width = 48, height = 49, ...restProps } = props;

  return (
    <SvgIcon
      {...restProps}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      sx={{ width: `${width}px`, height: `${height}px` }}
    >
      <path d="M28.85 39.263v-2.25H34c.8 0 1.475-.275 2.025-.825.55-.55.825-1.225.825-2.025v-4.9c0-1.167.358-2.208 1.075-3.125a5.077 5.077 0 0 1 2.725-1.825v-.3a5.077 5.077 0 0 1-2.725-1.825 4.938 4.938 0 0 1-1.075-3.125v-4.9c0-.8-.275-1.475-.825-2.025-.55-.55-1.225-.825-2.025-.825h-5.15v-2.25H34c1.433 0 2.641.5 3.625 1.5.983 1 1.475 2.2 1.475 3.6v4.9c0 .833.283 1.525.85 2.075.566.55 1.266.825 2.1.825h.85v4.4h-.85c-.834 0-1.534.275-2.1.825-.567.55-.85 1.242-.85 2.075v4.9c0 1.4-.5 2.6-1.5 3.6s-2.2 1.5-3.6 1.5h-5.15Zm-14.85 0c-1.434 0-2.642-.5-3.625-1.5-.984-1-1.475-2.2-1.475-3.6v-4.9c0-.833-.284-1.525-.85-2.075-.567-.55-1.267-.825-2.1-.825H5.1v-4.4h.85c.833 0 1.533-.275 2.1-.825.566-.55.85-1.242.85-2.075v-4.9c0-1.4.5-2.6 1.5-3.6s2.2-1.5 3.6-1.5h5.15v2.25H14c-.8 0-1.475.275-2.025.825-.55.55-.825 1.225-.825 2.025v4.9a4.938 4.938 0 0 1-1.075 3.125 5.076 5.076 0 0 1-2.725 1.825v.3c1.1.3 2.008.908 2.725 1.825a4.938 4.938 0 0 1 1.075 3.125v4.9c0 .8.275 1.475.825 2.025.55.55 1.225.825 2.025.825h5.15v2.25H14Z" />
    </SvgIcon>
  );
};

export default DataObjectIcon;

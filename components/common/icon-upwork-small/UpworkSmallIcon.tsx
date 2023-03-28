import type { FC } from 'react';

import SvgIcon, { type SvgIconProps } from '@mui/material/SvgIcon';

const UpworkSmallIcon: FC<SvgIconProps> = props => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 25">
      <g clip-path="url(#upwork)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.773.163h20.455c.979 0 1.772.77 1.772 1.72v20.56c0 .95-.793 1.72-1.772 1.72H1.773c-.98 0-1.773-.77-1.773-1.72V1.883C0 .932.794.162 1.773.162ZM14.98 13.067c.804.652 1.688 1.052 2.633 1.052 1.272 0 2.31-1.04 2.313-2.313a2.318 2.318 0 0 0-2.313-2.316c-1.701 0-2.254 1.644-2.429 2.623l-.009.034-.195.92Zm-1.91-2.185c.685-2.325 2.37-3.74 4.543-3.74a4.664 4.664 0 0 1 4.655 4.655c0 2.568-2.088 4.672-4.653 4.672-1.2 0-2.247-.366-3.157-.95l-1.038 4.894h-2.395l1.434-6.746c-.677-.853-1.234-1.81-1.689-2.76v1.022c0 2.496-2.03 4.545-4.522 4.545-2.492 0-4.521-2.049-4.513-4.545V5.835h2.34v6.094c0 1.201.977 2.18 2.177 2.18 1.2 0 2.178-.979 2.178-2.18V5.835h2.339c.464 1.589 1.255 3.475 2.301 5.047Z"
        />
      </g>
      <defs>
        <clipPath id="upwork">
          <path d="M0 .163h24v24H0z" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default UpworkSmallIcon;

import type { FC } from 'react';

import SvgIcon, { type SvgIconProps } from '@mui/material/SvgIcon';

const ClutchSmallIcon: FC<SvgIconProps> = props => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 25">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 24.163c6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12s-12 5.373-12 12c0 6.628 5.373 12 12 12Zm3.438-8.272c-.836.752-1.94 1.169-3.151 1.169-2.671 0-4.632-1.962-4.632-4.654 0-2.693 1.899-4.572 4.632-4.572 1.19 0 2.315.397 3.172 1.148l.583.501 2.59-2.588-.649-.584c-1.523-1.376-3.546-2.148-5.697-2.148C7.486 4.163 4 7.627 4 12.386c0 4.738 3.57 8.326 8.286 8.326 2.191 0 4.235-.772 5.74-2.17l.625-.585-2.629-2.586-.584.52Zm-3.279-6.22a2.776 2.776 0 1 1 0 5.552 2.776 2.776 0 0 1 0-5.552Z"
      />
    </SvgIcon>
  );
};

export default ClutchSmallIcon;

import type { FC } from 'react';

import MUITypography, { TypographyProps } from '@mui/material/Typography';

const ErrorMessage: FC<TypographyProps> = ({ children, margin, ...restProps }) => {
  return (
    <>
      {children && (
        <MUITypography
          color="error"
          fontSize="12px"
          sx={margin ? { margin } : { margin: '8px 0' }}
          {...restProps}
        >
          {children}
        </MUITypography>
      )}
    </>
  );
};

export default ErrorMessage;

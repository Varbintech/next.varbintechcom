import type { FC } from 'react';

import NextLink from 'next/link';

import MUIButton, { ButtonProps } from '@mui/material/Button';

const ButtonLink: FC<ButtonProps> = props => {
  const { children, startIcon, variant, size, ...restProps } = props;

  return (
    <MUIButton
      {...restProps}
      variant={variant || 'contained'}
      size={size || 'medium'}
      startIcon={startIcon || null}
      LinkComponent={NextLink}
    >
      {children}
    </MUIButton>
  );
};

export default ButtonLink;

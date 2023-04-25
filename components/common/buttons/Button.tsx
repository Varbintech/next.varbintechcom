import type { FC } from 'react';

import MUIButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button';

type ButtonProps = MuiButtonProps &  {
  rel?: 'noopener noreferrer',
  target?: '_blank',
};

const Button: FC<ButtonProps> = props => {
  const { children, startIcon, variant, size, onClick, ...restProps } = props;

  return (
    <MUIButton
      {...restProps}
      variant={variant || 'contained'}
      size={size || 'medium'}
      startIcon={startIcon || null}
      onClick={onClick}
    >
      {children}
    </MUIButton>
  );
};

export default Button;

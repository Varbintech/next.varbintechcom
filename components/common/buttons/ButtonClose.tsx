import type { FC } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import IconButton, { type IconButtonProps } from '@mui/material/IconButton';

// if ButtonCloseComponent will be used more times, 'const' change to 'let'
const iconButtonId = 0;

const ButtonCloseComponent: FC<IconButtonProps> = props => {
  const { 'aria-label': ariaLabel, size, ...restProps } = props;

  return (
    <IconButton {...restProps} aria-label={ariaLabel || `icon-close-${iconButtonId}`}>
      <CloseIcon fontSize={size || 'medium'} />
    </IconButton>
  );
};

export default ButtonCloseComponent;

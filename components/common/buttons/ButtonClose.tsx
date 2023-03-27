import type { FC } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import IconButton, { type IconButtonProps } from '@mui/material/IconButton';

let iconButtonId = 0;

const ButtonCloseComponent: FC<IconButtonProps> = props => {
  const { 'aria-label': ariaLabel, size, ...restProps } = props;

  return (
    <IconButton {...restProps} aria-label={ariaLabel || `icon-button-${iconButtonId++}`}>
      <CloseIcon fontSize={size || 'medium'} aria-label={`close-icon-${iconButtonId}`} />
    </IconButton>
  );
};

export default ButtonCloseComponent;

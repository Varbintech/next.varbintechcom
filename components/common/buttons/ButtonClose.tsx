import type { FC } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import IconButton, { type IconButtonProps } from '@mui/material/IconButton';

const ButtonCloseComponent: FC<IconButtonProps> = props => {
  const { 'aria-label': ariaLabel, size, ...restProps } = props;

  return (
    <IconButton {...restProps} aria-label="delete">
      <CloseIcon aria-label={ariaLabel || 'close'} fontSize={size || 'medium'} />
    </IconButton>
  );
};

export default ButtonCloseComponent;

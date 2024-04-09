import type { ElementType } from 'react';

import MuiChip, { type ChipProps as MuiChipProps } from '@mui/material/Chip';

export type ChipProps = MuiChipProps & {
  component?: ElementType;
  href?: string;
};

const Chip = (props: ChipProps) => {
  const { component, label, variant, clickable, ...restProps } = props;

  return (
    <MuiChip
      {...restProps}
      component={component || 'div'}
      variant={variant || 'outlined'}
      clickable={clickable !== undefined ? clickable : true}
      label={label}
    />
  );
};

export default Chip;

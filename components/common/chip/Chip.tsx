import type { ElementType, FC } from 'react';

import MuiChip, { ChipProps } from '@mui/material/Chip';

export type ChipLinkProps = ChipProps & {
  component?: ElementType;
  href?: string;
};

const Chip: FC<ChipLinkProps> = props => {
  const { component, label, variant, ...restProps } = props;

  return (
    <MuiChip
      {...restProps}
      component={component || 'div'}
      label={label}
      variant={variant || 'outlined'}
      clickable
    />
  );
};

export default Chip;

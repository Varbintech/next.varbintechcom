import type { ElementType, FC } from 'react';

import MuiChip, { type ChipProps as MuiChipProps} from '@mui/material/Chip';

export type ChipProps = MuiChipProps & {
  component?: ElementType;
  href?: string;
};

const Chip: FC<ChipProps> = props => {
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

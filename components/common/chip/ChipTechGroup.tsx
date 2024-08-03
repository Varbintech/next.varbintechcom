import type { ElementType } from 'react';

import Stack, { type StackProps } from '@mui/material/Stack';

const ChipTechGroup = ({
  children,
  direction,
  gap,
  flexWrap,
  ...restProps
}: StackProps & { component?: ElementType }) => {
  return (
    <Stack
      direction={direction || 'row'}
      gap={gap || 2}
      flexWrap={flexWrap || 'wrap'}
      {...restProps}
    >
      {children}
    </Stack>
  );
};

export default ChipTechGroup;

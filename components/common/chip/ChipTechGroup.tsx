import type { ReactNode } from 'react';

import Stack from '@mui/material/Stack';

interface ChipTechGroupProps {
  children: ReactNode;
}

const ChipTechGroup = ({ children }: ChipTechGroupProps) => {
  return (
    <Stack direction="row" gap={2} flexWrap="wrap">
      {children}
    </Stack>
  );
};

export default ChipTechGroup;

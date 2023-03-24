import type { FC } from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { EmptyFunction } from '../../models/common';

import Button from '../../components/common/buttons/Button';

import { CustomServicesContainer } from './styled-components';

interface CustomServicesProps {
  onOpenDialog?: EmptyFunction;
}

const CustomServices: FC<CustomServicesProps> = props => {
  const { onOpenDialog } = props;

  const handleOpenDialog = () => {
    onOpenDialog && onOpenDialog();
  };

  return (
    <CustomServicesContainer>
      <Stack textAlign="center">
        <Typography
          variant="h3"
          textTransform="uppercase"
          sx={{ fontSize: { xs: '24px', lg: '32px' } }}
        >
          Custom services
        </Typography>
        <Typography
          variant="caption"
          textTransform="uppercase"
          sx={{ marginBottom: { xs: '26px', md: '18px' } }}
        >
          Let&#39;s make a difference together
        </Typography>

        <Button
          onClick={handleOpenDialog}
          sx={{
            margin: { xs: '0 16px', md: '0 auto' },
            width: { xs: 'auto', md: '320px' },
          }}
        >
          Contact now
        </Button>
      </Stack>
    </CustomServicesContainer>
  );
};

export default CustomServices;

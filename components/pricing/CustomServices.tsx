import { useState, type MouseEvent } from 'react';

import dynamic from 'next/dynamic';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { generateEvent } from '../../lib/gtag';

import Button from '../common/buttons/Button';

import { CustomServicesContainer, CustomServicesWrapper } from './styled-components';

const DynamicDialogCustomServices = dynamic(
  () => import('../dialogs/custom-services/DialogCustomServices'),
);

const CustomServices = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = (): void => {
    setOpenDialog(false);
  };

  const handleOpenDialog = (event: MouseEvent<HTMLButtonElement>) => {
    setOpenDialog(true);

    generateEvent('button', event.currentTarget.id);
  };

  return (
    <CustomServicesContainer id="customServices">
      <Container maxWidth="lg">
        <CustomServicesWrapper>
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
              id="contactNow"
              onClick={handleOpenDialog}
              sx={{
                margin: { xs: '0 16px', md: '0 auto' },
                width: { xs: 'auto', md: '320px' },
              }}
            >
              Contact now
            </Button>
          </Stack>
        </CustomServicesWrapper>
        {openDialog ? <DynamicDialogCustomServices onClose={handleCloseDialog} /> : null}
      </Container>
    </CustomServicesContainer>
  );
};

export default CustomServices;

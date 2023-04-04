import dynamic from 'next/dynamic';

import Stack from '@mui/system/Stack';
import Box from '@mui/system/Box';
import Container from '@mui/material/Container';

import { Settings } from '../../../constants/settings';

import Button from '../buttons/Button';

import NavigationLinks from './NavigationLinks';
import ElevationScroll from './ElevationScroll';
import SiteLogo from './SiteLogo';

import { AppBarStyled } from './styled-components';

const DynamicNavigationMobile = dynamic(() => import('./NavigationMobile'));

const Navigation = () => {
  return (
    <ElevationScroll>
      <AppBarStyled position="fixed">
        <Container maxWidth="lg">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <SiteLogo />

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <nav aria-label="navigation">
                <Stack direction="row" spacing={3}>
                  <NavigationLinks />
                </Stack>
              </nav>
            </Box>

            <Stack direction="row" spacing={3} sx={{ height: '40px' }}>
              <Button
                size="small"
                href={Settings.CalendlyLink}
                sx={{ height: '40px', display: 'flex' }}
              >
                Get started
              </Button>

              <DynamicNavigationMobile />
            </Stack>
          </Stack>
        </Container>
      </AppBarStyled>
    </ElevationScroll>
  );
};

export default Navigation;

import Stack from '@mui/system/Stack';
import Box from '@mui/system/Box';
import Container from '@mui/material/Container';

import { Settings } from '../../../constants/settings';

import { useGenerateEventGa } from '../../../hooks/use-generate-event-ga';

import Button from '../buttons/Button';

import NavigationLinks from './NavigationLinks';
import ElevationScroll from './ElevationScroll';
import SiteLogo from './SiteLogo';
import NavigationMobile from './NavigationMobile';

import { AppBarStyled } from './styled-components';

const Navigation = () => {
  const handleGetStartedClick = useGenerateEventGa('button');
  const handleSiteLogoClick = useGenerateEventGa('link');

  return (
    <ElevationScroll>
      <AppBarStyled position="fixed">
        <Container maxWidth="lg">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <SiteLogo onGa={handleSiteLogoClick} isDarkTheme={Settings.DarkThemeAvailable} />

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
                id="getStarted"
                href={Settings.CalendlyLink}
                sx={{ height: '40px', display: 'flex' }}
                onClick={handleGetStartedClick}
              >
                Get started
              </Button>

              <NavigationMobile />
            </Stack>
          </Stack>
        </Container>
      </AppBarStyled>
    </ElevationScroll>
  );
};

export default Navigation;

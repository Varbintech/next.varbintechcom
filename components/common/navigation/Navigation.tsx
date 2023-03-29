import { useState } from 'react';

import Stack from '@mui/system/Stack';
import Box from '@mui/system/Box';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';

import { Settings } from '../../../constants/settings';

import Button from '../buttons/Button';
import NavigationLinks from './NavigationLinks';
import ElevationScroll from './ElevationScroll';
import SiteLogo from './SiteLogo';

import { AppBarStyled, NavigationDrawer } from './styled-components';

const Navigation = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

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
              <Button size="small" href={Settings.CalendlyLink} sx={{ height: '40px', display: 'flex' }}>Get started</Button>

              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                {open ? (
                  <Button onClick={toggleDrawer(false)} size="small" id="close" aria-label="Close navigation" sx={{ width: '40px', height: '40px' }}>
                    <CloseIcon />
                  </Button>
                ) : (
                  <Button onClick={toggleDrawer(true)} size="small" id="open" aria-label="Open navigation" sx={{ width: '40px', height: '40px' }}>
                    <MenuIcon />
                  </Button>
                )}

                <NavigationDrawer anchor="top" open={open} onClose={toggleDrawer(false)}>
                  <nav aria-label="navigation">
                    <Stack alignItems="center">
                      <NavigationLinks />
                    </Stack>
                  </nav>
                </NavigationDrawer>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </AppBarStyled>
    </ElevationScroll>
  );
};

export default Navigation;

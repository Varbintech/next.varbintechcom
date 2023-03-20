import { useState } from 'react';

import { useRouter } from 'next/router';

import Stack from '@mui/system/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { useThemeMode } from '../../../hooks/use-theme-mode';

import Button from '../buttons/Button';
import LogoBlackIcon from '../icon-logo/LogoBlackIcon';
import NavigationLinks from './NavigationLinks';

import { LogoButtonContainer, NavigationContainer, NavigationDrawer } from './styled-components';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const theme = useThemeMode();
  const smallScreens = useMediaQuery(theme.breakpoints.down('md'));

  const dashboardClick = () => {
    router.push('/');
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <NavigationContainer>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <LogoButtonContainer disableRipple disableTouchRipple onClick={dashboardClick}>
          <LogoBlackIcon />
        </LogoButtonContainer>

        {!smallScreens ? (
          <nav aria-label="navigation">
            <Stack direction="row" spacing={3}>
              <NavigationLinks />
            </Stack>
          </nav>
        ) : null}
        <Stack direction="row" spacing={3}>
          <Button size="small">Get started</Button>

          {smallScreens ? (
            <>
              {open ? (
                <Button onClick={toggleDrawer(false)} size="small">
                  <CloseIcon />
                </Button>
              ) : (
                <Button onClick={toggleDrawer(true)} size="small">
                  <MenuIcon />
                </Button>
              )}

              <NavigationDrawer anchor="top" open={open} onClose={toggleDrawer(false)}>
                <nav aria-label="navigation">
                  <Stack spacing={2} alignItems="center">
                    <NavigationLinks />
                  </Stack>
                </nav>
              </NavigationDrawer>
            </>
          ) : null}
        </Stack>
      </Stack>
    </NavigationContainer>
  );
};

export default Navigation;

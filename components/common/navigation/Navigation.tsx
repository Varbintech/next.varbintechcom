import { type ReactElement, cloneElement, useState } from 'react';

import Stack from '@mui/system/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import { useThemeMode } from '../../../hooks/use-theme-mode';

import Button from '../buttons/Button';
import LogoBlackIcon from '../icon-logo/LogoBlackIcon';
import NavigationLinks from './NavigationLinks';

import { AppBarStyled, LogoContainer, NavigationDrawer } from './styled-components';

interface ElevationScrollProps {
  children: ReactElement;
}

const ElevationScroll = (props: ElevationScrollProps) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const theme = useThemeMode();
  const smallScreens = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <ElevationScroll>
      <AppBarStyled position="fixed">
        <Container maxWidth="lg">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <LogoContainer href="/">
              <LogoBlackIcon />
            </LogoContainer>

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
                      <Stack alignItems="center">
                        <NavigationLinks />
                      </Stack>
                    </nav>
                  </NavigationDrawer>
                </>
              ) : null}
            </Stack>
          </Stack>
        </Container>
      </AppBarStyled>
    </ElevationScroll>
  );
};

export default Navigation;

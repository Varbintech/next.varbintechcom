import { useState } from 'react';

import Box from '@mui/system/Box';
import Stack from '@mui/system/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import Button from '../buttons/Button';
import NavigationLinks from './NavigationLinks';
import { NavigationDrawer } from './styled-components';

const NavigationMobile = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      {open ? (
        <Button
          onClick={toggleDrawer(false)}
          size="small"
          id="close"
          aria-label="Close navigation"
          sx={{ width: '40px', height: '40px' }}
        >
          <CloseIcon />
        </Button>
      ) : (
        <Button
          onClick={toggleDrawer(true)}
          size="small"
          id="open"
          aria-label="Open navigation"
          sx={{ width: '40px', height: '40px' }}
        >
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
  );
};

export default NavigationMobile;

import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Drawer from '@mui/material/Drawer';

export const NavigationContainer = styled('header')(({ theme }) => ({
  margin: '24px 0 98px',

  '.MuiLink-root': {
    color: theme.palette.text.secondary,
    borderBottom: '1px solid transparent',

    '&:hover, &.isActive': {
      color: theme.palette.text.primary,
      borderBottomColor: theme.palette.text.primary,
    },
  },
}));

export const LogoButtonContainer = styled(ButtonBase)`
  width: 68px;
  height: 40px;
`;

export const NavigationDrawer = styled(Drawer)(({ theme }) => ({
  top:' 88px',

  '.MuiBackdrop-root, .MuiDrawer-paper': {
    top: '88px',
  },

  '.MuiPaper-root': {
    padding: '16px 16px 60px',
    borderRadius: '0 0 8px 8px',
    boxShadow: 'none',
  },

  '.MuiLink-root': {
    fontSize: '1.5em',
    color: theme.palette.text.secondary,
    borderBottom: '1px solid transparent',

    '&:hover, &.isActive': {
      color: theme.palette.text.primary,
      borderBottomColor: theme.palette.text.primary,
    },
  },
}));

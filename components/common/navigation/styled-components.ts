import Link from 'next/link';

import { styled } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';

export const AppBarStyled = styled(AppBar)(({ theme }) => ({
  padding: '24px 0',

  '.MuiLink-root': {
    padding: '13px 0',
    lineHeight: '1em',
    color: theme.palette.text.secondary,
    borderBottom: '1px solid transparent',

    '&:hover, &.isActive': {
      color: theme.palette.text.primary,
      borderBottomColor: theme.palette.text.primary,
    },
  },
}));

export const LogoContainer = styled(Link)`
  width: 68px;
  height: 40px;
`;

export const NavigationDrawer = styled(Drawer)(({ theme }) => ({
  top: '88px',

  '.MuiBackdrop-root, .MuiDrawer-paper': {
    top: '88px',
  },

  '.MuiPaper-root': {
    padding: '16px 16px 60px',
    borderRadius: '0 0 8px 8px',
    boxShadow: 'none',
  },

  '.MuiLink-root': {
    padding: '13px 0',
    lineHeight: '1em',
    fontSize: '1.5em',
    color: theme.palette.text.secondary,
    borderBottom: '1px solid transparent',

    '&:hover, &.isActive': {
      color: theme.palette.text.primary,
      borderBottomColor: theme.palette.text.primary,
    },
  },
}));

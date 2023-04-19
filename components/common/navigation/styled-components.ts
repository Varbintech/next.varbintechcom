import Link from 'next/link';

import { styled } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';

export const AppBarStyled = styled(AppBar)(({ theme }) => ({
  padding: '24px 0',
  backgroundImage: 'none',

  '.MuiLink-root': {
    padding: '13px 0',
    lineHeight: '1em',
    color: theme.palette.text.secondary,
    borderBottom: '1px solid transparent',

    '&:hover, &:focus, &.isActive': {
      color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.text.primary,
      borderBottomColor: theme.palette.mode === 'dark' ? '#fff' : theme.palette.text.primary,
    },
  },
}));

export const LogoContainer = styled(Link)`
  width: 68px;
  height: 40px;
  display: block;
`;

export const NavigationDrawer = styled(Drawer)(({ theme }) => ({
  top: '88px',

  '.MuiBackdrop-root, .MuiDrawer-paper': {
    top: '88px',
  },

  '.MuiPaper-root': {
    padding: '8px 16px 48px',
    borderRadius: '0 0 8px 8px',
    boxShadow: 'none',
    backgroundImage: 'none',
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : '',
  },

  '.MuiLink-root': {
    padding: '13px 0',
    lineHeight: '1em',
    fontSize: '1.5em',
    color: theme.palette.text.secondary,
    borderBottom: '1px solid transparent',

    '&:hover, &.isActive': {
      color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.text.primary,
      borderBottomColor: theme.palette.mode === 'dark' ? '#fff' : theme.palette.text.primary,
    },
  },
}));

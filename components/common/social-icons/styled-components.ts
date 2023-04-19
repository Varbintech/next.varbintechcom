import { styled } from '@mui/material/styles';

import Link from '@mui/material/Link';

export const SocialLink = styled(Link)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '26px',
  height: '26px',
  borderRadius: '50%',
  transition:
    'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),color 250ms cubic-bezier(0.4, 0, 0.2, 1)',

  '&.inverse-color': {
    color:
      theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.background.paper,
    background:
      theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,

    '&:hover': {
      color:
        theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
      background:
        theme.palette.mode === 'dark'
          ? theme.palette.secondary.main
          : theme.palette.background.paper,
    },
  },
}));

export const SocialRedditLink = styled(SocialLink)(({ theme }) => ({
  color: theme.palette.background.paper,
  background: theme.palette.primary.main,

  '&:hover': {
    color: theme.palette.primary.main,
    background: theme.palette.background.paper,
  },

  '&.inverse-color': {
    color: theme.palette.primary.main,
    background: theme.palette.background.paper,

    '&:hover': {
      color: theme.palette.background.paper,
      background: theme.palette.primary.main,
    },
  },
}));

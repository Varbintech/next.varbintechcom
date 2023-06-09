import { alpha, styled } from '@mui/material/styles';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const PageContainer = styled('div')(({ theme }) => ({
  padding: '195px 0 20px',

  [theme.breakpoints.up('lg')]: {
    padding: '230px 0 20px',
  },
}));

export const DiscoverTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '34px',
  fontSize: '32px',
  lineHeight: 1,

  [theme.breakpoints.up('md')]: {
    marginTop: '40px',
  },

  [theme.breakpoints.up('lg')]: {
    marginBottom: '42px',
    fontSize: '40px',
  },
}));

export const DiscoverItemContainer = styled('div')(({ theme }) => ({
  padding: '36px 0',
  borderBottom: '2px solid',
  borderColor: alpha(theme.palette.primary.main, 0.1),
}));

export const DiscoverColumn = styled(Stack)(({ theme }) => ({
  borderTop: '2px solid',
  borderColor: alpha(theme.palette.primary.main, 0.1),

  [theme.breakpoints.down('md')]: {
    width: '50%',
  },
}));

export const DiscoverItemTitle = styled('div')(({ theme }) => ({
  marginBottom: '16px',
  textTransform: 'uppercase',
  color: theme.palette.secondary.main,
  fontWeight: 500,
}));

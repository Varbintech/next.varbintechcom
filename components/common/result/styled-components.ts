import { styled } from '@mui/material/styles';

export const PageContainer = styled('div')(({ theme }) => ({
  padding: '60px 0 64px',
  backgroundColor: theme.palette.primary.light,

  [theme.breakpoints.up('lg')]: {
    padding: '60px 0 82px',
  },
}));

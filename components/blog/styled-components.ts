import { styled } from '@mui/material/styles';

export const PageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: '0 0 64px',
  zIndex: 10,

  [theme.breakpoints.up('lg')]: {
    marginTop: '-50px',
    padding: '0 0 120px',
  },
}));

import { styled } from '@mui/material/styles';

export const PageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: '58px 0 64px',
  backgroundColor: theme.palette.primary.light,

  [theme.breakpoints.up('lg')]: {
    padding: '112px 0 120px',
  },
}));

export const IconRightContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  right: '30px',
  bottom: '-37px',
  width: '121px',
  height: '121px',

  [theme.breakpoints.down('md')]: {
    right: '-5px',
    bottom: '-45px',
    transform: 'scale(0.7)',
  },
}));

export const IconLeftContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: '30px',
  bottom: '-37px',
  width: '121px',
  height: '121px',

  [theme.breakpoints.down('md')]: {
    right: '-5px',
    bottom: '-45px',
    transform: 'scale(0.7)',
  },
}));

import { styled } from '@mui/material/styles';

export const PageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  padding: '36px 0 64px',
  backgroundColor: theme.palette.background.paper,

  [theme.breakpoints.up('lg')]: {
    padding: '20px 0 115px',
  },
}));

export const IconRightContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  right: '-20px',
  top: '70px',
  width: '121px',
  height: '121px',
  transform: 'rotate(180deg)',

  [theme.breakpoints.down('lg')]: {
    right: '-85px',
  },
}));

export const IconLeftContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '10px',
  left: '-15px',
  width: '82px',
  height: '97px',
  transform: 'rotate(60deg)',

  [theme.breakpoints.down('lg')]: {
    left: '-115px',
  },
}));

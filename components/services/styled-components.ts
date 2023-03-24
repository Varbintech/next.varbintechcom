import { styled } from '@mui/material/styles';

export const PageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  padding: '58px 0 64px',
  backgroundColor: theme.palette.primary.light,

  [theme.breakpoints.up('lg')]: {
    padding: '112px 0 120px',
  },
}));

export const IconRightContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  right: '-65px',
  bottom: '310px',
  width: '121px',
  height: '121px',
  transform: 'rotate(60deg)',

  [theme.breakpoints.down('lg')]: {
    right: '-95px',
    bottom: '-53px',
  },
}));

export const IconLeftContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '240px',
  left: '0',
  width: '82px',
  height: '97px',

  [theme.breakpoints.down('lg')]: {
    top: '105px',
    left: '-45px',
  },
}));

export const ServiceItemContainer = styled('div')(({ theme }) => ({
  padding: '20px',
  minHeight: '240px',
  textAlign: 'center',
  borderRadius: '8px',
  background: theme.palette.background.paper,
  boxShadow: '0 8px 12px rgba(0, 0, 0, 0.04)',
}));

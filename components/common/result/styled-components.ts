import { styled } from '@mui/material/styles';

export const PageContainer = styled('div')(({ theme }) => ({
  padding: '60px 0 20px',
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: '-100%',
    bottom: 0,
    left: '-100%',
    backgroundColor: theme.palette.primary.light,
    zIndex: -1,
  },
}));

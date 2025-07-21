import { styled } from '@mui/material/styles';

export const CubeContainerStyled = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: '50%',
  marginTop: '-35px',
  marginLeft: '-40px',
  width: '80px',
  height: '80px',
  zIndex: 1,

  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

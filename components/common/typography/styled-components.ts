import { styled } from '@mui/material/styles';

export const ListContainer = styled('ol')(({ theme }) => ({
  paddingLeft: 0,

  [theme.breakpoints.up('md')]: {
    paddingLeft: '40px',
  },
}));

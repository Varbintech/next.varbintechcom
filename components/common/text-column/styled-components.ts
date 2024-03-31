import { styled } from '@mui/material/styles';
import List from '@mui/material/List';

export const ListStyled = styled(List)(({ theme }) => ({
  padding: 0,

  '.MuiListItem-root': {
    padding: 0,
    color: '#4d4d4d',
  },

  '.MuiListItemIcon-root': {
    minWidth: '36px',
    color: theme.palette.primary.main,

    svg: {
      fontSize: '20px',
    },
  },

  li: {
    p: {
      padding: 0,
      margin: 0,
    },
  },
}));

import { styled } from '@mui/material/styles';
import List from '@mui/material/List';

export const ListStyled = styled(List)(({ theme }) => ({
  padding: 0,

  '.MuiListItem-root': {
    padding: 0,
  },

  '.MuiListItemIcon-root': {
    minWidth: '36px',
    color: theme.palette.primary.main,

    svg: {
      fontSize: '20px',
    },
  },
}));

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

export const DialogButtonCloseWrapper = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '8px',
  right: '8px',
  transform: 'translate3d(0, 0, 0)',
  zIndex: 10,

  '.MuiIconButton-root': {
    color: theme.palette.primary.main,
  },
}));

export const DialogBaseTitle = styled('div')(({ theme }) => ({
  padding: '34px 16px 16px',
  textAlign: 'center',

  [theme.breakpoints.up('md')]: {
    padding: '42px 16px 32px',
  },
}));

export const StyledMuiDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiPaper-root': {
    width: '570px',
    borderRadius: '8px',
    boxShadow: 'none',

    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(2),
    },
  },

  '.MuiDialogContent-root': {
    padding: '0 16px 16px',

    [theme.breakpoints.up('md')]: {
      padding: '0 40px 16px',
    },
  },

  '.MuiDialogActions-root': {
    padding: '8px 16px 16px',

    [theme.breakpoints.up('md')]: {
      padding: '8px 40px 40px',
    },
  },
}));

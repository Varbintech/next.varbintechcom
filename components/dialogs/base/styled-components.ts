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

export const StyledMuiDialog = styled(Dialog)(({ theme, fullScreen, fullWidth }) => ({
  '& .MuiPaper-root': {
    width: fullScreen || fullWidth ? '100%' : '570px',
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

export const StyledIFrame = styled('iframe')`
  z-index: 2147483647;
  display: block;
  background-color: transparent;
  border: 0px none transparent;
  overflow-x: hidden;
  overflow-y: auto;
  visibility: visible;
  margin: 0px;
  padding: 0px;
  -webkit-tap-highlight-color: transparent;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  flex-shrink: 0;
`;

export const IFrameContainer = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
`;

export const IFrameLoadingContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-around',
  padding: '0 8px',

  [theme.breakpoints.up('md')]: {
    padding: '0 40px',
  },
}));

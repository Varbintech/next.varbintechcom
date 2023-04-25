import { styled } from '@mui/material/styles';

import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';

import ButtonClose from '../buttons/ButtonClose';

export const PopperStyled = styled(Popper)(({ theme }) => ({
  zIndex: 1200,
  bottom: 0,
  right: 0,
  margin: '16px !important',
  top: 'auto !important',
  left: 'auto !important',
  transform: 'none !important',
  inset: 'auto 0 0 auto !important',
  padding: '24px',
  maxWidth: '470px',
  color: theme.palette.background.paper,
  background:
    theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.primary.main,
  borderRadius: '8px',
}));

export const ButtonCloseContainer = styled('div')`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const ButtonCloseStyled = styled(ButtonClose)(({ theme }) => ({
  color: theme.palette.background.paper,
}));

export const PopperTitle = styled(Typography)(({ theme }) => ({
  display: 'flex',
  gap: '16px',
  marginBottom: '8px',
  color: theme.palette.background.paper,
}));

export const PopperText = styled(Typography)(({ theme }) => ({
  marginBottom: '18px',
  color: theme.palette.primary.contrastText,
  lineHeight: '1.4em',
}));

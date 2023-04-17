import { styled } from '@mui/material/styles';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const PageContainer = styled('div')`
  position: relative;
  overflow: hidden;
`;

export const IconLeftContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '285px',
  left: '-5px',
  width: '82px',
  height: '97px',

  [theme.breakpoints.down('lg')]: {
    left: '-80px',
  },
}));

export const ContactContainer = styled(Stack)`
  overflow: hidden;
  border-radius: 8px;
`;

export const ContactMainContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  padding: '35px 24px 24px',
  minHeight: '270px',
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,

  [theme.breakpoints.up('lg')]: {
    padding: '56px 60px',
    maxWidth: '500px',
  },
}));

export const ContactImageContainer = styled('div')`
  width: 100%;
`;

export const ImageWrapper = styled('div')(({ theme }) => ({
  marginBottom: '-1px',
  overflow: 'hidden',

  img: {
    verticalAlign: 'top',
    width: '100%',
    height: 'auto',
  },

  [theme.breakpoints.down('md')]: {
    maxHeight: '225px',
  },
}));

export const ContactEmail = styled(Typography)(({ theme }) => ({
  marginBottom: '12px',
  color: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.background.paper,
  fontWeight: 700,
  lineHeight: 1,

  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
  },
}));

export const ContactText = styled(Typography)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.background.paper,
  opacity: '0.5',
}));

export const ContactIconContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '82px',
  right: '-55px',

  [theme.breakpoints.down('md')]: {
    top: '-63px',
    right: '100px',
    transform: 'scale(0.9)',
  },
}));

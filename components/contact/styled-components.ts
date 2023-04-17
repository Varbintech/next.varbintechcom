import { styled } from '@mui/material/styles';

import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export const PageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
}));

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

export const ContactLink = styled(Link)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '26px',
  height: '26px',
  color: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.background.paper,
  background: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
  borderRadius: '50%',
  transition:
    'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),color 250ms cubic-bezier(0.4, 0, 0.2, 1)',

  '&:hover': {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    background: theme.palette.mode === 'dark' ? theme.palette.secondary.main : theme.palette.background.paper,
  },
}));

export const ContactRedditLink = styled(ContactLink)(({ theme }) => ({
  color: theme.palette.primary.main,
  background: theme.palette.background.paper,

  '&:hover': {
    color: theme.palette.background.paper,
    background: theme.palette.primary.main,
  },
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

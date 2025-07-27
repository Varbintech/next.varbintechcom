import Box from '@mui/material/Box';

import { styled } from '@mui/material/styles';

import Link from '../link/Link';

export const TableOfContentContainer = styled('div')`
  position: sticky;
  top: 128px;
`;

export const TocLinkStyled = styled(Link)(({ theme }) => ({
  fontWeight: 400,
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    left: '-100%',
    top: '50%',
    transform: 'translateY(-50%)',
    width: theme.spacing(1),
    height: theme.spacing(1),
    borderRadius: '100%',
    backgroundColor: 'transparent',
  },

  '&.isActive': {
    fontWeight: 600,

    '&::before': {
      left: theme.spacing(-2),
      backgroundColor: theme.palette.primary.main,
    },
  },

  '&.level-1': {
    paddingLeft: theme.spacing(1),
  },

  '&.level-2': {
    paddingLeft: theme.spacing(2),
  },

  '&.level-3': {
    paddingLeft: theme.spacing(3),
  },

  '&.level-4': {
    paddingLeft: theme.spacing(4),
  },

  '&.level-5': {
    paddingLeft: theme.spacing(5),
  },

  '&.level-6': {
    paddingLeft: theme.spacing(6),
  },
}));

export const TableOfContentFixedHeight = styled(Box)(({ theme }) => ({
  height: 'calc(100vh - 128px)',
  overflowY: 'auto',
  paddingInline: theme.spacing(2),
  marginLeft: theme.spacing(-2),

  '&::-webkit-scrollbar': {
    width: '8px',
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: '0',

    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },

  '&::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.background.default,
    margin: '250px 0 40px',
  },

  '&::-webkit-scrollbar-corner': {
    backgroundColor: theme.palette.background.default,
  },
}));

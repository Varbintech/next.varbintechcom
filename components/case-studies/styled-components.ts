import { alpha, styled } from '@mui/material/styles';

export const PageContainer = styled('span')(({ theme }) => ({
  padding: '52px 0',
  backgroundColor: theme.palette.secondary.dark,
  display: 'block',

  '&.lightBackground': {
    backgroundColor: theme.palette.background.paper,
  },

  [theme.breakpoints.up('lg')]: {
    padding: '94px 0',
  },
}));

export const CaseStudiesContainer = styled('div')`
  position: relative;
`;

export const ImageContainer = styled('span')`
  display: block;
  width: 100%;

  & > div {
    position: unset !important;
  }

  img {
    display: inline-block;
    vertical-align: top;
    position: relative !important;
    width: 100% !important;
    height: unset !important;
    object-fit: cover;
    object-position: top;
  }
`;

export const ImageWrapper = styled('span')(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  maxWidth: '586px',

  '> .inner-wrapper': {
    overflow: 'hidden',
    borderRadius: '16px',
    border: `8px solid ${alpha(theme.palette.primary.main, 0.1)}`,
    display: 'flex',
    maxWidth: '586px',
    maxHeight: '429px',
    flex: 1,
  },
}));

export const IconContainer = styled('span')(({ theme }) => ({
  position: 'absolute',
  right: '30px',
  bottom: '-37px',
  width: '121px',
  height: '121px',

  [theme.breakpoints.down('md')]: {
    right: '-5px',
    bottom: '-45px',
    transform: 'scale(0.7)',
  },
}));

export const IconLeftContainer = styled(IconContainer)(({ theme }) => ({
  position: 'absolute',
  right: 'auto',
  left: '-33px',
  bottom: '-5px',
  width: '121px',
  height: '121px',
  transform: 'rotate(60deg)',

  [theme.breakpoints.down('md')]: {
    left: '-45px',
    bottom: '-20px',
    transform: 'scale(0.7) rotate(60deg)',
  },
}));

export const ChipContainer = styled('div')`
  margin: 16px 0;
`;

export const TextContainer = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    maxWidth: '40%',
  },
}));

export const ListContainer = styled('ul')`
  margin: 8px 0 24px;
  padding: 0 0 0 20px;
  line-height: 1.4em;

  li {
    margin-bottom: 8px;
  }
`;

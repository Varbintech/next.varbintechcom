import { keyframes, styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Image from 'next/image';

export const PageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  overflowX: 'hidden',
  minHeight: '100vh',
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : '#fff',
  backgroundImage:
    theme.palette.mode === 'dark'
      ? ''
      : 'linear-gradient(180deg, rgba(242, 242, 242, 0) 0%, rgba(242, 242, 242, 0.24) 100%)',

  '&.page-small': {
    minHeight: '375px',

    [theme.breakpoints.down('lg')]: {
      minHeight: 'auto',
    },
  },

  '&.page-plainBg': {
    backgroundImage: 'none',
  },
}));

export const ContainerStyled = styled(Container)(({ theme }) => ({
  position: 'relative',
  marginBottom: '116px',
  padding: '160px 24px 0',

  [theme.breakpoints.up('lg')]: {
    padding: '270px 24px 0',
  },

  '.page-small &': {
    marginBottom: '60px',
    padding: '112px 60px 0',

    [theme.breakpoints.up('md')]: {
      marginBottom: '72px',
      padding: '135px 60px 0',
    },
  },
}));

export const RectangleLeftIconContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '638px',
  left: 0,

  [theme.breakpoints.down('lg')]: {
    top: '75vh',
    left: '-40px',
  },

  '.page-small &': {
    top: '266px',

    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  },
}));

export const RectangleRightIconContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '270px',
  right: 0,

  [theme.breakpoints.down('lg')]: {
    top: '107px',
    width: '40px',
    overflow: 'hidden',
  },

  '.page-small &': {
    top: '131px',

    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  },
}));

export const BoxIconContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '423px',
  left: '-100px',

  [theme.breakpoints.down('lg')]: {
    top: '77px',
    left: '-60px',
  },

  '.page-small &': {
    top: '175px',

    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  },
}));

export const TriangleIconContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '496px',
  right: '-100px',

  [theme.breakpoints.down('lg')]: {
    top: '73vh',
    right: 0,
    width: '88px',
  },

  '.page-small &': {
    top: '225px',
    height: '150px',
    overflow: 'hidden',

    [theme.breakpoints.down('lg')]: {
      display: 'none',
    },
  },
}));

const primary = keyframes`
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1341px;
  }
`;

export const FixedBottomContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  overflow: 'hidden',
  bottom: 0,
  left: 0,
  right: 0,
  height: '70px',
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.contrastText : '#fff',
  borderTop:
    theme.palette.mode === 'dark'
      ? `1px solid ${theme.palette.background.default}`
      : '1px solid #f2f2f2',
  transform: 'translate3d(0, 0, 0)',
}));

export const ScrollContainer = styled(Stack)`
  margin-top: 22px;
  justify-content: center;

  img {
    width: auto;
    height: auto;
  }

  img,
  svg {
    max-height: 26px;
  }
`;

export const FirstItem = styled(Image)`
  // @TODO Uncomment when more logos
  // animation: ${primary} 10s linear infinite;
`;

export const TitleTypography = styled(Typography)(({ theme }) => ({
  marginBottom: '10px',
  marginLeft: 'auto',
  marginRight: 'auto',
  fontSize: '2em',
  maxWidth: '620px',

  [theme.breakpoints.up('md')]: {
    marginBottom: '24px',
    fontSize: '3.5em',
  },
}));

export const HeroDetailsStyled = styled('div')(({ theme }) => ({
  paddingTop: '112px',
  paddingBottom: '72px',

  [theme.breakpoints.up('md')]: {
    paddingTop: '135px',
  },

  '&.bg-colored': {
    paddingBottom: '150px',
    backgroundColor: theme.palette.secondary.dark,

    [theme.breakpoints.up('md')]: {
      paddingBottom: '240px',
    },
  },

  '.centered': {
    textAlign: 'center',

    '.MuiStack-root': {
      justifyContent: 'center',
    },
  },
}));

export const HeroDetailsBgImage = styled('div')<{ imageUrl?: string }>`
  @media only screen and (min-width: 900px) {
    background-image: ${({ imageUrl }) =>
      imageUrl
        ? `linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.4) 100%), url(${imageUrl})`
        : ''};
    background-size: cover;
  }
`;

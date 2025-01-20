import { darken, styled, keyframes } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const BoxIconKeyframes = keyframes`
  from, 0%, 100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }

  50% {
    transform: translate3d(0, -100%, 0) rotate(90deg);
  }
`;

const TriangleIconKeyframes = keyframes`
  from, 0%, 100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }

  50% {
    transform: translate3d(0, -100%, 0) rotate(-180deg);
  }
`;

export const LogoContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const PageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  overflowX: 'hidden',
  backgroundColor: theme.palette.background.default,
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
    backgroundImage:
      theme.palette.mode === 'dark'
        ? 'linear-gradient(180deg, rgba(242, 242, 242, 0) 0%, rgba(242, 242, 242, 0.24) 100%)'
        : 'none',

    [theme.breakpoints.down('lg')]: {
      marginBottom: theme.palette.mode === 'dark' ? '12px' : '',
    },
  },
}));

export const ContainerStyled = styled(Container)(({ theme }) => ({
  position: 'relative',
  marginBottom: '156px',
  padding: '160px 24px 0',

  [theme.breakpoints.up('lg')]: {
    padding: '200px 24px 0',
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

export const ContainerTechStyled = styled(ContainerStyled)(({ theme }) => ({
  '.page-small &': {
    padding: '0 60px',

    [theme.breakpoints.up('md')]: {
      padding: '0 60px',
    },
  },
}));

export const RectangleLeftIconContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '638px',
  left: 0,

  [theme.breakpoints.down('lg')]: {
    top: '45vh',
    left: '-40px',
  },

  [theme.breakpoints.down('sm')]: {
    top: '69vh',
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
  top: '323px',
  left: '-100px',
  animation: `${BoxIconKeyframes} 15s ease-in-out infinite`,
  zIndex: 5,

  [theme.breakpoints.down('lg')]: {
    top: '177px',
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
  animation: `${TriangleIconKeyframes} 10s ease infinite`,
  zIndex: 5,

  [theme.breakpoints.down('lg')]: {
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

export const FixedBottomContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  overflow: 'hidden',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor:
    theme.palette.mode === 'dark'
      ? darken(theme.palette.background.default, 0.1)
      : theme.palette.background.default,
  borderTop:
    theme.palette.mode === 'dark'
      ? `1px solid ${theme.palette.primary.light}`
      : '1px solid #f2f2f2',
  transform: 'translate3d(0, 0, 0)',
}));

export const ScrollContainer = styled(Stack)`
  margin: 22px 0;
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
  backgroundColor: theme.palette.background.default,
  backgroundImage:
    theme.palette.mode === 'dark'
      ? ''
      : 'linear-gradient(180deg, rgba(242, 242, 242, 0) 0%, rgba(242, 242, 242, 0.24) 100%)',

  [theme.breakpoints.up('md')]: {
    paddingTop: '135px',
  },

  '&.bg-colored': {
    paddingBottom: '150px',
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.secondary.dark,

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
  &.bg-dark-theme {
    margin-bottom: 12px;
    background-color: rgb(59, 61, 77);
  }

  @media only screen and (min-width: 900px) {
    background-image: ${({ imageUrl }) =>
      imageUrl
        ? `linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.4) 100%), url(${imageUrl})`
        : ''};
    background-size: cover;

    &.bg-dark-theme {
      background-image: ${({ imageUrl }) => (imageUrl ? `url(${imageUrl})` : '')};
      background-color: rgba(20, 22, 41, 0.8);
      background-blend-mode: multiply;
    }
  }
`;

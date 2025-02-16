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
    minHeight: '390px',

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
    lineHeight: '1.2',
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

export const HeroBlogDetailsStyled = styled(HeroDetailsStyled)`
  background-color: transparent;

  &.bg-colored {
    background-color: transparent;
  }
`;

export const HeroBlogDetailsBgImage = styled(HeroDetailsBgImage)`
  --bg-size: cover;
  --bg-color: #fff;
  --bg-position: center;
  --bg-repeat: repeat;
  --bg-attachment: fixed;
  --bg-rotate: rotate(208, 462, 544);
  --bg-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(204,834,544)'%3E%3Cstop offset='0' stop-color='%23FFFFFF'/%3E%3Cstop offset='1' stop-color='%23F1F1F1'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='600' height='500' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.04'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E");

  background-image: var(--bg-image);
  background-color: var(--bg-color);
  background-size: var(--bg-size);
  background-position: var(--bg-position);
  background-repeat: var(--bg-repeat);
  background-attachment: var(--bg-attachment);

  @media only screen and (min-width: 900px) {
    background-image: var(--bg-image);
  }
`;

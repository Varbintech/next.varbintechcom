import { keyframes, styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const UpdateLabel = styled('span')(({ theme }) => ({
  display: 'inline-block',
  marginRight: '12px',
  padding: '8px 12px',
  textTransform: 'uppercase',
  lineHeight: 1,
  color: theme.palette.success.main,
  border: `1px solid ${theme.palette.success.main}`,
  borderRadius: '4px',
}));

export const PageContainer = styled('div')`
  position: relative;
  overflow-x: hidden;
  height: 100vh;
  background-color: #fff;
  background-image: linear-gradient(
    180deg,
    rgba(242, 242, 242, 0) 0%,
    rgba(242, 242, 242, 0.24) 100%
  );
`;

export const RectangleLeftIconContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '638px',
  left: 0,

  [theme.breakpoints.down('lg')]: {
    top: '75vh',
    left: '-40px',
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
}));

export const BoxIconContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '423px',
  left: '-100px',

  [theme.breakpoints.down('lg')]: {
    top: '77px',
    left: '-60px',
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
}));

const primary = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: -100%;
  }
`;

const secondary = keyframes`
  0% {
    left: 100%;
  }
  100% {
    left: 0;
  }
`;

export const FixedBottomContainer = styled('div')`
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #fff;
  border-top: 1px solid #f2f2f2;
  transform: translate3d(0, 0, 0);
`;

export const ScrollContainer = styled(Stack)`
  position: absolute;
  left: 0;
  top: 22px;
  width: 100vw;
  height: inherit;
  white-space: nowrap;
  background-color: #fff;
  animation: ${primary} 10s linear infinite;
`;

export const ScrollContainerDublicate = styled(ScrollContainer)`
  animation: ${secondary} 10s linear infinite;
`;

export const TitleTypography = styled(Typography)(({ theme }) => ({
  marginBottom: '10px',
  marginLeft: 'auto',
  marginRight: 'auto',
  fontSize: '3em',
  maxWidth: '620px',

  [theme.breakpoints.up('md')]: {
    marginBottom: '24px',
    fontSize: '3.5em',
  },
}));

export const SubTitleTypography = styled(Typography)`
  margin: 0 auto 32px;
  max-width: 620px;
`;

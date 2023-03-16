import { keyframes, styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

export const UpdateLabel = styled('span')(
  ({ theme }) => `
  display: inline-block;
  padding: 8px 12px;
  text-transform: uppercase;
  line-height: 1;
  color: ${theme.palette.success.main};
  border: 1px solid ${theme.palette.success.main};
  border-radius: 4px;
`,
);

export const PageContainer = styled('div')`
  height: 100vh;
  background-color: #fff;
  background-image: linear-gradient(
    180deg,
    rgba(242, 242, 242, 0) 0%,
    rgba(242, 242, 242, 0.24) 100%
  );
`;

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
  position: fixed;
  overflow-x: hidden;
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

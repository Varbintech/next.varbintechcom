import { styled } from '@mui/material/styles';
import { ImageContainerStyled } from '../common/styled-containers';

export const PageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  padding: '0 0 64px',
  zIndex: 10,

  [theme.breakpoints.up('lg')]: {
    marginTop: '-50px',
    padding: '0 0 120px',
  },
}));

export const ImageContainer = styled(ImageContainerStyled)`
  margin-bottom: 22px;

  .inner-wrapper {
    max-height: 260px;
  }
`;

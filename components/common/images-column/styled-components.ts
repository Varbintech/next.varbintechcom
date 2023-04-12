import { styled } from '@mui/material/styles';
import { ImageContainerStyled } from '../styled-containers';

export const ImageContainer = styled(ImageContainerStyled)`
  max-width: 570px;

  .inner-wrapper {
    max-width: 570px;
    max-height: 400px;
  }

  &.image-alone {
    max-width: 100%;

    .inner-wrapper {
      max-width: 100%;
      max-height: 260px;
    }
  }
`;

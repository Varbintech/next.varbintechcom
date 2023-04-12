import { styled } from '@mui/material/styles';
import { ImageContainerStyled } from '../styled-containers';

export const TableOfContentContainer = styled('div')`
  position: sticky;
  top: 128px;
`;

export const ImageContainer = styled(ImageContainerStyled)`
  margin-bottom: 35px;

  .inner-wrapper {
    max-height: 190px;
  }
`;

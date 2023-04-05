import { styled } from '@mui/material/styles';

export const ImageContainer = styled('div')`
  display: flex;
  max-width: 570px;

  .inner-wrapper {
    display: flex;
    flex: 1;
    overflow: hidden;
    max-width: 570px;
    max-height: 400px;
    border-radius: 8px;
  }

  img {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    height: auto;
    object-fit: cover;
    object-position: top;
  }
`;

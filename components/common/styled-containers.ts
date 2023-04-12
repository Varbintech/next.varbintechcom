import { styled } from '@mui/material/styles';

export const ImageContainerStyled = styled('div')`
  display: flex;

  .inner-wrapper {
    display: flex;
    flex: 1;
    overflow: hidden;
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

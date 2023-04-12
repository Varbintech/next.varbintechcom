import { alpha, styled } from '@mui/material/styles';
import { ImageContainerStyled } from '../styled-containers';

export const ImageContainer = styled(ImageContainerStyled)(({ theme }) => ({
  '.inner-wrapper': {
    maxHeight: '700px',
    borderRadius: '16px',
    border: `8px solid ${alpha(theme.palette.primary.main, 0.1)}`,
  },
}));

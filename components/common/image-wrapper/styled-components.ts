import { alpha, styled } from '@mui/material/styles';

export const ImageContainer = styled('div')(({ theme }) => ({
  display: 'flex',

  '.inner-wrapper': {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
    maxHeight: '700px',
    borderRadius: '16px',
    border: `8px solid ${alpha(theme.palette.primary.main, 0.1)}`,
  },

  img: {
    display: 'inline-block',
    verticalAlign: 'top',
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    objectPosition: 'top',
  },
}));

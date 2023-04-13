import { alpha, styled } from '@mui/material/styles';

export const ImageContainer = styled('div')(({ theme }) => ({
  display: 'flex',

  '.inner-wrapper': {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
    borderRadius: '8px',
  },

  img: {
    display: 'inline-block',
    verticalAlign: 'top',
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    objectPosition: 'top',
  },

  '&.large-with-border .inner-wrapper': {
    maxHeight: '700px',
    borderRadius: '16px',
    border: `8px solid ${alpha(theme.palette.primary.main, 0.1)}`,
  },

  '&.medium-size': {
    maxWidth: '570px',

    '.inner-wrapper': {
      maxWidth: '570px',
      maxHeight: '400px',
    },
  },

  '&.medium-size-alone-column': {
    maxWidth: '100%',

    '.inner-wrapper': {
      maxWidth: '100%',
      maxHeight: '260px',
    },
  },

  '&.medium-size-column .inner-wrapper': {
      maxHeight: '260px',
  },

  '&.small-size .inner-wrapper': {
    maxHeight: '190px',
  },
}));

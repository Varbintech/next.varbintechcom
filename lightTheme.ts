import { createTheme } from '@mui/material/styles';

import { inter } from './constants/inter-latin';

export const themeTypography = {
  fontFamily: inter.style.fontFamily,
  h1: {
    fontSize: '3.5em',
    fontWeight: 700,
  },
  h2: {
    fontSize: '2.5em',
    fontWeight: 700,
  },
  h3: {
    fontSize: '2em',
    fontWeight: 500,
  },
  h4: {
    fontSize: '1.5em',
    fontWeight: 500,
  },
  h5: {
    fontSize: '1.25em',
    fontWeight: 500,
  },
  h6: {
    fontSize: '1.25em',
    fontWeight: 400,
  },
  body1: {
    lineHeight: '1.6em',
  },
  caption: {
    fontSize: '1em',
    fontWeight: 500,
    lineHeight: '1.4em',
  },
};

export const themeMuiButtonRoot = {
  padding: '7px 20px',
  fontSize: '1em',
  fontWeight: 500,
  boxShadow: 'none',

  '&:hover': {
    boxShadow: 'none',
  },
};

// Create a theme instance.
const lightTheme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: '#141629',
    },
    secondary: {
      main: '#848484',
    },
    success: {
      main: '#219653',
    },
    error: {
      main: '#eb5757',
    },
    text: {
      primary: '#141629',
      secondary: '#848484',
      disabled: '#848484',
    },
    background: {
      default: '#f3f3f3',
    },
  },
  typography: {
    ...themeTypography,

    subtitle1: {
      color: '#848484',
      fontSize: '1.25em',
      lineHeight: '1.4em',
    },
    subtitle2: {
      color: '#848484',
      fontSize: '0.875em',
      fontWeight: 400,
      lineHeight: '1.1em',
    },
    body2: {
      color: '#848484',
      fontSize: '1em',
      lineHeight: '1.6em',
    },
    overline: {
      color: '#848484',
      fontSize: '0.875em',
      fontWeight: 400,
      lineHeight: '1.4em',
      textTransform: 'none',
    },
  },

  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#141629',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          ...themeMuiButtonRoot,
          textTransform: 'none',
        },

        contained: {
          border: '1px solid transparent',
          '&:hover': {
            color: '#141629',
            backgroundColor: '#fff',
            borderColor: '#141629',
          },
        },
        outlined: {
          borderColor: '#141629',
          backgroundColor: '#fff',
          '&:hover': {
            color: '#fff',
            backgroundColor: '#141629',
          },
        },
        outlinedInfo: {
          color: '#fff',
          backgroundColor: '#141629',
          borderColor: '#fff',
          '&:hover': {
            color: '#141629',
            backgroundColor: '#fff',
            borderColor: '#141629',
          },
        },
        containedInfo: {
          color: '#141629',
          backgroundColor: '#fff',
          border: '1px solid transparent',
          '&:hover': {
            color: '#fff',
            backgroundColor: '#141629',
            borderColor: '#fff',
          },
        },
      },
    },
  },
});

export default lightTheme;

import { createTheme } from '@mui/material/styles';

import { inter } from './constants/inter-latin';

export const themeTypography = {
  fontFamily: inter.style.fontFamily,
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

const color1 = '#141629';
const color2 = '#848484';
const color3 = '#fff';

const color4 = '#219653';
const color5 = '#eb5757';
const color6 = '#f3f3f3';
const color7 = '#000';
const color8 = '#f2f2f2';

// Create a theme instance.
const lightTheme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: color1,
    },
    secondary: {
      main: color2,
    },
    success: {
      main: color4,
    },
    error: {
      main: color5,
    },
    text: {
      primary: color1,
      secondary: color2,
      disabled: color2,
    },
    background: {
      default: color6,
    },
  },
  typography: {
    ...themeTypography,

    h1: {
      color: color7,
      fontSize: '3.5em',
      fontWeight: 700,
      lineHeight: '1em',
    },
    subtitle1: {
      color: color2,
      fontSize: '1.25em',
      lineHeight: '1.4em',
    },
    subtitle2: {
      color: color2,
      fontSize: '0.875em',
      fontWeight: 400,
      lineHeight: '1.1em',
    },
    body2: {
      color: color2,
      fontSize: '1em',
      lineHeight: '1.6em',
    },
    overline: {
      color: color2,
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
          color: color1,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          ...themeMuiButtonRoot,
          textTransform: 'none',
        },

        sizeSmall: {
          padding: '5px 10px',
          minWidth: '40px',
        },

        contained: {
          border: '1px solid transparent',
          '&:hover': {
            color: color1,
            backgroundColor: color3,
            borderColor: color1,
          },
        },
        outlined: {
          borderColor: color1,
          backgroundColor: color3,
          '&:hover': {
            color: color3,
            backgroundColor: color1,
          },
        },
        outlinedInfo: {
          color: color3,
          backgroundColor: color1,
          borderColor: color3,
          '&:hover': {
            color: color1,
            backgroundColor: color3,
            borderColor: color1,
          },
        },
        containedInfo: {
          color: color1,
          backgroundColor: color3,
          border: '1px solid transparent',
          '&:hover': {
            color: color3,
            backgroundColor: color1,
            borderColor: color3,
          },
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          '&::before, &::after': {
            borderColor: color8,
          },
        },
        fullWidth: {
          marginLeft: '16px',
          marginRight: '16px',
        },
      },
    },

    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(20, 22, 41, 0.7)',
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',

          '&.MuiPaper-elevation4': {
            backgroundColor: color3,
          },
        },
      },
    },

  },
});

export default lightTheme;

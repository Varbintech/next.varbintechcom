import { createTheme } from '@mui/material/styles';

import { inter } from './constants/inter-latin';

export const themeTypography = {
  fontFamily: inter.style.fontFamily,

  h2: {
    fontSize: '2.5em',
    fontWeight: 700,
    lineHeight: '1em',
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
const color2 = '#4d4d4d';
const color3 = '#fff';
const color4 = '#2e8540';
const color5 = '#eb5757';

//const color6 = '#f3f3f3';
const color7 = '#000';
const color8 = '#d6d5d5';
const color9 = '#fef8f6';
const color10 = '#fefaf5';
const color11 = '#f9fafb';
const color12 = '#f2f3f5';

// Create a theme instance.
const lightTheme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: color1,
      light: color11,
      dark: color12,
      contrastText: color8,
    },
    secondary: {
      main: color2,
      dark: color9,
      light: color10,
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
      default: color3,
      paper: color3,
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
          color: color3,
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
          borderColor: color8,

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
            boxShadow: '0 8px 12px rgba(0, 0, 0, 0.08)',
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: '16px',
          borderColor: color2,
          backgroundColor: '#eee',

          '&:hover, &.MuiChip-clickable:hover': {
            cursor: 'default',
            backgroundColor: '#eee',
          },

          '&[href]:hover': {
            cursor: 'pointer',
            color: color3,
            backgroundColor: color1,
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          padding: 0,

          '.MuiOutlinedInput-notchedOutline': {
            borderColor: color8,

            '.text-filled &': {
              borderColor: color1,
            },

            '.text-success &': {
              borderColor: color4,
            },

            '.text-error &': {
              borderColor: color5,
            },
          },

          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: '1px',
          },

          '&.Mui-disabled': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: color8,
              backgroundColor: 'rgba(0,0,0,0.03)',
            },
          },
        },

        input: {
          padding: '13.5px 20px',
          lineHeight: '1.2',

          '&::placeholder': {
            color: color2,
            opacity: 1,
          },
        },
      },
    },

    MuiAccordion: {
      styleOverrides: {
        root: {
          marginBottom: '-2px',
          boxShadow: 'none',
          borderTop: '2px solid rgba(214, 213, 213, .5)',
          borderBottom: '2px solid rgba(214, 213, 213, .5)',

          '&::before': {
            display: 'none',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: '6px 20px 6px 0',

          '@media (max-width: 900px)': {
            paddingRight: 0,
          },
        },

        content: {
          marginRight: '16px',
        },

        expandIconWrapper: {
          color: color1,

          '&.Mui-expanded': {
            color: color2,
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          marginTop: '-8px',
          padding: '0 48px 18px 0',

          '@media (max-width: 900px)': {
            paddingRight: 0,
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          background: color3,
          borderTop: `1px solid ${color8}`,
          boxShadow: `inset 0px -1px 0 0px  ${color8}`,
        },

        indicator: {
          height: '1px',
        },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          padding: '20px',
          fontSize: '1em',
          fontWeight: 400,
          textTransform: 'none',
        },
      },
    },
  },
});

export default lightTheme;

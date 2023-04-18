import { createTheme, darken } from '@mui/material/styles';

import { themeTypography } from './lightTheme';

const color1 = '#a3a4ad';
const color2 = '#e9e9e9';
const color3 = '#141629';
const color4 = '#2e8540';
const color5 = '#eb5757';

//const color6 = '#f3f3f3';
//const color7 = '#fff';
const color8 = '#3b3d4d';
const color9 = '#323443';
const color10 = '#fefaf5';

// Create a theme instance.
const darkTheme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: color1,
      light: color8,
      dark: color9,
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
      primary: color2,
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
      color: color2,
      fontSize: '3.5em',
      fontWeight: 700,
      lineHeight: '1em',
    },
    subtitle1: {
      color: color1,
      fontSize: '1.25em',
      lineHeight: '1.4em',
    },
    subtitle2: {
      color: color1,
      fontSize: '0.875em',
      fontWeight: 400,
      lineHeight: '1.1em',
    },
    body2: {
      color: color1,
      fontSize: '1em',
      lineHeight: '1.6em',
    },
    overline: {
      color: color1,
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
          color: color2,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          padding: '7px 20px',
          fontSize: '1em',
          fontWeight: 500,
          textTransform: 'none',
          boxShadow: 'none',

          '&:hover': {
            boxShadow: 'none',
          },
        },

        sizeSmall: {
          padding: '5px 10px',
          minWidth: '40px',
        },

        contained: {
          color: color3,
          border: '1px solid transparent',
          backgroundColor: color2,
          '&:hover': {
            color: color2,
            backgroundColor: color3,
            borderColor: color2,
          },
        },
        outlined: {
          color: color2,
          borderColor: color2,
          backgroundColor: color3,
          '&:hover': {
            color: color3,
            backgroundColor: color2,
          },
        },
        outlinedInfo: {
          color: color3,
          backgroundColor: color2,
          borderColor: color3,
          '&:hover': {
            color: color2,
            backgroundColor: color3,
            borderColor: color2,
          },
        },
        containedInfo: {
          color: color2,
          backgroundColor: color3,
          border: '1px solid transparent',
          '&:hover': {
            color: color3,
            backgroundColor: color2,
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
            backgroundColor: color9,
            boxShadow: '0 8px 12px rgba(0, 0, 0, 0.08)',
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          fontSize: '16px',
          color: color1,
          borderColor: color1,
          backgroundColor: 'transparent',

          '&:hover, &.MuiChip-clickable:hover': {
            cursor: 'default',
            backgroundColor: 'transparent',
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
            borderColor: darken(color1, 0.4),

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
          background: color8,
          borderTop: `1px solid ${color8}`,
          boxShadow: `inset 0px -1px 0 0px  ${color3}`,
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
          color: color1,
          fontSize: '1em',
          fontWeight: 400,
          textTransform: 'none',

          '&.Mui-selected': {
            color: color2,
          },
        },
      },
    },
  },
});

export default darkTheme;

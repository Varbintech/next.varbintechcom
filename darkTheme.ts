import { createTheme } from '@mui/material/styles';

import { themeMuiButtonRoot, themeTypography } from './lightTheme';

// Create a theme instance.
const darkTheme = createTheme({
  palette: {
    mode: 'dark',

    primary: {
      main: '#a3a4ad',
    },

    success: {
      main: '#2e8540',
    },
    error: {
      main: '#eb5757',
    },
    text: {
      primary: '#e9e9e9',
      secondary: '#a3a4ad',
      disabled: '#a3a4ad',
    },
    background: {
      default: '#141629',
    },
  },
  typography: {
    ...themeTypography,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          ...themeMuiButtonRoot,
          textTransform: 'none',
        },
      },
    },
  },
});

export default darkTheme;

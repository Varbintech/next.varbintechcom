import { useMemo } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';

import lightTheme from '../lightTheme';
import darkTheme from '../darkTheme';

export const useThemeMode = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return useMemo(() => {
    return prefersDarkMode ? darkTheme : lightTheme;
  }, [prefersDarkMode]);
};

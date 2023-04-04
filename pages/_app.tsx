import Head from 'next/head';
import type { AppProps } from 'next/app';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { CacheProvider, type EmotionCache } from '@emotion/react';

import { Settings } from '../constants/settings';
import { inter } from '../constants/inter-latin';

import createEmotionCache from '../createEmotionCache';
import { useThemeMode } from '../hooks/use-theme-mode';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const theme = useThemeMode();

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content={Settings.Viewport} />

        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
          }
        `}</style>
      </Head>

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

import Head from 'next/head';
import type { AppProps } from 'next/app';
import type { NextPageContext } from 'next/dist/shared/lib/utils';
import Script from 'next/script';

import { ThemeProvider, styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { CacheProvider, type EmotionCache } from '@emotion/react';

import { GA_TRACKING_ID } from '../lib/gtag';
import { useEffectPageView } from '../hooks/use-effect-page-view-ga';

import { Settings } from '../constants/settings';
import { inter } from '../constants/inter-latin';

import createEmotionCache from '../createEmotionCache';
import lightTheme from '../lightTheme';
import { useMounted } from '../hooks/use-mounted';

import Layout from '../components-pages/layout/Layout';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const BodyContainer = styled('div')<{ mounted: boolean }>`
  visibility: ${({ mounted }) => (mounted ? 'visible' : 'hidden')};
`;

type MyAppError = Pick<NextPageContext, 'err'>;

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps, err: MyAppError) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const mounted = useMounted();

  useEffectPageView();

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

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname
          });
        `}
      </Script>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />

      {/* prevents ssr flash for mismatched dark mode */}

      <BodyContainer mounted={mounted}>
        <ThemeProvider theme={lightTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />

          <Layout>
            <Component {...pageProps} err={err} />
          </Layout>
        </ThemeProvider>
      </BodyContainer>
    </CacheProvider>
  );
}

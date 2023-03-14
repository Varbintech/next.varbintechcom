import NextHead from 'next/head';

import { Settings } from '../../constants/settings';

const Head = () => {
  return (
    <NextHead>
      <title>{Settings.Title}</title>

      <meta name="description" content={Settings.Description} />
      <meta name="viewport" content={Settings.Viewport} />
      <meta name="keywords" content={Settings.Keywords} />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;

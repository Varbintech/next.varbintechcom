import NextHead from 'next/head';

import { Settings } from '../../constants/settings';

const Head = () => {
  return (
    <NextHead>
      <title>{Settings.Title}</title>

      <meta name="description" content={Settings.Description} />
      <meta name="keywords" content={Settings.IndexKeywords} />
    </NextHead>
  );
};

export default Head;

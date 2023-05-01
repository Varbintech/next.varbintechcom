import NextHead from 'next/head';
import { useRouter } from 'next/router';

import { Settings } from '../../constants/settings';

const HeadIndex = () => {
  const { asPath } = useRouter();
  const url = new URL(asPath, location.href).pathname;

  return (
    <NextHead>
      <title>{Settings.Title}</title>

      <meta name="description" content={Settings.Description} />
      <meta name="keywords" content={Settings.IndexKeywords} />
      <meta name="image" content={Settings.Image} />

      <meta itemProp="name" content={Settings.Title} />
      <meta itemProp="description" content={Settings.Description} />
      <meta itemProp="image" content={Settings.Image} />

      <meta property="og:site_name" content={Settings.Title} />
      <meta property="og:title" content={Settings.Title} />
      <meta property="og:description" content={Settings.Description} />
      <meta property="og:url" content={Settings.Url || url} />
      <meta property="og:locale" content={Settings.Locale} />
      <meta property="og:image" content={Settings.Image} />
      <meta property="og:image:type" content={Settings.ImageType} />
      <meta property="og:image:alt" content={Settings.ImageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={Settings.Title} />
      <meta name="twitter:description" content={Settings.Description} />
      <meta name="twitter:image" content={Settings.Image} />
    </NextHead>
  );
};

export default HeadIndex;

import NextHead from 'next/head';

import { MetaData } from '../../constants/meta';

const HeadIndex = () => {
  return (
    <NextHead>
      <title>{MetaData.Title}</title>

      <meta name="description" content={MetaData.Description} />
      <meta name="keywords" content={MetaData.IndexKeywords} />
      <meta name="image" content={MetaData.Image} />

      <meta itemProp="name" content={MetaData.Title} />
      <meta itemProp="description" content={MetaData.Description} />
      <meta itemProp="image" content={MetaData.Image} />

      <meta property="og:site_name" content={MetaData.Title} />
      <meta property="og:title" content={MetaData.Title} />
      <meta property="og:description" content={MetaData.Description} />
      <meta property="og:url" content={MetaData.Url} />
      <meta property="og:locale" content={MetaData.Locale} />
      <meta property="og:image" content={MetaData.Image} />
      <meta property="og:image:type" content={MetaData.ImageType} />
      <meta property="og:image:alt" content={MetaData.ImageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={MetaData.Title} />
      <meta name="twitter:description" content={MetaData.Description} />
      <meta name="twitter:image" content={MetaData.Image} />
    </NextHead>
  );
};

export default HeadIndex;

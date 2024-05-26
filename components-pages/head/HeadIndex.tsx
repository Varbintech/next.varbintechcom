import NextHead from 'next/head';

import { MetaData } from '../../constants/meta';

interface HeadIndexProps {
  title?: string;
}

const HeadIndex = ({ title = MetaData.Title }: HeadIndexProps) => {
  return (
    <NextHead>
      <title>{title}</title>
      {/* General */}
      <meta name="description" content={MetaData.Description} />
      <meta name="keywords" content={MetaData.IndexKeywords} />
      <meta name="image" content={MetaData.Image} />
      <meta name="author" content={MetaData.IndexAuthor} />
      <link rel="canonical" href={MetaData.Url}></link>

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content={MetaData.Title} />
      <meta itemProp="description" content={MetaData.Description} />
      <meta itemProp="image" content={MetaData.Image} />
      <meta itemProp="author" content={`${MetaData.IndexAuthor} Team`} />

      {/* Open Graph */}
      <meta property="og:site_name" content={MetaData.Title} />
      <meta property="og:title" content={MetaData.Title} />
      <meta property="og:description" content={MetaData.Description} />
      <meta property="og:url" content={MetaData.Url} />
      <meta property="og:locale" content={MetaData.Locale} />
      <meta property="og:type" content={MetaData.IndexType} />
      <meta property="og:image" content={MetaData.Image} />
      <meta property="og:image:type" content={MetaData.ImageType} />
      <meta property="og:image:alt" content={MetaData.ImageAlt} />
      {/* At least 1,200 */}
      <meta name="og:image:width" content="1200" />
      {/* At least 630 */}
      <meta name="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={MetaData.Title} />
      <meta name="twitter:description" content={MetaData.Description} />
      <meta name="twitter:image" content={MetaData.Image} />
      <meta name="twitter:image:alt" content={MetaData.ImageAlt} />
      <meta name="twitter:site" content={MetaData.Url} />
      <meta name="twitter:creator" content="@varbintech" />
      {/* At least 1,200 */}
      <meta name="twitter:image:width" content="1200" />
      {/* At least 630 */}
      <meta name="twitter:image:height" content="630" />
      <meta property="twitter:domain" content={MetaData.Domain}></meta>
    </NextHead>
  );
};

export default HeadIndex;

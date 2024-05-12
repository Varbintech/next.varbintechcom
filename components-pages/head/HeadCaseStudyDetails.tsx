import NextHead from 'next/head';

import { MetaData } from '../../constants/meta';

interface HeadIndexProps {
  title: string;
  description: string;
  keywords: string;
  image: string;
  ogUrl: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const HeadCaseStudyDetails = (props: HeadIndexProps) => {
  const { title, description, keywords, image, imageWidth, imageHeight, ogUrl, imageAlt } = props;

  return (
    <NextHead>
      {/* General */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="image" content={image} />
      <meta name="author" content={`${MetaData.IndexAuthor} Team`} />

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />
      <meta itemProp="author" content={`${MetaData.IndexAuthor} Team`} />

      {/* Open Graph */}
      <meta property="og:site_name" content={MetaData.IndexAuthor} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content={MetaData.ImageType} />
      <meta
        property="og:image:alt"
        content={imageAlt || `${MetaData.IndexAuthor} Case Study: ${title}`}
      />
      {/* At least 1,200 */}
      <meta name="og:image:width" content={`${imageWidth || 1200}`} />
      {/* At least 630 */}
      <meta name="og:image:height" content={`${imageHeight || 630}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta
        name="twitter:image:alt"
        content={imageAlt || `${MetaData.IndexAuthor} Case Study: ${title}`}
      />
      <meta name="twitter:site" content={MetaData.Url} />
      <meta name="twitter:creator" content="@varbintech" />
      {/* At least 1,200 */}
      <meta name="twitter:image:width" content={`${imageWidth || 1200}`} />
      {/* At least 630 */}
      <meta name="twitter:image:height" content={`${imageHeight || 630}`} />

      <title>{title}</title>
    </NextHead>
  );
};

export default HeadCaseStudyDetails;

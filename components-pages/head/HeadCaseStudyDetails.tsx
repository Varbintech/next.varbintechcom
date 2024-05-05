import NextHead from 'next/head';

import { MetaData } from '../../constants/meta';

interface HeadIndexProps {
  title: string;
  description: string;
  keywords: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  ogUrl: string;
}

const HeadCaseStudyDetails = (props: HeadIndexProps) => {
  const { title, description, keywords, image, imageWidth, imageHeight, ogUrl } = props;

  return (
    <NextHead>
      {/* General */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="image" content={image} />
      <meta name="author" content={`${MetaData.IndexAuthor} Team`} />

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content={`${title} | Case Study`} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={image} />
      <meta itemProp="author" content={`${MetaData.IndexAuthor} Team`} />

      {/* Open Graph */}
      <meta property="og:site_name" content={MetaData.IndexAuthor} />
      <meta property="og:title" content={`${title} | Case Study`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:image" content={image} />
      <meta property="og:image:type" content={MetaData.ImageType} />
      <meta property="og:image:alt" content={`${MetaData.IndexAuthor} Case Study: ${title}`} />
      {/* At least 1,200 */}
      <meta name="og:image:width" content={`${imageWidth}`} />
      {/* At least 630 */}
      <meta name="og:image:height" content={`${imageHeight}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | Case Study`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${title} | Case Study`} />
      <meta name="twitter:site" content={MetaData.Url} />
      <meta name="twitter:creator" content="@varbintech" />
      {/* At least 1,200 */}
      <meta name="twitter:image:width" content={`${imageWidth}`} />
      {/* At least 630 */}
      <meta name="twitter:image:height" content={`${imageHeight}`} />

      <title>{`${title} | Case Study`}</title>
    </NextHead>
  );
};

export default HeadCaseStudyDetails;

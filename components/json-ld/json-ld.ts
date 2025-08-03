import { MetaData } from '../../constants/meta';

const getPublisherJsonLd = {
  '@type': 'Organization',
  name: MetaData.IndexAuthor,
  url: MetaData.Url,
  logo: {
    '@type': 'ImageObject',
    url: '/logo-black.svg',
    caption: MetaData.IndexAuthor,
    width: 68,
    height: 40,
  },
};

const getContext = {
  '@context': 'https://schema.org',
};

export const jsonLd = {
  publisher: getPublisherJsonLd,
  context: getContext,
};

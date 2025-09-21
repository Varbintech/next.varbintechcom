import Script from 'next/script';

import { MetaData } from '../../constants/meta';

import { jsonLd } from './json-ld';

export default function WebSite() {
  const jsonLdWebSite = {
    ...jsonLd.context,
    '@type': 'WebSite',
    '@id': `${MetaData.Url}#website`,
    url: MetaData.Url,
    name: MetaData.IndexAuthor,
    description: MetaData.Description,
    publisher: {
      '@id': `${MetaData.Url}#organization`,
    },
  };

  return (
    <Script
      id="json-ld-website"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
    />
  );
}

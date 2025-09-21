import Script from 'next/script';

import { MetaData } from '../../constants/meta';

import { jsonLd } from './json-ld';

interface WepPageProps {
  slug?: string;
  description: string;
  name: string;
}

export default function WebPage(props: WepPageProps) {
  const { slug = '', description, name } = props;

  const url = `${MetaData.Url}${slug}`;
  const about = {
    '@id': `${MetaData.Url}#about`,
  };
  const potentialAction = {
    '@type': 'ReadAction',
    target: [url],
  };

  const jsonLdWebPage = {
    ...jsonLd.context,
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    about,
    publisher: jsonLd.publisher,
    potentialAction,
  };

  return (
    <Script
      id="json-ld-webpage"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
    />
  );
}

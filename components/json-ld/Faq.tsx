import Script from 'next/script';

import type { Collection, FAQ } from '../../models/strapi.model';

import { MetaData } from '../../constants/meta';
import { convertMarkdownToPlainText } from '../../utils/convert-markdown-to-plain-text';

import { jsonLd } from './json-ld';

interface FaqProps {
  data: Array<Collection<FAQ>>;
}

export default function Faq({ data }: FaqProps) {
  const jsonLdFaqPage = {
    ...jsonLd.context,
    '@type': 'FAQPage',
    '@id': `${MetaData.Url}faq#faqpage`,
    publisher: jsonLd.publisher,
    mainEntity: data.map(({ attributes }) => ({
      '@type': 'Question',
      name: attributes.title,
      acceptedAnswer: {
        '@type': 'Answer',
        text: convertMarkdownToPlainText(attributes.description),
      },
    })),
  };

  return (
    <Script
      id="json-ld-faq"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaqPage) }}
    />
  );
}

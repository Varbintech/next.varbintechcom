import Script from 'next/script';

import { MetaData } from '../../constants/meta';

import { jsonLd } from './json-ld';

interface Author {
  name: string;
  url: string;
}

interface ArticleProps {
  headline: string;
  description: string;
  slug: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authors: Author | Array<Author>;
  mainEntityOfPage: string;
  type?: 'Article' | 'BlogPosting' | 'NewsArticle' | 'TechArticle';
}

export default function Article(props: ArticleProps) {
  const {
    headline,
    description,
    slug,
    image,
    datePublished,
    dateModified,
    authors,
    mainEntityOfPage,
    type = 'BlogPosting',
  } = props;

  const url = `${MetaData.Url}${slug}`;
  const author = Array.isArray(authors)
    ? authors.map(a => ({
        '@type': 'Person',
        name: a.name,
        url: a.url,
      }))
    : {
        '@type': 'Person',
        name: authors.name,
        url: authors.url,
      };

  const jsonLdBlogPosting = {
    ...jsonLd.context,
    '@type': type,
    headline,
    description,
    url,
    image: {
      '@type': 'ImageObject',
      url: image,
      width: 1200,
      height: 630,
    },
    datePublished,
    dateModified,
    author,
    publisher: jsonLd.publisher,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': mainEntityOfPage,
    },
    isPartOf: {
      '@type': ['WebPage', 'Blog'],
      url: `${MetaData.Url}/blog`,
      name: 'Blog',
      description: `${MetaData.IndexAuthor} Blog`,
      publisher: jsonLd.publisher,
    },
  };

  return (
    <Script
      id="json-ld-blog-post"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlogPosting) }}
    />
  );
}

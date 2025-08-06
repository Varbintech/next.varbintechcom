import Script from 'next/script';

import { MetaData } from '../../constants/meta';

import { jsonLd } from './json-ld';

interface ReviewRating {
  ratingValue: string;
  bestRating?: string;
  worstRating?: string;
}

interface ReviewAuthor {
  type?: 'Person' | 'Organization';
  name: string;
  url: string;
  logo: {
    url: string;
    width: number;
    height: number;
  };
  description: string;
  location: string;
  foundingDate: string;
}

interface ItemReviewed {
  type?: 'Product' | 'Service' | 'Organization';
  name: string;
  description: string;
  aggregateRating?: {
    ratingValue: string;
    reviewCount: string;
  };
}

interface ReviewProps {
  name: string;
  reviewBody: string;
  reviewRating: ReviewRating;
  author: ReviewAuthor;
  itemReviewed: ItemReviewed;
  dateModified?: string;
  image?: {
    url: string;
    width: number;
    height: number;
  };
  url: string;
  keywords?: Array<string>;
}

export default function Review(props: ReviewProps) {
  const { name, reviewBody, reviewRating, author, itemReviewed, dateModified, url, keywords } =
    props;

  const jsonLdReviewRating = {
    '@type': 'Rating',
    ratingValue: reviewRating.ratingValue,
    bestRating: reviewRating.bestRating || '5',
    worstRating: reviewRating.worstRating || '1',
  };
  const jsonLdImage = {
    '@type': 'ImageObject',
    url: '/logo-black.svg',
    width: 68,
    height: 40,
  };
  const jsonLdAggregateRatingDefault = {
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '1',
    },
  };
  const jsonLdReview = {
    ...jsonLd.context,
    '@type': 'Review',
    name,
    reviewBody,
    reviewRating: jsonLdReviewRating,
    author: {
      '@type': author.type || 'Organization',
      name: author.name,
      url: author.url,
      logo: {
        '@type': 'ImageObject',
        url: author.logo.url,
        width: author.logo.width,
        height: author.logo.height,
      },
      description: author.description,
      location: author.location,
      foundingDate: author.foundingDate,
    },
    publisher: jsonLd.publisher,
    itemReviewed: {
      '@type': itemReviewed.type || 'Organization',
      name: MetaData.IndexAuthor,
      description: MetaData.Description,
      brand: {
        '@type': 'Brand',
        name: MetaData.IndexAuthor,
      },
      ...(itemReviewed.aggregateRating
        ? {
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: itemReviewed.aggregateRating.ratingValue,
              reviewCount: itemReviewed.aggregateRating.reviewCount,
            },
          }
        : {
            ...jsonLdAggregateRatingDefault,
          }),
    },
    dateModified,
    image: jsonLdImage,
    url,
    ...(keywords && {
      keywords: ['Review', 'Customer Story', ...keywords, MetaData.IndexAuthor, author.name],
    }),
  };

  return (
    <Script
      id="json-ld-review"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdReview) }}
    />
  );
}

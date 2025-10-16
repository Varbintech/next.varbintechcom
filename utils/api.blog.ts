import type { GetStaticProps } from 'next';

import type {
  BlogItemStrapi,
  ResponseData,
  HireEngineersLink,
  BlogItemStaticProps,
} from '../models';
import type { SocialIcon } from '../models/social-icons.model';

import { socialShareButtons } from '../constants/social-share-buttons';

import { getStaticPropsHireEngineersLinks } from './api.hire-engineers';
import { fetchStaticPagesPolicyLinks } from './api.static-page';
import {
  stringify,
  generatePopulate,
  baseUrl,
  technologiesGroupedByTechnologyField,
} from './api.common';

const blogFields = [
  'heroImage',
  'tocImage',
  'listImage',
  'metaImage',
  'blogTags',
  'blogAuthors',
  'sections',
  'callToAction',
  'technologies',
];

const populateBlog = generatePopulate(blogFields);

const fetchAllBlogPosts = async (): Promise<ResponseData<BlogItemStrapi>> => {
  const publicationState = process.env.NODE_ENV === 'production' ? 'live' : 'preview';
  const params = {
    populate: populateBlog,
    publicationState,
    sort: ['publishedAt:desc'],
  };
  const urlParams = stringify(params);

  const res = await fetch(`${process.env.API_URL}/blogs?${urlParams}`);

  return await res.json();
};

export interface TocContent {
  title: string;
  id: string;
  level: string;
}

export interface BlogStaticProps {
  className: string;
  data: Array<BlogItemStrapi>;
  hireEngineersLinks: Array<HireEngineersLink>;
  socialShareButtons: Array<SocialIcon>;
  baseUrl: string;
}

export interface BlogIdStaticProps {
  className: string;
  data: BlogItemStaticProps;
  hireEngineersLinks: Array<HireEngineersLink>;
  socialShareButtons: Array<SocialIcon>;
  tocContent: Array<TocContent>;
  baseUrl: string;
}

export const getStaticPropsIndex: GetStaticProps<BlogStaticProps> = async () => {
  const allBlogPosts = await fetchAllBlogPosts();
  const hireEngineersLinks = await getStaticPropsHireEngineersLinks();
  const policyLinks = await fetchStaticPagesPolicyLinks();

  return {
    props: {
      className: '',
      data: allBlogPosts.data.map(({ id, attributes }) => {
        const { publishedAt, createdAt } = attributes;
        const publicationState = publishedAt === null ? 'draft' : 'live';

        const dateRaw = new Date(process.env.NODE_ENV === 'production' ? publishedAt : createdAt);

        const date = dateRaw
          .toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
          })
          .split(' ')
          .reverse()
          .join(' ');

        return {
          id,
          attributes: {
            ...attributes,
            publishedAt: `${date}, ${dateRaw.getFullYear()}`,
            publicationState,
          },
        };
      }),
      hireEngineersLinks: hireEngineersLinks.props.data,
      policyLinks,
      socialShareButtons: socialShareButtons(`${baseUrl}/blog`),
      baseUrl,
    },
  };
};

export const getStaticPropsBlogId: GetStaticProps<BlogIdStaticProps> = async ({ params: p }) => {
  const publicationState = process.env.NODE_ENV === 'production' ? 'live' : 'preview';
  const params = {
    populate: populateBlog,
    publicationState,
    filters: {
      slug: {
        $eq: String(p?.blogId),
      },
    },
  };
  const urlParams = stringify(params);
  const regXHeader = /<h([1-6])([^>]*)>(.*?)<\/h\1>/gi;
  const regIdValue = /id="([^"]*)"/;

  const res = await fetch(`${process.env.API_URL}/blogs?${urlParams}`);
  const json = (await res.json()) as ResponseData<BlogItemStrapi>;
  const hireEngineersLinks = await getStaticPropsHireEngineersLinks();
  const policyLinks = await fetchStaticPagesPolicyLinks();

  const tocContent: Array<{
    title: string;
    id: string;
    level: string;
  }> = json.data[0].attributes.sections.data.flatMap(item => {
    // Note: Use `descriptionEnhanced` instead of `description` to get the full content with HTML tags
    const d = item.attributes.descriptionEnhanced;
    const allHeaders = d?.match(regXHeader) || [];

    return allHeaders.map(item => {
      const idMatch = item.match(regIdValue);

      if (idMatch && idMatch[1]) {
        const title = item
          .replace(regIdValue, '')
          .replace(/<[^>]+>/g, '')
          .trim();
        const level = item.match(/<h([1-6])/)?.[1] || '1';

        return {
          title,
          id: idMatch[1],
          level,
        };
      }

      return {
        title: '',
        id: '',
        level: '',
      };
    });
  });
  const technologiesGrouped = Object.entries(
    technologiesGroupedByTechnologyField(json.data[0].attributes.technologies.data),
  );
  const publishedAt =
    json.data[0].attributes.publishedAt === null
      ? json.data[0].attributes.createdAt
      : json.data[0].attributes.publishedAt;
  const publicationStateAttr = json.data[0].attributes.publishedAt === null ? 'draft' : 'live';

  return {
    props: {
      className: '',
      data: {
        ...json.data[0],
        attributes: {
          ...json.data[0].attributes,
          technologies: technologiesGrouped,
          publishedAt,
          publicationState: publicationStateAttr,
        },
      },
      hireEngineersLinks: hireEngineersLinks.props.data,
      socialShareButtons: socialShareButtons(`${baseUrl}/blog/${json.data[0].attributes.slug}`),
      tocContent,
      policyLinks,
      baseUrl,
    },
  };
};

export const getStaticPathsBlogId = async () => {
  const allBlogPosts = await fetchAllBlogPosts();

  const paths = allBlogPosts.data.map(({ attributes }: BlogItemStrapi) => ({
    params: {
      blogId: attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

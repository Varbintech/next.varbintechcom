import type { GetStaticProps } from 'next';

import type { BlogItemStrapi, ResponseData, HireEngineersLink } from '../models';
import type { SocialIcon } from '../models/social-icons.model';

import { socialShareButtons } from '../constants/social-share-buttons';

import { getStaticPropsHireEngineersLinks } from './api.hire-engineers';

import { stringify, generatePopulate, baseUrl } from './api.common';

const blogFields = [
  'heroImage',
  'tocImage',
  'listImage',
  'metaImage',
  'blogTags',
  'blogAuthors',
  'sections',
  'callToAction',
];

const populateBlog = generatePopulate(blogFields);

const fetchAllBlogPosts = async (): Promise<ResponseData<BlogItemStrapi>> => {
  const params = {
    populate: populateBlog,
  };
  const urlParams = stringify(params);

  const res = await fetch(`${process.env.API_URL}/blogs?${urlParams}`);

  return await res.json();
};

export interface TocContent {
  title: string;
  href: string;
}

export interface BlogStaticProps {
  className: string;
  data: Array<BlogItemStrapi>;
  hireEngineersLinks: Array<HireEngineersLink>;
}

export interface BlogIdStaticProps {
  className: string;
  data: BlogItemStrapi;
  hireEngineersLinks: Array<HireEngineersLink>;
  socialShareButtons: Array<SocialIcon>;
  tocContent: Array<TocContent>;
}

export const getStaticPropsIndex: GetStaticProps<BlogStaticProps> = async () => {
  const allBlogPosts = await fetchAllBlogPosts();
  const hireEngineersLinks = await getStaticPropsHireEngineersLinks();

  return {
    props: {
      className: '',
      data: allBlogPosts.data.map(({ id, attributes }) => {
        const { publishedAt } = attributes;

        const dateRaw = new Date(publishedAt);

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
          },
        };
      }),
      hireEngineersLinks: hireEngineersLinks.props.data,
    },
  };
};

export const getStaticPropsBlogId: GetStaticProps<BlogIdStaticProps> = async ({ params: p }) => {
  const params = {
    populate: populateBlog,
    filters: {
      slug: {
        $eq: String(p?.blogId),
      },
    },
  };
  const urlParams = stringify(params);
  const regXHeader = /#{1,6}.+/g;

  const res = await fetch(`${process.env.API_URL}/blogs?${urlParams}`);
  const json = (await res.json()) as ResponseData<BlogItemStrapi>;
  const hireEngineersLinks = await getStaticPropsHireEngineersLinks();
  const allHeaders = json.data[0].attributes.sections.data.flatMap(item => {
    return item.attributes.description.match(regXHeader)?.map(item => item.replace(/#{1,6} /g, ''));
  });
  const tocContent: Array<{
    title: string;
    href: string;
  }> = allHeaders?.map(item => ({
    title: item || '',
    href: item?.toLocaleLowerCase().replace(/ /g, '-') || '',
  }));

  return {
    props: {
      className: '',
      data: json.data[0],
      hireEngineersLinks: hireEngineersLinks.props.data,
      socialShareButtons: socialShareButtons(`${baseUrl}/blog/${json.data[0].attributes.slug}`),
      tocContent,
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
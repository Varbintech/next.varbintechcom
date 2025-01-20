import type { GetStaticProps, GetStaticPaths } from 'next';

import type {
  StaticPage,
  Collection,
  ResponseData,
  PolicyLink,
  HireEngineersLink,
} from '../models';
import { Settings } from '../constants/settings';

import { stringify, generatePopulate } from './api.common';
import { getStaticPropsHireEngineersLinks } from './api.hire-engineers';

const staticPageFields = ['title', 'description', 'descriptionSEO', 'keywords', 'slug', 'sections'];

const populateStaticPage = generatePopulate(staticPageFields);

export interface StaticPageProps {
  data: Collection<StaticPage>;
  className: string;
  hireEngineersLinks: Array<HireEngineersLink>;
  policyLinks: Array<PolicyLink>;
}

const fetchStaticPages = async (): Promise<ResponseData<Collection<StaticPage>>> => {
  const params = {
    populate: populateStaticPage,
  };
  const urlParams = stringify(params);

  const res = await fetch(`${process.env.API_URL}/static-pages?${urlParams}`);

  return await res.json();
};

const fetchStaticPageBySlug = async (
  slug: string,
): Promise<ResponseData<Collection<StaticPage>>> => {
  const params = {
    populate: populateStaticPage,
    filters: {
      slug: {
        $eq: slug,
      },
    },
  };
  const urlParams = stringify(params);

  const res = await fetch(`${process.env.API_URL}/static-pages?${urlParams}`);

  return await res.json();
};

export const fetchStaticPagesPolicyLinks = async (): Promise<Array<PolicyLink>> => {
  const params = {
    populate: populateStaticPage,
    filters: {
      slug: {
        $contains: 'policy',
      },
    },
  };
  const urlParams = stringify(params);

  const res = await fetch(`${process.env.API_URL}/static-pages?${urlParams}`);

  const json = (await res.json()) as ResponseData<Collection<StaticPage>>;

  return json.data.map(({ attributes, id }) => ({
    id,
    slug: attributes.slug,
    title: attributes.title,
  }));
};

export const getStaticPathsStaticPages: GetStaticPaths = async (): Promise<{
  paths: Array<{ params: { staticPageName: string } }>;
  fallback: boolean;
}> => {
  const staticPages = await fetchStaticPages();
  const paths = staticPages.data.map(({ attributes }) => ({
    params: { staticPageName: attributes.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticPropsStaticPages: GetStaticProps<StaticPageProps> = async ({ params }) => {
  const json = await fetchStaticPageBySlug(String(params?.staticPageName));
  const hireEngineersLinks = await getStaticPropsHireEngineersLinks();
  const policyLinks = await fetchStaticPagesPolicyLinks();

  return {
    props: {
      data: json.data[0],
      className: Settings.OverflowHiddenClassName,
      hireEngineersLinks: hireEngineersLinks.props.data,
      policyLinks,
    },
  };
};

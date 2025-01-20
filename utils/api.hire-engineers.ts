import type { GetStaticProps } from 'next';

import type {
  HireEngineer,
  ResponseData,
  Collection,
  HireEngineersLink,
  PolicyLink,
} from '../models';

import { stringify, generatePopulate } from './api.common';
import { fetchStaticPagesPolicyLinks } from './api.static-page';

const hireEngineersFields = [
  'updateLabel',
  'technologies',
  'sections',
  'feedback',
  'callToAction',
  'heroImage',
  'metaImage',
  'links',
  'results',
  'frequentlyAskedQuestions',
];

const populateHireEngineers = generatePopulate(hireEngineersFields);

export interface HireEngineerStaticProps {
  data: Collection<HireEngineer>;
  className: string;
  hireEngineersLinks: Array<HireEngineersLink>;
  policyLinks: Array<PolicyLink>;
}

const fetchHireEngineers = async (): Promise<ResponseData<Collection<HireEngineer>>> => {
  const params = {
    populate: populateHireEngineers,
    sort: ['id:asc'],
  };
  const urlParams = stringify(params);

  const res = await fetch(`${process.env.API_URL}/hire-engineers?${urlParams}`);

  return await res.json();
};

const fetchHireEngineerBySlug = async (
  slug: string,
): Promise<ResponseData<Collection<HireEngineer>>> => {
  const params = {
    populate: populateHireEngineers,
    filters: {
      slug: {
        $eq: slug,
      },
    },
  };
  const urlParams = stringify(params);

  const res = await fetch(`${process.env.API_URL}/hire-engineers?${urlParams}`);

  return await res.json();
};

const getStaticPropsHireEngineers = async (): Promise<{
  props: Array<Collection<HireEngineer>>;
}> => {
  const json = await fetchHireEngineers();

  return {
    props: json.data,
  };
};

export const getStaticPathsHireEngineers = async () => {
  const hireEngineers = await fetchHireEngineers();

  const paths = hireEngineers.data.map(({ attributes }) => ({
    params: {
      hireEngineerId: attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticPropsHireEngineer: GetStaticProps<HireEngineerStaticProps> = async ({
  params,
}) => {
  const json = await fetchHireEngineerBySlug(String(params?.hireEngineerId));
  const hireEngineersLinks = await getStaticPropsHireEngineersLinks();
  const policyLinks = await fetchStaticPagesPolicyLinks();

  return {
    props: {
      data: json.data[0],
      className: 'overflow-hidden',
      hireEngineersLinks: hireEngineersLinks.props.data,
      policyLinks,
    },
  };
};

export const getStaticPropsHireEngineersLinks = async (): Promise<{
  props: ResponseData<HireEngineersLink>;
}> => {
  const { props } = await getStaticPropsHireEngineers();

  return {
    props: {
      data: props.map(({ attributes, id }) => ({
        id,
        slug: attributes.slug,
        title: attributes.title,
      })),
    },
  };
};

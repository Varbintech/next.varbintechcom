import qs from 'qs';

import type { CaseStudyStrapi, ResponseData } from '../models';

const populateAllFields = { populate: '*' };

export const fetchCaseStudies = async (): Promise<ResponseData<CaseStudyStrapi>> => {
  const res = await fetch(`${process.env.API_URL}/case-studies`);

  return await res.json();
};

export const fetchCaseStudyBySlug = async (
  slug: string,
): Promise<ResponseData<CaseStudyStrapi>> => {
  const params = {
    populate: {
      quotes: {
        ...populateAllFields,
      },
      technologies: {
        ...populateAllFields,
      },
      industries: {
        ...populateAllFields,
      },
      sections: {
        ...populateAllFields,
      },
      results: {
        ...populateAllFields,
      },
      heroImage: {
        ...populateAllFields,
      },
      metaImage: {
        ...populateAllFields,
      },
    },
    filters: {
      slug: {
        $eq: slug,
      },
    },
  };
  const urlParams = qs.stringify(params, { arrayFormat: 'comma' });

  const res = await fetch(`${process.env.API_URL}/case-studies?${urlParams}`);

  return await res.json();
};

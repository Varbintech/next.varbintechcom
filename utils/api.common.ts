import qs from 'qs';

import type { HeroImage, Technology, ResponseData, CaseStudyStrapi } from '../models';

type GeneratePopulate<T extends string> = Record<T, typeof populateAllFields>;

export const populateAllFields = { populate: '*' };

export const baseUrl =
  process.env.CF_PAGES_BRANCH !== 'main'
    ? String(process.env.CF_PAGES_URL)
    : String(process.env.WEBSITE_URL);
export const apiBaseUrl = process.env.API_BASE_URL || '';

export const generatePopulate = <T extends string>(fields: Array<T>): GeneratePopulate<T> => {
  return fields.reduce((acc, field) => {
    acc[field] = { ...populateAllFields };

    return acc;
  }, {} as GeneratePopulate<T>);
};

export const stringify = <T>(params: T) => qs.stringify(params, { arrayFormat: 'comma' });

export const getMainImage = (heroImages: Array<HeroImage>) => heroImages[heroImages.length - 1];

export const sortHeroImagesByWidth = (a: HeroImage, b: HeroImage) =>
  b.attributes.width - a.attributes.width;

export const technologiesGroupedByTechnologyField = (technologies: Array<Technology>) => {
  return technologies.reduce((acc: Record<string, Array<Technology>>, item) => {
    const technologyField = item.attributes.technologyField.data?.attributes.name || '';

    if (technologyField && !acc[technologyField]) {
      acc[technologyField] = [];
    }

    if (technologyField) {
      acc[technologyField].push(item);
    }

    return acc;
  }, {});
};

const caseStudyFields = [
  'quotes',
  'technologies',
  'industries',
  'sections',
  'results',
  'heroImage',
  'metaImage',
  'callToAction',
  'client',
  'readMoreCaseStudies',
];

export const populateCaseStudies = generatePopulate(caseStudyFields);

export const fetchCaseStudiesWithAllFields = async (): Promise<ResponseData<CaseStudyStrapi>> => {
  const params = {
    populate: populateCaseStudies,
  };
  const urlParams = stringify(params);

  const res = await fetch(`${process.env.API_URL}/case-studies?${urlParams}`);

  return await res.json();
};

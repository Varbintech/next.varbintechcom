import qs from 'qs';

import type { GetStaticProps } from 'next';

import { socialShareButtons } from '../constants/social-share-buttons';

import type {
  CaseStudyStrapi,
  ResponseData,
  HeroImage,
  Technologies,
  Industries,
  CaseStudyStaticProps,
  Technology,
} from '../models';

const populateAllFields = { populate: '*' };

const sortHeroImagesByWidth = (a: HeroImage, b: HeroImage) =>
  b.attributes.width - a.attributes.width;

const getMainImage = (heroImages: Array<HeroImage>) => heroImages[heroImages.length - 1];

const generateKeywordsBasedOnTechnologiesAndIndustries = (
  industries: Industries,
  technologies: Technologies,
) => {
  const keywords = technologies.data.reduce(
    (acc, item) => `${acc ? acc + ', ' : ''}${item.attributes.name}`,
    '',
  );

  const keywords2 = industries.data.reduce(
    (acc, item) => `${acc ? acc + ', ' : ''}${item.attributes.name}`,
    '',
  );

  return `${keywords}, ${keywords2}`;
};

const technologiesGroupedByTechnologyField = (technologies: Array<Technology>) => {
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
      callToAction: {
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

export const getStaticPathsCaseStudy = async () => {
  const caseStudies = await fetchCaseStudies();

  const paths = caseStudies.data.map(({ attributes }: CaseStudyStrapi) => ({
    params: {
      caseStudyId: attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticPropsCaseStudy: GetStaticProps<{
  data: CaseStudyStaticProps;
  className: string;
}> = async ({ params }) => {
  const json = await fetchCaseStudyBySlug(String(params?.caseStudyId));

  json.data[0].attributes.heroImage.data.sort(sortHeroImagesByWidth);

  const mainImage = getMainImage(json.data[0].attributes.heroImage.data);

  const keywords = generateKeywordsBasedOnTechnologiesAndIndustries(
    json.data[0].attributes.industries,
    json.data[0].attributes.technologies,
  );

  const technologiesGrouped = Object.entries(
    technologiesGroupedByTechnologyField(json.data[0].attributes.technologies.data),
  );

  const services = json.data[0].attributes.sections.data.filter(
    item => item.attributes.name.toLocaleLowerCase() === 'services',
  )[0];

  const baseUrl =
    process.env.CF_PAGES_BRANCH !== 'main'
      ? String(process.env.CF_PAGES_URL)
      : String(process.env.WEBSITE_URL);

  return {
    props: {
      data: {
        ...json.data[0],
        attributes: {
          ...json.data[0].attributes,
          heroImage: {
            images: json.data[0].attributes.heroImage.data,
            mainImage,
          },
          services: services.attributes.description,
          technologies: technologiesGrouped,
          // https://developers.cloudflare.com/pages/configuration/build-configuration/#environment-variables
          baseUrl,
          apiBaseUrl: process.env.API_BASE_URL || '',
          keywords,
          socialShareButtons: socialShareButtons(
            `${baseUrl}/case-studies/${json.data[0].attributes.slug}`,
          ),
        },
      },
      className: 'overflow-hidden',
    },
  };
};

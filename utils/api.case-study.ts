import qs from 'qs';

import type { GetStaticProps } from 'next';

import { socialShareButtons } from '../constants/social-share-buttons';

import type {
  CaseStudyStrapi,
  ResponseData,
  HeroImage,
  CaseStudyStaticProps,
  Technology,
  CaseStudyAllStaticProps,
} from '../models';

const populateAllFields = { populate: '*' };
const populate = {
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
};
const baseUrl =
  process.env.CF_PAGES_BRANCH !== 'main'
    ? String(process.env.CF_PAGES_URL)
    : String(process.env.WEBSITE_URL);
const apiBaseUrl = process.env.API_BASE_URL || '';

export const sortHeroImagesByWidth = (a: HeroImage, b: HeroImage) =>
  b.attributes.width - a.attributes.width;

export const getMainImage = (heroImages: Array<HeroImage>) => heroImages[heroImages.length - 1];

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

export const fetchCaseStudies = async (): Promise<ResponseData<CaseStudyStrapi>> => {
  const res = await fetch(`${process.env.API_URL}/case-studies`);

  return await res.json();
};

export const fetchCaseStudiesWithAllFields = async (): Promise<ResponseData<CaseStudyStrapi>> => {
  const params = {
    populate,
  };
  const urlParams = qs.stringify(params, { arrayFormat: 'comma' });

  const res = await fetch(`${process.env.API_URL}/case-studies?${urlParams}`);

  return await res.json();
};

export const fetchCaseStudyBySlug = async (
  slug: string,
): Promise<ResponseData<CaseStudyStrapi>> => {
  const params = {
    populate,
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

  const technologiesGrouped = Object.entries(
    technologiesGroupedByTechnologyField(json.data[0].attributes.technologies.data),
  );

  const services = json.data[0].attributes.sections.data.filter(item =>
    item.attributes.name.toLocaleLowerCase().startsWith('services'),
  )[0];

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
          apiBaseUrl,
          socialShareButtons: socialShareButtons(
            `${baseUrl}/case-studies/${json.data[0].attributes.slug}`,
          ),
        },
      },
      className: 'overflow-hidden',
    },
  };
};

export const getStaticPropsCaseStudies = async (
  caseStudiesLimit?: number,
): Promise<{ props: CaseStudyAllStaticProps }> => {
  const caseStudiesWithAllFields = await fetchCaseStudiesWithAllFields();

  const caseStudies = caseStudiesWithAllFields.data.map(data => {
    data.attributes.heroImage.data.sort(sortHeroImagesByWidth);

    const mainImage = getMainImage(data.attributes.heroImage.data);
    const technologiesGrouped = Object.entries(
      technologiesGroupedByTechnologyField(data.attributes.technologies.data),
    );
    const services = data.attributes.sections.data.filter(item =>
      item.attributes.name.toLocaleLowerCase().startsWith('services'),
    )[0];

    const servicesAsArray = services.attributes.description.split(',').map(item => ({
      name: item.trim(),
      link: '',
    }));
    const industriesAsArray = data.attributes.industries.data.map(item => ({
      name: item.attributes.name,
      link: '',
    }));
    const resultsWithDescriptionLong = data.attributes.results.data
      .filter(item => item.attributes.descriptionLong !== '-')
      .map(item => item.attributes.descriptionLong);

    return {
      ...data,
      attributes: {
        ...data.attributes,
        heroImage: {
          images: data.attributes.heroImage.data,
          mainImage,
        },
        services: services.attributes.description,
        servicesAsArray,
        industriesAsArray,
        resultsWithDescriptionLong,
        technologies: technologiesGrouped,
      },
    };
  });

  const caseStudiesWithLimit = caseStudiesLimit
    ? caseStudies.slice(0, caseStudiesLimit)
    : caseStudies;

  return {
    props: {
      data: {
        caseStudies: caseStudiesWithLimit,
        baseUrl,
        apiBaseUrl,
        socialShareButtons: socialShareButtons(`${baseUrl}/case-studies`),
        lastCaseStudy: caseStudiesWithLimit[0], // sorted by date
      },
      className: '',
    },
  };
};

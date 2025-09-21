import type {
  Technology,
  ResponseData,
  CaseStudyAllAttributes,
  Service,
  Quote,
  HireEngineersLink,
  PolicyLink,
} from '../models';

import {
  stringify,
  populateAllFields,
  getMainImage,
  sortHeroImagesByWidth,
  technologiesGroupedByTechnologyField,
  fetchCaseStudiesWithAllFields,
} from './api.common';
import { TechGroup } from '../constants/tech-group.enum';

import { getStaticPropsHireEngineersLinks } from './api.hire-engineers';
import { fetchStaticPagesPolicyLinks } from './api.static-page';

interface Feedback {
  id: number;
  attributes: Quote & {
    caseStudySlug: string;
    caseStudyTitle: string;
    caseStudyId: number;
  };
}

interface TechnologiesData {
  technologies: Array<[string, Array<Technology>]>;
  baseUrl: string;
  lastCaseStudy: CaseStudyAllAttributes;
  services: Array<Service>;
  feedback: Array<Feedback>;
}

export interface TechnologiesStaticProps {
  data: TechnologiesData;
  className: string;
  hireEngineersLinks: Array<HireEngineersLink>;
  policyLinks: Array<PolicyLink>;
}

const baseUrl =
  process.env.CF_PAGES_BRANCH !== 'main'
    ? String(process.env.CF_PAGES_URL)
    : String(process.env.WEBSITE_URL);

const fetchTechnologiesByShowInTech = async (): Promise<ResponseData<Technology>> => {
  const params = {
    ...populateAllFields,
    pagination: {
      limit: 100,
    },
    filters: {
      showInTech: {
        $eq: true,
      },
    },
  };
  const urlParams = stringify(params);

  const res = await fetch(`${process.env.API_URL}/technologies?${urlParams}`);

  return await res.json();
};

export const getStaticPropsTechnologies = async (): Promise<{ props: TechnologiesStaticProps }> => {
  const json = await fetchTechnologiesByShowInTech();
  const hireEngineersLinks = await getStaticPropsHireEngineersLinks();
  const policyLinks = await fetchStaticPagesPolicyLinks();
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
  const servicesMock = await import('../mocks/services');

  const technologiesGrouped = Object.entries(technologiesGroupedByTechnologyField(json.data));
  const technologiesGroupedFrontend = technologiesGrouped.filter(
    ([key]) => key === TechGroup.Frontend,
  );
  const technologiesGroupedBackend = technologiesGrouped.filter(
    ([key]) => key === TechGroup.Backend,
  );
  const technologiesGroupedPayment = technologiesGrouped.filter(
    ([key]) => key === TechGroup.Payment,
  );
  const technologiesGroupedTesting = technologiesGrouped.filter(
    ([key]) => key === TechGroup.Testing,
  );
  const technologiesGroupedInfra = technologiesGrouped
    .filter(([key]) => key === TechGroup.Infra)
    .map<[string, Array<Technology>]>(([_, value]) => [TechGroup.Infrastructure, value]);
  const technologiesGroupedDesign = technologiesGrouped.filter(([key]) => key === TechGroup.Design);
  const technologiesGroupedProjectManagement = technologiesGrouped.filter(
    ([key]) => key === TechGroup.ProjectManagement,
  );
  const caseStudiesWithLimit = caseStudies.slice(0, 2);
  const feedback = caseStudies
    .map(item => item.attributes.quotes.data[0])
    .map((item, index) => ({
      id: item.id,
      attributes: {
        ...item.attributes,
        caseStudySlug: caseStudies[index].attributes.slug,
        caseStudyTitle: caseStudies[index].attributes.title,
        caseStudyId: caseStudies[index].id,
      },
    }));

  return {
    props: {
      data: {
        technologies: [
          ...technologiesGroupedFrontend,
          ...technologiesGroupedBackend,
          ...technologiesGroupedTesting,
          ...technologiesGroupedPayment,
          ...technologiesGroupedInfra,
          ...technologiesGroupedDesign,
          ...technologiesGroupedProjectManagement,
        ],
        baseUrl,
        lastCaseStudy: caseStudiesWithLimit[0], // sorted by date
        services: servicesMock.services,
        feedback,
      },
      className: 'overflow-hidden',
      hireEngineersLinks: hireEngineersLinks.props.data,
      policyLinks,
    },
  };
};

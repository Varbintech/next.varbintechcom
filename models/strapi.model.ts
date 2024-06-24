import type { SocialIcon } from './social-icons.model';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface NameDescriptionAttribute {
  name: string;
  description: string;
}

export interface Collection<T = NameDescriptionAttribute> {
  id: number;
  attributes: T;
}

interface Image {
  name: string;
  alternativeText: string;
  width: number;
  height: number;
  url: string;
}

export interface HeroImageAttribute {
  name: string;
  alternativeText: string;
  width: number;
  height: number;
  url: string;
}

export interface CallToAction {
  title: string;
  action: string;
  actionText: string;
  actionId: string;
}

interface MetaImage {
  name: string;
  alternativeText: string;
  width: number;
  height: number;
  url: string;
}

export interface Quote {
  content: string;
  author: string;
  authorTitle: string;
  authorLiLink?: string;
  authorWebsiteLink?: string;
  authorPhoto: {
    data: {
      attributes: Image;
    };
  };
  companyName: string;
  companyLink: string;
}

interface Result {
  name: string;
  description: string;
  descriptionLong: string;
}

export interface Section {
  name: string;
  description: string;
  headingLevel: HeadingLevel;
  order: number;
  showTitle?: boolean;
  showFeedback?: boolean;
  showTechStack?: boolean;
  showResults?: boolean;
}

export interface HeroImage {
  id: number;
  attributes: HeroImageAttribute;
}

export interface TechnologyField {
  data: Collection;
}

export type Technology = Collection<
  NameDescriptionAttribute & {
    technologyField: TechnologyField;
    showInTech?: boolean;
    svgIcon?: string;
    docLink?: string;
  }
>;

export interface Technologies {
  data: Array<Technology>;
}

export interface Industries {
  data: Array<Collection>;
}

export interface CaseStudy {
  id: number;
  attributes: {
    title: string;
    description: string;
    descriptionSEO: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    technologies: Technologies;
    industries: Industries;
    keywords: string;
    heroImage: {
      data: Array<HeroImage>;
    };
    metaImage: {
      data: {
        id: number;
        attributes: MetaImage;
      };
    };
    quotes: {
      data: Array<{
        id: number;
        attributes: Quote;
      }>;
    };
    sections: {
      data: Array<{
        id: number;
        attributes: Section;
      }>;
    };
    results: {
      data: Array<Collection<Result>>;
    };
    callToAction: {
      data: Collection<CallToAction>;
    };
  };
}

interface CaseStudyAttributesCommon {
  title: string;
  description: string;
  descriptionSEO: string;
  slug: string;
  publishedAt: string;
  technologies: Array<[string, Array<Technology>]>;
  industries: {
    data: Array<Collection>;
  };
  heroImage: {
    images: Array<HeroImage>;
    mainImage: {
      id: number;
      attributes: MetaImage;
    };
  };
  metaImage: {
    data: {
      id: number;
      attributes: MetaImage;
    };
  };
  quotes: {
    data: Array<{
      id: number;
      attributes: Quote;
    }>;
  };
  sections: {
    data: Array<Collection<Section>>;
  };
  results: {
    data: Array<Collection<Result>>;
  };
  callToAction: {
    data: Collection<CallToAction>;
  };
  services: string;
  keywords: string;
}

export interface CaseStudyStaticProps {
  id: number;
  attributes: CaseStudyAttributesCommon & {
    baseUrl: string;
    apiBaseUrl: string;
    socialShareButtons: Array<SocialIcon>;
    className?: string;
  };
}

export interface CaseStudyAllAttributes {
  attributes: CaseStudyAttributesCommon & {
    servicesAsArray: Array<{
      name: string;
      link: string;
    }>;
    industriesAsArray: Array<{
      name: string;
      link: string;
    }>;
    resultsWithDescriptionLong: Array<string>;
  };
  id: number;
}

export interface CaseStudyAllData {
  caseStudies: Array<CaseStudyAllAttributes>;
  baseUrl: string;
  apiBaseUrl: string;
  socialShareButtons: Array<SocialIcon>;
  lastCaseStudy: CaseStudyAllAttributes;
  className?: string;
}

export interface CaseStudyAllStaticProps {
  data: CaseStudyAllData;
  className: string;
}

export interface ResponseData<T> {
  data: Array<T>;
}

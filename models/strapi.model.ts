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

interface MetaImage {
  name: string;
  alternativeText: string;
  width: number;
  height: number;
  url: string;
}

interface Quote {
  content: string;
  author: string;
  authorTitle: string;
  authorLiLink: string;
  authorPhoto: {
    data: {
      attributes: Image;
    };
  };
  companyName: string;
  companyLink: string;
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
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    technologies: Technologies;
    industries: Industries;
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
      data: Array<Collection>;
    };
  };
}

export interface CaseStudyStaticProps {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    technologies: Array<[string, Array<Collection>]>;
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
      data: Array<Collection>;
    };
    services: string;
    baseUrl: string;
    apiBaseUrl: string;
    keywords: string;
    socialShareButtons: Array<SocialIcon>;
    className?: string;
  };
}

export interface ResponseData<T> {
  data: Array<T>;
}

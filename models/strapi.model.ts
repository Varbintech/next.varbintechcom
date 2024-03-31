type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TechnologyAttribute {
  name: string;
  description: string;
}

interface IndustryAttribute {
  name: string;
  description: string;
}

interface Image {
  name: string;
  alternativeText: string;
  width: number;
  height: number;
  url: string;
}

interface HeroImageAttribute {
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

export interface Result {
  name: string;
  description: string;
}

interface Section {
  name: string;
  description: string;
  headingLevel: HeadingLevel;
  order: number;
  showTitle?: boolean;
  showFeedback?: boolean;
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
    technologies: {
      data: Array<{
        id: number;
        attributes: TechnologyAttribute;
      }>;
    };
    industries: {
      data: Array<{
        id: number;
        attributes: IndustryAttribute;
      }>;
    };
    heroImage: {
      data: Array<{
        id: number;
        attributes: HeroImageAttribute;
      }>;
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
      data: Array<{
        id: number;
        attributes: Result;
      }>;
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
    technologies: {
      data: Array<{
        id: number;
        attributes: TechnologyAttribute;
      }>;
    };
    industries: {
      data: Array<{
        id: number;
        attributes: IndustryAttribute;
      }>;
    };
    heroImage: {
      data: Array<{
        id: number;
        attributes: HeroImageAttribute;
      }>;
      srcSet: string;
      sizes: string;
      name: string;
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
      data: Array<{
        id: number;
        attributes: Result;
      }>;
    };
    baseUrl: string;
    apiBaseUrl: string;
    keywords: string;
  };
}

export interface ResponseData<T> {
  data: Array<T>;
}

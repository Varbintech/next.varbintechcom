interface TechnologyAttribute {
  name: string;
  description: string;
}

interface IndustryAttribute {
  name: string;
  description: string;
}

interface HeroImageAttribute {
  name: string;
  alternativeText: string;
  width: number;
  height: number;
  url: string;
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
      data: {
        id: number;
        attributes: HeroImageAttribute;
      };
    };
  };
}

export interface ResponseData<T> {
  data: Array<T>;
}

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

interface BlogTag {
  title: string;
  description?: string;
}

interface BlogAuthor {
  firstName: string;
  lastName: string;
  avatar: {
    data: Collection<Image>;
  };
  liLink: string;
}

interface UpdateLabel {
  id: number;
  label: string;
  text: string;
  linkText: string;
  link: string;
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
  noPadding?: boolean;
}

interface MetaImage {
  name: string;
  alternativeText: string;
  width: number;
  height: number;
  url: string;
}

export interface FAQ {
  title: string;
  description: string;
}

interface Result {
  name: string;
  description: string;
  descriptionLong: string;
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

export interface Section {
  name: string;
  headingLevel: HeadingLevel;
  order: number;
  description?: string;
  descriptionEnhanced?: string;
  showTitle?: boolean;
  showFeedback?: boolean;
  showTechStack?: boolean;
  showResults?: boolean;
  showLinks?: boolean;
  showCTA?: boolean;
  showFAQ?: boolean;
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

export interface HireEngineersLink {
  id: number;
  slug: string;
  title: string;
}

export interface HireEngineer {
  title: string;
  subtitle: string;
  descriptionSEO: string;
  keywords: string;
  slug: string;
  updateLabel: UpdateLabel;
  technologies: Technologies;
  publishedAt: string;
  updatedAt: string;
  sections: {
    data: Array<Collection<Section>>;
  };
  feedback: {
    data: Collection<Quote>;
  };
  callToAction: {
    data: Collection<CallToAction>;
  };
  heroImage: {
    data: Array<HeroImage>;
  };
  metaImage: {
    data: Array<Collection<MetaImage>>;
  };
  links: {
    data: Array<Technology>;
  };
  results: {
    data: Array<Collection<Result>>;
  };
  frequentlyAskedQuestions: {
    data: Array<Collection<FAQ>>;
  };
}

export interface StaticPage {
  title: string;
  description: string;
  descriptionSEO: string;
  keywords: string;
  slug: string;
  sections: {
    data: Array<Collection<Section>>;
  };
}

export interface PolicyLink {
  id: number;
  slug: string;
  title: string;
}

export interface Technologies {
  data: Array<Technology>;
}

export interface Industries {
  data: Array<Collection>;
}

export interface Client {
  firstName: string;
  lastName: string;
  companyName: string;
  liProfileCeo: string;
  liProfileCompany: string;
  url: string;
  description: string;
  location: string;
  foundingDate: string;
  logoUrl: string;
  logoSize: {
    width: number;
    height: number;
  };
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
    client: {
      data: Collection<Client>;
    };
    readMoreCaseStudies: {
      id: number;
      intro: string;
      description: string;
      buttonLink: string;
      buttonText: string;
      caseStudies: {
        data: Array<Omit<CaseStudy, 'attributes.readMoreCaseStudies'>>;
      };
    };
  };
}

export interface BlogItem {
  id: number;
  attributes: {
    title: string;
    descriptionSEO: string;
    slug: string;
    keywords: string;
    publishedAt: string;
    updatedAt: string;
    technologies: Technologies;
    heroImage: {
      data: Array<HeroImage>;
    };
    tocImage: {
      data: Collection<Image>;
    };
    listImage: {
      data: Array<Collection<Image>>;
    };
    metaImage: {
      data: {
        id: number;
        attributes: MetaImage;
      };
    };
    blogTags: {
      data: Array<Collection<BlogTag>>;
    };
    blogAuthors: {
      data: Array<Collection<BlogAuthor>>;
    };
    sections: {
      data: Array<{
        id: number;
        attributes: Section;
      }>;
    };
    callToAction: {
      data: Collection<CallToAction>;
    };
  };
}

export interface BlogItemStaticProps {
  id: number;
  attributes: {
    title: string;
    descriptionSEO: string;
    slug: string;
    keywords: string;
    publishedAt: string;
    updatedAt: string;
    technologies: Array<[string, Array<Technology>]>;
    heroImage: {
      data: Array<HeroImage>;
    };
    tocImage: {
      data: Collection<Image>;
    };
    listImage: {
      data: Array<Collection<Image>>;
    };
    metaImage: {
      data: {
        id: number;
        attributes: MetaImage;
      };
    };
    blogTags: {
      data: Array<Collection<BlogTag>>;
    };
    blogAuthors: {
      data: Array<Collection<BlogAuthor>>;
    };
    sections: {
      data: Array<{
        id: number;
        attributes: Section;
      }>;
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
  updatedAt: string;
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
    data: Array<Collection<Quote>>;
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
  client: {
    data: Collection<Client>;
  };
  readMoreCaseStudies: {
    id: number;
    intro: string;
    description: string;
    buttonLink: string;
    buttonText: string;
    caseStudies: {
      data: Array<Omit<CaseStudy, 'attributes.readMoreCaseStudies'>>;
    };
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
  hireEngineersLinks: Array<HireEngineersLink>;
  policyLinks: Array<PolicyLink>;
}

export interface ResponseData<T> {
  data: Array<T>;
}

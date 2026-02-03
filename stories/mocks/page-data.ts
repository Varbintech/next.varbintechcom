import type {
  CaseStudyAllAttributes,
  CaseStudyAllStaticProps,
  CaseStudyStaticProps,
  HireEngineersLink,
  PolicyLink,
  SocialIcon,
  HeroImage,
  MetaImage,
  Collection,
  Section,
  HeadingLevel,
  BlogItemStrapi,
} from '../../models';
import type { BlogStaticProps } from '../../utils/api.blog';
import type { Technology } from '../../models/strapi.model';

import heroImagePrimary from '../../public/dt-okr-for-jira-project/DT-OKR-for-Jira_jnbl2b_c_scale,w_1200.webp';
import heroImageSecondary from '../../public/tin-project/TIN-project_q9im1n_c_scale,w_1200.webp';
import logoBlack from '../../public/logo-black.svg';

import { services as serviceList } from '../../constants/services';

const baseUrl = 'base.url';
const apiBaseUrl = 'api.base.url';

export const socialShareButtonsMock: Array<SocialIcon> = [
  {
    id: 1,
    socialTitle: 'LinkedIn',
    socialLink: 'https://www.linkedin.com/company/varbintech',
    socialIcon: 'linkedInIcon',
    socialBorderRadius: '2px',
    socialAriaLabel: 'Open Varbintech on LinkedIn',
  },
  {
    id: 2,
    socialTitle: 'X',
    socialLink: 'https://x.com/varbintech',
    socialIcon: 'twitterIcon',
    socialBorderRadius: '',
    socialAriaLabel: 'Open Varbintech on X',
  },
  {
    id: 3,
    socialTitle: 'Facebook',
    socialLink: 'https://www.facebook.com/varbintech',
    socialIcon: 'facebookIcon',
    socialBorderRadius: '',
    socialAriaLabel: 'Open Varbintech on Facebook',
  },
];

export const hireEngineersLinksMock: Array<HireEngineersLink> = [
  {
    id: 1,
    slug: 'hire-front-end-developers',
    title: 'Hire front-end developers',
  },
  {
    id: 2,
    slug: 'hire-angular-developers',
    title: 'Hire Angular developers',
  },
  {
    id: 3,
    slug: 'hire-react-developers',
    title: 'Hire React developers',
  },
];

export const policyLinksMock: Array<PolicyLink> = [
  {
    id: 1,
    slug: 'privacy-policy',
    title: 'Privacy policy',
  },
  {
    id: 2,
    slug: 'terms-of-use',
    title: 'Terms of use',
  },
];

const industriesData = {
  data: [
    {
      id: 1,
      attributes: {
        name: 'SaaS',
        description: 'Software as a service businesses',
      },
    },
    {
      id: 2,
      attributes: {
        name: 'E-commerce',
        description: 'Online stores and marketplaces',
      },
    },
  ],
};

const industriesAsArray = industriesData.data.map(item => ({
  name: item.attributes.name,
  link: '',
}));

const technologyField = {
  data: {
    id: 1,
    attributes: {
      name: 'Frontend',
      description: 'Frontend technologies',
    },
  },
};

const technologiesData: Array<[string, Array<Technology>]> = [
  [
    'Frontend',
    [
      {
        id: 1,
        attributes: {
          name: 'React',
          description: 'Component-based UI library',
          technologyField,
          docLink: 'https://react.dev',
        },
      },
      {
        id: 2,
        attributes: {
          name: 'TypeScript',
          description: 'Typed superset of JavaScript',
          technologyField,
          docLink: 'https://www.typescriptlang.org',
        },
      },
    ],
  ],
];

const heroImagePrimaryData: HeroImage = {
  id: 1,
  attributes: {
    url: heroImagePrimary.src,
    width: heroImagePrimary.width,
    height: heroImagePrimary.height,
    name: 'Project analytics dashboard screenshot',
    alternativeText: 'Dashboard interface on a laptop screen',
  },
};

const heroImageMainImageData: {
  id: number;
  attributes: MetaImage;
} = {
  id: 1,
  attributes: {
    url: heroImagePrimary.src,
    width: heroImagePrimary.width,
    height: heroImagePrimary.height,
    name: 'Project analytics dashboard screenshot',
    alternativeText: 'Dashboard interface on a laptop screen',
  },
};

const heroImageSecondaryData = {
  id: 2,
  attributes: {
    url: heroImageSecondary.src,
    width: heroImageSecondary.width,
    height: heroImageSecondary.height,
    name: 'Project roadmap overview',
    alternativeText: 'Roadmap with milestones and timelines',
  },
};

const sectionsData: { data: Array<Collection<Section>> } = {
  data: [
    {
      id: 1,
      attributes: {
        name: 'Project overview',
        headingLevel: 'h2' as HeadingLevel,
        order: 1,
        description:
          'We partnered with the client to modernise their SaaS analytics platform, revamping the UI and optimising performance.',
        showTitle: true,
      },
    },
    {
      id: 2,
      attributes: {
        name: 'Technology decisions',
        headingLevel: 'h2' as HeadingLevel,
        order: 2,
        description:
          'The team introduced a modular design system powered by React and TypeScript to accelerate feature delivery.',
        showTitle: true,
        showTechStack: true,
      },
    },
    {
      id: 3,
      attributes: {
        name: 'Business impact',
        headingLevel: 'h2' as HeadingLevel,
        order: 3,
        description:
          'Key outcomes included shorter release cycles, happier customers, and a more maintainable codebase.',
        showTitle: true,
        showResults: true,
      },
    },
  ],
};

const resultsData = {
  data: [
    {
      id: 1,
      attributes: {
        name: '40%',
        description: 'Increase in conversion rate',
        descriptionLong: '40% uplift in conversion rate across the funnel after the redesign.',
      },
    },
    {
      id: 2,
      attributes: {
        name: '3x',
        description: 'Faster release cadence',
        descriptionLong:
          'Release cadence improved threefold thanks to automation and modular components.',
      },
    },
  ],
};

const readMoreCaseStudies = {
  id: 1,
  intro: 'Read more case studies',
  description: 'Discover additional stories about how we help companies scale their products.',
  buttonLink: '/case-studies',
  buttonText: 'Browse case studies',
  caseStudies: {
    data: [],
  },
};

const callToActionData = {
  data: {
    id: 1,
    attributes: {
      title: 'Plan your next project',
      action: '/contact',
      actionText: 'Book a discovery call',
      actionId: 'case-study-contact',
    },
  },
};

const clientData = {
  data: {
    id: 1,
    attributes: {
      firstName: 'Ava',
      lastName: 'Williams',
      companyName: 'SaaSify',
      liProfileCeo: 'https://www.linkedin.com/in/ava-williams',
      liProfileCompany: 'https://www.linkedin.com/company/saasify',
      url: 'https://saasify.example.com',
      description: 'B2B SaaS analytics platform for marketing teams.',
      location: 'Remote, EU',
      foundingDate: '2018-03-01',
      logoUrl: 'https://saasify.example.com/logo.svg',
      logoSize: {
        width: 120,
        height: 36,
      },
    },
  },
};

const quotesData = {
  data: [
    {
      id: 1,
      attributes: {
        content:
          'Varbintech were proactive partners who delivered a polished product experience and helped us scale quickly.',
        author: 'Filip Rogaczewski',
        authorTitle: 'CEO, SaaSify',
        authorLiLink: 'https://www.linkedin.com/in/filiprogaczewski',
        authorWebsiteLink: 'https://saasify.example.com',
        companyName: 'SaaSify',
        companyLink: 'https://saasify.example.com',
        authorPhoto: {
          data: {
            attributes: {
              url: logoBlack.src,
              width: logoBlack.width,
              height: logoBlack.height,
              name: 'Filip Rogaczewski',
              alternativeText: 'Portrait of Filip Rogaczewski',
            },
          },
        },
      },
    },
  ],
};

const servicesAsArray = [
  { name: 'Frontend development', link: '' },
  { name: 'Design systems', link: '' },
  { name: 'Product consulting', link: '' },
];

const caseStudyAttributesCommon = {
  title: 'Scaling a SaaS analytics platform',
  description: 'How we redesigned a SaaS analytics platform to unlock growth.',
  descriptionSEO:
    'Case study about redesigning a SaaS analytics product with React and TypeScript.',
  slug: 'saas-analytics-platform',
  publishedAt: '2024-01-15T00:00:00.000Z',
  updatedAt: '2024-01-20T00:00:00.000Z',
  technologies: technologiesData,
  industries: industriesData,
  heroImage: {
    images: [heroImagePrimaryData],
    mainImage: heroImageMainImageData,
  },
  metaImage: {
    data: heroImageMainImageData,
  },
  quotes: quotesData,
  sections: sectionsData,
  results: resultsData,
  callToAction: callToActionData,
  client: clientData,
  readMoreCaseStudies,
  services: servicesAsArray.map(item => item.name).join(', '),
  keywords: 'SaaS, front-end development, analytics',
};

export const caseStudyDetailData: CaseStudyStaticProps = {
  id: 1,
  attributes: {
    ...caseStudyAttributesCommon,
    baseUrl,
    apiBaseUrl,
    socialShareButtons: socialShareButtonsMock,
  },
};

const caseStudyAllAttributes: CaseStudyAllAttributes = {
  id: 1,
  attributes: {
    ...caseStudyAttributesCommon,
    servicesAsArray,
    industriesAsArray,
    resultsWithDescriptionLong: resultsData.data.map(
      result => `${result.attributes.name} — ${result.attributes.descriptionLong}`,
    ),
  },
};

const secondCaseStudy: CaseStudyAllAttributes = {
  id: 2,
  attributes: {
    ...caseStudyAttributesCommon,
    title: 'Reimagining an eCommerce experience',
    description: 'A design system and storefront refresh that improved customer engagement.',
    slug: 'ecommerce-experience-refresh',
    heroImage: {
      images: [heroImageSecondaryData],
      mainImage: heroImageSecondaryData,
    },
    metaImage: {
      data: heroImageSecondaryData,
    },
    servicesAsArray: [
      { name: 'E-commerce development', link: '' },
      { name: 'Performance optimisation', link: '' },
    ],
    services: 'E-commerce development, Performance optimisation',
    industriesAsArray,
    resultsWithDescriptionLong: [
      '25% — Increase in repeat purchases',
      '18% — Improvement in average order value',
    ],
    results: {
      data: [
        {
          id: 3,
          attributes: {
            name: '25%',
            description: 'Increase in repeat purchases',
            descriptionLong: 'Returning customer purchases grew by twenty-five percent.',
          },
        },
        {
          id: 4,
          attributes: {
            name: '18%',
            description: 'Increase in average order value',
            descriptionLong: 'Average order value increased by eighteen percent.',
          },
        },
      ],
    },
  },
};

export const caseStudiesPageProps: CaseStudyAllStaticProps = {
  className: '',
  data: {
    caseStudies: [caseStudyAllAttributes, secondCaseStudy],
    baseUrl,
    apiBaseUrl,
    socialShareButtons: socialShareButtonsMock,
    lastCaseStudy: caseStudyAllAttributes,
    className: '',
  },
  hireEngineersLinks: hireEngineersLinksMock,
  policyLinks: policyLinksMock,
};

export const homePageProps = {
  ...caseStudiesPageProps,
  services: serviceList,
};

const blogListImage = {
  id: 1,
  attributes: {
    url: heroImageSecondary.src,
    width: heroImageSecondary.width,
    height: heroImageSecondary.height,
    name: 'Article cover illustration',
    alternativeText: 'Screenshot representing the article topic',
  },
};

const blogHeroImage = {
  id: 1,
  attributes: {
    url: heroImagePrimary.src,
    width: heroImagePrimary.width,
    height: heroImagePrimary.height,
    name: 'Blog hero illustration',
    alternativeText: 'People collaborating while looking at charts',
  },
};

const blogAuthor = {
  id: 1,
  attributes: {
    firstName: 'Jordan',
    lastName: 'Parker',
    liLink: 'https://www.linkedin.com/in/jordan-parker',
    avatar: {
      data: {
        id: 1,
        attributes: {
          url: logoBlack.src,
          width: logoBlack.width,
          height: logoBlack.height,
          name: 'Jordan Parker',
          alternativeText: 'Portrait of Jordan Parker',
        },
      },
    },
  },
};

const blogTag = {
  id: 1,
  attributes: {
    title: 'Development',
    description: 'Articles focused on engineering best practices.',
  },
};

const blogSection = {
  id: 1,
  attributes: {
    name: 'Introduction',
    headingLevel: 'h2' as HeadingLevel,
    order: 1,
    descriptionEnhanced: `<h1 id="introduction">Introduction</h1>

<p>This section introduces the main topics covered in the blog post.</p><h2 id="main-content">Main Content</h2><p>The core content of the blog post goes here.</p><h3 id="subsection-1">Subsection 1</h3><p>Details about subsection 1.</p><h3 id="subsection-2">Subsection 2</h3><p>Details about subsection 2.</p><h2 id="conclusion">Conclusion</h2><p>Final thoughts and summary.</p>

<p>
Note: This content uses HTML tags to represent headings and paragraphs.
</p>

<p>It is stored in the <code>descriptionEnhanced</code> field to preserve formatting.</p>

<p>Each heading includes an <code>id</code> attribute for linking purposes.</p>

<p>This structure allows for generating a table of contents based on the headings.</p>
      `,
  },
};

const __blogItem0: BlogItemStrapi = {
  id: 1,
  attributes: {
    title: 'Designing design systems that scale',
    descriptionSEO:
      'Practical lessons on building design systems for rapidly growing SaaS platforms.',
    slug: 'design-systems-that-scale',
    keywords: 'design systems, SaaS, front-end development',
    publishedAt: '2025-02-16T15:40:22.829Z',
    createdAt: '2024-01-15T00:00:00.000Z',
    updatedAt: '2024-01-16T00:00:00.000Z',
    technologies: {
      data: technologiesData[0][1],
    },
    heroImage: {
      data: [blogHeroImage],
    },
    tocImage: {
      data: blogHeroImage,
    },
    listImage: {
      data: [blogListImage],
    },
    metaImage: {
      data: blogHeroImage,
    },
    blogTags: {
      data: [blogTag],
    },
    blogAuthors: {
      data: [blogAuthor],
    },
    sections: {
      data: [blogSection],
    },
    callToAction: {
      data: {
        id: 1,
        attributes: {
          title: 'Let’s talk about your project',
          action: '/contact',
          actionText: 'Start a conversation',
          actionId: 'blog-contact',
        },
      },
    },
    publicationState: 'live',
    quote: {
      data: quotesData.data[0],
    },
    readMoreBlogPosts: {
      id: 1,
      intro: 'Read more blog posts',
      description: 'Explore additional articles on software development and design.',
      buttonLink: '/blog',
      buttonText: 'Browse blog',
      blogs: {
        data: [],
      },
    },
  },
};

const blogItem: BlogItemStrapi = {
  id: 1,
  attributes: {
    title: 'Designing design systems that scale',
    descriptionSEO:
      'Practical lessons on building design systems for rapidly growing SaaS platforms.',
    slug: 'design-systems-that-scale',
    keywords: 'design systems, SaaS, front-end development',
    publishedAt: '2025-02-16T15:40:22.829Z',
    createdAt: '2024-01-15T00:00:00.000Z',
    updatedAt: '2024-01-16T00:00:00.000Z',
    technologies: {
      data: technologiesData[0][1],
    },
    heroImage: {
      data: [blogHeroImage],
    },
    tocImage: {
      data: blogHeroImage,
    },
    listImage: {
      data: [blogListImage],
    },
    metaImage: {
      data: blogHeroImage,
    },
    blogTags: {
      data: [blogTag],
    },
    blogAuthors: {
      data: [blogAuthor],
    },
    sections: {
      data: [blogSection],
    },
    callToAction: {
      data: {
        id: 1,
        attributes: {
          title: 'Let’s talk about your project',
          action: '/contact',
          actionText: 'Start a conversation',
          actionId: 'blog-contact',
        },
      },
    },
    publicationState: 'live',
    quote: {
      data: quotesData.data[0],
    },
    readMoreBlogPosts: {
      id: 1,
      intro: 'Read more blog posts',
      description: 'Explore additional articles on software development and design.',
      buttonLink: '/blog',
      buttonText: 'Browse blog',
      blogs: {
        data: [__blogItem0],
      },
    },
  },
};

const secondBlogItem: BlogItemStrapi = {
  ...blogItem,
  id: 2,
  attributes: {
    ...blogItem.attributes,
    title: 'Improving performance in large React applications',
    slug: 'react-performance-improvements',
    publishedAt: 'February 03, 2024',
    blogTags: {
      data: [
        {
          id: 2,
          attributes: {
            title: 'Performance',
            description: 'Optimising applications at scale.',
          },
        },
      ],
    },
  },
};

const thirdBlogItem: BlogItemStrapi = {
  ...blogItem,
  id: 3,
  attributes: {
    ...blogItem.attributes,
    title: 'Building collaborative workflows with design tokens',
    slug: 'design-tokens-workflows',
    publishedAt: 'March 12, 2024',
    publicationState: 'draft',
  },
};

export const blogPageProps: BlogStaticProps = {
  className: '',
  data: [blogItem, secondBlogItem, thirdBlogItem],
  hireEngineersLinks: hireEngineersLinksMock,
  socialShareButtons: socialShareButtonsMock,
  baseUrl,
};

export const blogItemProps = {
  className: '',
  data: blogItem,
  hireEngineersLinks: hireEngineersLinksMock,
  policyLinks: policyLinksMock,
  socialShareButtons: socialShareButtonsMock,
  baseUrl,
};

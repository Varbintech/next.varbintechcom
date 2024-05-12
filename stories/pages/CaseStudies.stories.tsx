import { storiesOf } from '@storybook/react';

import { NextRouter } from 'next/router';
import { RouterContext } from 'next/dist/shared/lib/router-context';

import type { CaseStudyStaticProps } from '../../models';

import heroImage from '../../public/dt-okr-for-jira-project/DT-OKR-for-Jira_jnbl2b_c_scale,w_1200.webp';
import filipRogaczewski from '../../public/filiprogaczewski.webp';

/* import CaseStudiesPage from '../../pages/case-studies/index.page-wip'; */
/* import CaseStudyDetailPage from '../../pages/case-studies/[caseStudyId].page'; */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const caseStudy: CaseStudyStaticProps = {
  id: 1,
  attributes: {
    title: 'Case Study Title',
    description: 'Case Study Description',
    slug: 'case-study-slug',
    publishedAt: '2024-01-01',
    technologies: [
      [
        'Frontend',
        [
          {
            id: 1,
            attributes: {
              name: 'Technology Name',
              description: 'Technology Description',
              technologyField: {
                data: {
                  id: 1,
                  attributes: {
                    name: 'Field Name',
                    description: 'Field Description',
                  },
                },
              },
            },
          },
        ],
      ],
    ],
    industries: {
      data: [
        {
          id: 1,
          attributes: {
            name: 'Industry Name',
            description: 'Industry Description',
          },
        },
      ],
    },
    heroImage: {
      images: [
        {
          id: 1,
          attributes: {
            url: heroImage.src,
            width: heroImage.width,
            height: heroImage.height,
            name: 'Hero Image',
            alternativeText: 'Hero Image Alt',
          },
        },
      ],
      mainImage: {
        id: 1,
        attributes: {
          url: heroImage.src,
          width: heroImage.width,
          height: heroImage.height,
          name: 'Hero Image',
          alternativeText: 'Hero Image Alt',
        },
      },
    },
    metaImage: {
      data: {
        id: 1,
        attributes: {
          url: heroImage.src,
          width: heroImage.width,
          height: heroImage.height,
          name: 'Meta Image',
          alternativeText: 'Meta Image Alt',
        },
      },
    },
    quotes: {
      data: [
        {
          id: 1,
          attributes: {
            content: 'Quote',
            author: 'Author',
            authorTitle: 'Author Title',
            authorLiLink: 'Author Link',
            companyName: 'Company Name',
            companyLink: 'Company Link',
            authorPhoto: {
              data: {
                attributes: {
                  url: filipRogaczewski.src,
                  width: filipRogaczewski.width,
                  height: filipRogaczewski.height,
                  name: 'Author Photo',
                  alternativeText: 'Author Photo Alt',
                },
              },
            },
          },
        },
      ],
    },
    sections: {
      data: [
        {
          id: 1,
          attributes: {
            name: 'Section Name',
            description: 'Section Description',
            headingLevel: 'h1',
            order: 1,
          },
        },
      ],
    },
    results: {
      data: [
        {
          id: 1,
          attributes: {
            name: '5',
            description: 'Developers',
            descriptionLong: 'Developers Long',
          },
        },
        {
          id: 2,
          attributes: {
            name: '3',
            description: 'Projects',
            descriptionLong: 'Developers Long',
          },
        },
      ],
    },
    callToAction: {
      data: {
        id: 1,
        attributes: {
          title: 'Call To Action Title',
          action: 'action-link',
          actionText: 'Call To Action Text',
          actionId: 'Call To Action Id',
        },
      },
    },
    services: 'List, Of, Services',
    baseUrl: 'https://example.com',
    apiBaseUrl: 'https://api.example.com',
    keywords: 'list, of, keywords',
    socialShareButtons: [
      {
        id: 1,
        socialTitle: 'Social Title',
        socialLink: 'Social Link',
        socialIcon: 'Social Icon',
        socialBorderRadius: '1',
        socialAriaLabel: 'Social Aria Label',
      },
    ],
  },
};

const mockRouter = {
  pathname: '/case-studies/[caseStudyId]',
  route: 'case-studies/[caseStudyId]',
  query: { caseStudyId: '0' },
  asPath: '/case-studies/0',
  basePath: '',
  isLocaleDomain: false,
} as unknown as NextRouter;

storiesOf('App/Pages/CaseStudies', module)
  .addDecorator(Story => (
    <RouterContext.Provider value={mockRouter}>
      <Story />
    </RouterContext.Provider>
  ))
  .add('Index', () => <>This page is: WIP</>)
  .add('Details', () => <>This page is: WIP</>);

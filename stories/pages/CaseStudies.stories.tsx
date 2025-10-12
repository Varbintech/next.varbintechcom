import type { Meta, StoryObj } from '@storybook/react';

import CaseStudiesPage from '../../pages/case-studies/index.page';
import CaseStudyDetailPage from '../../pages/case-studies/[caseStudyId].page';

import {
  caseStudiesPageProps,
  caseStudyDetailData,
  hireEngineersLinksMock,
} from '../mocks/page-data';

const meta: Meta<typeof CaseStudiesPage> = {
  title: 'App/Pages/CaseStudies',
  component: CaseStudiesPage,
  parameters: {
    nextRouter: {
      pathname: '/case-studies',
      asPath: '/case-studies',
      query: {},
    },
  },
};

export default meta;

type Story = StoryObj<typeof CaseStudiesPage>;

export const Index: Story = {
  args: caseStudiesPageProps,
};

export const Details: Story = {
  render: () => (
    <CaseStudyDetailPage data={caseStudyDetailData} hireEngineersLinks={hireEngineersLinksMock} />
  ),
  parameters: {
    nextRouter: {
      pathname: '/case-studies/[caseStudyId]',
      asPath: `/case-studies/${caseStudyDetailData.attributes.slug}`,
      query: {
        caseStudyId: caseStudyDetailData.attributes.slug,
      },
    },
  },
};

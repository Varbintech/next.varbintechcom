import { storiesOf } from '@storybook/react';

import { NextRouter } from 'next/router';
import { RouterContext } from 'next/dist/shared/lib/router-context';

import CaseStudiesPage from '../../pages/case-studies/index.page-wip';
import CaseStudyDetailPage from '../../pages/case-studies/[caseStudyId].page-wip';

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
  .add('Index', () => <CaseStudiesPage />)
  .add('Details', () => <CaseStudyDetailPage />);

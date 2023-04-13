import { storiesOf } from '@storybook/react';

import { NextRouter } from 'next/router';
import { RouterContext } from 'next/dist/shared/lib/router-context';

import BlogPage from '../../pages/blog';

const mockRouter = {
  pathname: '/blog/[blogId]',
  route: 'blog/[blogId]',
  query: { caseStudyId: '0' },
  asPath: '/blog/0',
  basePath: '',
  isLocaleDomain: false,
} as unknown as NextRouter;

storiesOf('App/Pages/Blog', module)
  .addDecorator(Story => (
    <RouterContext.Provider value={mockRouter}>
      <Story />
    </RouterContext.Provider>
  ))
  .add('Index', () => <BlogPage />);

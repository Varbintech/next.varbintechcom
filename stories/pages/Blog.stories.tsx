import { storiesOf } from '@storybook/react';

import { NextRouter } from 'next/router';
import { RouterContext } from 'next/dist/shared/lib/router-context';

/* import BlogPage from '../../pages/blog/index.page';
import BlogDetailPage from 'pages/blog/[blogId].page'; */

const mockRouter = {
  pathname: '/blog/[blogId]',
  route: 'blog/[blogId]',
  query: { blogId: '0' },
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
  .add('Index', () => <>This page is: WIP</>)
  .add('Details', () => <>This page is: WIP</>);

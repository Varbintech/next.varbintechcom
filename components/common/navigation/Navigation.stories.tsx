import { storiesOf } from '@storybook/react';

import { NextRouter } from 'next/router';
import { RouterContext } from 'next/dist/shared/lib/router-context';

import Navigation from './Navigation';

const mockRouter = {
  pathname: '/case-studies',
  route: 'case-studies',
  asPath: '/case-studies/',
  basePath: '',
  isLocaleDomain: false,
  query: { blogId: '0' },
  push: async (url: string) => {
    console.warn('push: ', url);
  },
  prefetch: async (props: unknown) => {
    console.warn('prefetch: ', props);
  },
} as unknown as NextRouter;

storiesOf('App/CommonComponents/Navigation', module)
  .addDecorator(Story => (
    <RouterContext.Provider value={mockRouter}>
      <Story />
    </RouterContext.Provider>
  ))
  .add('Default', () => <Navigation />);

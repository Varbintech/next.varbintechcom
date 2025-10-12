import type { Meta, StoryObj } from '@storybook/react';

import BlogPage from '../../pages/blog/index.page';

import { blogPageProps } from '../mocks/pageData';

const meta: Meta<typeof BlogPage> = {
  title: 'App/Pages/Blog',
  component: BlogPage,
  parameters: {
    nextRouter: {
      pathname: '/blog',
      asPath: '/blog',
      query: {},
    },
  },
};

export default meta;

type Story = StoryObj<typeof BlogPage>;

export const Index: Story = {
  args: blogPageProps,
};

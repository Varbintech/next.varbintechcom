import type { Meta, StoryObj } from '@storybook/react';

import HomePage from '../../pages/index.page';

import { homePageProps } from '../mocks/pageData';

const meta: Meta<typeof HomePage> = {
  title: 'App/Pages/Home',
  component: HomePage,
  parameters: {
    nextRouter: {
      pathname: '/',
      asPath: '/',
      query: {},
    },
  },
};

export default meta;

type Story = StoryObj<typeof HomePage>;

export const Default: Story = {
  args: homePageProps,
};

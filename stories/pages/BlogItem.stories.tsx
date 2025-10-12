import type { Meta, StoryObj } from '@storybook/react';

import BlogIdPage from '../../pages/blog/[blogId].page';

import type { TocContent } from '../../utils/api.blog';

import { blogItemProps } from '../mocks/page-data';

const toc: Array<TocContent> = [
  {
    title: 'Introduction',
    id: 'introduction',
    level: 'h2',
  },
  {
    title: 'Main Content',
    id: 'main-content',
    level: 'h2',
  },
  {
    title: 'Subsection 1',
    id: 'subsection-1',
    level: 'h3',
  },
  {
    title: 'Subsection 2',
    id: 'subsection-2',
    level: 'h3',
  },
  {
    title: 'Conclusion',
    id: 'conclusion',
    level: 'h2',
  },
];

const meta: Meta<typeof BlogIdPage> = {
  title: 'App/Pages/Blog',
  component: BlogIdPage,
  parameters: {
    nextRouter: {
      pathname: '/blog/[blogId]',
      asPath: `/blog/${blogItemProps.data.attributes.slug}`,
      query: {
        blogId: blogItemProps.data.attributes.slug,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof BlogIdPage>;

export const Details: Story = {
  args: { ...blogItemProps, tocContent: toc },
};

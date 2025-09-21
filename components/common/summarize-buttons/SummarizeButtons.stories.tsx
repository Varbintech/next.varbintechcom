import type { Meta, StoryObj } from '@storybook/react';
import SummarizeButtons from './SummarizeButtons';

const meta: Meta<typeof SummarizeButtons> = {
  title: 'App/CommonComponents/SummarizeButtons',
  component: SummarizeButtons,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    pageUrl: { control: 'text' },
    pageTitle: { control: 'text' },
  },
  args: {
    pageUrl: 'https://example.com/blog/how-to-build-something',
    pageTitle: 'How to build something great',
  },
};

export default meta;
type Story = StoryObj<typeof SummarizeButtons>;

export const Default: Story = {};

export const WithoutTitle: Story = {
  args: {
    pageTitle: undefined,
  },
};

export const WithLongTitle: Story = {
  args: {
    pageTitle:
      'A very long and descriptive blog post title that helps test wrapping and layout of the summarize buttons.',
  },
};

import type { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';

const meta = {
  title: 'Widgets/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithHomeButton: Story = {
  args: {
    children: 'Hello World',
    withHomeButton: true,
  },
};

export const WithoutHomeButton: Story = {
  args: {
    children: 'Hello World',
    withHomeButton: false,
  },
};

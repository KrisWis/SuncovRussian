import type { Meta, StoryObj } from '@storybook/react';
import { TestsPage } from './TestsPage';

const meta = {
  title: 'Pages/Tests',
  component: TestsPage,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TestsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

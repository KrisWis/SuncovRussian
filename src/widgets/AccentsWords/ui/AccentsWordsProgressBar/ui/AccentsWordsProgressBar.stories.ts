import type { Meta, StoryObj } from '@storybook/react';
import { TestsProgressBar } from './AccentsWordsProgressBar';

const meta = {
  title: 'Widgets/TestsProgressBar',
  component: TestsProgressBar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TestsProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

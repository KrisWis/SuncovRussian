import type { Meta, StoryObj } from '@storybook/react';
import { AccentsProgressBar } from './AccentsWordsProgressBar';

const meta = {
  title: 'Widgets/AccentsProgressBar',
  component: AccentsProgressBar,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AccentsProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

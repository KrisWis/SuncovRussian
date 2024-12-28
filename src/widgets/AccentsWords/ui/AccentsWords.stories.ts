import type { Meta, StoryObj } from '@storybook/react';
import { AccentsWords } from './TestsWords';
import { accentsWords } from '@/shared/assets/static/accentsWords';

const meta = {
  title: 'Widgets/AccentsWords',
  component: AccentsWords,
} satisfies Meta<typeof AccentsWords>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    words: accentsWords,
  },
};

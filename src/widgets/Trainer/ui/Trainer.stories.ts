import type { Meta, StoryObj } from '@storybook/react';
import { accentsWords, Trainer } from '..';

const meta = {
  title: 'Widgets/Trainer',
  component: Trainer,
} satisfies Meta<typeof Trainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccentsWords: Story = {
  args: {
    words: accentsWords,
  },
};

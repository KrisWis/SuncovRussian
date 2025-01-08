import type { Meta, StoryObj } from '@storybook/react';
import { wordsForAccentsTests, Trainer, wordsForUnionsTests } from '..';

const meta = {
  title: 'Widgets/Trainer',
  component: Trainer,
} satisfies Meta<typeof Trainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AccentsTests: Story = {
  args: {
    words: wordsForAccentsTests,
  },
};

export const UnionsTests: Story = {
  args: {
    words: wordsForUnionsTests,
  },
};

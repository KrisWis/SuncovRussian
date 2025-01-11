import type { Meta, StoryObj } from '@storybook/react';
import { wordsForAccentsTests, TrainerPage, wordsForUnionsTests } from '..';

const meta = {
  title: 'Pages/Trainer',
  component: TrainerPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TrainerPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryTrainerWords: Story = {
  args: {
    words: wordsForAccentsTests,
  },
};

export const UnionsTrainerWords: Story = {
  args: {
    words: wordsForUnionsTests,
  },
};

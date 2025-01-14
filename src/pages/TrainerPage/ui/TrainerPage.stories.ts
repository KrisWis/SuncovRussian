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

<<<<<<< HEAD
export const PrimaryTrainerWords: Story = {
=======
export const AccentsTests: Story = {
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)
  args: {
    words: wordsForAccentsTests,
  },
};

<<<<<<< HEAD
export const UnionsTrainerWords: Story = {
=======
export const UnionsTests: Story = {
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)
  args: {
    words: wordsForUnionsTests,
  },
};

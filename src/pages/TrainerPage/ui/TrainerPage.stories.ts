import type { Meta, StoryObj } from '@storybook/react';
import { TrainerPage } from './TrainerPage';
import { wordsForTrainers } from '../model/static/wordsForTrainers';

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
    words: wordsForTrainers['Ударения'],
    theme: 'Ударения',
  },
};

export const UnionsTrainerWords: Story = {
  args: {
    words: wordsForTrainers['Виды союзов'],
    theme: 'Виды союзов',
  },
};

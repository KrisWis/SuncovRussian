import type { Meta, StoryObj } from '@storybook/react';
import { TrainerTotalResult } from './TrainerTotalResult';
import { wordsForTrainers } from '../../model/static/wordsForTrainers';

const meta = {
  title: 'Pages/Trainer/TrainerTotalResult',
  component: TrainerTotalResult,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TrainerTotalResult>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    words: wordsForTrainers['Ударения'],
    updateRandomWord: () => {},
    theme: 'Ударения',
  },
};

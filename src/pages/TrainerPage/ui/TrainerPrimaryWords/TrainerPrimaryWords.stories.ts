import type { Meta, StoryObj } from '@storybook/react';
import { wordsForTrainers } from '../../model/static/wordsForTrainers';
import { TrainerPrimaryWords } from './TrainerPrimaryWords';
import { PrimaryWordsInterface } from '../../model/types/types';

const meta = {
  title: 'Pages/Trainer/TrainerPrimaryWords',
  component: TrainerPrimaryWords,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TrainerPrimaryWords>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    randomWord: (
      wordsForTrainers['Ударения'].items as PrimaryWordsInterface[]
    )[0],
    randomWordsIsReverse: false,
    wordOnFail: () => {},
    wordOnSuccess: () => {},
  },
};

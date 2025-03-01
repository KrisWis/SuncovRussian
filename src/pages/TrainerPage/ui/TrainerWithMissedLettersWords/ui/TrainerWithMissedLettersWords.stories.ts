import type { Meta, StoryObj } from '@storybook/react';
import { TrainerWithMissedLettersWords } from './TrainerWithMissedLettersWords';
import { wordsForTrainers } from '../../../model/static/wordsForTrainers';
import { WithMissedLettersWordsInterface } from '../../../model/types/withMissedLetters';

const meta = {
  title: 'Pages/Trainer/TrainerWithMissedLettersWords',
  component: TrainerWithMissedLettersWords,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TrainerWithMissedLettersWords>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    randomWord: (
      wordsForTrainers['Словарные слова']
        .items as WithMissedLettersWordsInterface[]
    )[0],
    wordOnSuccess: () => {},
    wordOnFail: () => {},
  },
};

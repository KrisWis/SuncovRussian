import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryTrainerWords } from './PrimaryTrainerWords';
import { wordsForAccentsTests } from '../../../model/static/wordsForAccentsTests';

const meta = {
  title: 'Widgets/Trainer/PrimaryTrainerWords',
  component: PrimaryTrainerWords,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof PrimaryTrainerWords>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    randomWord: wordsForAccentsTests[0],
    randomWordsIsReverse: false,
    wordOnFail: () => {},
    wordOnSuccess: () => {},
  },
};

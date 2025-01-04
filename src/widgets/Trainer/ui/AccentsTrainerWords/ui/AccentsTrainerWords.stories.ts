import type { Meta, StoryObj } from '@storybook/react';
import { AccentsTrainerWords } from './AccentsTrainerWords';
import { wordsForAccentsTests } from '../../../model/static/wordsForAccentsTests';

const meta = {
  title: 'Widgets/Trainer/AccentsTrainerWords',
  component: AccentsTrainerWords,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AccentsTrainerWords>;

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

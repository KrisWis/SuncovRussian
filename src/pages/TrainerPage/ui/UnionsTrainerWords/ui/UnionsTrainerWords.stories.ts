import type { Meta, StoryObj } from '@storybook/react';
import { UnionsTrainerWords } from './UnionsTrainerWords';
import { wordsForUnionsTests } from '../../../model/static/wordsForUnionsTests';

const meta = {
  title: 'Pages/Trainer/UnionsTrainerWords',
  component: UnionsTrainerWords,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof UnionsTrainerWords>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    randomWord: wordsForUnionsTests[0],
    wordOnSuccess: () => {},
    wordOnFail: () => {},
    storeWords: wordsForUnionsTests,
  },
};

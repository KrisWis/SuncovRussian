import type { Meta, StoryObj } from '@storybook/react';
import { UnionsTrainerWords } from './UnionsTrainerWords';
import { wordsForTrainers } from '../../model/static/wordsForTrainers';
import { UnionsWordsInterface } from '../../model/types/unions';

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
    randomWord: (
      wordsForTrainers['Виды союзов'].items as UnionsWordsInterface[]
    )[0],
    wordOnSuccess: () => {},
    wordOnFail: () => {},
  },
};

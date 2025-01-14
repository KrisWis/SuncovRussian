import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryTrainerWords } from './PrimaryTrainerWords';
import { wordsForAccentsTests } from '../../../model/static/wordsForAccentsTests';

const meta = {
<<<<<<<< HEAD:src/pages/TrainerPage/ui/PrimaryTrainerWords/ui/PrimaryTrainerWords.stories.ts
  title: 'Pages/Trainer/PrimaryTrainerWords',
  component: PrimaryTrainerWords,
========
  title: 'Pages/Trainer/AccentsTrainerWords',
  component: AccentsTrainerWords,
>>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.):src/pages/TrainerPage/ui/AccentsTrainerWords/ui/AccentsTrainerWords.stories.ts
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
    storeWords: wordsForAccentsTests,
  },
};

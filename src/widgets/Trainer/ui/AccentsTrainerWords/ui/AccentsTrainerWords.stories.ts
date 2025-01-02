import type { Meta, StoryObj } from '@storybook/react';
import { AccentsTrainerWords } from './AccentsTrainerWords';
import { accentsWords } from '../../../model/static/accentsWords';

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
    randomWord: accentsWords[0],
    randomWordsIsReverse: false,
    setRandomWordsIsReverse: () => {},
    setRandomWordId: () => {},
    isErrorWork: false,
    setIsIncorrect: () => {},
  },
};

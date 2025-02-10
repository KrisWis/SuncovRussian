import type { Meta, StoryObj } from '@storybook/react';
import { Test } from './Test';

const meta = {
  title: 'Features/Test',
  component: Test,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Test>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithOneCorrectAnswer: Story = {
  args: {
    caption: 'Укажите существительное 1 склонения',
    items: [
      { value: 'перо', isCorrect: true },
      { value: 'утюг', isCorrect: false },
    ],
    hasOneCorrectAnswer: true,
    index: 0,
    maxCorrectAnswersCount: 0,
    testHasMissedAnswers: false,
  },
};

export const WithSomeCorrectAnswers: Story = {
  args: {
    caption: 'Укажите существительное 2 склонения',
    items: [
      { value: 'перо', isCorrect: true },
      { value: 'утюг', isCorrect: false },
      { value: 'река', isCorrect: true },
      { value: 'дом', isCorrect: false },
    ],
    hasOneCorrectAnswer: false,
    index: 0,
    maxCorrectAnswersCount: 0,
    testHasMissedAnswers: false,
  },
};

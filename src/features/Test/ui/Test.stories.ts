/* eslint-disable camelcase */
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
    answers: [
      { text: 'перо', is_correct: true, id: 1, question: 1 },
      { text: 'утюг', is_correct: false, id: 2, question: 1 },
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
    answers: [
      { text: 'перо', is_correct: true, id: 1, question: 1 },
      { text: 'утюг', is_correct: false, id: 2, question: 1 },
      { text: 'река', is_correct: true, id: 3, question: 1 },
      { text: 'дом', is_correct: false, id: 4, question: 1 },
    ],
    hasOneCorrectAnswer: false,
    index: 0,
    maxCorrectAnswersCount: 0,
    testHasMissedAnswers: false,
  },
};

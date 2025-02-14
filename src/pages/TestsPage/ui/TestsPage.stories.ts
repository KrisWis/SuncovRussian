/* eslint-disable camelcase */
import type { Meta, StoryObj } from '@storybook/react';
import { TestsPage } from './TestsPage';
import { Question } from '@/features/Test';

const meta = {
  title: 'Pages/Tests',
  component: TestsPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TestsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockQuestions: Question[] = [
  {
    id: 1,
    text: 'Укажите существительное 1 склонения',
    has_one_correct_answer: true,
    test: 1,
    answers: [
      {
        id: 1,
        text: 'перо',
        is_correct: false,
        question: 1,
      },

      {
        id: 2,
        text: 'утюг',
        is_correct: false,
        question: 1,
      },

      {
        id: 3,
        text: 'река',
        is_correct: true,
        question: 1,
      },

      {
        id: 4,
        text: 'дом',
        is_correct: false,
        question: 1,
      },
    ],
  },
];

const mockTheme: string = 'Склонение';

export const Primary: Story = {
  args: {
    theme: mockTheme,
    questions: mockQuestions,
  },
};

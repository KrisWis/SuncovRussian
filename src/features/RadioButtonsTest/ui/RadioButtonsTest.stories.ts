import type { Meta, StoryObj } from '@storybook/react';
import { RadioButtonsTest } from './RadioButtonsTest';

const meta = {
  title: 'Features/RadioButtonsTest',
  component: RadioButtonsTest,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof RadioButtonsTest>;

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
  },
};

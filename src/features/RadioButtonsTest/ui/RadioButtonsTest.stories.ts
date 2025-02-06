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
    index: 0,
    tests: {
      Склонение: [
        {
          type: 'radioButtons',
          caption: 'Укажите существительное 1 склонения',
          hasOneCorrectAnswer: true,
          items: [
            {
              value: 'перо',
              isCorrect: false,
            },

            {
              value: 'утюг',
              isCorrect: false,
            },

            {
              value: 'река',
              isCorrect: true,
            },

            {
              value: 'дом',
              isCorrect: false,
            },
          ],
        },

        {
          type: 'radioButtons',
          caption: 'Укажите существительное 2 склонения',
          hasOneCorrectAnswer: true,
          items: [
            {
              value: 'перо',
              isCorrect: false,
            },

            {
              value: 'утюг',
              isCorrect: false,
            },

            {
              value: 'река',
              isCorrect: true,
            },

            {
              value: 'дом',
              isCorrect: false,
            },
          ],
        },

        {
          type: 'radioButtons',
          caption: 'Укажите существительное 3 склонения',
          hasOneCorrectAnswer: false,
          items: [
            {
              value: 'перо',
              isCorrect: true,
            },

            {
              value: 'утюг',
              isCorrect: false,
            },

            {
              value: 'река',
              isCorrect: true,
            },

            {
              value: 'дом',
              isCorrect: false,
            },
          ],
        },
      ],
    },
    theme: 'test',
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
    tests: {
      Склонение: [
        {
          type: 'radioButtons',
          caption: 'Укажите существительное 1 склонения',
          hasOneCorrectAnswer: true,
          items: [
            {
              value: 'перо',
              isCorrect: false,
            },

            {
              value: 'утюг',
              isCorrect: false,
            },

            {
              value: 'река',
              isCorrect: true,
            },

            {
              value: 'дом',
              isCorrect: false,
            },
          ],
        },

        {
          type: 'radioButtons',
          caption: 'Укажите существительное 2 склонения',
          hasOneCorrectAnswer: true,
          items: [
            {
              value: 'перо',
              isCorrect: false,
            },

            {
              value: 'утюг',
              isCorrect: false,
            },

            {
              value: 'река',
              isCorrect: true,
            },

            {
              value: 'дом',
              isCorrect: false,
            },
          ],
        },

        {
          type: 'radioButtons',
          caption: 'Укажите существительное 3 склонения',
          hasOneCorrectAnswer: false,
          items: [
            {
              value: 'перо',
              isCorrect: true,
            },

            {
              value: 'утюг',
              isCorrect: false,
            },

            {
              value: 'река',
              isCorrect: true,
            },

            {
              value: 'дом',
              isCorrect: false,
            },
          ],
        },
      ],
    },
    theme: 'test',
  },
};

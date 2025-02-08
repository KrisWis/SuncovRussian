import type { Meta, StoryObj } from '@storybook/react';
import { TestsPage } from './TestsPage';
import { TestsType } from '../model/types/types';

const meta = {
  title: 'Pages/Tests',
  component: TestsPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TestsPage>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockTests: TestsType = {
  Склонение: {
    type: 'radioButtons',
    items: [
      {
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
};

const mockTheme: string = 'Склонение';

export const Primary: Story = {
  args: {
    theme: mockTheme,
    item: mockTests[mockTheme],
  },
};

import { TestsType } from '../types/types';

// TODO: удалить потом mockTests и брать данные с бека
export const mockTests: TestsType = {
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

  Склонение2: {
    type: 'radioButtons',
    items: [
      {
        caption: 'Укажите существительное 4 склонения',
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
        caption: 'Укажите существительное 5 склонения',
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

      {
        caption: 'Укажите существительное 6 склонения',
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

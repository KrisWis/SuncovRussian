import { TestsType } from '../types/types';

// TODO: удалить потом mockTests и брать данные с бека
export const mockTests: TestsType = {
  Склонение: [
    {
      type: 'radioButtons',
      caption: 'Укажите существительное 1 склонения',
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
  ],
};

/* eslint-disable camelcase */
import { TestInterface } from '@/features/Test';

// TODO: удалить потом mockTests и брать данные с бека
export const mockTests: TestInterface[] = [
  {
    id: 1,
    title: 'Склонение',
    questions: [
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

      {
        id: 2,
        text: 'Укажите существительное 1 склонения',
        has_one_correct_answer: true,
        test: 1,
        answers: [
          {
            id: 1,
            text: 'перо',
            is_correct: false,
            question: 2,
          },

          {
            id: 2,
            text: 'утюг',
            is_correct: false,
            question: 2,
          },

          {
            id: 3,
            text: 'река',
            is_correct: true,
            question: 2,
          },

          {
            id: 4,
            text: 'дом',
            is_correct: false,
            question: 2,
          },
        ],
      },
    ],
  },
];

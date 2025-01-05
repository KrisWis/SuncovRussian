import { TrainerWordsInterface } from '../types/types';

export type unionTypes = 'Сочинительный' | 'Подчинительный';

export const unionTypes: unionTypes[] = ['Сочинительный', 'Подчинительный'];

export interface UnionsWordsInterface extends TrainerWordsInterface {
  word: string;
  unionType: unionTypes;
}

export const wordsForUnionsTests: UnionsWordsInterface[] = [
  {
    word: 'И',
    unionType: 'Сочинительный',
    id: 0,
    trainerType: 'unions',
  },
  {
    word: 'ДА',
    unionType: 'Сочинительный',
    id: 1,
    trainerType: 'unions',
  },
  {
    word: 'НИ…НИ',
    unionType: 'Сочинительный',
    id: 2,
    trainerType: 'unions',
  },
  {
    word: 'ТОЖЕ',
    unionType: 'Сочинительный',
    id: 3,
    trainerType: 'unions',
  },
  {
    word: 'ТАКЖЕ',
    unionType: 'Сочинительный',
    id: 4,
    trainerType: 'unions',
  },
  {
    word: 'А',
    unionType: 'Сочинительный',
    id: 5,
    trainerType: 'unions',
  },
  {
    word: 'НО',
    unionType: 'Сочинительный',
    id: 6,
    trainerType: 'unions',
  },
  {
    word: 'ЗАТО',
    unionType: 'Сочинительный',
    id: 7,
    trainerType: 'unions',
  },
  {
    word: 'ОДНАКО',
    unionType: 'Сочинительный',
    id: 8,
    trainerType: 'unions',
  },
  {
    word: 'ИЛИ',
    unionType: 'Сочинительный',
    id: 9,
    trainerType: 'unions',
  },
  {
    word: 'ЛИБО',
    unionType: 'Сочинительный',
    id: 10,
    trainerType: 'unions',
  },
  {
    word: 'ТО…ТО',
    unionType: 'Сочинительный',
    id: 11,
    trainerType: 'unions',
  },
  {
    word: 'НЕ ТО…НЕ ТО',
    unionType: 'Сочинительный',
    id: 12,
    trainerType: 'unions',
  },
  {
    word: 'КАК',
    unionType: 'Подчинительный',
    id: 13,
    trainerType: 'unions',
  },
  {
    word: 'ЧТОБЫ',
    unionType: 'Подчинительный',
    id: 14,
    trainerType: 'unions',
  },
  {
    word: 'БУДТО',
    unionType: 'Подчинительный',
    id: 15,
    trainerType: 'unions',
  },
  {
    word: 'КОГДА',
    unionType: 'Подчинительный',
    id: 16,
    trainerType: 'unions',
  },
  {
    word: 'КАК ТОЛЬКО',
    unionType: 'Подчинительный',
    id: 17,
    trainerType: 'unions',
  },
  {
    word: 'МЕЖДУ ТЕМ',
    unionType: 'Подчинительный',
    id: 18,
    trainerType: 'unions',
  },
  {
    word: 'ЛИШЬ',
    unionType: 'Подчинительный',
    id: 19,
    trainerType: 'unions',
  },
  {
    word: 'ЕДВА',
    unionType: 'Подчинительный',
    id: 20,
    trainerType: 'unions',
  },
  {
    word: 'ПОКА',
    unionType: 'Подчинительный',
    id: 21,
    trainerType: 'unions',
  },
  {
    word: 'ИБО',
    unionType: 'Подчинительный',
    id: 22,
    trainerType: 'unions',
  },
  {
    word: 'ПОТОМУ',
    unionType: 'Подчинительный',
    id: 23,
    trainerType: 'unions',
  },
  {
    word: 'ТАК КАК',
    unionType: 'Подчинительный',
    id: 24,
    trainerType: 'unions',
  },
  {
    word: 'ЧТОБЫ',
    unionType: 'Подчинительный',
    id: 25,
    trainerType: 'unions',
  },
  {
    word: 'ЕСЛИ',
    unionType: 'Подчинительный',
    id: 26,
    trainerType: 'unions',
  },
  {
    word: 'ХОТЯ',
    unionType: 'Подчинительный',
    id: 27,
    trainerType: 'unions',
  },
  {
    word: 'ПУСТЬ',
    unionType: 'Подчинительный',
    id: 28,
    trainerType: 'unions',
  },
  {
    word: 'НЕСМОТРЯ НА ТО ЧТО',
    unionType: 'Подчинительный',
    id: 29,
    trainerType: 'unions',
  },
  {
    word: 'БУДТО',
    unionType: 'Подчинительный',
    id: 30,
    trainerType: 'unions',
  },
  {
    word: 'СЛОВНО',
    unionType: 'Подчинительный',
    id: 31,
    trainerType: 'unions',
  },
  {
    word: 'КОТОРЫЙ',
    unionType: 'Подчинительный',
    id: 32,
    trainerType: 'unions',
  },
  {
    word: 'ЛИ',
    unionType: 'Подчинительный',
    id: 33,
    trainerType: 'unions',
  },
  {
    word: 'КАКОЙ',
    unionType: 'Подчинительный',
    id: 34,
    trainerType: 'unions',
  },
  {
    word: 'ЧЕЙ',
    unionType: 'Подчинительный',
    id: 35,
    trainerType: 'unions',
  },
  {
    word: 'ГДЕ',
    unionType: 'Подчинительный',
    id: 36,
    trainerType: 'unions',
  },
  {
    word: 'КУДА',
    unionType: 'Подчинительный',
    id: 37,
    trainerType: 'unions',
  },
  {
    word: 'ОТКУДА',
    unionType: 'Подчинительный',
    id: 38,
    trainerType: 'unions',
  },
  {
    word: 'ПОЧЕМУ',
    unionType: 'Подчинительный',
    id: 39,
    trainerType: 'unions',
  },
  {
    word: 'ЗАЧЕМ',
    unionType: 'Подчинительный',
    id: 40,
    trainerType: 'unions',
  },
  {
    word: 'КТО',
    unionType: 'Подчинительный',
    id: 41,
    trainerType: 'unions',
  },
  {
    word: 'НАСКОЛЬКО',
    unionType: 'Подчинительный',
    id: 42,
    trainerType: 'unions',
  },
  {
    word: 'КАКОВ',
    unionType: 'Подчинительный',
    id: 43,
    trainerType: 'unions',
  },
];

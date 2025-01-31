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
    trainerType: 'виды союзов',
  },
  {
    word: 'ДА',
    unionType: 'Сочинительный',
    id: 1,
    trainerType: 'виды союзов',
  },
  {
    word: 'НИ…НИ',
    unionType: 'Сочинительный',
    id: 2,
    trainerType: 'виды союзов',
  },
  {
    word: 'ТОЖЕ',
    unionType: 'Сочинительный',
    id: 3,
    trainerType: 'виды союзов',
  },
  {
    word: 'ТАКЖЕ',
    unionType: 'Сочинительный',
    id: 4,
    trainerType: 'виды союзов',
  },
  {
    word: 'А',
    unionType: 'Сочинительный',
    id: 5,
    trainerType: 'виды союзов',
  },
  {
    word: 'НО',
    unionType: 'Сочинительный',
    id: 6,
    trainerType: 'виды союзов',
  },
  {
    word: 'ЗАТО',
    unionType: 'Сочинительный',
    id: 7,
    trainerType: 'виды союзов',
  },
  {
    word: 'ОДНАКО',
    unionType: 'Сочинительный',
    id: 8,
    trainerType: 'виды союзов',
  },
  {
    word: 'ИЛИ',
    unionType: 'Сочинительный',
    id: 9,
    trainerType: 'виды союзов',
  },
  {
    word: 'ЛИБО',
    unionType: 'Сочинительный',
    id: 10,
    trainerType: 'виды союзов',
  },
  {
    word: 'ТО…ТО',
    unionType: 'Сочинительный',
    id: 11,
    trainerType: 'виды союзов',
  },
  {
    word: 'НЕ ТО…НЕ ТО',
    unionType: 'Сочинительный',
    id: 12,
    trainerType: 'виды союзов',
  },
  {
    word: 'КАК',
    unionType: 'Подчинительный',
    id: 13,
    trainerType: 'виды союзов',
  },
  {
    word: 'ЧТОБЫ',
    unionType: 'Подчинительный',
    id: 14,
    trainerType: 'виды союзов',
  },
  {
    word: 'БУДТО',
    unionType: 'Подчинительный',
    id: 15,
    trainerType: 'виды союзов',
  },
  {
    word: 'КОГДА',
    unionType: 'Подчинительный',
    id: 16,
    trainerType: 'виды союзов',
  },
  {
    word: 'КАК ТОЛЬКО',
    unionType: 'Подчинительный',
    id: 17,
    trainerType: 'виды союзов',
  },
  {
    word: 'МЕЖДУ ТЕМ',
    unionType: 'Подчинительный',
    id: 18,
    trainerType: 'виды союзов',
  },
  {
    word: 'ЛИШЬ',
    unionType: 'Подчинительный',
    id: 19,
    trainerType: 'виды союзов',
  },
  {
    word: 'ЕДВА',
    unionType: 'Подчинительный',
    id: 20,
    trainerType: 'виды союзов',
  },
  {
    word: 'ПОКА',
    unionType: 'Подчинительный',
    id: 21,
    trainerType: 'виды союзов',
  },
  {
    word: 'ИБО',
    unionType: 'Подчинительный',
    id: 22,
    trainerType: 'виды союзов',
  },
  {
    word: 'ПОТОМУ',
    unionType: 'Подчинительный',
    id: 23,
    trainerType: 'виды союзов',
  },
  {
    word: 'ТАК КАК',
    unionType: 'Подчинительный',
    id: 24,
    trainerType: 'виды союзов',
  },
  {
    word: 'ЧТОБЫ',
    unionType: 'Подчинительный',
    id: 25,
    trainerType: 'виды союзов',
  },
  {
    word: 'ЕСЛИ',
    unionType: 'Подчинительный',
    id: 26,
    trainerType: 'виды союзов',
  },
  {
    word: 'ХОТЯ',
    unionType: 'Подчинительный',
    id: 27,
    trainerType: 'виды союзов',
  },
  {
    word: 'ПУСТЬ',
    unionType: 'Подчинительный',
    id: 28,
    trainerType: 'виды союзов',
  },
  {
    word: 'НЕСМОТРЯ НА ТО ЧТО',
    unionType: 'Подчинительный',
    id: 29,
    trainerType: 'виды союзов',
  },
  {
    word: 'БУДТО',
    unionType: 'Подчинительный',
    id: 30,
    trainerType: 'виды союзов',
  },
  {
    word: 'СЛОВНО',
    unionType: 'Подчинительный',
    id: 31,
    trainerType: 'виды союзов',
  },
  {
    word: 'КОТОРЫЙ',
    unionType: 'Подчинительный',
    id: 32,
    trainerType: 'виды союзов',
  },
  {
    word: 'ЛИ',
    unionType: 'Подчинительный',
    id: 33,
    trainerType: 'виды союзов',
  },
  {
    word: 'КАКОЙ',
    unionType: 'Подчинительный',
    id: 34,
    trainerType: 'виды союзов',
  },
  {
    word: 'ЧЕЙ',
    unionType: 'Подчинительный',
    id: 35,
    trainerType: 'виды союзов',
  },
  {
    word: 'ГДЕ',
    unionType: 'Подчинительный',
    id: 36,
    trainerType: 'виды союзов',
  },
  {
    word: 'КУДА',
    unionType: 'Подчинительный',
    id: 37,
    trainerType: 'виды союзов',
  },
  {
    word: 'ОТКУДА',
    unionType: 'Подчинительный',
    id: 38,
    trainerType: 'виды союзов',
  },
  {
    word: 'ПОЧЕМУ',
    unionType: 'Подчинительный',
    id: 39,
    trainerType: 'виды союзов',
  },
  {
    word: 'ЗАЧЕМ',
    unionType: 'Подчинительный',
    id: 40,
    trainerType: 'виды союзов',
  },
  {
    word: 'КТО',
    unionType: 'Подчинительный',
    id: 41,
    trainerType: 'виды союзов',
  },
  {
    word: 'НАСКОЛЬКО',
    unionType: 'Подчинительный',
    id: 42,
    trainerType: 'виды союзов',
  },
  {
    word: 'КАКОВ',
    unionType: 'Подчинительный',
    id: 43,
    trainerType: 'виды союзов',
  },
];

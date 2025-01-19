import { PrimaryWordsInterface } from '../types/types';

export interface DictionaryWordsInterface extends PrimaryWordsInterface {
  differenceIndexes: number[];
}

export const wordsForDictionaryTests: DictionaryWordsInterface[] = [
  {
    id: 0,
    valid: 'тишина',
    invalid: 'тишена',
    differenceIndexes: [4],
    trainerType: 'cловарные слова',
  },

  {
    id: 1,
    valid: 'белизна',
    invalid: 'белезна',
    differenceIndexes: [4],
    trainerType: 'cловарные слова',
  },

  {
    id: 2,
    valid: 'празднество',
    invalid: 'праздненство',
    differenceIndexes: [8],
    trainerType: 'cловарные слова',
  },

  {
    id: 3,
    valid: 'писатель',
    invalid: 'писатиль',
    differenceIndexes: [6],
    trainerType: 'cловарные слова',
  },

  {
    id: 4,
    valid: 'маета',
    invalid: 'маята',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 5,
    valid: 'котловина',
    invalid: 'катловина',
    differenceIndexes: [2],
    trainerType: 'cловарные слова',
  },

  {
    id: 6,
    valid: 'сердцевина',
    invalid: 'сердцивина',
    differenceIndexes: [6],
    trainerType: 'cловарные слова',
  },

  {
    id: 7,
    valid: 'взимать',
    invalid: 'взымать',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 8,
    valid: 'фельдъегерь',
    invalid: 'фельдьегерь',
    differenceIndexes: [6],
    trainerType: 'cловарные слова',
  },

  {
    id: 9,
    valid: 'преступление',
    invalid: 'приступление',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 10,
    valid: 'пресечь',
    invalid: 'присечь',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 11,
    valid: 'адъютант',
    invalid: 'адьютант',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 12,
    valid: 'пригарь',
    invalid: 'пригорь',
    differenceIndexes: [5],
    trainerType: 'cловарные слова',
  },

  {
    id: 13,
    valid: 'выгарки',
    invalid: 'выгорки',
    differenceIndexes: [4],
    trainerType: 'cловарные слова',
  },

  {
    id: 14,
    valid: 'изгарь',
    invalid: 'изгорь',
    differenceIndexes: [4],
    trainerType: 'cловарные слова',
  },

  {
    id: 15,
    valid: 'зоревать',
    invalid: 'заревать',
    differenceIndexes: [2],
    trainerType: 'cловарные слова',
  },

  {
    id: 16,
    valid: 'пловец',
    invalid: 'плавец',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 17,
    valid: 'отрасль',
    invalid: 'отросль',
    differenceIndexes: [4],
    trainerType: 'cловарные слова',
  },

  {
    id: 18,
    valid: 'росток',
    invalid: 'расток',
    differenceIndexes: [2],
    trainerType: 'cловарные слова',
  },

  {
    id: 19,
    valid: 'вырост',
    invalid: 'выраст',
    differenceIndexes: [4],
    trainerType: 'cловарные слова',
  },

  {
    id: 20,
    valid: 'ростовщик',
    invalid: 'растовщик',
    differenceIndexes: [2],
    trainerType: 'cловарные слова',
  },

  {
    id: 21,
    valid: 'Ростов',
    invalid: 'Растов',
    differenceIndexes: [2],
    trainerType: 'cловарные слова',
  },

  {
    id: 22,
    valid: 'Ростислав',
    invalid: 'Растислав',
    differenceIndexes: [2],
    trainerType: 'cловарные слова',
  },

  {
    id: 23,
    valid: 'равнина',
    invalid: 'ровнина',
    differenceIndexes: [2],
    trainerType: 'cловарные слова',
  },

  {
    id: 24,
    valid: 'сочетать',
    invalid: 'сочитать',
    differenceIndexes: [4],
    trainerType: 'cловарные слова',
  },

  {
    id: 25,
    valid: 'аккомпанемент',
    invalid: 'аккомпонемент',
    differenceIndexes: [7],
    trainerType: 'cловарные слова',
  },

  {
    id: 26,
    valid: 'бюллетень',
    invalid: 'беллетень',
    differenceIndexes: [2],
    trainerType: 'cловарные слова',
  },

  {
    id: 27,
    valid: 'брошюра',
    invalid: 'брошура',
    differenceIndexes: [5],
    trainerType: 'cловарные слова',
  },

  {
    id: 28,
    valid: 'вестибюль',
    invalid: 'вистибюль',
    differenceIndexes: [2],
    trainerType: 'cловарные слова',
  },

  {
    id: 29,
    valid: 'винегрет',
    invalid: 'венегрет',
    differenceIndexes: [2],
    trainerType: 'cловарные слова',
  },

  {
    id: 30,
    valid: 'грамматика',
    invalid: 'граматика',
    differenceIndexes: [4],
    trainerType: 'cловарные слова',
  },

  {
    id: 31,
    valid: 'экстремальный',
    invalid: 'экстримальный',
    differenceIndexes: [6],
    trainerType: 'cловарные слова',
  },

  {
    id: 32,
    valid: 'укротить',
    invalid: 'укратить',
    differenceIndexes: [4],
    trainerType: 'cловарные слова',
  },

  {
    id: 33,
    valid: 'дирижёр',
    invalid: 'дерижёр',
    differenceIndexes: [2],
    trainerType: 'cловарные слова',
  },

  {
    id: 34,
    valid: 'иждивенец',
    invalid: 'иждевенец',
    differenceIndexes: [4],
    trainerType: 'cловарные слова',
  },

  {
    id: 35,
    valid: 'иллюзия',
    invalid: 'илюзия',
    differenceIndexes: [2],
    trainerType: 'cловарные слова',
  },

  {
    id: 36,
    valid: 'катастрофа',
    invalid: 'катострофа',
    differenceIndexes: [4],
    trainerType: 'cловарные слова',
  },

  {
    id: 37,
    valid: 'лелеять',
    invalid: 'лелееть',
    differenceIndexes: [5],
    trainerType: 'cловарные слова',
  },

  {
    id: 38,
    valid: 'палисадник',
    invalid: 'полисадник',
    differenceIndexes: [2],
    trainerType: 'cловарные слова',
  },

  {
    id: 39,
    valid: 'президиум',
    invalid: 'президеум',
    differenceIndexes: [7],
    trainerType: 'cловарные слова',
  },

  {
    id: 40,
    valid: 'преодолеть',
    invalid: 'приодолеть',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 41,
    valid: 'преобразовать',
    invalid: 'приобразовать',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 42,
    valid: 'прецедент',
    invalid: 'прицедент',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 43,
    valid: 'привилегия',
    invalid: 'превилегия',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 44,
    valid: 'примитивный',
    invalid: 'премитивный',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 45,
    valid: 'приоритет',
    invalid: 'преоритет',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 46,
    valid: 'резидент',
    invalid: 'резедент',
    differenceIndexes: [4],
    trainerType: 'cловарные слова',
  },

  {
    id: 47,
    valid: 'спартакиада',
    invalid: 'спортокиада',
    differenceIndexes: [3, 6],
    trainerType: 'cловарные слова',
  },

  {
    id: 48,
    valid: 'стипендия',
    invalid: 'степендия',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 49,
    valid: 'трясина',
    invalid: 'тресина',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 50,
    valid: 'университет',
    invalid: 'уневерситет',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 51,
    valid: 'веять',
    invalid: 'веить',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 52,
    valid: 'блеять',
    invalid: 'блеить',
    differenceIndexes: [4],
    trainerType: 'cловарные слова',
  },

  {
    id: 53,
    valid: 'лаять',
    invalid: 'лаить',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 54,
    valid: 'кашлять',
    invalid: 'кашлить',
    differenceIndexes: [5],
    trainerType: 'cловарные слова',
  },

  {
    id: 55,
    valid: 'каяться',
    invalid: 'каиться',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 56,
    valid: 'клеить',
    invalid: 'клееть',
    differenceIndexes: [4],
    trainerType: 'cловарные слова',
  },

  {
    id: 57,
    valid: 'вялить',
    invalid: 'вялеть',
    differenceIndexes: [4],
    trainerType: 'cловарные слова',
  },

  {
    id: 58,
    valid: 'жа́лить',
    invalid: 'жа́леть',
    differenceIndexes: [4],
    trainerType: 'cловарные слова',
  },

  {
    id: 59,
    valid: 'метить',
    invalid: 'мететь',
    differenceIndexes: [4],
    trainerType: 'cловарные слова',
  },

  {
    id: 60,
    valid: 'молвить',
    invalid: 'молветь',
    differenceIndexes: [5],
    trainerType: 'cловарные слова',
  },

  {
    id: 61,
    valid: 'осилить',
    invalid: 'осилеть',
    differenceIndexes: [5],
    trainerType: 'cловарные слова',
  },

  {
    id: 62,
    valid: 'ездить',
    invalid: 'ездеть',
    differenceIndexes: [4],
    trainerType: 'cловарные слова',
  },

  {
    id: 63,
    valid: 'мучить',
    invalid: 'мучать',
    differenceIndexes: [4],
    trainerType: 'cловарные слова',
  },

  {
    id: 64,
    valid: 'приемлемый',
    invalid: 'приемлимый',
    differenceIndexes: [7],
    trainerType: 'cловарные слова',
  },

  {
    id: 65,
    valid: 'незыблемый',
    invalid: 'незыблимый',
    differenceIndexes: [7],
    trainerType: 'cловарные слова',
  },

  {
    id: 66,
    valid: 'неотъемлемый',
    invalid: 'неотъемлимый',
    differenceIndexes: [9],
    trainerType: 'cловарные слова',
  },

  {
    id: 67,
    valid: 'движимый',
    invalid: 'движемый',
    differenceIndexes: [5],
    trainerType: 'cловарные слова',
  },

  {
    id: 68,
    valid: 'юродивый',
    invalid: 'юродевый',
    differenceIndexes: [5],
    trainerType: 'cловарные слова',
  },

  {
    id: 69,
    valid: 'баеньки',
    invalid: 'баиньки',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 70,
    valid: 'заинька',
    invalid: 'заенька',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 71,
    valid: 'паинька',
    invalid: 'паенька',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 72,
    valid: 'претерпеть',
    invalid: 'притерпеть',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 73,
    valid: 'притерпеться',
    invalid: 'претерпеться',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 74,
    valid: 'привратник',
    invalid: 'превратник',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 75,
    valid: 'прообраз',
    invalid: 'праобраз',
    differenceIndexes: [3],
    trainerType: 'cловарные слова',
  },

  {
    id: 76,
    valid: 'панъевропейский',
    invalid: 'паневропейский',
    differenceIndexes: [4],
    trainerType: 'cловарные слова',
  },

  {
    id: 77,
    valid: 'продлевать',
    invalid: 'продливать',
    differenceIndexes: [6],
    trainerType: 'cловарные слова',
  },

  {
    id: 78,
    valid: 'затмевать',
    invalid: 'затмивать',
    differenceIndexes: [5],
    trainerType: 'cловарные слова',
  },

  {
    id: 79,
    valid: 'застревать',
    invalid: 'застрявать',
    differenceIndexes: [6],
    trainerType: 'cловарные слова',
  },

  {
    id: 80,
    valid: 'обуревать',
    invalid: 'обуривать',
    differenceIndexes: [5],
    trainerType: 'cловарные слова',
  },

  {
    id: 81,
    valid: 'встревать',
    invalid: 'встрявать',
    differenceIndexes: [5],
    trainerType: 'cловарные слова',
  },
];

import { HeaderMenu, HeaderRoutes } from './types';

export const headerCategories: HeaderMenu = {
  Диктанты: [],
  Пунктуация: [],
  Теория: [],
  Тренажеры: [
    'Ударения',
    'Словарные слова',
    'Виды союзов',
    'Наречия',
    'Н/НН',
    'Морфологические нормы',
  ],
  Сочинения: [],
};

export const headerRoutesCategories: HeaderRoutes = {
  Диктанты: 'dictants',
  Пунктуация: 'punctuation',
  Теория: 'theory',

  Тренажеры: 'trainers',

  Ударения: 'accents',
  'Словарные слова': 'dictionary',
  'Виды союзов': 'unions',
  Наречия: 'adverbs',
  'Н/НН': 'n/nn',
  'Морфологические нормы': 'morphological',

  Сочинения: 'essays',
};

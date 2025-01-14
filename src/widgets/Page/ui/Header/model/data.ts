import { HeaderMenu, HeaderRoutes } from './types';

export const headerCategories: HeaderMenu = {
  Диктанты: [],
  Пунктуация: [],
  Теория: [],
  Тренажеры: ['Ударения', 'Словарные слова', 'Виды союзов', 'Наречия', 'Н/НН'],
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

  Сочинения: 'essays',
};

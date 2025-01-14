import { HeaderMenu, HeaderRoutes } from './types';

export const headerCategories: HeaderMenu = {
  Диктанты: [],
  Пунктуация: [],
  Теория: [],
  Тренажеры: [
    'Ударения',
    'Паронимы',
    'Тропы',
    'Словарные слова',
    'Виды союзов',
    'Виды подчинительных союзов',
  ],
  Сочинения: [],
};

export const headerRoutesCategories: HeaderRoutes = {
  Диктанты: 'dictants',
  Пунктуация: 'punctuation',
  Теория: 'theory',

  Тренажеры: 'trainers',

  Ударения: 'accents',
  Паронимы: 'paronyms',
  Тропы: 'trops',
  'Словарные слова': 'dictionary',
  'Виды союзов': 'unions',
  'Виды подчинительных союзов': 'subordinate',
  'Н/НН': 'n/nn',

  Сочинения: 'essays',
};

import { HeaderMenu, HeaderRoutes } from './types';

export const headerCategories: HeaderMenu = {
  Диктанты: [],
  Пунктуация: [],
  Теория: [],
<<<<<<< HEAD
<<<<<<< HEAD
  Тренажеры: ['Ударения', 'Словарные слова', 'Виды союзов', 'Наречия', 'Н/НН'],
=======
  Тренажеры: [
    'Ударения',
    'Паронимы',
    'Тропы',
    'Словарные слова',
    'Виды союзов',
    'Виды подчинительных союзов',
  ],
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)
=======
  Тренажеры: ['Ударения', 'Словарные слова', 'Виды союзов', 'Наречия', 'Н/НН'],
>>>>>>> 786c80e (Add new trainers.)
  Сочинения: [],
};

export const headerRoutesCategories: HeaderRoutes = {
  Диктанты: 'dictants',
  Пунктуация: 'punctuation',
  Теория: 'theory',

  Тренажеры: 'trainers',

  Ударения: 'accents',
<<<<<<< HEAD
<<<<<<< HEAD
  'Словарные слова': 'dictionary',
  'Виды союзов': 'unions',
  Наречия: 'adverbs',
=======
  Паронимы: 'paronyms',
  Тропы: 'trops',
  'Словарные слова': 'dictionary',
  'Виды союзов': 'unions',
  'Виды подчинительных союзов': 'subordinate',
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)
=======
  'Словарные слова': 'dictionary',
  'Виды союзов': 'unions',
  Наречия: 'adverbs',
>>>>>>> 786c80e (Add new trainers.)
  'Н/НН': 'n/nn',

  Сочинения: 'essays',
};

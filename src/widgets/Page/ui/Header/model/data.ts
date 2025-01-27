// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { mockDictants } from '@/pages/DictantsPage';
import { HeaderMenu, HeaderRoutes } from './types';

export const headerCategories: HeaderMenu = {
  Диктанты: [...mockDictants.map((dictant) => dictant)],
  Теория: [],
  Тренажеры: [
    'Ударения',
    'Словарные слова',
    'Виды союзов',
    'Наречия',
    'Н/НН',
    'Пре-При',
    'Морфологические нормы',
  ],
};

export const headerRoutesCategories: HeaderRoutes = {
  Диктанты: 'dictants',
  Теория: 'theory',

  Тренажеры: 'trainers',

  Ударения: 'accents',
  'Словарные слова': 'dictionary',
  'Виды союзов': 'unions',
  Наречия: 'adverbs',
  'Н/НН': 'nn',
  'Пре-При': 'pre-pri',
  'Морфологические нормы': 'morphological',
};

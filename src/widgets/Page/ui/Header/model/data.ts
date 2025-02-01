/* eslint-disable ulbi-tv-plugin/layer-imports */

import { mockDictants } from '@/pages/DictantsPage';
import { HeaderMenu, HeaderRoutes } from './types';
import { mockTests } from '@/pages/TestsPage';
import { wordsForTrainers } from '@/pages/TrainerPage';

export const headerCategories: HeaderMenu = {
  Тесты: [...Object.keys(mockTests)],
  Диктанты: [...mockDictants.map((dictant) => dictant)],
  Теория: [],
  Тренажеры: [...Object.keys(wordsForTrainers)],
};

export const headerRoutesCategories: HeaderRoutes = {
  Тесты: 'tests',
  Диктанты: 'dictants',
  Теория: 'theory',
  Тренажеры: 'trainers',
};

// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import {
  wordsForAccentsTests,
  wordsForUnionsTests,
  WordsTypes,
} from '@/pages/TrainerPage';

type TrainerRouteSubcategories =
  | 'accents'
  | 'paronyms'
  | 'trops'
  | 'dictionary'
  | 'unions'
  | 'subordinate'
  | 'n/nn';

interface TrainerRoutes {
  subcategory: TrainerRouteSubcategories;
  words: WordsTypes[];
}

export const trainerRoutes: TrainerRoutes[] = [
  { subcategory: 'accents', words: wordsForAccentsTests },
  { subcategory: 'unions', words: wordsForUnionsTests },
];

export const getRouteMain = () => '/';
export const getRouteTheory = () => '/theory';
export const getRouteTrainer = (trainerType: TrainerRouteSubcategories) =>
  `/trainers/${trainerType}`;
export const getRouteNotFound = () => '*';

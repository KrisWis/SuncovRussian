// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import {
  wordsForAccentsTests,
  wordsForUnionsTests,
  WordsTypes,
<<<<<<< HEAD
  wordsForNNTests,
  wordsForDictionaryTests,
  wordsForAdverbsTests,
=======
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)
} from '@/pages/TrainerPage';

type TrainerRouteSubcategories =
  | 'accents'
<<<<<<< HEAD
  | 'dictionary'
  | 'unions'
  | 'adverbs'
=======
  | 'paronyms'
  | 'trops'
  | 'dictionary'
  | 'unions'
  | 'subordinate'
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)
  | 'n/nn';

interface TrainerRoutes {
  subcategory: TrainerRouteSubcategories;
  words: WordsTypes[];
}

export const trainerRoutes: TrainerRoutes[] = [
  { subcategory: 'accents', words: wordsForAccentsTests },
<<<<<<< HEAD
  { subcategory: 'dictionary', words: wordsForDictionaryTests },
  { subcategory: 'unions', words: wordsForUnionsTests },
  { subcategory: 'adverbs', words: wordsForAdverbsTests },
  { subcategory: 'n/nn', words: wordsForNNTests },
=======
  { subcategory: 'unions', words: wordsForUnionsTests },
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)
];

export const getRouteMain = () => '/';
export const getRouteTheory = () => '/theory';
export const getRouteTrainer = (trainerType: TrainerRouteSubcategories) =>
  `/trainers/${trainerType}`;
export const getRouteNotFound = () => '*';

// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import {
  wordsForAccentsTests,
  wordsForUnionsTests,
  WordsTypes,
<<<<<<< HEAD
<<<<<<< HEAD
  wordsForNNTests,
  wordsForDictionaryTests,
  wordsForAdverbsTests,
=======
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)
=======
  wordsForNNTests,
  wordsForDictionaryTests,
  wordsForAdverbsTests,
>>>>>>> 786c80e (Add new trainers.)
} from '@/pages/TrainerPage';

type TrainerRouteSubcategories =
  | 'accents'
<<<<<<< HEAD
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
=======
  | 'dictionary'
  | 'unions'
  | 'adverbs'
>>>>>>> 786c80e (Add new trainers.)
  | 'n/nn';

interface TrainerRoutes {
  subcategory: TrainerRouteSubcategories;
  words: WordsTypes[];
}

export const trainerRoutes: TrainerRoutes[] = [
  { subcategory: 'accents', words: wordsForAccentsTests },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 786c80e (Add new trainers.)
  { subcategory: 'dictionary', words: wordsForDictionaryTests },
  { subcategory: 'unions', words: wordsForUnionsTests },
  { subcategory: 'adverbs', words: wordsForAdverbsTests },
  { subcategory: 'n/nn', words: wordsForNNTests },
<<<<<<< HEAD
=======
  { subcategory: 'unions', words: wordsForUnionsTests },
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)
=======
>>>>>>> 786c80e (Add new trainers.)
];

export const getRouteMain = () => '/';
export const getRouteTheory = () => '/theory';
export const getRouteTrainer = (trainerType: TrainerRouteSubcategories) =>
  `/trainers/${trainerType}`;
export const getRouteNotFound = () => '*';

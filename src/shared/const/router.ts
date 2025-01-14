// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import {
  wordsForAccentsTests,
  wordsForUnionsTests,
  WordsTypes,
  wordsForNNTests,
  wordsForDictionaryTests,
  wordsForAdverbsTests,
} from '@/pages/TrainerPage';

type TrainerRouteSubcategories =
  | 'accents'
  | 'dictionary'
  | 'unions'
  | 'adverbs'
  | 'n/nn';

interface TrainerRoutes {
  subcategory: TrainerRouteSubcategories;
  words: WordsTypes[];
}

export const trainerRoutes: TrainerRoutes[] = [
  { subcategory: 'accents', words: wordsForAccentsTests },
  { subcategory: 'dictionary', words: wordsForDictionaryTests },
  { subcategory: 'unions', words: wordsForUnionsTests },
  { subcategory: 'adverbs', words: wordsForAdverbsTests },
  { subcategory: 'n/nn', words: wordsForNNTests },
];

export const getRouteMain = () => '/';
export const getRouteTheory = () => '/theory';
export const getRouteTrainer = (trainerType: TrainerRouteSubcategories) =>
  `/trainers/${trainerType}`;
export const getRouteNotFound = () => '*';

// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import {
  WordsTypes,
  wordsForAccentsTests,
  wordsForDictionaryTests,
  wordsForUnionsTests,
  wordsForAdverbsTests,
  wordsForNNTests,
  wordsForMorphologicalTests,
} from '@/pages/TrainerPage';

type TrainerRouteSubcategories =
  | 'accents'
  | 'dictionary'
  | 'unions'
  | 'adverbs'
  | 'nn'
  | 'morphological';

interface TrainerRoutes {
  subcategory: TrainerRouteSubcategories;
  words: WordsTypes[];
}

export const trainerRoutes: TrainerRoutes[] = [
  { subcategory: 'accents', words: wordsForAccentsTests },
  { subcategory: 'dictionary', words: wordsForDictionaryTests },
  { subcategory: 'unions', words: wordsForUnionsTests },
  { subcategory: 'adverbs', words: wordsForAdverbsTests },
  { subcategory: 'nn', words: wordsForNNTests },
  { subcategory: 'morphological', words: wordsForMorphologicalTests },
];

export const getRouteMain = () => '/';
export const getRouteTheory = () => '/theory';
export const getRouteTrainer = (trainerType: TrainerRouteSubcategories) =>
  `/trainers/${trainerType}`;
export const getRouteNotFound = () => '*';

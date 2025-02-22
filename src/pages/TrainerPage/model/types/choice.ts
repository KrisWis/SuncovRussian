import { TrainerWordsInterface, WordsForTrainersGeneralItem } from './types';

export interface ChoiceWordsCategory {
  category?: string;
  choiceWords: string[];
}

export interface ChoiceWordInterface extends TrainerWordsInterface {
  word: string;
  choiceWord: string;
}

export interface ChoiceWordsForTrainersItem
  extends WordsForTrainersGeneralItem {
  type: 'choice';
  items: ChoiceWordInterface[];
  categories: ChoiceWordsCategory[];
}

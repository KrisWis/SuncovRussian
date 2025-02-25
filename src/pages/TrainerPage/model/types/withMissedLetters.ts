import { TrainerWordsInterface, WordsForTrainersGeneralItem } from './types';

export interface WithMissedLettersWordsInterface extends TrainerWordsInterface {
  word: string;
  inputIndexes: number[];
}

export interface WithMissedLettersWordsForTrainersItem
  extends WordsForTrainersGeneralItem {
  type: 'withMissedLetters';
  items: WithMissedLettersWordsInterface[];
}

import { TrainerWordsInterface, WordsForTrainersGeneralItem } from './types';

export interface WithMissedLettersWordsInterface extends TrainerWordsInterface {
  word: string;
  missedLettersIndexes: number[];
}

export interface WithMissedLettersWordsForTrainersItem
  extends WordsForTrainersGeneralItem {
  type: 'withMissedLetters';
  items: WithMissedLettersWordsInterface[];
}

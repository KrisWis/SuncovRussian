import { TrainerWordsInterface, WordsForTrainersGeneralItem } from './types';

export interface PrimaryWordsInterface extends TrainerWordsInterface {
  valid: string;
  invalid: string;
  differenceIndexes?: number[];
}

export interface PrimaryWordsForTrainersItem
  extends WordsForTrainersGeneralItem {
  type: 'primary';
  items: PrimaryWordsInterface[];
}

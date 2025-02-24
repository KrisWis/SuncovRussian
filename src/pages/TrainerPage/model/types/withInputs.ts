import { TrainerWordsInterface, WordsForTrainersGeneralItem } from './types';

export interface WithInputsWordsInterface extends TrainerWordsInterface {
  word: string;
  inputIndexes: number[];
}

export interface WithInputsWordsForTrainersItem
  extends WordsForTrainersGeneralItem {
  type: 'withInputs';
  items: WithInputsWordsInterface[];
}

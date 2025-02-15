import { UnionsWordsInterface } from './unions';

type TrainerWordsType = 'unions' | 'primary';

export interface TrainerWordsInterface {
  id: number;
  probability?: number;
  uncorrectTimes?: number;
  consecutivelyTimes?: number;
  inProgress?: boolean;
}

export interface PrimaryWordsInterface extends TrainerWordsInterface {
  valid: string;
  invalid: string;
  differenceIndexes?: number[];
}

export type WordsForTrainersTypes =
  | TrainerWordsInterface
  | PrimaryWordsInterface
  | UnionsWordsInterface;

interface WordsForTrainersGeneralItem {
  type: TrainerWordsType;
  inHeader: boolean;
  items: WordsForTrainersTypes[];
}

interface PrimaryWordsForTrainersItem extends WordsForTrainersGeneralItem {
  type: 'primary';
  items: PrimaryWordsInterface[];
}

interface UnionsWordsForTrainersItem extends WordsForTrainersGeneralItem {
  type: 'unions';
  items: UnionsWordsInterface[];
}

export type WordsForTrainersItem =
  | PrimaryWordsForTrainersItem
  | UnionsWordsForTrainersItem;

export type WordsForTrainers = {
  [key in string]: WordsForTrainersItem;
};

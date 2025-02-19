import { ChoiceWordInterface, ChoiceWordsForTrainersItem } from './choice';
import { UnionsWordsForTrainersItem, UnionsWordsInterface } from './unions';

type TrainerWordsType = 'unions' | 'primary' | 'choice';

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
  | UnionsWordsInterface
  | ChoiceWordInterface;

export interface WordsForTrainersGeneralItem {
  type: TrainerWordsType;
  inHeader: boolean;
  items: WordsForTrainersTypes[];
}

interface PrimaryWordsForTrainersItem extends WordsForTrainersGeneralItem {
  type: 'primary';
  items: PrimaryWordsInterface[];
}

export type WordsForTrainersItem =
  | PrimaryWordsForTrainersItem
  | UnionsWordsForTrainersItem
  | ChoiceWordsForTrainersItem;

export type WordsForTrainers = {
  [key in string]: WordsForTrainersItem;
};

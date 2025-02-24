import { ChoiceWordInterface, ChoiceWordsForTrainersItem } from './choice';
import { PrimaryWordsForTrainersItem, PrimaryWordsInterface } from './primary';
import { UnionsWordsForTrainersItem, UnionsWordsInterface } from './unions';
import {
  WithInputsWordsForTrainersItem,
  WithInputsWordsInterface,
} from './withInputs';

type TrainerWordsType = 'unions' | 'primary' | 'choice' | 'withInputs';

export interface TrainerWordsInterface {
  id: number;
  probability?: number;
  uncorrectTimes?: number;
  consecutivelyTimes?: number;
  inProgress?: boolean;
}

export type WordsForTrainersTypes =
  | TrainerWordsInterface
  | PrimaryWordsInterface
  | UnionsWordsInterface
  | ChoiceWordInterface
  | WithInputsWordsInterface;

export interface WordsForTrainersGeneralItem {
  type: TrainerWordsType;
  inHeader: boolean;
  items: WordsForTrainersTypes[];
}

export type WordsForTrainersItem =
  | PrimaryWordsForTrainersItem
  | UnionsWordsForTrainersItem
  | ChoiceWordsForTrainersItem
  | WithInputsWordsForTrainersItem;

export type WordsForTrainers = {
  [key in string]: WordsForTrainersItem;
};

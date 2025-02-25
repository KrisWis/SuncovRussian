import { ChoiceWordInterface, ChoiceWordsForTrainersItem } from './choice';
import { PrimaryWordsForTrainersItem, PrimaryWordsInterface } from './primary';
import { UnionsWordsForTrainersItem, UnionsWordsInterface } from './unions';
import {
  WithMissedLettersWordsForTrainersItem,
  WithMissedLettersWordsInterface,
} from './withMissedLetters';

export type TrainerWordsType =
  | 'unions'
  | 'primary'
  | 'choice'
  | 'withMissedLetters';

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
  | WithMissedLettersWordsInterface;

export interface WordsForTrainersGeneralItem {
  type: TrainerWordsType;
  inHeader: boolean;
  items: WordsForTrainersTypes[];
}

export type WordsForTrainersItem =
  | PrimaryWordsForTrainersItem
  | UnionsWordsForTrainersItem
  | ChoiceWordsForTrainersItem
  | WithMissedLettersWordsForTrainersItem;

export type WordsForTrainers = {
  [key in string]: WordsForTrainersItem;
};

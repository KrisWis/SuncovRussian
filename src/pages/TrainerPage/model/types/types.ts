import { UnionsWordsInterface } from '../static/wordsForUnionsTests';

export type TrainerWordsTypes =
  | 'ударения'
  | 'виды союзов'
  | 'cловарные слова'
  | 'н/нн'
  | 'наречия'
  | 'морфологические нормы';

export interface TrainerWordsInterface {
  id: number;
  trainerType: TrainerWordsTypes;
  probability?: number;
  uncorrectTimes?: number;
  consecutivelyTimes?: number;
  inProgress?: boolean;
}

export interface PrimaryWordsInterface extends TrainerWordsInterface {
  valid: string;
  invalid: string;
}

export type WordsTypes =
  | TrainerWordsInterface
  | PrimaryWordsInterface
  | UnionsWordsInterface;

export interface TrainerPageProps {
  words: WordsTypes[];
}

import { UnionsWordsInterface } from '../static/wordsForUnionsTests';

type TrainerWordsTypes =
  | 'ударения'
  | 'виды союзов'
  | 'cловарные слова'
<<<<<<< HEAD
  | 'н/нн'
  | 'наречия';
=======
  | 'н/нн';
>>>>>>> fb89821 (Made types for header, rebuild accents for trainer words to primary trainer words for reusing.)

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

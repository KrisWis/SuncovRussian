import { AccentsWordsInterface } from '../static/wordsForAccentsTests';
import { UnionsWordsInterface } from '../static/wordsForUnionsTests';

type TrainerWordsTypes = 'accents' | 'unions';

export interface TrainerWordsInterface {
  id: number;
  trainerType: TrainerWordsTypes;
  probability?: number;
  uncorrectTimes?: number;
  consecutivelyTimes?: number;
  inProgress?: boolean;
}

export type WordsTypes =
  | TrainerWordsInterface
  | AccentsWordsInterface
  | UnionsWordsInterface;

export interface TrainerProps {
  words: WordsTypes[];
}

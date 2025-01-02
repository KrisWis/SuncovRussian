import { AccentsWordsInterface } from '../static/accentsWords';

type TrainerWordsTypes = 'accents';

export interface TrainerWordsInterface {
  id: number;
  type: TrainerWordsTypes;
  probability?: number;
  uncorrectTimes?: number;
  consecutivelyTimes?: number;
  inProgress?: boolean;
}

export type WordsTypes = AccentsWordsInterface;

export interface TrainerProps {
  words: WordsTypes[];
}

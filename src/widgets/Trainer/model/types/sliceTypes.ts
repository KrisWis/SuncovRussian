import { WordsTypes } from './types';

export interface TrainerSliceSchema {
  words: WordsTypes[];
}

export interface changeWordProbabilityPayload {
  id: number;
  probability: number;
}

export interface changeWordUncorrectTimesPayload {
  id: number;
  uncorrectTimes: number;
}

export interface changeWordConsecutivelyTimesPayload {
  id: number;
  consecutivelyTimes: number;
}

export interface changeWordInProgressStatusPayload {
  id: number;
  inProgress: boolean;
}

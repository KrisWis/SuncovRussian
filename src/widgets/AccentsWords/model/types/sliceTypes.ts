import { AccentsWordsInterface } from '@/shared/assets/static/accentsWords';

export interface AccentsWordsSliceSchema {
  words: AccentsWordsInterface[];
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

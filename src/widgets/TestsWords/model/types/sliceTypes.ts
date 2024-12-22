import { TestsWordsInterface } from '@/shared/static/tests_words/types';

export interface TestWordsSliceSchema {
  words: TestsWordsInterface[];
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

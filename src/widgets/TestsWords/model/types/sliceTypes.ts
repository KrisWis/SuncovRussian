import { TestsWordsInterface } from '@/shared/static/tests_words/types';

export interface TestWordsSliceSchema {
  words: TestsWordsInterface[];
}

export interface changeWordProbabilityPayload {
  id: number;
  probability: number;
}

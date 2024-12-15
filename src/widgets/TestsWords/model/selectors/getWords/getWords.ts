import { buildSelector } from '@/shared/lib/store';
import { TestsWordsInterface } from '@/shared/static/tests_words/types';

export const [useWords] = buildSelector<TestsWordsInterface[]>((state) => {
  if (!state.TestsWordsReducer) return [];

  return state.TestsWordsReducer.words;
}, true);

import { accentsTestsWords } from '@/shared/static/tests_words/accents';
import { getWords } from './getWords';
import { StateSchema } from '@/app/store/types';

const initialState: StateSchema = {
  TestsWordsReducer: {
    words: accentsTestsWords,
  },
};

describe('geteditionsAmounts', () => {
  test('should return accents test words', () => {
    expect(getWords(initialState)).toBe(accentsTestsWords);
  });
});

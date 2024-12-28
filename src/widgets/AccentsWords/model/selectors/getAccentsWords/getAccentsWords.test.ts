import { accentsWords } from '@/shared/assets/static/accentsWords';
import { getWords } from './getAccentsWords';
import { StateSchema } from '@/app/store/types';

const initialState: StateSchema = {
  AccentsWordsReducer: {
    words: accentsWords,
  },
};

describe('geteditionsAmounts', () => {
  test('should return accents test words', () => {
    expect(getWords(initialState)).toBe(accentsWords);
  });
});

import { StateSchema } from '@/app/store/types';
import { accentsWords } from '../../static/accentsWords';
import { getWords } from './getTrainerWords';

const initialState: StateSchema = {
  TrainerReducer: {
    words: accentsWords,
  },
};

describe('getWords', () => {
  test('should return trainer test words', () => {
    expect(getWords(initialState)).toBe(accentsWords);
  });
});

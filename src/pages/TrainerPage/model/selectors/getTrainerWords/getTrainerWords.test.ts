import { wordsForAccentsTests } from '../../static/wordsForAccentsTests';
import { getWords } from './getTrainerWords';
import { wordsForUnionsTests } from '../../static/wordsForUnionsTests';
import { StateSchema } from '@/shared/lib/store';

describe('getWords', () => {
  test('should return trainer test words', () => {
    const initialStateWithPrimaryTests: DeepPartial<StateSchema> = {
      Trainer: {
        words: wordsForAccentsTests,
      },
    };

    const initialStateWithUnionsTests: DeepPartial<StateSchema> = {
      Trainer: {
        words: wordsForUnionsTests,
      },
    };

    expect(getWords(initialStateWithPrimaryTests as StateSchema)).toBe(
      wordsForAccentsTests,
    );
    expect(getWords(initialStateWithUnionsTests as StateSchema)).toBe(
      wordsForUnionsTests,
    );
  });
});

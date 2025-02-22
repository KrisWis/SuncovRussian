import { wordsForTrainers } from '../../static/wordsForTrainers';
import { getWords } from './getTrainerWords';
import { StateSchema } from '@/shared/lib/store';

describe('getWords', () => {
  test('should return trainer test words', () => {
    const initialStateWithPrimaryTests: DeepPartial<StateSchema> = {
      Trainer: {
        words: wordsForTrainers['Ударения'].items,
      },
    };

    const initialStateWithUnionsTests: DeepPartial<StateSchema> = {
      Trainer: {
        words: wordsForTrainers['разряды союзов'].items,
      },
    };

    expect(getWords(initialStateWithPrimaryTests as StateSchema)).toBe(
      wordsForTrainers['Ударения'].items,
    );
    expect(getWords(initialStateWithUnionsTests as StateSchema)).toBe(
      wordsForTrainers['разряды союзов'].items,
    );
  });
});

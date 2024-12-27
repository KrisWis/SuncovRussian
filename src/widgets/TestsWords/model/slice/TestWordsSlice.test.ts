import { TestsWordsActions, TestsWordsReducer } from './TestWordsSlice';
import { TestsWordsInterface } from '@/shared/static/tests_words/types';
import { TestWordsSliceSchema } from '../..';

const mockWords: TestsWordsInterface[] = [
  {
    valid: 'аэропОрты',
    invalid: 'аэропортЫ',
    id: 0,
  },
  {
    valid: 'бАнты',
    invalid: 'бантЫ',
    id: 1,
  },
];

const initialState: TestWordsSliceSchema = {
  words: mockWords,
};

describe('TestWordsSlice', () => {
  test('setWords', () => {
    expect(
      TestsWordsReducer(initialState, TestsWordsActions.setWords(mockWords)),
    ).toEqual(initialState);
  });

  test('changeWordProbability', () => {
    const mockID: number = 0;
    const mockProbability: number = 0.2;

    const modifiedState = JSON.parse(JSON.stringify(initialState));

    modifiedState.words[mockID].probability = mockProbability;

    expect(
      TestsWordsReducer(
        initialState,
        TestsWordsActions.changeWordProbability({
          id: mockID,
          probability: mockProbability,
        }),
      ),
    ).toEqual(modifiedState);
  });

  test('changeWordUncorrectTimes', () => {
    const mockID: number = 0;
    const mockUncorrectTimes: number = 2;

    const modifiedState = JSON.parse(JSON.stringify(initialState));

    modifiedState.words[mockID].uncorrectTimes = mockUncorrectTimes;

    expect(
      TestsWordsReducer(
        initialState,
        TestsWordsActions.changeWordUncorrectTimes({
          id: mockID,
          uncorrectTimes: mockUncorrectTimes,
        }),
      ),
    ).toEqual(modifiedState);
  });

  test('changeWordConsecutivelyTimes', () => {
    const mockID: number = 0;
    const mockConsecutivelyTimes: number = 2;

    const modifiedState = JSON.parse(JSON.stringify(initialState));

    modifiedState.words[mockID].consecutivelyTimes = mockConsecutivelyTimes;

    expect(
      TestsWordsReducer(
        initialState,
        TestsWordsActions.changeWordConsecutivelyTimes({
          id: mockID,
          consecutivelyTimes: mockConsecutivelyTimes,
        }),
      ),
    ).toEqual(modifiedState);
  });

  test('changeWordInProgressStatus', () => {
    const mockID: number = 0;
    const mockInProgress: boolean = true;

    const modifiedState = JSON.parse(JSON.stringify(initialState));

    modifiedState.words[mockID].inProgress = mockInProgress;

    expect(
      TestsWordsReducer(
        initialState,
        TestsWordsActions.changeWordInProgressStatus({
          id: mockID,
          inProgress: mockInProgress,
        }),
      ),
    ).toEqual(modifiedState);
  });
});

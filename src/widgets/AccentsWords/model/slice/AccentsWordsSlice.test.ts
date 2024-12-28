import { AccentsWordsActions, AccentsWordsReducer } from './AccentsWordsSlice';
import { AccentsWordsInterface } from '@/shared/assets/static/accentsWords';
import { AccentsWordsSliceSchema } from '../..';

const mockWords: AccentsWordsInterface[] = [
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

const initialState: AccentsWordsSliceSchema = {
  words: mockWords,
};

describe('AccentsWordsSlice', () => {
  test('setWords', () => {
    expect(
      AccentsWordsReducer(
        initialState,
        AccentsWordsActions.setWords(mockWords),
      ),
    ).toEqual(initialState);
  });

  test('changeWordProbability', () => {
    const mockID: number = 0;
    const mockProbability: number = 0.2;

    const modifiedState = JSON.parse(JSON.stringify(initialState));

    modifiedState.words[mockID].probability = mockProbability;

    expect(
      AccentsWordsReducer(
        initialState,
        AccentsWordsActions.changeWordProbability({
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
      AccentsWordsReducer(
        initialState,
        AccentsWordsActions.changeWordUncorrectTimes({
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
      AccentsWordsReducer(
        initialState,
        AccentsWordsActions.changeWordConsecutivelyTimes({
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
      AccentsWordsReducer(
        initialState,
        AccentsWordsActions.changeWordInProgressStatus({
          id: mockID,
          inProgress: mockInProgress,
        }),
      ),
    ).toEqual(modifiedState);
  });
});

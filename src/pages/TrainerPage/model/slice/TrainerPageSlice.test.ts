import { TrainerReducer, TrainerPageSliceSchema } from '../..';
import { TrainerWordsInterface } from '../types/types';
import { TrainerActions } from './TrainerPageSlice';

const mockWords: TrainerWordsInterface[] = [
  {
    id: 0,
    trainerType: 'ударения',
  },
  {
    id: 1,
    trainerType: 'виды союзов',
  },
];

const initialState: TrainerPageSliceSchema = {
  words: mockWords,
};

describe('TrainerPageSlice', () => {
  test('setWords', () => {
    expect(
      TrainerReducer(initialState, TrainerActions.setWords(mockWords)),
    ).toEqual(initialState);
  });

  test('changeWordProbability', () => {
    const mockID: number = 0;
    const mockProbability: number = 0.2;

    const modifiedState = JSON.parse(JSON.stringify(initialState));

    modifiedState.words[mockID].probability = mockProbability;

    expect(
      TrainerReducer(
        initialState,
        TrainerActions.changeWordProbability({
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
      TrainerReducer(
        initialState,
        TrainerActions.changeWordUncorrectTimes({
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
      TrainerReducer(
        initialState,
        TrainerActions.changeWordConsecutivelyTimes({
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
      TrainerReducer(
        initialState,
        TrainerActions.changeWordInProgressStatus({
          id: mockID,
          inProgress: mockInProgress,
        }),
      ),
    ).toEqual(modifiedState);
  });
});

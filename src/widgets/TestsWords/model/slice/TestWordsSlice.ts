import { buildSlice } from '@/shared/lib/store';
import {
  changeWordConsecutivelyTimesPayload,
  changeWordInProgressStatusPayload,
  changeWordProbabilityPayload,
  changeWordUncorrectTimesPayload,
  TestWordsSliceSchema,
} from '../types/sliceTypes';
import { PayloadAction } from '@reduxjs/toolkit';
import { TestsWordsInterface } from '@/shared/static/tests_words/types';

const initialState: TestWordsSliceSchema = {
  words: [],
};

export const TestsWordsSlice = buildSlice({
  name: 'TestsWordsSlice',
  initialState: initialState,
  reducers: {
    setWords: (
      state: TestWordsSliceSchema,
      { payload }: PayloadAction<TestsWordsInterface[]>,
    ) => {
      state.words = payload;
    },

    changeWordProbability: (
      state: TestWordsSliceSchema,
      { payload }: PayloadAction<changeWordProbabilityPayload>,
    ) => {
      state.words = state.words.filter((word) => {
        if (word.id === payload.id) {
          word.probability = payload.probability;
        }

        return word;
      });
    },

    changeWordUncorrectTimes: (
      state: TestWordsSliceSchema,
      { payload }: PayloadAction<changeWordUncorrectTimesPayload>,
    ) => {
      state.words = state.words.filter((word) => {
        if (word.id === payload.id) {
          word.uncorrectTimes = payload.uncorrectTimes;
        }

        return word;
      });
    },

    changeWordConsecutivelyTimes: (
      state: TestWordsSliceSchema,
      { payload }: PayloadAction<changeWordConsecutivelyTimesPayload>,
    ) => {
      state.words = state.words.filter((word) => {
        if (word.id === payload.id) {
          word.consecutivelyTimes = payload.consecutivelyTimes;
        }

        return word;
      });
    },

    changeWordInProgressStatus: (
      state: TestWordsSliceSchema,
      { payload }: PayloadAction<changeWordInProgressStatusPayload>,
    ) => {
      state.words = state.words.filter((word) => {
        if (word.id === payload.id) {
          word.inProgress = payload.inProgress;
        }

        return word;
      });
    },
  },
});

export const {
  actions: TestsWordsActions,
  reducer: TestsWordsReducer,
  useActions: useTestsWordsActions,
} = TestsWordsSlice;

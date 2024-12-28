import { buildSlice } from '@/shared/lib/store';
import {
  changeWordConsecutivelyTimesPayload,
  changeWordInProgressStatusPayload,
  changeWordProbabilityPayload,
  changeWordUncorrectTimesPayload,
  AccentsWordsSliceSchema,
} from '../types/sliceTypes';
import { PayloadAction } from '@reduxjs/toolkit';
import { AccentsWordsInterface } from '@/shared/assets/static/accentsWords';

const initialState: AccentsWordsSliceSchema = {
  words: [],
};

export const AccentsWordsSlice = buildSlice({
  name: 'AccentsWordsSlice',
  initialState: initialState,
  reducers: {
    setWords: (
      state: AccentsWordsSliceSchema,
      { payload }: PayloadAction<AccentsWordsInterface[]>,
    ) => {
      state.words = payload;
    },

    changeWordProbability: (
      state: AccentsWordsSliceSchema,
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
      state: AccentsWordsSliceSchema,
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
      state: AccentsWordsSliceSchema,
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
      state: AccentsWordsSliceSchema,
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
  actions: AccentsWordsActions,
  reducer: AccentsWordsReducer,
  useActions: useAccentsWordsActions,
} = AccentsWordsSlice;

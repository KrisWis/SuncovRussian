import { buildSlice } from '@/shared/lib/store';
import {
  changeWordConsecutivelyTimesPayload,
  changeWordInProgressStatusPayload,
  changeWordProbabilityPayload,
  changeWordUncorrectTimesPayload,
  TrainerSliceSchema,
} from '../types/sliceTypes';
import { PayloadAction } from '@reduxjs/toolkit';
import { WordsTypes } from '../types/types';

const initialState: TrainerSliceSchema = {
  words: [],
};

export const TrainerSlice = buildSlice({
  name: 'TrainerSlice',
  initialState: initialState,
  reducers: {
    setWords: (
      state: TrainerSliceSchema,
      { payload }: PayloadAction<WordsTypes[]>,
    ) => {
      state.words = payload;
    },

    changeWordProbability: (
      state: TrainerSliceSchema,
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
      state: TrainerSliceSchema,
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
      state: TrainerSliceSchema,
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
      state: TrainerSliceSchema,
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
  actions: TrainerActions,
  reducer: TrainerReducer,
  useActions: useTrainerActions,
} = TrainerSlice;

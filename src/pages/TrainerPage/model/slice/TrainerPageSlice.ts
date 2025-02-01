import { buildSlice } from '@/shared/lib/store';
import {
  changeWordConsecutivelyTimesPayload,
  changeWordInProgressStatusPayload,
  changeWordProbabilityPayload,
  changeWordUncorrectTimesPayload,
  TrainerPageSliceSchema,
} from '../types/sliceTypes';
import { PayloadAction } from '@reduxjs/toolkit';
import { WordsForTrainersTypes } from '../types/types';

const initialState: TrainerPageSliceSchema = {
  words: [],
};

export const TrainerPageSlice = buildSlice({
  name: 'TrainerPageSlice',
  initialState: initialState,
  reducers: {
    setWords: (
      state: TrainerPageSliceSchema,
      { payload }: PayloadAction<WordsForTrainersTypes[]>,
    ) => {
      state.words = payload;
    },

    changeWordProbability: (
      state: TrainerPageSliceSchema,
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
      state: TrainerPageSliceSchema,
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
      state: TrainerPageSliceSchema,
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
      state: TrainerPageSliceSchema,
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
} = TrainerPageSlice;

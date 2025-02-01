import { buildSelector } from '@/shared/lib/store';
import { WordsForTrainersTypes } from '../../types/types';

export const [useWords, getWords] = buildSelector<WordsForTrainersTypes[]>(
  (state) => {
    if (!state.Trainer) return [];

    return state.Trainer.words;
  },
  true,
);

import { buildSelector } from '@/shared/lib/store';
import { WordsTypes } from '../../types/types';

export const [useWords, getWords] = buildSelector<WordsTypes[]>((state) => {
  if (!state.Trainer) return [];

  return state.Trainer.words;
}, true);

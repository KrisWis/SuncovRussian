import { buildSelector } from '@/shared/lib/store';
import { AccentsWordsInterface } from '@/shared/assets/static/accentsWords';

export const [useWords, getWords] = buildSelector<AccentsWordsInterface[]>(
  (state) => {
    if (!state.AccentsWordsReducer) return [];

    return state.AccentsWordsReducer.words;
  },
  true,
);

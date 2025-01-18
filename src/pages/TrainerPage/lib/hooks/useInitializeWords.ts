import { useCallback } from 'react';

import { WordsTypes } from '../../model/types/types';
import { useTrainerActions } from '../../model/slice/TrainerPageSlice';

interface useInitializeWordsResult {
  initializeWords: () => void;
}

export const useInitializeWords = (
  words: WordsTypes[],
): useInitializeWordsResult => {
  const { setWords } = useTrainerActions();

  // Инициализация слов
  const initializeWords = useCallback(() => {
    const wordsCopy = JSON.parse(JSON.stringify(words));

    for (const word of wordsCopy) {
      word.probability = 1;
      word.uncorrectTimes = 0;
      word.consecutivelyTimes = 0;
      word.inProgress = false;
    }

    setWords(wordsCopy);
  }, [setWords, words]);

  return {
    initializeWords,
  };
};

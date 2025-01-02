import { useCallback, useMemo } from 'react';
import { AccentsWordsInterface } from '@/shared/assets/static/accentsWords';
import { useWords } from '../..';

interface UseRandomWordResult {
  updateRandomWord: (words?: AccentsWordsInterface[]) => void;
  randomWord?: AccentsWordsInterface;
}

export const useRandomWord = (
  randomWordId: number | null,
  setRandomWordsIsReverse: React.Dispatch<React.SetStateAction<boolean>>,
  setRandomWordId: React.Dispatch<React.SetStateAction<number | null>>,
): UseRandomWordResult => {
  const storeWords = useWords();

  const randomWord = useMemo(
    () => storeWords.find((word) => word.id === randomWordId),
    [randomWordId, storeWords],
  );

  const updateRandomWord = useCallback(
    (words?: AccentsWordsInterface[]) => {
      let storeWordsCopy;

      if (words) {
        storeWordsCopy = words.filter((word) => word.id !== randomWordId);
      } else {
        storeWordsCopy = storeWords.filter((word) => word.id !== randomWordId);
      }

      const randomIsReverse = [true, false][Math.floor(Math.random() * 2)];

      setRandomWordsIsReverse(randomIsReverse);

      if (storeWordsCopy.length === 0) return;

      const totalChances = storeWordsCopy.reduce(
        (acc, c) => acc + (c.probability || 1),
        0,
      );
      const rnd = totalChances * Math.random();

      for (let i = 0, sum = 0; ; i++) {
        sum += storeWordsCopy[i].probability || 1;

        if (sum > rnd) {
          setRandomWordId(storeWordsCopy[i].id);
          return;
        }
      }
    },
    [randomWordId, setRandomWordId, setRandomWordsIsReverse, storeWords],
  );

  return {
    updateRandomWord,
    randomWord,
  };
};

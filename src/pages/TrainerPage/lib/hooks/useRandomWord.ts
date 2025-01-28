import { useCallback, useMemo } from 'react';
import { WordsTypes } from '../../model/types/types';
import { useWords } from '../../model/selectors/getTrainerWords/getTrainerWords';

interface UseRandomWordResult {
  updateRandomWord: (words?: WordsTypes[]) => void;
  randomWord?: WordsTypes;
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
    (words?: WordsTypes[]) => {
      const storeWordsCopy = (words ? words : storeWords).filter(
        (word) => word.id !== randomWordId && word.probability !== 0,
      );

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

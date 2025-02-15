import { useCallback, useContext, useState } from 'react';
import { useRandomWord } from './useRandomWord';
import { WordsForTrainersTypes } from '../../model/types/types';
import { useTrainerActions } from '../../model/slice/TrainerPageSlice';
import { playSound } from '@/shared/utils/playSound';
import { useInitializeWords } from './useInitializeWords';
import { useWords } from '../../model/selectors/getTrainerWords/getTrainerWords';
import { TrainerPageContext } from '../../model/context/TrainerPageContext';
import { mobileMediaQueryWidth } from '@/shared/const/global';
import { isInJest } from '@/shared/tests/isInJest';

export type wordActionsFunctionType = (
  words: WordsForTrainersTypes[],
  isErrorWork: boolean,
  randomWordId: number | null,
) => void;

interface UseWordActionsResult {
  showNewWord: wordActionsFunctionType;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionType;
  waitRepeatedClickInFail: boolean;
}

export const useWordActions = (
  randomWordId: number | null,
  setRandomWordsIsReverse: React.Dispatch<React.SetStateAction<boolean>>,
  setRandomWordId: React.Dispatch<React.SetStateAction<number | null>>,
  setIsIncorrect: React.Dispatch<React.SetStateAction<boolean>>,
): UseWordActionsResult => {
  // Инициализация данных
  const {
    changeWordProbability,
    changeWordUncorrectTimes,
    changeWordConsecutivelyTimes,
    changeWordInProgressStatus,
  } = useTrainerActions();

  const storeWords = useWords();

  const { initializeWords } = useInitializeWords(storeWords);

  const { isOneLifeMode, isCheckMode, setAllAttemptsCount } =
    useContext(TrainerPageContext);

  // Изменение вероятности при неправильном ответе
  const [waitRepeatedClickInFail, setWaitRepeatedClickInFail] =
    useState<boolean>(false);

  const { updateRandomWord } = useRandomWord(
    randomWordId,
    setRandomWordsIsReverse,
    setRandomWordId,
  );

  // Показ нового слова
  const showNewWord = useCallback(
    (
      words: WordsForTrainersTypes[],
      isErrorWork: boolean,
      randomWordId: number | null,
    ) => {
      setWaitRepeatedClickInFail(false);
      setIsIncorrect(false);

      const currentRandomWord = words.find((word) => word.id === randomWordId);

      if (!currentRandomWord) return;

      if (!isErrorWork) {
        changeWordProbability({
          probability: 0.2,
          id: currentRandomWord.id,
        });

        changeWordUncorrectTimes({
          id: currentRandomWord.id,
          uncorrectTimes: currentRandomWord.uncorrectTimes! + 1,
        });
      }

      changeWordConsecutivelyTimes({
        id: currentRandomWord.id,
        consecutivelyTimes: 0,
      });

      changeWordInProgressStatus({
        id: currentRandomWord.id,
        inProgress: false,
      });

      if (isCheckMode) {
        changeWordProbability({
          id: currentRandomWord.id,
          probability: 0,
        });

        changeWordInProgressStatus({
          id: currentRandomWord.id,
          inProgress: true,
        });
      }

      updateRandomWord();

      const main: HTMLElement = document.querySelector('main')!;

      if (!isInJest()) {
        main.style.pointerEvents = 'all';
      }

      document.removeEventListener('click', () =>
        showNewWord(words, isErrorWork, randomWordId),
      );
    },
    [
      changeWordConsecutivelyTimes,
      changeWordInProgressStatus,
      changeWordProbability,
      changeWordUncorrectTimes,
      isCheckMode,
      setIsIncorrect,
      updateRandomWord,
    ],
  );

  // Изменение вероятности при правильном ответе
  const wordOnFail = useCallback(
    (
      words: WordsForTrainersTypes[],
      isErrorWork: boolean,
      randomWordId: number | null,
    ) => {
      if (waitRepeatedClickInFail) return;

      if (isOneLifeMode) {
        initializeWords();
        setAllAttemptsCount((prev) => prev + 1);
      }

      playSound('FailSound');

      setIsIncorrect(true);

      setWaitRepeatedClickInFail(true);

      const main: HTMLElement = document.querySelector('main')!;

      const eventTimeout = setTimeout(() => {
        if (!isInJest()) {
          main.style.pointerEvents = 'none';
        }

        document.addEventListener('click', () =>
          showNewWord(words, isErrorWork, randomWordId),
        );
        clearTimeout(eventTimeout);
      }, 0);
    },
    [
      initializeWords,
      isOneLifeMode,
      setAllAttemptsCount,
      setIsIncorrect,
      showNewWord,
      waitRepeatedClickInFail,
    ],
  );

  // Изменение вероятности при правильном ответе
  const wordOnSuccess = useCallback(
    (
      words: WordsForTrainersTypes[],
      isErrorWork: boolean,
      randomWordId: number | null,
    ) => {
      if (waitRepeatedClickInFail) return;

      const currentRandomWord = words.find((word) => word.id === randomWordId);

      if (!currentRandomWord) return;

      if (isErrorWork) {
        const futureConsecutivelyTimes =
          currentRandomWord.consecutivelyTimes! + 1;

        changeWordConsecutivelyTimes({
          id: currentRandomWord.id,
          consecutivelyTimes: futureConsecutivelyTimes,
        });

        if (futureConsecutivelyTimes === 3) {
          changeWordInProgressStatus({
            id: currentRandomWord.id,
            inProgress: true,
          });

          changeWordProbability({
            probability: 0.05,
            id: currentRandomWord.id,
          });
        }
      } else {
        if (currentRandomWord.probability === 0.2) {
          changeWordProbability({
            id: currentRandomWord.id,
            probability: 0.1,
          });
        } else if (currentRandomWord.probability === 0.1) {
          changeWordProbability({
            id: currentRandomWord.id,
            probability: 0.05,
          });
        } else {
          changeWordProbability({
            id: currentRandomWord.id,
            probability: isOneLifeMode ? 0 : 0.01,
          });

          changeWordInProgressStatus({
            id: currentRandomWord.id,
            inProgress: true,
          });
        }
      }

      if (isCheckMode) {
        changeWordProbability({
          id: currentRandomWord.id,
          probability: 0,
        });

        changeWordInProgressStatus({
          id: currentRandomWord.id,
          inProgress: true,
        });
      }

      const timeoutForUpdate = setTimeout(
        () => {
          updateRandomWord();
          clearTimeout(timeoutForUpdate);
        },
        mobileMediaQueryWidth.matches ? 150 : 0,
      );
    },
    [
      changeWordConsecutivelyTimes,
      changeWordInProgressStatus,
      changeWordProbability,
      isCheckMode,
      isOneLifeMode,
      updateRandomWord,
      waitRepeatedClickInFail,
    ],
  );

  return {
    showNewWord,
    wordOnSuccess,
    wordOnFail,
    waitRepeatedClickInFail,
  };
};

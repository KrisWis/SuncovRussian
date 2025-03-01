import { useCallback, useContext, useState } from 'react';
import { useRandomWord } from './useRandomWord';
import { WordsForTrainersTypes } from '../../model/types/types';
import { useTrainerActions } from '../../model/slice/TrainerPageSlice';
import { playSound } from '@/shared/utils/playSound';
import { useInitializeWords } from './useInitializeWords';
import { useWords } from '../../model/selectors/getTrainerWords/getTrainerWords';
import { TrainerPageContext } from '../../model/context/TrainerPageContext';
import {
  mobileMediaQueryWidth,
  timeoutDurationForRender,
} from '@/shared/const/global';
import { isInJest } from '@/shared/tests/isInJest';

export type wordActionsFunctionType = (
  words: WordsForTrainersTypes[],
  isErrorWork: boolean,
  randomWordId: number | null,
) => void;

export type wordActionsFunctionTypeWithElemForClick = (
  ...args: [
    ...Parameters<wordActionsFunctionType>,
    elemForClick?: HTMLElement | Document,
  ]
) => void;

interface UseWordActionsResult {
  showNewWord: wordActionsFunctionTypeWithElemForClick;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionTypeWithElemForClick;
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
  const showNewWord: wordActionsFunctionTypeWithElemForClick = useCallback(
    (
      words: WordsForTrainersTypes[],
      isErrorWork: boolean,
      randomWordId: number | null,
      elemForClick = document,
    ) => {
      if (isOneLifeMode) {
        initializeWords();
        setAllAttemptsCount((prev) => prev + 1);
      }

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

      // Сбрасываем события
      elemForClick.onclick = null;

      document.onkeydown = null;
    },
    [
      changeWordConsecutivelyTimes,
      changeWordInProgressStatus,
      changeWordProbability,
      changeWordUncorrectTimes,
      initializeWords,
      isCheckMode,
      isOneLifeMode,
      setAllAttemptsCount,
      setIsIncorrect,
      updateRandomWord,
    ],
  );

  // Изменение вероятности при правильном ответе
  const wordOnFail: wordActionsFunctionTypeWithElemForClick = useCallback(
    (words, isErrorWork, randomWordId, elemForClick = document) => {
      if (waitRepeatedClickInFail) return;

      playSound('FailSound');

      setIsIncorrect(true);

      setWaitRepeatedClickInFail(true);

      const main: HTMLElement = document.querySelector('main')!;

      const eventTimeout = setTimeout(() => {
        if (!isInJest()) {
          main.style.pointerEvents = 'none';
        }

        // Добавляем события
        elemForClick.onclick = () =>
          showNewWord(words, isErrorWork, randomWordId);

        document.onkeydown = (e: KeyboardEvent) => {
          if (e.key === 'Enter') {
            showNewWord(words, isErrorWork, randomWordId);
          }
        };

        clearTimeout(eventTimeout);
      }, timeoutDurationForRender);
    },
    [setIsIncorrect, showNewWord, waitRepeatedClickInFail],
  );

  // Изменение вероятности при правильном ответе
  const wordOnSuccess: wordActionsFunctionType = useCallback(
    (words, isErrorWork, randomWordId) => {
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

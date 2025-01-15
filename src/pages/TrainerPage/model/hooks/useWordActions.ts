import { useCallback, useState } from 'react';
import { useRandomWord } from './useRandomWord';
import { TrainerWordsInterface } from '../types/types';
import { useTrainerActions } from '../slice/TrainerPageSlice';

export type wordActionsFunctionType = (
  words: TrainerWordsInterface[],
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
      words: TrainerWordsInterface[],
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

      updateRandomWord();

      const main: HTMLElement = document.querySelector('main')!;

      if (process.env.NODE_ENV !== 'test') {
        main.style.pointerEvents = 'all';
      }

      document.onclick = null;
    },
    [
      changeWordConsecutivelyTimes,
      changeWordInProgressStatus,
      changeWordProbability,
      changeWordUncorrectTimes,
      setIsIncorrect,
      setWaitRepeatedClickInFail,
      updateRandomWord,
    ],
  );

  // Изменение вероятности при правильном ответе
  const wordOnFail = useCallback(
    (
      words: TrainerWordsInterface[],
      isErrorWork: boolean,
      randomWordId: number | null,
    ) => {
      if (waitRepeatedClickInFail) return;

      if (process.env.NODE_ENV !== 'test') {
        const audio = new Audio(
          `${__IS_DEV__ ? ' / ' : '/SuncovRussian/'}sounds/FailSound.mp3`,
        );
        audio.play();
      }

      setIsIncorrect(true);

      setWaitRepeatedClickInFail(true);

      const main: HTMLElement = document.querySelector('main')!;

      const eventTimeout = setTimeout(() => {
        if (process.env.NODE_ENV !== 'test') {
          main.style.pointerEvents = 'none';
        }

        document.onclick = () => showNewWord(words, isErrorWork, randomWordId);
        clearTimeout(eventTimeout);
      }, 0);
    },
    [
      setIsIncorrect,
      setWaitRepeatedClickInFail,
      showNewWord,
      waitRepeatedClickInFail,
    ],
  );

  // Изменение вероятности при правильном ответе
  const wordOnSuccess = useCallback(
    (
      words: TrainerWordsInterface[],
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
            probability: 0.01,
          });

          changeWordInProgressStatus({
            id: currentRandomWord.id,
            inProgress: true,
          });
        }
      }

      updateRandomWord();
    },
    [
      changeWordConsecutivelyTimes,
      changeWordInProgressStatus,
      changeWordProbability,
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

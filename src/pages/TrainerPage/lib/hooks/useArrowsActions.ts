import { useContext } from 'react';
import { TrainerPageContext } from '../../model/context/TrainerPageContext';
import { useWordActions } from './useWordActions';
import { WordsForTrainersItem } from '../../model/types/types';
import { tabletMediaQueryWidth } from '@/shared/const/global';

interface useArrowsActionsResult {
  checkArrowsPress: (event: KeyboardEvent, words: WordsForTrainersItem) => void;
}

export const useArrowsActions = (
  randomWordId: number | null,
  setRandomWordId: React.Dispatch<React.SetStateAction<number | null>>,
  setRandomWordsIsReverse: React.Dispatch<React.SetStateAction<boolean>>,
  setIsIncorrect: React.Dispatch<React.SetStateAction<boolean>>,
  randomWordsIsReverse: boolean,
): useArrowsActionsResult => {
  const { totalTime, isIncorrect, isErrorWork } =
    useContext(TrainerPageContext);

  const { showNewWord, waitRepeatedClickInFail } = useWordActions(
    randomWordId,
    setRandomWordsIsReverse,
    setRandomWordId,
    setIsIncorrect,
  );

  const checkArrowsPress = (
    event: KeyboardEvent,
    words: WordsForTrainersItem,
  ): void => {
    if (totalTime) return;

    if (waitRepeatedClickInFail && isIncorrect) {
      showNewWord(words.items, isErrorWork, randomWordId);
    }

    const wordElements = document.querySelectorAll('.TrainerWord');

    const clickElements = (NotReverseIndex: number): void => {
      if (words.type === 'unions') {
        (wordElements[NotReverseIndex] as HTMLElement).click();
        return;
      }

      if (!randomWordsIsReverse)
        (wordElements[NotReverseIndex] as HTMLElement).click();
      else {
        const element = wordElements[
          NotReverseIndex === 0 ? 1 : 0
        ] as HTMLElement;

        if (element) element.click();
      }
    };

    if (!tabletMediaQueryWidth.matches) {
      if (event.key === 'ArrowLeft') {
        clickElements(0);
      } else if (event.key === 'ArrowRight') {
        clickElements(1);
      }
    } else {
      if (event.key === 'ArrowUp') {
        clickElements(0);
      } else if (event.key === 'ArrowDown') {
        clickElements(1);
      }
    }
  };

  return {
    checkArrowsPress,
  };
};

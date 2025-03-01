import { WordsForTrainersTypes } from '../../../model/types/types';
import {
  wordActionsFunctionType,
  wordActionsFunctionTypeWithElemForClick,
} from '../../../lib/hooks/useWordActions';
import { ChoiceWordInterface } from '../../../model/types/choice';
import { onFailHandler } from './onFailHandler';
import { timeoutDurationForRender } from '@/shared/const/global';

export const ChoiceWordOnClick = (
  e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  randomWord: ChoiceWordInterface,
  choiceWord: string,
  wordOnSuccess: wordActionsFunctionType,
  wordOnFail: wordActionsFunctionTypeWithElemForClick,
  isErrorWork: boolean,
  storeWords: WordsForTrainersTypes[],
  showNewWord: wordActionsFunctionType,
) => {
  const timeoutForRender = setTimeout(() => {
    // Получаем данные о том, можно ли кликать
    const main: HTMLElement = document.querySelector('main')!;
    const canClick: boolean = main.style.pointerEvents !== 'none';

    if (canClick) {
      // В зависимости от правильности ответа, совершаем определённое действие
      if (randomWord.choiceWord === choiceWord) {
        wordOnSuccess(storeWords, isErrorWork, randomWord.id);
      } else {
        onFailHandler(e, randomWord, wordOnFail, storeWords, isErrorWork);
      }
    } else {
      showNewWord(storeWords, isErrorWork, randomWord.id);
    }

    clearTimeout(timeoutForRender);
  }, timeoutDurationForRender);
};

import { playAudio } from '@/shared/utils/playAudio';
import { useState } from 'react';
import { clearClassesOnInput } from '../helpers/clearClassesOnInput';
import * as styles from '../../ui/Dictant.module.scss';

interface useCheckCorrectnessResult {
  checkCorrectness: () => void;
  correctLetters: number;
  maxCorrectLetters: number;
  isIncorrect: boolean;
  isMissed: boolean;
}

export const useCheckCorrectness = (
  text: string,
  splitSymbol: string,
): useCheckCorrectnessResult => {
  // Функция для проверки введённых пользователем букв
  const [correctLetters, setCorrectLetters] = useState(0);
  const [maxCorrectLetters, setMaxCorrectLetters] = useState(0);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [isMissed, setIsMissed] = useState(false);

  const checkCorrectness = () => {
    const inputElements = document.querySelectorAll(
      '.Dictant__input',
    ) as NodeListOf<HTMLInputElement>;

    let correctLetters: number = inputElements.length;
    let isMissed: boolean = false;
    let isIncorrect: boolean = false;

    const splitText: string[] = text.split('');

    for (let i = 0; i < inputElements.length; i++) {
      const inputElement = inputElements[i];
      const letterId: number = Number(inputElement.id.split('__')[1]);

      const thisInputIsMissed: boolean =
        !inputElement.value && splitText[letterId] !== splitSymbol;

      if (thisInputIsMissed) {
        isMissed = true;
        setIsMissed(true);

        for (const inputElementForClear of inputElements) {
          clearClassesOnInput(inputElementForClear, false);
        }
      }

      if (thisInputIsMissed) {
        inputElement.classList.add(styles.Dictant__input__missed);
        correctLetters--;
      } else if (
        !isMissed &&
        inputElement.value !== splitText[letterId] &&
        !(!inputElement.value && splitText[letterId] === splitSymbol)
      ) {
        inputElement.classList.add(styles.Dictant__input__incorrect);
        correctLetters--;

        if (!isMissed) {
          setIsIncorrect(true);
          isIncorrect = true;
        }
      } else if (!isMissed) {
        inputElement.classList.add(styles.Dictant__input__correct);
      }
    }

    if (isIncorrect && !isMissed) {
      playAudio('FailSound');
    }

    setIsMissed(isMissed);
    setCorrectLetters(correctLetters);
    setMaxCorrectLetters(inputElements.length);
  };

  return {
    checkCorrectness,
    correctLetters,
    maxCorrectLetters,
    isIncorrect,
    isMissed,
  };
};

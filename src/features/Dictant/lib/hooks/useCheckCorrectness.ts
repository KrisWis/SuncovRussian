import { playAudio } from '@/shared/utils/playAudio';
import { clearClassesOnInput } from '../helpers/clearClassesOnInput';
import * as styles from '../../ui/Dictant.module.scss';

interface useCheckCorrectnessResult {
  checkCorrectness: () => void;
}

export const useCheckCorrectness = (
  text: string,
  splitSymbol: string,
  setCorrectLetters: React.Dispatch<React.SetStateAction<number>>,
  setMaxCorrectLetters: React.Dispatch<React.SetStateAction<number>>,
  setIsIncorrect: React.Dispatch<React.SetStateAction<boolean>>,
  setIsMissed: React.Dispatch<React.SetStateAction<boolean>>,
): useCheckCorrectnessResult => {
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
  };
};

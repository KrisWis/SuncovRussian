import { playAudio } from '@/shared/utils/playAudio';
import * as styles from '../../ui/Dictant.module.scss';

interface useCheckDictantCorrectnessResult {
  checkDictantCorrectness: () => void;
}

export const useCheckDictantCorrectness = (
  text: string,
  splitSymbol: string,
  setCorrectLetters: React.Dispatch<React.SetStateAction<number>>,
  setMaxCorrectLetters: React.Dispatch<React.SetStateAction<number>>,
  setIsIncorrect: React.Dispatch<React.SetStateAction<boolean>>,
  setIsMissed: React.Dispatch<React.SetStateAction<boolean>>,
): useCheckDictantCorrectnessResult => {
  const checkDictantCorrectness = () => {
    const inputElements = document.querySelectorAll(
      '[data-name="Dictant__input"]',
    ) as NodeListOf<HTMLInputElement>;

    let correctLetters: number = inputElements.length;
    let isMissed: boolean = false;
    let isIncorrect: boolean = false;
    let minOneInputIsMissed: boolean = false;
    const splitText: string[] = text.split('');

    // Функция для проверки, что инпут пустой
    const isInputMissed = (input: HTMLInputElement): boolean => {
      const letterId: number = Number(input.id.split('__')[1]);

      const thisInputIsMissed: boolean =
        !input.value && splitText[letterId] !== splitSymbol;

      return thisInputIsMissed;
    };

    // Проходимся по каждому инпуту
    for (let i = 0; i < inputElements.length; i++) {
      const inputElement = inputElements[i];
      const letterId: number = Number(inputElement.id.split('__')[1]);

      const thisInputIsMissed: boolean = isInputMissed(inputElement);

      minOneInputIsMissed = Array.from(inputElements).some((input) =>
        isInputMissed(input),
      );

      // Проверяем, есть ли хотя бы один инпут с пропуском
      if (minOneInputIsMissed) {
        isMissed = true;
        setIsMissed(true);
      }

      if (thisInputIsMissed) {
        // Навешиваем стили если инпут с пропуском
        inputElement.classList.add(styles.Dictant__input__missed);
        correctLetters--;
      } else if (
        // Если неправильный
        !minOneInputIsMissed &&
        inputElement.value !== splitText[letterId] &&
        !(!inputElement.value && splitText[letterId] === splitSymbol)
      ) {
        inputElement.classList.add(styles.Dictant__input__incorrect);
        correctLetters--;

        if (!minOneInputIsMissed) {
          setIsIncorrect(true);
          isIncorrect = true;
        }
      } else if (!minOneInputIsMissed) {
        // И если правильный
        inputElement.classList.add(styles.Dictant__input__correct);
      }
    }

    if (isIncorrect && !minOneInputIsMissed) {
      playAudio('FailSound');
    }

    setIsMissed(isMissed);
    setCorrectLetters(correctLetters);
    setMaxCorrectLetters(inputElements.length);

    // Фокус на первый элемент с пропуском
    if (minOneInputIsMissed) {
      Array.from(inputElements)
        .filter((input) => isInputMissed(input))[0]
        .focus();
    }
  };

  return {
    checkDictantCorrectness,
  };
};

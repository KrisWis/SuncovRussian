import {
  DictantSymbolForEndSentences,
  DictantSymbolForSplitSentences,
} from '../../ui/Dictant';
import { CheckButtonOnClickResult } from '@/shared/ui/TemplateForTests';
interface useCheckCorrectnessResult {
  checkCorrectness: () => CheckButtonOnClickResult;
}

export const useCheckCorrectness = (
  text: string,
  splitSymbol: string,
  setCorrectLetters: React.Dispatch<React.SetStateAction<number>>,
  setMaxCorrectLetters: React.Dispatch<React.SetStateAction<number>>,
  setIsIncorrect: React.Dispatch<React.SetStateAction<boolean>>,
  setIsMissed: React.Dispatch<React.SetStateAction<boolean>>,
  setMissedInputsIDs: React.Dispatch<React.SetStateAction<number[]>>,
  setCorrectInputsIDs: React.Dispatch<React.SetStateAction<number[]>>,
  setIncorrectInputsIDs: React.Dispatch<React.SetStateAction<number[]>>,
): useCheckCorrectnessResult => {
  const checkCorrectness = (): CheckButtonOnClickResult => {
    // Инициализация всех элементов и переменных
    const inputElements = document.querySelectorAll(
      '[data-name="Dictant__input"]',
    ) as NodeListOf<HTMLInputElement>;

    let correctLetters: number = inputElements.length;
    let isMissed: boolean = false;
    let isIncorrect: boolean = false;
    let minOneInputIsMissed: boolean = false;
    const splitText: string[] = text
      .replace(
        new RegExp(
          `${DictantSymbolForSplitSentences}.+?${DictantSymbolForSplitSentences}\\s*`,
          '',
        ),
        '',
      )
      .split('');

    // Функция для проверки, что инпут пустой
    const isInputMissed = (input: HTMLInputElement): boolean => {
      const letterId: number = Number(input.id.split('__')[1]);
      const sentencesCount =
        text.slice(0, letterId).split(DictantSymbolForEndSentences).length - 1;
      const globalLetterIndex = letterId - sentencesCount;

      const thisInputIsMissed: boolean =
        !input.value && splitText[globalLetterIndex] !== splitSymbol;

      return thisInputIsMissed;
    };

    // Проходимся по каждому инпуту
    for (let i = 0; i < inputElements.length; i++) {
      const inputElement = inputElements[i];
      const letterId: number = Number(inputElement.id.split('__')[1]);
      const sentencesCount =
        text.slice(0, letterId).split(DictantSymbolForEndSentences).length - 1;
      const globalLetterIndex = letterId - sentencesCount;

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
        setMissedInputsIDs((prev) => [...prev, letterId]);
        correctLetters--;
      } else if (
        // Если неправильный
        !minOneInputIsMissed &&
        inputElement.value !== splitText[globalLetterIndex] &&
        !(!inputElement.value && splitText[globalLetterIndex] === splitSymbol)
      ) {
        setIncorrectInputsIDs((prev) => [...prev, letterId]);
        correctLetters--;

        if (!minOneInputIsMissed) {
          setIsIncorrect(true);
          isIncorrect = true;
        }
      } else if (!minOneInputIsMissed) {
        // И если правильный
        setCorrectInputsIDs((prev) => [...prev, letterId]);
      }
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

    // Возвращаем значения
    return {
      testIsFailed: isIncorrect,
      testHasMissedAnswers: isMissed,
    };
  };

  return {
    checkCorrectness,
  };
};

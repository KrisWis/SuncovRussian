import { CheckButtonOnClickResult } from '@/shared/ui/TemplateForTests';
import { isWordCorrect } from '../helpers/isWordCorrect';
import * as styles from '../../ui/PartsOfSpeachItem.module.scss';

interface useCheckPartsOfSpeachItemCorrectnessResult {
  checkPartsOfSpeachItemCorrectness: () => CheckButtonOnClickResult;
}

export const useCheckPartsOfSpeachItemCorrectness = (
  text: string,
  setMaxCorrectAnswersCount: React.Dispatch<React.SetStateAction<number>>,
  setCorrectAnswersCount: React.Dispatch<React.SetStateAction<number>>,
  setTestIsFailed: React.Dispatch<React.SetStateAction<boolean>>,
): useCheckPartsOfSpeachItemCorrectnessResult => {
  const checkPartsOfSpeachItemCorrectness = (): CheckButtonOnClickResult => {
    // Получаем все слова
    const PartsOfSpeachItemWords = document.querySelectorAll(
      '[data-name="PartsOfSpeachItem__word"]',
    );

    // Инициализируем значения для стейтов
    let correctAnswersCount = 0;
    let testIsFailed: boolean = false;

    // Получаем все правильные слова в тексте
    const correctWordsIndexes = text
      .split(' ')
      .map((word, index) => (isWordCorrect(word) ? index : -1))
      .filter((word) => word !== -1);

    // Проходимся по всем выделенным словам
    const selectedWords = Array.from(PartsOfSpeachItemWords).filter(
      (word) => word.getAttribute('data-selected') === 'true',
    );

    selectedWords.forEach((word) => {
      const wordIndex = parseInt(word.getAttribute('data-index')!);

      if (!correctWordsIndexes.includes(wordIndex)) {
        // Если выделенное слово неверное, то помечаем как ошибку
        word.classList.add(styles.PartsOfSpeachItem__word__error);
        testIsFailed = true;
      }
    });

    // Проходимся по правильным словам, и проверяем выделенные ли они (если нет, то помечаем как ошибку)
    correctWordsIndexes.forEach((wordIndex) => {
      const word = PartsOfSpeachItemWords[wordIndex];

      if (word.getAttribute('data-selected') === 'false') {
        word.classList.add(styles.PartsOfSpeachItem__word__error);
        testIsFailed = true;
      } else {
        correctAnswersCount++;
      }
    });

    // Обновляем стейты
    setMaxCorrectAnswersCount(correctWordsIndexes.length);
    setCorrectAnswersCount(correctAnswersCount);
    setTestIsFailed(testIsFailed);

    // Возвращаем значения
    return {
      testIsFailed: false,
      testHasMissedAnswers: false,
    };
  };

  return {
    checkPartsOfSpeachItemCorrectness,
  };
};

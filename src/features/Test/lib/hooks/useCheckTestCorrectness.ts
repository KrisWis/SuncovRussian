import * as styles from '../../ui/Test.module.scss';
import { CheckButtonOnClickResult } from '@/shared/ui/TemplateForTests';
import { TestType } from '../../model/types/types';

interface useCheckTestCorrectnessResult {
  checkTestCorrectness: () => CheckButtonOnClickResult;
}

export const useCheckTestCorrectness = (
  tests: TestType[],
  setMaxCorrectAnswersCount: React.Dispatch<React.SetStateAction<number>>,
  setCorrectAnswersCount: React.Dispatch<React.SetStateAction<number>>,
  setTestIsFailed: React.Dispatch<React.SetStateAction<boolean>>,
  setTestHasMissedAnswers: React.Dispatch<React.SetStateAction<boolean>>,
): useCheckTestCorrectnessResult => {
  const checkTestCorrectness = (): CheckButtonOnClickResult => {
    // Получаем нужные все тесты-элементы
    const allTests = document.querySelectorAll(
      '[data-name="Test"]',
    ) as NodeListOf<HTMLInputElement>;

    // Проверяем есть ли в тестах хотя-бы один блок с пропущенным ответом
    const isMinOneTestMissed = Array.from(allTests).some((test) => {
      const testRadioButtons = test.querySelectorAll(
        '[data-name="Test__radioButton"]',
      );

      return Array.from(testRadioButtons).every(
        (radioButton) => !(radioButton as HTMLInputElement).checked,
      );
    });

    // Устанавливаем счетчик правильных ответов и то, есть ли хотя бы один неправильный тест
    let correctAnswersCount: number = 0;
    let minOneTestIsFailed: boolean = false;

    for (let i = 0; i < allTests.length; i++) {
      // Получаем тест и его радио-кнопки
      const testElement = allTests[i];
      const testRadioButtons = testElement.querySelectorAll(
        '[data-name="Test__radioButton"]',
      );

      // Получаем элемент фона
      const bgElem = testElement.querySelector(
        '[data-name="Test__bg"]',
      ) as HTMLDivElement;

      // Получаем сами значения теста
      const testValues = tests[i];

      // Проверяем, что в тесте есть хотя-бы одна нажатая кнопка (если тест имеет один ответ), а если имеет несколько, то чтобы было нажато более одной
      const checkedRadioButtonIndexes: number[] = Array.from(testRadioButtons)
        .filter((radioButton) => (radioButton as HTMLInputElement).checked)
        .map((radioButton) =>
          Number((radioButton as HTMLInputElement).getAttribute('data-index')),
        );

      if (checkedRadioButtonIndexes.length === 0) {
        bgElem.classList.add(styles.Test__bg__active);
        continue;
      }

      // Если ни один тест не пропущен, то проверяем правильность ответа
      if (!isMinOneTestMissed) {
        let testIsCorrect: boolean;
        // Проверяем, правильный ли выбран ответ (при условии, что тест имеет один ответ)

        if (testValues.hasOneCorrectAnswer) {
          const correctAnswerIndex = testValues.items.findIndex(
            (item) => item.isCorrect,
          );

          testIsCorrect = correctAnswerIndex === checkedRadioButtonIndexes[0];
        } else {
          // Если тест имеет несколько ответов
          const correctAnswerIndexes = testValues.items
            .map((item, index) => (item.isCorrect ? index : -1))
            .filter((index) => index !== -1);

          testIsCorrect =
            JSON.stringify(checkedRadioButtonIndexes.sort()) ===
            JSON.stringify(correctAnswerIndexes.sort());
        }

        // В зависимости от того, правильный или нет, делаем соответствующие действия
        if (testIsCorrect) {
          correctAnswersCount += 1;
        } else {
          minOneTestIsFailed = true;
          bgElem.classList.add(styles.Test__bg__incorrect);
        }
      }
    }

    // Обновляем стейты
    setMaxCorrectAnswersCount(allTests.length);
    setCorrectAnswersCount(correctAnswersCount);
    setTestIsFailed(minOneTestIsFailed);
    setTestHasMissedAnswers(isMinOneTestMissed);

    // Возвращаем значения
    return {
      testIsFailed: minOneTestIsFailed,
      testHasMissedAnswers: isMinOneTestMissed,
    };
  };

  return {
    checkTestCorrectness,
  };
};

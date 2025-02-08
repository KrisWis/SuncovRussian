// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { TestsType } from '@/pages/TestsPage';
import * as styles from '../../ui/RadioButtonsTest.module.scss';
import { CheckButtonOnClickResult } from '@/shared/ui/TemplateForTests';

interface useCheckRadioButtonsTestCorrectnessResult {
  checkRadioButtonsTestCorrectness: () => CheckButtonOnClickResult;
}

export const useCheckRadioButtonsTestCorrectness = (
  theme: string,
  tests: TestsType,
  setMaxCorrectAnswersCount: React.Dispatch<React.SetStateAction<number>>,
  setCorrectAnswersCount: React.Dispatch<React.SetStateAction<number>>,
  setTestIsFailed: React.Dispatch<React.SetStateAction<boolean>>,
  setTestHasMissedAnswers: React.Dispatch<React.SetStateAction<boolean>>,
): useCheckRadioButtonsTestCorrectnessResult => {
  const checkRadioButtonsTestCorrectness = (): CheckButtonOnClickResult => {
    // Получаем нужные все тесты-элементы
    const allTests = document.querySelectorAll(
      '[data-name="RadioButtonsTest"]',
    ) as NodeListOf<HTMLInputElement>;

    // Проверяем есть ли в тестах хотя-бы один блок с пропущенным ответом
    const isMinOneTestMissed = Array.from(allTests).some((test, index) => {
      const testRadioButtons = test.querySelectorAll(
        '[data-name="RadioButtonsTest__radioButton"]',
      );

      if (tests[theme][index].hasOneCorrectAnswer) {
        return Array.from(testRadioButtons).every(
          (radioButton) => !(radioButton as HTMLInputElement).checked,
        );
      } else {
        return (
          Array.from(testRadioButtons).filter(
            (radioButton) => (radioButton as HTMLInputElement).checked,
          ).length < 2
        );
      }
    });

    // Устанавливаем счетчик правильных ответов и то, есть ли хотя бы один неправильный тест
    let correctAnswersCount: number = 0;
    let minOneTestIsFailed: boolean = false;

    for (let i = 0; i < allTests.length; i++) {
      // Получаем тест и его радио-кнопки
      const testElement = allTests[i];
      const testRadioButtons = testElement.querySelectorAll(
        '[data-name="RadioButtonsTest__radioButton"]',
      );

      // Получаем элемент фона
      const bgElem = testElement.querySelector(
        '[data-name="RadioButtonsTest__bg"]',
      ) as HTMLDivElement;

      // Получаем сами значения теста
      const testValues = tests[theme][i];

      // Проверяем, что в тесте есть хотя-бы одна нажатая кнопка (если тест имеет один ответ), а если имеет несколько, то чтобы было нажато более одной
      const checkedRadioButtonIndexes: number[] = Array.from(testRadioButtons)
        .filter((radioButton) => (radioButton as HTMLInputElement).checked)
        .map((radioButton) =>
          Number((radioButton as HTMLInputElement).getAttribute('data-index')),
        );

      if (
        (testValues.hasOneCorrectAnswer &&
          checkedRadioButtonIndexes.length === 0) ||
        (!testValues.hasOneCorrectAnswer &&
          checkedRadioButtonIndexes.length < 2)
      ) {
        bgElem.classList.add(styles.RadioButtonsTest__bg__active);
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

        // В зависимости от того, правильный или нет, добавляем соответствующие классы на фон
        if (testIsCorrect) {
          correctAnswersCount += 1;
          bgElem.classList.add(styles.RadioButtonsTest__bg__correct);
        } else {
          minOneTestIsFailed = true;
          bgElem.classList.add(styles.RadioButtonsTest__bg__incorrect);
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
    checkRadioButtonsTestCorrectness,
  };
};

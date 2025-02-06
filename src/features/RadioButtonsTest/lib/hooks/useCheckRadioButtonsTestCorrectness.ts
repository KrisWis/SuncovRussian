// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { TestsType } from '@/pages/TestsPage';
import * as styles from '../../ui/RadioButtonsTest.module.scss';

interface useCheckRadioButtonsTestCorrectnessResult {
  checkRadioButtonsTestCorrectness: () => void;
}

export const useCheckRadioButtonsTestCorrectness = (
  theme: string,
  tests: TestsType,
): useCheckRadioButtonsTestCorrectnessResult => {
  const checkRadioButtonsTestCorrectness = () => {
    const allTests = document.querySelectorAll(
      '[data-name="RadioButtonsTest"]',
    ) as NodeListOf<HTMLInputElement>;

    for (let i = 0; i < allTests.length; i++) {
      // Получаем тест и его радио-кнопки
      const testElement = allTests[i];
      const testRadioButtons = testElement.querySelectorAll(
        '[data-name="RadioButtonsTest__radioButton"]',
      );

      // Получаем сами значения теста
      const testValues = tests[theme][i];

      // Проверяем, что в тесте есть хотя-бы одна нажатая кнопка (если тест имеет один ответ), а если имеет несколько, то чтобы было нажато более одной
      const isRadioButtonChecked = Array.from(testRadioButtons).some(
        (radioButton) => (radioButton as HTMLInputElement).checked,
      );

      const isMinTwoRadioButtonsChecked =
        Array.from(testRadioButtons).filter(
          (radioButton) => (radioButton as HTMLInputElement).checked,
        ).length >= 2;

      if (
        (testValues.hasOneCorrectAnswer && !isRadioButtonChecked) ||
        (!testValues.hasOneCorrectAnswer && !isMinTwoRadioButtonsChecked)
      ) {
        const bgElem = testElement.querySelector(
          '[data-name="RadioButtonsTest__bg"]',
        ) as HTMLDivElement;

        bgElem.classList.add(styles.RadioButtonsTest__bg__active);
      }
    }
  };

  return {
    checkRadioButtonsTestCorrectness,
  };
};

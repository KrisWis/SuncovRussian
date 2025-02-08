// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { TestsItemProps } from '@/pages/TestsPage';
import * as styles from '../../ui/RadioButtonsTest.module.scss';

export const deleteClassOfMissing = (
  e: React.MouseEvent<HTMLInputElement, MouseEvent>,
  tests: TestsItemProps[],
) => {
  // Получаем родительский элемент
  const parentElement = (e.target as HTMLElement).closest(
    `[data-name="RadioButtonsTest"]`,
  );

  // Получаем элемент фона
  const bgElem = parentElement!.querySelector(
    '[data-name="RadioButtonsTest__bg"]',
  ) as HTMLDivElement;

  // Получаем индекс родительского элемента
  const testIndex: number = Number(parentElement!.id.split('__')[1]);

  // Получаем сам тест
  const test = tests[testIndex];

  if (test.hasOneCorrectAnswer) {
    // Удаляем класс у фона
    bgElem.classList.remove(styles.RadioButtonsTest__bg__active);
  } else {
    const testRadioButtons = parentElement!.querySelectorAll(
      '[data-name="RadioButtonsTest__radioButton"]',
    );

    const isMinTwoRadioButtonsChecked =
      Array.from(testRadioButtons).filter(
        (radioButton) => (radioButton as HTMLInputElement).checked,
      ).length >= 2;

    if (isMinTwoRadioButtonsChecked) {
      // Удаляем класс у фона
      bgElem.classList.remove(styles.RadioButtonsTest__bg__active);
    }
  }
};

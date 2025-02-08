import * as styles from '../../ui/RadioButtonsTest.module.scss';

export const deleteClassOfMissing = (
  e: React.MouseEvent<HTMLInputElement, MouseEvent>,
) => {
  // Получаем родительский элемент
  const parentElement = (e.target as HTMLElement).closest(
    `[data-name="RadioButtonsTest"]`,
  );

  // Получаем элемент фона
  const bgElem = parentElement!.querySelector(
    '[data-name="RadioButtonsTest__bg"]',
  ) as HTMLDivElement;

  // Удаляем класс у фона
  bgElem.classList.remove(styles.RadioButtonsTest__bg__active);
};

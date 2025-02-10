import * as styles from '../../ui/Test.module.scss';

export const deleteClassOfMissing = (
  e: React.MouseEvent<HTMLInputElement, MouseEvent>,
) => {
  // Получаем родительский элемент
  const parentElement = (e.target as HTMLElement).closest(`[data-name="Test"]`);

  // Получаем элемент фона
  const bgElem = parentElement!.querySelector(
    '[data-name="Test__bg"]',
  ) as HTMLDivElement;

  // Удаляем класс у фона
  bgElem.classList.remove(styles.Test__bg__active);
};

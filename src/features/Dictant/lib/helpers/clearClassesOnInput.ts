import * as styles from '../../ui/Dictant.module.scss';

// Функция для того, чтобы сбрасывать классы правильности, если пользователь ввёл новое значение в инпут
export const clearClassesOnInput = (
  input: HTMLInputElement,
  withIsMissed: boolean,
) => {
  const classes = [
    styles.Dictant__input__correct,
    styles.Dictant__input__incorrect,
  ];

  if (withIsMissed) {
    classes.push(styles.Dictant__input__missed);
  }

  input.classList.remove(...classes);
};

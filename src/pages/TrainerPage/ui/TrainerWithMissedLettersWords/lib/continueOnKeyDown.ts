import * as styles from '@/shared/ui/Button/ui/Button.module.scss';

// Функция для обработки нажатия клавиши Enter в тренажёре как клика на кнопку "Далее"
export const continueOnKeyDown = (e: KeyboardEvent): boolean => {
  const continueButton = document.getElementById(
    'TrainerWithMissedLettersWords__continueButton',
  );

  if (e.key === 'Enter' && continueButton) {
    continueButton.click();
    continueButton.classList.add(styles.Button__inverse__clicked);

    const timeoutForStylesRemoving = setTimeout(() => {
      continueButton.classList.remove(styles.Button__inverse__clicked);
      clearTimeout(timeoutForStylesRemoving);
    }, 500);

    return true;
  }

  return false;
};

// Реализация выбора радио-кнопок
export const testSwitching = (
  hasOneCorrectAnswer: boolean,
  e: React.MouseEvent<HTMLInputElement, MouseEvent>,
) => {
  const target = e.target as HTMLInputElement;

  if (target.checked && target.dataset.wasChecked === 'true') {
    target.checked = false;
  }

  if (hasOneCorrectAnswer) {
    // Если может иметь только один ответ, то со всех остальных снимаем выделение
    const parentElement = (e.target as HTMLElement).closest(
      `[data-name="Test"]`,
    );

    // Находим все radio inputs в той же группе
    const testRadioButtons = parentElement!.querySelectorAll<HTMLInputElement>(
      '[data-name="Test__radioButton"]',
    );

    // Снимаем выделение со всех других radio buttons
    testRadioButtons.forEach((radio) => {
      if (radio !== target) {
        radio.checked = false;
        radio.dataset.wasChecked = 'false';
      }
    });
  }

  target.dataset.wasChecked = String(target.checked);
};

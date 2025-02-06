// Функция для того, чтобы перебрасывать пользователя на предыдущий input при нажатии "backspace" в пустом инпуте.
export const goToPrevInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
  const inputs = document.querySelectorAll(
    '[data-name="Dictant__input"]',
  ) as NodeListOf<HTMLInputElement>;

  const currentInputIndex = Array.from(inputs).indexOf(
    e.target as HTMLInputElement,
  );
  const prevInput = Array.from(inputs)[currentInputIndex - 1];

  if (!(e.target as HTMLInputElement).value && e.key === 'Backspace') {
    if (prevInput) {
      prevInput.focus();
    }
  }
};

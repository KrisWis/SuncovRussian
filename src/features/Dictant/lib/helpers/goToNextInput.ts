// Функция для того, чтобы перебрасывать пользователя на следующий инпут при вводе символа
export const goToNextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  const inputs = document.querySelectorAll(
    '[data-name="Dictant__input"]',
  ) as NodeListOf<HTMLInputElement>;

  const currentInputIndex = Array.from(inputs).indexOf(e.target);
  const nextInput = Array.from(inputs)
    .slice(currentInputIndex + 1)
    .find((input) => !input.value);

  if (nextInput && e.target.value) {
    nextInput.focus();
  }
};

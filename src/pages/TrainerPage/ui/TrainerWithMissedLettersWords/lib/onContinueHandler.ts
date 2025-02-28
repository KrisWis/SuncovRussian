interface onContinueHandlerParams {
  word: string;
  setMissedInputsIDs: React.Dispatch<React.SetStateAction<number[]>>;
  setCorrectInputsIDs: React.Dispatch<React.SetStateAction<number[]>>;
  setIncorrectInputsIDs: React.Dispatch<React.SetStateAction<number[]>>;
}

// Функционал того, что если вставлена правильная буква, то срабатывает функция успеха
export const onContinueHandler = ({
  word,
  setMissedInputsIDs,
  setCorrectInputsIDs,
  setIncorrectInputsIDs,
}: onContinueHandlerParams) => {
  // Получаем все инпуты в тренажёре
  const TrainerWithMissedLettersInputs =
    document.querySelectorAll<HTMLInputElement>(
      '[data-name="TrainerWithMissedLetters__input"',
    );

  // Проходимся по инпутам
  for (const input of TrainerWithMissedLettersInputs) {
    const inputIndex = Number(input.getAttribute('data-index')!);

    // Проверяем, что в инпуте пропущена буква
    if (!input.value) {
      setMissedInputsIDs((prev) => [...prev, inputIndex]);
      return;
    }

    // Проверяем, правильный-ли инпут;
    const isCorrect = input.value === word[inputIndex - 1];

    if (isCorrect) {
      setCorrectInputsIDs((prev) => [...prev, inputIndex]);
    } else {
      setIncorrectInputsIDs((prev) => [...prev, inputIndex]);
    }
  }
};

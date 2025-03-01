import { WordsForTrainersTypes } from '../../../model/types/types';
import {
  wordActionsFunctionType,
  wordActionsFunctionTypeWithElemForClick,
} from '../../../lib/hooks/useWordActions';
import { WithMissedLettersWordsInterface } from '../../../model/types/withMissedLetters';

interface onContinueHandlerParams {
  randomWord: WithMissedLettersWordsInterface;
  setIncorrectInputsIDs: React.Dispatch<React.SetStateAction<number[]>>;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionTypeWithElemForClick;
  storeWords: WordsForTrainersTypes[];
  isErrorWork: boolean;
  setIsIncorrect: React.Dispatch<React.SetStateAction<boolean>>;
}

// Функционал того, что если вставлена правильная буква, то срабатывает функция успеха
export const onContinueHandler = ({
  randomWord,
  setIncorrectInputsIDs,
  wordOnSuccess,
  wordOnFail,
  storeWords,
  isErrorWork,
  setIsIncorrect,
}: onContinueHandlerParams) => {
  // Получаем все инпуты в тренажёре
  const TrainerWithMissedLettersInputs =
    document.querySelectorAll<HTMLInputElement>(
      '[data-name="TrainerWithMissedLetters__input"',
    );

  // Проходимся по инпутам
  for (const input of TrainerWithMissedLettersInputs) {
    const inputIndex = Number(input.getAttribute('data-index')!);

    // Проверяем, правильный-ли инпут;
    const isCorrect = input.value === randomWord.word[inputIndex - 1];

    if (isCorrect) {
      wordOnSuccess(storeWords, isErrorWork, randomWord.id);
    } else {
      setIsIncorrect(true);
      setIncorrectInputsIDs((prev) => [...prev, inputIndex]);
      wordOnFail(storeWords, isErrorWork, randomWord.id);
    }
  }
};

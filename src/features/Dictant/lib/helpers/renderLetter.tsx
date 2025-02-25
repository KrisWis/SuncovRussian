import { MissedLetterInput } from '@/shared/ui/MissedLetterInput';
import * as styles from '../../ui/Dictant.module.scss';
import { goToNextInput } from './goToNextInput';
import { goToPrevInput } from './goToPrevInput';

export const renderLetter = (
  localWordIndex: number,
  globalLetterIndex: number,
  word: string,
  splitSymbol: string,
  maxCorrectLetters: number,
  isMissed: boolean,
  firstWordIsTheme: boolean,
  correctInputsIDs: number[],
  incorrectInputsIDs: number[],
  missedInputsIDs: number[],
  setMissedInputsIDs: React.Dispatch<React.SetStateAction<number[]>>,
): React.JSX.Element => {
  // Функция для объедения функций инпутов
  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    currentGlobalIndex: number,
  ) => {
    setMissedInputsIDs((prev) =>
      prev.filter((item) => item !== currentGlobalIndex),
    );
    goToNextInput(e);
  };

  return (
    <span
      className={
        localWordIndex === (firstWordIsTheme ? 1 : 0)
          ? styles.Dictant__firstWord
          : ''
      }
      key={word + globalLetterIndex}
    >
      {word.split('').map((letter, letterIndex) => {
        const currentGlobalIndex = globalLetterIndex + letterIndex;

        return (word[letterIndex - 1] === splitSymbol &&
          word[letterIndex + 1] === splitSymbol) ||
          ([word[letterIndex - 2], word[letterIndex - 1]].includes(
            splitSymbol,
          ) &&
            letter === splitSymbol) ? (
          ''
        ) : letter === splitSymbol ? (
          <MissedLetterInput
            data-testid="Dictant__input"
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInput(e, currentGlobalIndex)
            }
            onKeyDown={goToPrevInput}
            id={`DictantInput__${currentGlobalIndex}`}
            data-name="Dictant__input"
            key={letter + currentGlobalIndex}
            readOnly={maxCorrectLetters > 0 && !isMissed}
            isCorrect={correctInputsIDs.includes(currentGlobalIndex)}
            isIncorrect={incorrectInputsIDs.includes(currentGlobalIndex)}
            isMissed={missedInputsIDs.includes(currentGlobalIndex)}
          />
        ) : (
          letter
        );
      })}
    </span>
  );
};

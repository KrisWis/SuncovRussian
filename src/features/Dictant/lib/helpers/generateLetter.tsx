import * as styles from '../../ui/Dictant.module.scss';
import { clearClassesOnInput } from './clearClassesOnInput';
import { goToNextInput } from './goToNextInput';
import { goToPrevInput } from './goToPrevInput';

export const generateLetter = (
  localWordIndex: number,
  globalLetterIndex: number,
  word: string,
  splitSymbol: string,
  maxCorrectLetters: number,
  isMissed: boolean,
): React.JSX.Element => {
  // Функция для объедения функций инпутов
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearClassesOnInput(e.target as HTMLInputElement, true);
    goToNextInput(e);
  };

  return (
    <span
      className={localWordIndex === 0 ? styles.Dictant__firstWord : ''}
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
          <input
            data-testid="Dictant__input"
            onInput={handleInput}
            onKeyDown={goToPrevInput}
            id={`DictantInput__${currentGlobalIndex}`}
            className={`${styles.Dictant__input} Dictant__input`}
            type="text"
            maxLength={1}
            key={letter + currentGlobalIndex}
            readOnly={maxCorrectLetters > 0 && !isMissed}
            autoComplete="off"
          />
        ) : (
          letter
        );
      })}
    </span>
  );
};

import * as styles from './MissedLetterInput.module.scss';
import { memo } from 'react';

type MissedLetterInputSizes = 'small' | 'big';

export interface MissedLetterInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isIncorrect?: boolean;
  isCorrect?: boolean;
  isMissed?: boolean;
  sizeProp?: MissedLetterInputSizes;
}

export const MissedLetterInput: React.FC<MissedLetterInputProps> = memo(
  ({
    isIncorrect,
    isCorrect,
    isMissed,
    sizeProp = 'small',
    ...inputProps
  }): React.JSX.Element => {
    return (
      <input
        type="text"
        maxLength={1}
        autoComplete="off"
        className={`${styles.MissedLetterInput}
        ${isIncorrect ? styles.MissedLetterInput__incorrect : ''}
        ${isCorrect ? styles.MissedLetterInput__correct : ''}
        ${isMissed ? styles.MissedLetterInput__missed : ''}
        ${styles[`MissedLetterInput__${sizeProp}`]}
        `}
        {...inputProps}
      />
    );
  },
);

MissedLetterInput.displayName = 'MissedLetterInput';

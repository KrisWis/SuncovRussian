import * as styles from './MissedLetterInput.module.scss';
import { memo } from 'react';

export interface MissedLetterInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  isIncorrect?: boolean;
  isCorrect?: boolean;
  isMissed?: boolean;
}

export const MissedLetterInput: React.FC<MissedLetterInputProps> = memo(
  ({ isIncorrect, isCorrect, isMissed, ...inputProps }): React.JSX.Element => {
    return (
      <input
        type="text"
        maxLength={1}
        autoComplete="off"
        className={`${styles.MissedLetterInput}
        ${isIncorrect ? styles.MissedLetterInput__incorrect : ''}
        ${isCorrect ? styles.MissedLetterInput__correct : ''}
        ${isMissed ? styles.MissedLetterInput__missed : ''}`}
        {...inputProps}
      />
    );
  },
);

MissedLetterInput.displayName = 'MissedLetterInput';

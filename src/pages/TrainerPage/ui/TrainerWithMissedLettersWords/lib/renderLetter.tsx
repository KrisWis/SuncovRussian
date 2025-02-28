import { MissedLetterInput } from '@/shared/ui/MissedLetterInput';

export const renderLetter = (
  letter: string,
  index: number,
  missedLettersIndexes: number[],
  missedInputsIDs: number[],
  correctInputsIDs: number[],
  incorrectInputsIDs: number[],
  setMissedInputsIDs: React.Dispatch<React.SetStateAction<number[]>>,
) => {
  if (missedLettersIndexes.includes(index)) {
    return (
      <MissedLetterInput
        data-index={index}
        data-name="TrainerWithMissedLetters__input"
        autoFocus
        isMissed={missedInputsIDs.includes(index)}
        isCorrect={correctInputsIDs.includes(index)}
        isIncorrect={incorrectInputsIDs.includes(index)}
        onInput={() =>
          setMissedInputsIDs((prev) => prev.filter((id) => id !== index))
        }
      />
    );
  }

  return <span>{letter}</span>;
};

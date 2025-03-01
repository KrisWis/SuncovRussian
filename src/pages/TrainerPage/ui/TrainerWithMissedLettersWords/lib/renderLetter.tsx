import { MissedLetterInput } from '@/shared/ui/MissedLetterInput';

export const renderLetter = (
  letter: string,
  index: number,
  missedLettersIndexes: number[],
  incorrectInputsIDs: number[],
) => {
  if (missedLettersIndexes.includes(index)) {
    return (
      <MissedLetterInput
        data-index={index}
        data-name="TrainerWithMissedLetters__input"
        autoFocus
        isIncorrect={incorrectInputsIDs.includes(index)}
        sizeProp="big"
      />
    );
  }

  return <span>{letter}</span>;
};

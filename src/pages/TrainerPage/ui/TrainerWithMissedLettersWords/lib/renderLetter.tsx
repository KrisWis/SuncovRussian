import { MissedLetterInput } from '@/shared/ui/MissedLetterInput';

export const renderLetter = (
  letter: string,
  index: number,
  missedLettersIndexes: number[],
) => {
  if (missedLettersIndexes.includes(index + 1)) {
    return <MissedLetterInput autoFocus />;
  }

  return <span>{letter}</span>;
};

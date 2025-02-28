import { createContext } from 'react';

export interface MissedLetterInputContext {
  missedInputsIDs: number[];
  setMissedInputsIDs: React.Dispatch<React.SetStateAction<number[]>>;
  correctInputsIDs: number[];
  setCorrectInputsIDs: React.Dispatch<React.SetStateAction<number[]>>;
  incorrectInputsIDs: number[];
  setIncorrectInputsIDs: React.Dispatch<React.SetStateAction<number[]>>;
}

export const MissedLetterInputContext = createContext<MissedLetterInputContext>(
  {
    missedInputsIDs: [],
    setMissedInputsIDs: () => {},
    correctInputsIDs: [],
    setCorrectInputsIDs: () => {},
    incorrectInputsIDs: [],
    setIncorrectInputsIDs: () => {},
  },
);

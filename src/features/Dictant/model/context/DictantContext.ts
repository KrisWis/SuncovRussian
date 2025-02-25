import { createContext } from 'react';

export interface DictantContext {
  missedInputsIDs: number[];
  setMissedInputsIDs: React.Dispatch<React.SetStateAction<number[]>>;
  correctInputsIDs: number[];
  setCorrectInputsIDs: React.Dispatch<React.SetStateAction<number[]>>;
  incorrectInputsIDs: number[];
  setIncorrectInputsIDs: React.Dispatch<React.SetStateAction<number[]>>;
}

export const DictantContext = createContext<DictantContext>({
  missedInputsIDs: [],
  setMissedInputsIDs: () => {},
  correctInputsIDs: [],
  setCorrectInputsIDs: () => {},
  incorrectInputsIDs: [],
  setIncorrectInputsIDs: () => {},
});

import { createContext } from 'react';

export interface DictantContext {
  maxCorrectLetters: number;
  correctLetters: number;
  isIncorrect: boolean;
  isMissed: boolean;
  setCorrectLetters: React.Dispatch<React.SetStateAction<number>>;
  setMaxCorrectLetters: React.Dispatch<React.SetStateAction<number>>;
  setIsMissed: React.Dispatch<React.SetStateAction<boolean>>;
  setIsIncorrect: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DictantContext = createContext<DictantContext>({
  isMissed: true,
  setIsMissed: () => {},
  correctLetters: 0,
  setCorrectLetters: () => {},
  isIncorrect: false,
  setIsIncorrect: () => {},
  maxCorrectLetters: 0,
  setMaxCorrectLetters: () => {},
});

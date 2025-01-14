import { createContext } from 'react';

export interface TrainerPageContext {
  totalTime: number;
  setTotalTime: React.Dispatch<React.SetStateAction<number>>;
  isIncorrect: boolean;
  setIsIncorrect: React.Dispatch<React.SetStateAction<boolean>>;
  isErrorWork: boolean;
  setIsErrorWork: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TrainerPageContext = createContext<TrainerPageContext>({
  totalTime: 0,
  setTotalTime: () => {},
  isIncorrect: false,
  setIsIncorrect: () => {},
  isErrorWork: false,
  setIsErrorWork: () => {},
});

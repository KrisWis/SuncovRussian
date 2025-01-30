import { createContext } from 'react';

export interface TrainerPageContext {
  totalTime: number;
  setTotalTime: React.Dispatch<React.SetStateAction<number>>;
  isIncorrect: boolean;
  setIsIncorrect: React.Dispatch<React.SetStateAction<boolean>>;
  isErrorWork: boolean;
  setIsErrorWork: React.Dispatch<React.SetStateAction<boolean>>;
  isOneLifeMode: boolean;
  setIsOneLifeMode: React.Dispatch<React.SetStateAction<boolean>>;
  isCheckMode: boolean;
  setIsCheckMode: React.Dispatch<React.SetStateAction<boolean>>;
  allAttemptsCount: number;
  setAllAttemptsCount: React.Dispatch<React.SetStateAction<number>>;
}

export const TrainerPageContext = createContext<TrainerPageContext>({
  totalTime: 0,
  setTotalTime: () => {},
  isIncorrect: false,
  setIsIncorrect: () => {},
  isErrorWork: false,
  setIsErrorWork: () => {},
  isOneLifeMode: false,
  setIsOneLifeMode: () => {},
  isCheckMode: false,
  setIsCheckMode: () => {},
  allAttemptsCount: 0,
  setAllAttemptsCount: () => {},
});

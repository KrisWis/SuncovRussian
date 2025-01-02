import { createContext } from 'react';

export interface TrainerContext {
  totalTime: number;
  setTotalTime: React.Dispatch<React.SetStateAction<number>>;
}

export const TrainerContext = createContext<TrainerContext>({
  totalTime: 0,
  setTotalTime: () => {},
});

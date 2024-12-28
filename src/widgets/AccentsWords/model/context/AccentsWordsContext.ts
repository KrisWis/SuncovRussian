import { createContext } from 'react';

export interface AccentsWordsContext {
  totalTime: number;
  setTotalTime: React.Dispatch<React.SetStateAction<number>>;
}

export const AccentsWordsContext = createContext<AccentsWordsContext>({
  totalTime: 0,
  setTotalTime: () => {},
});

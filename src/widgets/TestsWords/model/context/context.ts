import { createContext } from 'react';

export interface TestsWordsContext {
  totalTime: number;
  setTotalTime: React.Dispatch<React.SetStateAction<number>>;
}

export const TestsWordsContext = createContext<TestsWordsContext>({
  totalTime: 0,
  setTotalTime: () => {},
});

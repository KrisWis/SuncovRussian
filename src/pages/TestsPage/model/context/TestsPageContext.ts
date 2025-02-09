import { createContext } from 'react';
import { TestsItemProps } from '../types/types';

export interface TestsPageContext {
  maxCorrectAnswersCount: number;
  setMaxCorrectAnswersCount: React.Dispatch<React.SetStateAction<number>>;
  correctAnswersCount: number;
  setCorrectAnswersCount: React.Dispatch<React.SetStateAction<number>>;
  testIsFailed: boolean;
  setTestIsFailed: React.Dispatch<React.SetStateAction<boolean>>;
  testHasMissedAnswers: boolean;
  setTestHasMissedAnswers: React.Dispatch<React.SetStateAction<boolean>>;
  theme: string;
  items: TestsItemProps[];
}

export const TestsPageContext = createContext<TestsPageContext>({
  maxCorrectAnswersCount: 0,
  setMaxCorrectAnswersCount: () => {},
  correctAnswersCount: 0,
  setCorrectAnswersCount: () => {},
  testIsFailed: false,
  setTestIsFailed: () => {},
  testHasMissedAnswers: false,
  setTestHasMissedAnswers: () => {},
  theme: '',
  items: [],
});

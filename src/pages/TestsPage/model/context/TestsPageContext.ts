import { createContext } from 'react';

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
});

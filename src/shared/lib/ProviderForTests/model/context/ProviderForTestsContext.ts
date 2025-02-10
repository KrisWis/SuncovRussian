import { createContext } from 'react';

export interface ProviderForTestsContext {
  maxCorrectAnswersCount: number;
  setMaxCorrectAnswersCount: React.Dispatch<React.SetStateAction<number>>;
  correctAnswersCount: number;
  setCorrectAnswersCount: React.Dispatch<React.SetStateAction<number>>;
  testIsFailed: boolean;
  setTestIsFailed: React.Dispatch<React.SetStateAction<boolean>>;
  testHasMissedAnswers: boolean;
  setTestHasMissedAnswers: React.Dispatch<React.SetStateAction<boolean>>;
  theme: string;
  items: unknown[];
}

export const ProviderForTestsContext = createContext<ProviderForTestsContext>({
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

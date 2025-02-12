import { memo, useEffect, useState } from 'react';
import { ProviderForTestsContext } from '../model/context/ProviderForTestsContext';

export interface ProviderForTestsProps {
  children: React.ReactNode;
  theme: string;
  items?: unknown[];
}

export const ProviderForTests: React.FC<ProviderForTestsProps> = memo(
  ({ children, theme, items }): React.JSX.Element => {
    // Инициализация начальных значений
    const [maxCorrectAnswersCount, setMaxCorrectAnswersCount] =
      useState<number>(0);
    const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);
    const [testIsFailed, setTestIsFailed] = useState<boolean>(false);
    const [testHasMissedAnswers, setTestHasMissedAnswers] =
      useState<boolean>(false);
    const [currentItemIndex, setCurrentItemIndex] = useState<number>(0);

    // Обнуление значений при вмонтировании компонента
    useEffect(() => {
      setMaxCorrectAnswersCount(0);
      setCorrectAnswersCount(0);
      setTestIsFailed(false);
      setTestHasMissedAnswers(false);
      setCurrentItemIndex(0);
    }, [theme]);

    return (
      <ProviderForTestsContext.Provider
        value={{
          maxCorrectAnswersCount,
          setMaxCorrectAnswersCount,
          correctAnswersCount,
          setCorrectAnswersCount,
          testIsFailed,
          setTestIsFailed,
          testHasMissedAnswers,
          setTestHasMissedAnswers,
          theme,
          items: items || [],
          currentItemIndex,
          setCurrentItemIndex,
        }}
      >
        {children}
      </ProviderForTestsContext.Provider>
    );
  },
);

ProviderForTests.displayName = 'ProviderForTests';

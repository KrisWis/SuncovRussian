import { Page } from '@/widgets/Page';
import { memo, useState, useEffect, Fragment } from 'react';
import { TestsItem } from '../model/types/types';
import { TestsPageContext } from '../model/context/TestsPageContext';
import { TestsPageConfig } from '../model/config/TestsPageConfig';

export interface TestsPageProps {
  theme: string;
  item: TestsItem;
}

export const TestsPage: React.FC<TestsPageProps> = memo(
  ({ theme, item }): React.JSX.Element => {
    // Инициализация начальных значений
    const [maxCorrectAnswersCount, setMaxCorrectAnswersCount] =
      useState<number>(0);
    const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);
    const [testIsFailed, setTestIsFailed] = useState<boolean>(false);
    const [testHasMissedAnswers, setTestHasMissedAnswers] =
      useState<boolean>(false);

    // Обнуление значений при вмонтировании компонента
    useEffect(() => {
      // Обнуляем значения
      setMaxCorrectAnswersCount(0);
      setCorrectAnswersCount(0);
      setTestIsFailed(false);
      setTestHasMissedAnswers(false);
    }, [theme]);

    return (
      <Page withMarginTop>
        <TestsPageContext.Provider
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
            items: item.items,
          }}
        >
          {TestsPageConfig.map((configItem) => (
            <Fragment key={configItem.type}>
              {item.type === configItem.type && configItem.element}
            </Fragment>
          ))}
        </TestsPageContext.Provider>
      </Page>
    );
  },
);

TestsPage.displayName = 'TestsPage';

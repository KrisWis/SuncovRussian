import { Page } from '@/widgets/Page';
import { memo, useState, Fragment, useEffect } from 'react';
import { mockTests } from '../model/static/mockTests';
import {
  RadioButtonsTest,
  useCheckRadioButtonsTestCorrectness,
} from '@/features/RadioButtonsTest';
import { TemplateForTests } from '@/shared/ui/TemplateForTests';
import { Flex } from '@/shared/lib/Stack';

// TODO: написать тесты

export interface TestsPageProps {
  theme: string;
}

export const TestsPage: React.FC<TestsPageProps> = memo(
  ({ theme }): React.JSX.Element => {
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

    // Получение функции проверки
    const { checkRadioButtonsTestCorrectness } =
      useCheckRadioButtonsTestCorrectness(
        theme,
        mockTests,
        setMaxCorrectAnswersCount,
        setCorrectAnswersCount,
        setTestIsFailed,
        setTestHasMissedAnswers,
      );

    return (
      <Page withMarginTop>
        <TemplateForTests
          testElement={
            <Flex width="100" direction="column" gap="50">
              {mockTests[theme].map((test, index) => (
                <Fragment key={test.caption}>
                  {test.type === 'radioButtons' ? (
                    <RadioButtonsTest
                      hasOneCorrectAnswer={test.hasOneCorrectAnswer}
                      caption={test.caption}
                      items={test.items}
                      index={index}
                      tests={mockTests}
                      theme={theme}
                    />
                  ) : (
                    <></>
                  )}
                </Fragment>
              ))}
            </Flex>
          }
          checkButtonOnClick={checkRadioButtonsTestCorrectness}
          correctAnswersCount={correctAnswersCount}
          maxCorrectAnswersCount={maxCorrectAnswersCount}
          testIsFailed={testIsFailed}
          testHasMissedAnswers={testHasMissedAnswers}
          theme={theme}
        />
      </Page>
    );
  },
);

TestsPage.displayName = 'TestsPage';

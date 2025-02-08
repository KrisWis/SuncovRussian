import { Page } from '@/widgets/Page';
import { memo, useState, Fragment, useEffect } from 'react';
import {
  RadioButtonsTest,
  useCheckRadioButtonsTestCorrectness,
} from '@/features/RadioButtonsTest';
import { TemplateForTests } from '@/shared/ui/TemplateForTests';
import { Flex } from '@/shared/lib/Stack';
import { TestsItem } from '../model/types/types';

// TODO: написать тесты

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

    // Получение функции проверки
    const { checkRadioButtonsTestCorrectness } =
      useCheckRadioButtonsTestCorrectness(
        item.items,
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
              {item.items.map((test, index) => (
                <Fragment key={test.caption}>
                  {item.type === 'radioButtons' ? (
                    <RadioButtonsTest
                      hasOneCorrectAnswer={test.hasOneCorrectAnswer}
                      caption={test.caption}
                      items={test.items}
                      index={index}
                      tests={item.items}
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
          dataTestIdForCheckButton={`TestsPage__${item.type}__checkButton`}
          dataTestIdForDislike={`TestsPage__${item.type}__dislike`}
          dataTestIdForLike={`TestsPage__${item.type}__like`}
        />
      </Page>
    );
  },
);

TestsPage.displayName = 'TestsPage';

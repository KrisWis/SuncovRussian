import { memo, Fragment, useContext } from 'react';
import {
  RadioButtonsTest,
  RadioButtonsTestType,
  useCheckRadioButtonsTestCorrectness,
} from '@/features/RadioButtonsTest';
import { TemplateForTests } from '@/shared/ui/TemplateForTests';
import { Flex } from '@/shared/lib/Stack';
import { TestsPageContext } from '../../model/context/TestsPageContext';

export interface RadioButtonsTestTemplateProps {
  items: RadioButtonsTestType[];
}

export const RadioButtonsTestTemplate: React.FC<RadioButtonsTestTemplateProps> =
  memo(({ items }): React.JSX.Element => {
    // Получаем данные из контекста
    const {
      maxCorrectAnswersCount,
      setMaxCorrectAnswersCount,
      correctAnswersCount,
      setCorrectAnswersCount,
      testIsFailed,
      setTestIsFailed,
      testHasMissedAnswers,
      setTestHasMissedAnswers,
      theme,
    } = useContext(TestsPageContext);

    // Получение функции проверки
    const { checkRadioButtonsTestCorrectness } =
      useCheckRadioButtonsTestCorrectness(
        items,
        setMaxCorrectAnswersCount,
        setCorrectAnswersCount,
        setTestIsFailed,
        setTestHasMissedAnswers,
      );

    return (
      <TemplateForTests
        testElement={
          <Flex width="100" direction="column" gap="50">
            {items.map((test, index) => (
              <Fragment key={test.caption}>
                <RadioButtonsTest
                  hasOneCorrectAnswer={
                    (test as RadioButtonsTestType).hasOneCorrectAnswer
                  }
                  caption={(test as RadioButtonsTestType).caption}
                  items={(test as RadioButtonsTestType).items}
                  index={index}
                  maxCorrectAnswersCount={maxCorrectAnswersCount}
                  testHasMissedAnswers={testHasMissedAnswers}
                />
              </Fragment>
            ))}
          </Flex>
        }
        buttonOnClick={checkRadioButtonsTestCorrectness}
        correctAnswersCount={correctAnswersCount}
        maxCorrectAnswersCount={maxCorrectAnswersCount}
        testIsFailed={testIsFailed}
        testHasMissedAnswers={testHasMissedAnswers}
        theme={theme}
        dataTestIdForCheckButton={`RadioButtonsTestTemplate__radioButtons__checkButton`}
        dataTestIdForDislike={`RadioButtonsTestTemplate__radioButtons__dislike`}
        dataTestIdForLike={`RadioButtonsTestTemplate__radioButtons__like`}
      />
    );
  });

RadioButtonsTestTemplate.displayName = 'RadioButtonsTestTemplate';

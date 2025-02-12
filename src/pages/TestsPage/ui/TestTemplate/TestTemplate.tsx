import { memo, useContext } from 'react';
import { Test, TestType, useCheckTestCorrectness } from '@/features/Test';
import { TemplateForTests } from '@/shared/ui/TemplateForTests';
import { Flex } from '@/shared/lib/Stack';
import { ProviderForTestsContext } from '@/shared/lib/ProviderForTests';

export const TestTemplate: React.FC = memo((): React.JSX.Element => {
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
    items,
  } = useContext(ProviderForTestsContext);

  // Получение функции проверки
  const { checkTestCorrectness } = useCheckTestCorrectness(
    items as TestType[],
    setMaxCorrectAnswersCount,
    setCorrectAnswersCount,
    setTestIsFailed,
    setTestHasMissedAnswers,
  );

  return (
    <TemplateForTests
      testElement={
        <Flex width="100" direction="column" gap="50">
          {(items as TestType[]).map((test, index) => (
            <Test
              key={test.caption}
              hasOneCorrectAnswer={(test as TestType).hasOneCorrectAnswer}
              caption={(test as TestType).caption}
              items={(test as TestType).items}
              index={index}
              maxCorrectAnswersCount={maxCorrectAnswersCount}
              testHasMissedAnswers={testHasMissedAnswers}
            />
          ))}
        </Flex>
      }
      checkButtonOnClick={checkTestCorrectness}
      correctAnswersCount={correctAnswersCount}
      maxCorrectAnswersCount={maxCorrectAnswersCount}
      testIsFailed={testIsFailed}
      testHasMissedAnswers={testHasMissedAnswers}
      theme={theme}
      dataTestIdForButton={`TestsPage__checkButton`}
      dataTestIdForDislike={`TestsPage__dislike`}
      dataTestIdForLike={`TestsPage__like`}
    />
  );
});

TestTemplate.displayName = 'TestTemplate';

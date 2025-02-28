import { memo, useContext } from 'react';
import { Question, Test, useCheckCorrectness } from '@/features/Test';
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
  const { checkCorrectness } = useCheckCorrectness(
    items as Question[],
    setMaxCorrectAnswersCount,
    setCorrectAnswersCount,
    setTestIsFailed,
    setTestHasMissedAnswers,
  );

  return (
    <TemplateForTests
      testElement={
        <Flex width="100" direction="column" gap="50">
          {(items as Question[]).map((test, index) => (
            <Test
              key={test.id}
              hasOneCorrectAnswer={test.has_one_correct_answer}
              caption={test.text}
              answers={test.answers}
              index={index}
              maxCorrectAnswersCount={maxCorrectAnswersCount}
              testHasMissedAnswers={testHasMissedAnswers}
            />
          ))}
        </Flex>
      }
      checkButtonOnClick={checkCorrectness}
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

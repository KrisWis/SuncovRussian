import { memo, useContext } from 'react';
import { TemplateForTests } from '@/shared/ui/TemplateForTests';
import { TestsPageContext } from '../../model/context/TestsPageContext';

export const WordsButtonsTestTemplate: React.FC = memo(
  (): React.JSX.Element => {
    // Получаем данные из контекста
    const {
      maxCorrectAnswersCount,
      correctAnswersCount,
      testIsFailed,
      testHasMissedAnswers,
      theme,
    } = useContext(TestsPageContext);

    return (
      <TemplateForTests
        testElement={<></>}
        buttonOnClick={() => ({
          testHasMissedAnswers: false,
          testIsFailed: false,
        })}
        correctAnswersCount={correctAnswersCount}
        maxCorrectAnswersCount={maxCorrectAnswersCount}
        testIsFailed={testIsFailed}
        testHasMissedAnswers={testHasMissedAnswers}
        theme={theme}
      />
    );
  },
);

WordsButtonsTestTemplate.displayName = 'WordsButtonsTestTemplate';

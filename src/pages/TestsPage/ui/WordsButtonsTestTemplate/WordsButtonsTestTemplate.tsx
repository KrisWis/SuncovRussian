import { memo, useContext } from 'react';
import { TemplateForTests } from '@/shared/ui/TemplateForTests';
import { TestsPageContext } from '../../model/context/TestsPageContext';
import {
  WordsButtonsTest,
  WordsButtonsTestType,
} from '@/features/WordsButtonsTest';

export const WordsButtonsTestTemplate: React.FC = memo(
  (): React.JSX.Element => {
    // Получаем данные из контекста
    const {
      maxCorrectAnswersCount,
      correctAnswersCount,
      testIsFailed,
      testHasMissedAnswers,
      theme,
      items,
    } = useContext(TestsPageContext);

    return (
      <TemplateForTests
        testElement={
          <WordsButtonsTest text={(items as WordsButtonsTestType[])[0].text} />
        }
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

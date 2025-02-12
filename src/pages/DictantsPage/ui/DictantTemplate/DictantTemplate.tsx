import { memo, useContext } from 'react';
import {
  Dictant,
  splitSymbolForDictant,
  useCheckDictantCorrectness,
} from '@/features/Dictant';
import { ProviderForTestsContext } from '@/shared/lib/ProviderForTests';
import { TemplateForTests } from '@/shared/ui/TemplateForTests';

interface DictantTemplateProps {
  text: string;
  theme: string;
}

export const DictantTemplate: React.FC<DictantTemplateProps> = memo(
  ({ text, theme }): React.JSX.Element => {
    // Получаем данные из контекста
    const {
      testHasMissedAnswers,
      maxCorrectAnswersCount,
      correctAnswersCount,
      testIsFailed,
      setCorrectAnswersCount,
      setMaxCorrectAnswersCount,
      setTestIsFailed,
      setTestHasMissedAnswers,
    } = useContext(ProviderForTestsContext);

    // Получаем функцию проверки из хука
    const { checkDictantCorrectness } = useCheckDictantCorrectness(
      text,
      splitSymbolForDictant,
      setCorrectAnswersCount,
      setMaxCorrectAnswersCount,
      setTestIsFailed,
      setTestHasMissedAnswers,
    );

    return (
      <TemplateForTests
        testElement={
          <Dictant
            isMissed={testHasMissedAnswers}
            maxCorrectLetters={maxCorrectAnswersCount}
            text={text}
          />
        }
        checkButtonOnClick={checkDictantCorrectness}
        correctAnswersCount={correctAnswersCount}
        maxCorrectAnswersCount={maxCorrectAnswersCount}
        testIsFailed={testIsFailed}
        testHasMissedAnswers={testHasMissedAnswers}
        theme={theme}
        dataTestIdForCheckButton={'Dictant__check'}
        dataTestIdForLike={'Dictant__like'}
        dataTestIdForDislike={'Dictant__dislike'}
      />
    );
  },
);

DictantTemplate.displayName = 'DictantTemplate';

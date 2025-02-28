import { memo, useContext } from 'react';
import {
  Dictant,
  DictantSymbolForMissed,
  useCheckCorrectness,
} from '@/features/Dictant';
import { ProviderForTestsContext } from '@/shared/lib/ProviderForTests';
import { TemplateForTests } from '@/shared/ui/TemplateForTests';
import {
  MissedLetterInputContext,
  MissedLetterInputProvider,
} from '@/shared/ui/MissedLetterInput';

interface DictantTemplateProps {
  text: string;
  theme: string;
}

const DictantTemplateInner: React.FC<DictantTemplateProps> = memo(
  ({ text, theme }): React.JSX.Element => {
    // Получаем данные из контекстов
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

    const { setMissedInputsIDs, setCorrectInputsIDs, setIncorrectInputsIDs } =
      useContext(MissedLetterInputContext);

    // Получаем функцию проверки из хука
    const { checkCorrectness } = useCheckCorrectness(
      text,
      DictantSymbolForMissed,
      setCorrectAnswersCount,
      setMaxCorrectAnswersCount,
      setTestIsFailed,
      setTestHasMissedAnswers,
      setMissedInputsIDs,
      setCorrectInputsIDs,
      setIncorrectInputsIDs,
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
        checkButtonOnClick={checkCorrectness}
        correctAnswersCount={correctAnswersCount}
        maxCorrectAnswersCount={maxCorrectAnswersCount}
        testIsFailed={testIsFailed}
        testHasMissedAnswers={testHasMissedAnswers}
        theme={theme}
        dataTestIdForButton={'Dictant__check'}
        dataTestIdForLike={'Dictant__like'}
        dataTestIdForDislike={'Dictant__dislike'}
      />
    );
  },
);

DictantTemplateInner.displayName = 'DictantTemplateInner';

export const DictantTemplate: React.FC<DictantTemplateProps> = memo(
  (props): React.JSX.Element => {
    return (
      <MissedLetterInputProvider>
        <DictantTemplateInner {...props} />
      </MissedLetterInputProvider>
    );
  },
);

DictantTemplate.displayName = 'DictantTemplate';

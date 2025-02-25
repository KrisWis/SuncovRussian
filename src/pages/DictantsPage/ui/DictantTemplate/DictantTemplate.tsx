import { memo, useContext, useState } from 'react';
import {
  Dictant,
  DictantSymbolForMissed,
  useCheckDictantCorrectness,
} from '@/features/Dictant';
import { ProviderForTestsContext } from '@/shared/lib/ProviderForTests';
import { TemplateForTests } from '@/shared/ui/TemplateForTests';
import { DictantContext } from '@/features/Dictant';

interface DictantTemplateProps {
  text: string;
  theme: string;
}

export const DictantTemplate: React.FC<DictantTemplateProps> = memo(
  ({ text, theme }): React.JSX.Element => {
    // Инициализация значений для контекста диктанта
    const [missedInputsIDs, setMissedInputsIDs] = useState<number[]>([]);
    const [correctInputsIDs, setCorrectInputsIDs] = useState<number[]>([]);
    const [incorrectInputsIDs, setIncorrectInputsIDs] = useState<number[]>([]);

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
          <DictantContext.Provider
            value={{
              missedInputsIDs,
              setMissedInputsIDs,
              correctInputsIDs,
              setCorrectInputsIDs,
              incorrectInputsIDs,
              setIncorrectInputsIDs,
            }}
          >
            <Dictant
              isMissed={testHasMissedAnswers}
              maxCorrectLetters={maxCorrectAnswersCount}
              text={text}
            />
          </DictantContext.Provider>
        }
        checkButtonOnClick={checkDictantCorrectness}
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

DictantTemplate.displayName = 'DictantTemplate';

import { Flex } from '@/shared/lib/Stack';
import { Page } from '@/widgets/Page';
import { memo, useContext, useState } from 'react';
import {
  DictantContext,
  DictantItem,
  splitSymbolForDictant,
  useCheckCorrectness,
} from '@/features/Dictant';
import { Dictant } from '@/features/Dictant';
import { TemplateForTests } from '@/shared/ui/TemplateForTests';

export interface DictantsPageProps {
  dictant: DictantItem;
}

export const DictantsPageInner: React.FC<DictantsPageProps> = memo(
  ({ dictant }): React.JSX.Element => {
    // Получаем данные из контекста
    const {
      setCorrectLetters,
      maxCorrectLetters,
      setIsIncorrect,
      setIsMissed,
      setMaxCorrectLetters,
      correctLetters,
      isIncorrect,
      isMissed,
    } = useContext(DictantContext);

    // Получаем функцию проверки из хука
    const { checkCorrectness } = useCheckCorrectness(
      dictant.text,
      splitSymbolForDictant,
      setCorrectLetters,
      setMaxCorrectLetters,
      setIsIncorrect,
      setIsMissed,
    );

    return (
      <Page withMarginTop>
        <Flex direction="column" gap="50" maxHeight width="100">
          <TemplateForTests
            testElement={<Dictant text={dictant.text} />}
            checkButtonOnClick={checkCorrectness}
            correctAnswersCount={correctLetters}
            maxCorrectAnswersCount={maxCorrectLetters}
            testIsFailed={isIncorrect}
            testHasMissedAnswers={isMissed}
            theme={dictant.subtheme}
            dataTestIdForCheckButton={'Dictant__check'}
            dataTestIdForLike={'Dictant__like'}
            dataTestIdForDislike={'Dictant__dislike'}
          />
        </Flex>
      </Page>
    );
  },
);

DictantsPageInner.displayName = 'DictantsPageInner';

export const DictantsPage: React.FC<DictantsPageProps> = memo(
  ({ dictant }): React.JSX.Element => {
    // Настройка контекста
    const [correctLetters, setCorrectLetters] = useState(0);
    const [maxCorrectLetters, setMaxCorrectLetters] = useState(0);
    const [isIncorrect, setIsIncorrect] = useState(false);
    const [isMissed, setIsMissed] = useState(false);

    return (
      <DictantContext.Provider
        value={{
          isMissed,
          setIsMissed,
          isIncorrect,
          setIsIncorrect,
          setCorrectLetters,
          setMaxCorrectLetters,
          correctLetters,
          maxCorrectLetters,
        }}
      >
        <DictantsPageInner dictant={dictant} />
      </DictantContext.Provider>
    );
  },
);

DictantsPage.displayName = 'DictantsPage';

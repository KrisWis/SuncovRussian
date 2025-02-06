import { Flex } from '@/shared/lib/Stack';
import { Page } from '@/widgets/Page';
import { memo, useState } from 'react';
import {
  DictantItem,
  splitSymbolForDictant,
  useCheckDictantCorrectness,
} from '@/features/Dictant';
import { Dictant } from '@/features/Dictant';
import { TemplateForTests } from '@/shared/ui/TemplateForTests';

export interface DictantsPageProps {
  dictant: DictantItem;
}

export const DictantsPage: React.FC<DictantsPageProps> = memo(
  ({ dictant }): React.JSX.Element => {
    // Инициализируем начальные значения
    const [correctLetters, setCorrectLetters] = useState(0);
    const [maxCorrectLetters, setMaxCorrectLetters] = useState(0);
    const [isIncorrect, setIsIncorrect] = useState(false);
    const [isMissed, setIsMissed] = useState(false);

    // Получаем функцию проверки из хука
    const { checkDictantCorrectness } = useCheckDictantCorrectness(
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
            testElement={
              <Dictant
                isMissed={isMissed}
                maxCorrectLetters={maxCorrectLetters}
                text={dictant.text}
              />
            }
            checkButtonOnClick={checkDictantCorrectness}
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

DictantsPage.displayName = 'DictantsPage';

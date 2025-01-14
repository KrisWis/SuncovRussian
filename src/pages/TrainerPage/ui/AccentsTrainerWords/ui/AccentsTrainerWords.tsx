import { Flex } from '@/shared/lib/Stack';
import { memo, useContext } from 'react';
import { tabletMediaQueryWidth } from '@/shared/const/global';
<<<<<<<< HEAD:src/pages/TrainerPage/ui/PrimaryTrainerWords/ui/PrimaryTrainerWords.tsx
import { PrimaryTrainerWordsProps } from '../model/types';
import { useWords } from '../../../model/selectors/getTrainerWords/getTrainerWords';
import { TrainerPageContext } from '../../../model/context/TrainerPageContext';
import { TrainerWord } from '@/shared/ui/TrainerWord';
========
import { AccentsTrainerWordsProps } from '../model/types';
import { TrainerWord } from '@/shared/ui/TrainerWord';
import { TrainerPageContext } from '../../../model/context/TrainerPageContext';
>>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.):src/pages/TrainerPage/ui/AccentsTrainerWords/ui/AccentsTrainerWords.tsx

export const PrimaryTrainerWords: React.FC<PrimaryTrainerWordsProps> = memo(
  ({
    randomWord,
    randomWordsIsReverse,
    wordOnFail,
    wordOnSuccess,
    storeWords,
  }): React.JSX.Element => {
    // Инициализация данных и контекста
<<<<<<<< HEAD:src/pages/TrainerPage/ui/PrimaryTrainerWords/ui/PrimaryTrainerWords.tsx
    const storeWords = useWords();

========
>>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.):src/pages/TrainerPage/ui/AccentsTrainerWords/ui/AccentsTrainerWords.tsx
    const { isIncorrect, isErrorWork } = useContext(TrainerPageContext);

    return (
      <Flex
        justify="center"
        direction={
          tabletMediaQueryWidth.matches
            ? randomWordsIsReverse
              ? 'columnReverse'
              : 'column'
            : randomWordsIsReverse
              ? 'rowReverse'
              : 'row'
        }
        width="100"
      >
        <TrainerWord
          dataTestId="PrimaryTrainerWords__valid"
          onClick={() => wordOnSuccess(storeWords, isErrorWork, randomWord.id)}
          style={{
            borderRightWidth: tabletMediaQueryWidth.matches
              ? 3
              : !randomWordsIsReverse && !isIncorrect
                ? 0
                : 3,

            borderBottomWidth: !tabletMediaQueryWidth.matches
              ? 3
              : !randomWordsIsReverse && !isIncorrect
                ? 0
                : 3,

            fontSize: randomWord.valid.length >= 10 ? 26 : 36,
          }}
        >
          {randomWord.valid}
        </TrainerWord>

        <TrainerWord
          dataTestId="PrimaryTrainerWords__invalid"
          onClick={() => wordOnFail(storeWords, isErrorWork, randomWord.id)}
          type={isIncorrect ? 'invalid' : 'default'}
          style={{
            borderRightWidth: tabletMediaQueryWidth.matches
              ? 3
              : randomWordsIsReverse
                ? 0
                : 3,

            borderBottomWidth: !tabletMediaQueryWidth.matches
              ? 3
              : randomWordsIsReverse
                ? 0
                : 3,

            fontSize: randomWord.valid.length >= 10 ? 26 : 36,
          }}
        >
          {randomWord.invalid}
        </TrainerWord>
      </Flex>
    );
  },
);

PrimaryTrainerWords.displayName = 'PrimaryTrainerWords';

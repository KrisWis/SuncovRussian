import { Flex } from '@/shared/lib/Stack';
import { memo, useContext } from 'react';
import { tabletMediaQueryWidth } from '@/shared/const/global';
import { AccentsTrainerWordsProps } from '../model/types';
import { TrainerWord } from '@/shared/ui/TrainerWord';
import { TrainerPageContext } from '../../../model/context/TrainerPageContext';

export const AccentsTrainerWords: React.FC<AccentsTrainerWordsProps> = memo(
  ({
    randomWord,
    randomWordsIsReverse,
    wordOnFail,
    wordOnSuccess,
    storeWords,
  }): React.JSX.Element => {
    // Инициализация данных и контекста
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
          dataTestId="AccentsTrainerWords__valid"
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
          dataTestId="AccentsTrainerWords__invalid"
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

AccentsTrainerWords.displayName = 'AccentsTrainerWords';

import { Flex } from '@/shared/lib/Stack';
import * as styles from './AccentsTrainerWords.module.scss';
import { memo } from 'react';
import { tabletMediaQueryWidth } from '@/shared/const/global';
import { AccentsTrainerWordsProps } from '../model/types';
import { useWordActions } from '../../../model/hooks';
import { useWords } from '../../../model/selectors/getTrainerWords/getTrainerWords';

export const AccentsTrainerWords: React.FC<AccentsTrainerWordsProps> = memo(
  ({
    randomWord,
    randomWordsIsReverse,
    setRandomWordId,
    setRandomWordsIsReverse,
    isErrorWork,
    setIsIncorrect,
  }): React.JSX.Element => {
    // Инициализация данных
    const storeWords = useWords();

    const { wordOnFail, wordOnSuccess } = useWordActions(
      randomWord.id,
      setRandomWordsIsReverse,
      setRandomWordId,
      setIsIncorrect,
    );

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
        <Flex
          justify="center"
          data-testid="AccentsTrainerWords__valid"
          key={randomWord.valid}
          width="100"
          onClick={() => wordOnSuccess(storeWords, isErrorWork, randomWord.id)}
          className={styles.AccentsTrainerWords__word}
          style={{
            borderRightWidth: tabletMediaQueryWidth.matches
              ? 3
              : !randomWordsIsReverse
                ? 0
                : 3,

            borderBottomWidth: !tabletMediaQueryWidth.matches
              ? 3
              : !randomWordsIsReverse
                ? 0
                : 3,

            fontSize: randomWord.valid.length >= 10 ? 26 : 36,
          }}
        >
          {randomWord.valid}
        </Flex>

        <Flex
          justify="center"
          data-testid="AccentsTrainerWords__invalid"
          key={randomWord.invalid}
          onClick={() => wordOnFail(storeWords, isErrorWork, randomWord.id)}
          className={styles.AccentsTrainerWords__word}
          width={tabletMediaQueryWidth.matches ? '100' : '50'}
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
        </Flex>
      </Flex>
    );
  },
);

AccentsTrainerWords.displayName = 'AccentsTrainerWords';

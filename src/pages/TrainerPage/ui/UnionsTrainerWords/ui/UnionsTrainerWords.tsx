import { memo, useContext } from 'react';
import { UnionsTrainerWordsProps } from '../model/types';
import { Flex } from '@/shared/lib/Stack';
import { tabletMediaQueryWidth } from '@/shared/const/global';
import { TrainerWord } from '@/shared/ui/TrainerWord';
import { unionTypes } from '../../../model/static/wordsForUnionsTests';
import { TrainerPageContext } from '../../../model/context/TrainerPageContext';
import * as styles from './UnionsTrainerWords.module.scss';
import { useWords } from '../../../model/selectors/getTrainerWords/getTrainerWords';

export const UnionsTrainerWords: React.FC<UnionsTrainerWordsProps> = memo(
  ({
    randomWord,
    wordOnSuccess,
    wordOnFail,
    storeWords,
  }): React.JSX.Element => {
    // Инициализация данных и контекста
<<<<<<< HEAD
    const storeWords = useWords();
=======
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)
    const { isIncorrect, isErrorWork } = useContext(TrainerPageContext);

    return (
      <Flex width="100" direction="column" gap="10" justify="center">
        <span
          className={styles.UnionsTrainerWords__word}
          data-testid="UnionsTrainerWords__word"
        >
          {randomWord.word}
        </span>

        <Flex
          justify="center"
          direction={tabletMediaQueryWidth.matches ? 'column' : 'row'}
          width="100"
        >
          {unionTypes.map((unionType, index) => (
            <TrainerWord
              dataTestId={`UnionsTrainerWords__${unionType}`}
              onClick={
                unionType === randomWord.unionType
                  ? () => wordOnSuccess(storeWords, isErrorWork, randomWord.id)
                  : () => wordOnFail(storeWords, isErrorWork, randomWord.id)
              }
              type={
                isIncorrect && unionType !== randomWord.unionType
                  ? 'invalid'
                  : 'default'
              }
              key={unionType}
              style={
                index === 0
                  ? {
                      borderRightWidth: tabletMediaQueryWidth.matches ? 3 : 0,

                      borderBottomWidth: tabletMediaQueryWidth.matches ? 0 : 3,
                    }
                  : {}
              }
            >
              {unionType}
            </TrainerWord>
          ))}
        </Flex>
      </Flex>
    );
  },
);

UnionsTrainerWords.displayName = 'UnionsTrainerWords';

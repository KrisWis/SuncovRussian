import { memo, useContext } from 'react';
import { Flex } from '@/shared/lib/Stack';
import { tabletMediaQueryWidth } from '@/shared/const/global';
import { TrainerWord } from '@/shared/ui/TrainerWord';
import { TrainerPageContext } from '../../model/context/TrainerPageContext';
import * as styles from './TrainerUnionsWords.module.scss';
import { useWords } from '../../model/selectors/getTrainerWords/getTrainerWords';
import {
  wordActionsFunctionType,
  wordActionsFunctionTypeWithElemForClick,
} from '../../lib/hooks/useWordActions';
import { UnionsWordsInterface, unionTypes } from '../../model/types/unions';

interface TrainerUnionsWordsProps {
  randomWord: UnionsWordsInterface;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionTypeWithElemForClick;
}

export const TrainerUnionsWords: React.FC<TrainerUnionsWordsProps> = memo(
  ({ randomWord, wordOnSuccess, wordOnFail }): React.JSX.Element => {
    // Инициализация данных и контекста
    const storeWords = useWords();
    const { isIncorrect, isErrorWork } = useContext(TrainerPageContext);

    return (
      <Flex width="100" direction="column" gap="10" justify="center">
        <span
          className={styles.TrainerUnionsWords__word}
          data-testid="TrainerUnionsWords__word"
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
              dataTestId={`TrainerUnionsWords__${unionType}`}
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

TrainerUnionsWords.displayName = 'TrainerUnionsWords';

import { Flex } from '@/shared/lib/Stack';
import { Fragment, memo, useContext } from 'react';
import { tabletMediaQueryWidth } from '@/shared/const/global';
import { useWords } from '../../model/selectors/getTrainerWords/getTrainerWords';
import { TrainerPageContext } from '../../model/context/TrainerPageContext';
import { TrainerWord } from '@/shared/ui/TrainerWord';
import { PrimaryWordsInterface } from '../../model/types/types';
import { wordActionsFunctionType } from '../../lib/hooks/useWordActions';

interface TrainerPrimaryWordsProps {
  randomWord: PrimaryWordsInterface;
  randomWordsIsReverse: boolean;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionType;
}

export const TrainerPrimaryWords: React.FC<TrainerPrimaryWordsProps> = memo(
  ({
    randomWord,
    randomWordsIsReverse,
    wordOnFail,
    wordOnSuccess,
  }): React.JSX.Element => {
    // Инициализация данных и контекста
    const storeWords = useWords();
    const { isIncorrect, isErrorWork } = useContext(TrainerPageContext);

    // Функция для показа слова
    const printWord = (word: string): React.ReactNode => {
      return (
        <>
          {randomWord.differenceIndexes ? (
            <Flex>
              {word.split('').map((letter, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Fragment key={word + letter + index}>
                  {letter === ' ' ? (
                    <span style={{ width: 7 }}></span>
                  ) : (
                    <span
                      // eslint-disable-next-line react/no-array-index-key
                      key={word + letter + index}
                      style={{
                        fontWeight:
                          randomWord.differenceIndexes &&
                          randomWord.differenceIndexes.includes(index + 1)
                            ? 'bold'
                            : 'normal',
                      }}
                    >
                      {letter}
                    </span>
                  )}
                </Fragment>
              ))}
            </Flex>
          ) : (
            word
          )}
        </>
      );
    };

    return (
      <>
        {randomWord.valid && (
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
              dataTestId="TrainerPrimaryWords__valid"
              onClick={() =>
                wordOnSuccess(storeWords, isErrorWork, randomWord.id)
              }
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

                fontSize: randomWord.valid.length >= 10 ? 20 : 36,
              }}
            >
              {printWord(randomWord.valid)}
            </TrainerWord>

            <TrainerWord
              dataTestId="TrainerPrimaryWords__invalid"
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

                fontSize: randomWord.valid.length >= 10 ? 20 : 36,
              }}
            >
              {printWord(randomWord.invalid)}
            </TrainerWord>
          </Flex>
        )}
      </>
    );
  },
);

TrainerPrimaryWords.displayName = 'TrainerPrimaryWords';

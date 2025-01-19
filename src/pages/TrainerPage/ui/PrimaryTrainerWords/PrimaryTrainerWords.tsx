import { Flex } from '@/shared/lib/Stack';
import { memo, useContext } from 'react';
import { tabletMediaQueryWidth } from '@/shared/const/global';
import { useWords } from '../../model/selectors/getTrainerWords/getTrainerWords';
import { TrainerPageContext } from '../../model/context/TrainerPageContext';
import { TrainerWord } from '@/shared/ui/TrainerWord';
import { PrimaryWordsInterface } from '../../model/types/types';
import { wordActionsFunctionType } from '../../lib/hooks/useWordActions';
import { DictionaryWordsInterface } from '../../model/static/wordsForDictionaryTests';

interface PrimaryTrainerWordsProps {
  randomWord: PrimaryWordsInterface;
  randomWordsIsReverse: boolean;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionType;
}

export const PrimaryTrainerWords: React.FC<PrimaryTrainerWordsProps> = memo(
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
          {randomWord.trainerType === 'cловарные слова' ? (
            <Flex>
              {word.split('').map((letter, index) => (
                <span
                  key={index + letter}
                  style={{
                    fontWeight: (
                      randomWord as DictionaryWordsInterface
                    ).differenceIndexes.includes(index + 1)
                      ? 'bold'
                      : 'normal',
                  }}
                >
                  {letter}
                </span>
              ))}
            </Flex>
          ) : (
            word
          )}
        </>
      );
    };

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
          {printWord(randomWord.valid)}
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
          {printWord(randomWord.invalid)}
        </TrainerWord>
      </Flex>
    );
  },
);

PrimaryTrainerWords.displayName = 'PrimaryTrainerWords';

import { Flex } from '@/shared/lib/Stack';
import { TrainerProps, TrainerWordsInterface } from '../model/types/types';
import * as styles from './Trainer.module.scss';
import { memo, useCallback, useContext, useEffect, useState } from 'react';
import { DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';

import { TrainerReducer, useTrainerActions } from '../model/slice/TrainerSlice';
import { tabletMediaQueryWidth } from '@/shared/const/global';
import { TrainerProgressBar } from './TrainerProgressBar/ui/TrainerProgressBar';
import { AccentsTrainerWords } from './AccentsTrainerWords/ui/AccentsTrainerWords';
import { AccentsWordsInterface } from '../model/static/wordsForAccentsTests';
<<<<<<< HEAD
=======
import { UnionsTrainerWords } from './UnionsTrainerWords';
import { UnionsWordsInterface } from '../model/static/wordsForUnionsTests';
import { TrainerTotalResult } from './TrainerTotalResult';
import { Hint } from '@/shared/ui-kit/Hint';
>>>>>>> 3b93d38 (Fix header, add UI-Kit component -Hint, fix some other things.)

import { UnionsWordsInterface } from '../model/static/wordsForUnionsTests';

import { Hint } from '@/shared/ui-kit/Hint';
import { TrainerContext } from '../model/context/TrainerContext';
import { useWords } from '../model/selectors/getTrainerWords/getTrainerWords';
import { UnionsTrainerWords } from './UnionsTrainerWords/ui/UnionsTrainerWords';
import { StrictModeSwitcher } from './StrictModeSwitcher/ui/StrictModeSwitcher';
import { TrainerTotalResult } from './TrainerTotalResult/ui/TrainerTotalResult';
import { useRandomWord } from '../model/hooks/useRandomWord';
import { useWordActions } from '../model/hooks/useWordActions';

const TrainerInner: React.FC<TrainerProps> = memo(
  ({ words }): React.JSX.Element => {
    // Инициализация данных, хуков, контекста
    const { setWords } = useTrainerActions();

    const [randomWordId, setRandomWordId] = useState<number | null>(null);

    const [randomWordsIsReverse, setRandomWordsIsReverse] =
      useState<boolean>(false);

    const { randomWord, updateRandomWord } = useRandomWord(
      randomWordId,
      setRandomWordsIsReverse,
      setRandomWordId,
    );

    const { totalTime, setIsIncorrect, isIncorrect, isErrorWork } =
      useContext(TrainerContext);

    useEffect(() => {
      if (!randomWord) setRandomWordId(0);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [randomWordId]);

    // Появление плашки "Неверно"
    const { wordOnFail, wordOnSuccess, showNewWord, waitRepeatedClickInFail } =
      useWordActions(
        randomWordId,
        setRandomWordsIsReverse,
        setRandomWordId,
        setIsIncorrect,
      );

    // Инициализация слов
    const initializeWords = useCallback(() => {
      const wordsCopy = JSON.parse(JSON.stringify(words));

      for (const word of wordsCopy) {
        word.probability = 1;
        word.uncorrectTimes = 0;
        word.consecutivelyTimes = 0;
        word.inProgress = false;
      }

      const timeoutForReducerRender = setTimeout(() => {
        setWords(wordsCopy);
        clearTimeout(timeoutForReducerRender);
      }, 0);
    }, [setWords, words]);

    useEffect(() => {
      initializeWords();
    }, [initializeWords]);

    // Получение случайного слова
    const storeWords = useWords();

    useEffect(() => {
      if (storeWords.length && randomWordId === null) {
        updateRandomWord();
      }
    }, [randomWordId, storeWords, updateRandomWord]);

    // При нажатии на стрелочки, фокус падает на соответствующее слово
    useEffect(() => {
      const checkArrowsPress = (
        event: KeyboardEvent,
        words: TrainerWordsInterface[],
      ): void => {
        if (totalTime) return;

        if (waitRepeatedClickInFail && isIncorrect) {
          showNewWord(words, isErrorWork, randomWordId);
        }

        const wordElements = document.querySelectorAll('.TrainerWord');

        const clickElements = (NotReverseIndex: number): void => {
          if (words[0].trainerType === 'unions') {
            (wordElements[NotReverseIndex] as HTMLElement).click();
            return;
          }

          if (!randomWordsIsReverse)
            (wordElements[NotReverseIndex] as HTMLElement).click();
          else
            (
              wordElements[NotReverseIndex === 0 ? 1 : 0] as HTMLElement
            ).click();
        };

        if (!tabletMediaQueryWidth.matches) {
          if (event.key === 'ArrowLeft') {
            clickElements(0);
          } else if (event.key === 'ArrowRight') {
            clickElements(1);
          }
        } else {
          if (event.key === 'ArrowUp') {
            clickElements(0);
          } else if (event.key === 'ArrowDown') {
            clickElements(1);
          }
        }
      };

      document.onkeydown = (e) => checkArrowsPress(e, storeWords);

      return () => {
        document.onkeydown = null;
      };
    }, [
      isErrorWork,
      isIncorrect,
      randomWordId,
      randomWordsIsReverse,
      showNewWord,
      storeWords,
      totalTime,
      waitRepeatedClickInFail,
      wordOnFail,
      wordOnSuccess,
    ]);

    return (
      <Flex
        maxHeight
        justify="between"
        direction="column"
        className={styles.Trainer}
        relative
        width="100"
      >
        {!totalTime ? (
          <>
<<<<<<< HEAD
            {words[0].trainerType === 'accents' && (
              <Hint
                text={`Выбирайте ответ, а система будет предлагать новые слова или
                    те, в которых были допущены ошибки. Когда вы перестанете их
                    допускать, шкала полностью заполнится. Заполните шкалу
                    несколько раз, сделайте работу над ошибками - и вы готовы.`}
                textClassName={styles.Trainer__hint}
              />
            )}

            {words[0].trainerType === 'unions' && (
              <Hint
                text={`В этом тренажере под подчинительным союзом понимается любое
                    средство подчинительной связи, т.е. союз, союзное слово,
                    частица`}
                textClassName={styles.Trainer__hint}
              />
            )}

=======
            <Hint textClassName={styles.Trainer__hint}>
              <>
                {words[0].trainerType === 'accents' && (
                  <p>
                    Выбирайте ответ, а система будет предлагать новые слова или
                    те, в которых были допущены ошибки. Когда вы перестанете их
                    допускать, шкала полностью заполнится. Заполните шкалу
                    несколько раз, сделайте работу над ошибками - и вы готовы.
                  </p>
                )}

                {words[0].trainerType === 'unions' && (
                  <p>
                    В этом тренажере под подчинительным союзом понимается любое
                    средство подчинительной связи, т.е. союз, союзное слово,
                    частица
                  </p>
                )}
              </>
            </Hint>
>>>>>>> 3b93d38 (Fix header, add UI-Kit component -Hint, fix some other things.)
            {isIncorrect && (
              <Flex
                className={styles.Trainer__uncorrect}
                data-testid="Trainer__uncorrect"
                justify="center"
              >
                Неверно
              </Flex>
            )}

            {randomWord && (
              <>
                {words[0].trainerType === 'accents' && (
                  <AccentsTrainerWords
                    randomWord={randomWord as AccentsWordsInterface}
                    randomWordsIsReverse={randomWordsIsReverse}
                    wordOnFail={wordOnFail}
                    wordOnSuccess={wordOnSuccess}
                  />
                )}

                {words[0].trainerType === 'unions' && (
                  <UnionsTrainerWords
                    randomWord={randomWord as UnionsWordsInterface}
                    wordOnSuccess={wordOnSuccess}
                    wordOnFail={wordOnFail}
                  />
                )}
              </>
            )}

            <TrainerProgressBar />
            <StrictModeSwitcher />
          </>
        ) : (
          <TrainerTotalResult
            updateRandomWord={updateRandomWord}
            initializeWords={initializeWords}
          />
        )}
      </Flex>
    );
  },
);

TrainerInner.displayName = 'TrainerInner';

export const Trainer: React.FC<TrainerProps> = memo(
  ({ words }): React.JSX.Element => {
    // Настройка контекста
    const [totalTime, setTotalTime] = useState<number>(0);
    const [isIncorrect, setIsIncorrect] = useState<boolean>(false);
    const [isErrorWork, setIsErrorWork] = useState<boolean>(false);

    return (
      <TrainerContext.Provider
        value={{
          totalTime,
          setTotalTime,
          isIncorrect,
          setIsIncorrect,
          isErrorWork,
          setIsErrorWork,
        }}
      >
        <DynamicModuleLoader
          removeAfterUnmount={false}
          reducers={{ Trainer: TrainerReducer }}
        >
          <TrainerInner words={words} />
        </DynamicModuleLoader>
      </TrainerContext.Provider>
    );
  },
);

Trainer.displayName = 'Trainer';

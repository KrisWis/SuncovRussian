import { Flex } from '@/shared/lib/Stack';
import { AccentsWordsProps } from '../model/types/types';
import * as styles from './AccentsWords.module.scss';
import {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';
import {
  StrictModeSwitcher,
  AccentsProgressBar,
  AccentsWordsContext,
  AccentsWordsReducer,
  useWords,
} from '..';

import { useAccentsWordsActions } from '../model/slice/AccentsWordsSlice';
import { tabletMediaQueryWidth } from '@/shared/const/global';
import { useRandomWord, useWordActions } from '../model/hooks';
import { AccentsWordsInterface } from '@/shared/assets/static/accentsWords';

// TODO: починить когда-нибудь ui тесты

const AccentsWordsInner: React.FC<AccentsWordsProps> = memo(
  ({ words }): React.JSX.Element => {
    // Инициализация данных и хуков
    const { setWords } = useAccentsWordsActions();

    const [randomWordId, setRandomWordId] = useState<number | null>(null);

    const [randomWordsIsReverse, setRandomWordsIsReverse] =
      useState<boolean>(false);

    const { randomWord, updateRandomWord } = useRandomWord(
      randomWordId,
      setRandomWordsIsReverse,
      setRandomWordId,
    );

    const {
      wordOnFail,
      wordOnSuccess,
      showNewWord,
      isIncorrect,
      waitRepeatedClickInFail,
    } = useWordActions(randomWordId, setRandomWordsIsReverse, setRandomWordId);

    useEffect(() => {
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

    // Получение случайного слова
    const storeWords = useWords();

    useEffect(() => {
      if (storeWords.length && randomWordId === null) {
        updateRandomWord();
      }
    }, [randomWordId, storeWords, updateRandomWord]);

    // Отображение тотального времени
    const { totalTime, setTotalTime } = useContext(AccentsWordsContext);

    // Отображение неправильных ответов
    const wordsWithUncorrectTimes = useMemo(
      () =>
        storeWords
          .filter((word) => word.uncorrectTimes! > 0)
          .sort((a, b) => b.uncorrectTimes! - a.uncorrectTimes!),
      [storeWords],
    );

    // Переход ко второму раунду
    const [isErrorWork, setIsErrorWork] = useState<boolean>(false);

    const startErrorWork = useCallback(() => {
      setIsErrorWork(true);

      const UpdatedWordsWithUncorrectTimes = wordsWithUncorrectTimes.map(
        (word) => ({
          ...word,
          probability: 1,
          uncorrectTimes: 0,
          consecutivelyTimes: 0,
          inProgress: false,
        }),
      );

      setWords(UpdatedWordsWithUncorrectTimes);
      setTotalTime(0);

      updateRandomWord(UpdatedWordsWithUncorrectTimes);
    }, [setTotalTime, setWords, updateRandomWord, wordsWithUncorrectTimes]);

    // Отображение подсказки
    const [isHintVisible, setIsHintVisible] = useState<boolean>(false);

    // Высчитывание данных для общего времени
    const totalTimeMinutes = useMemo(
      () => Math.round(totalTime / 60000),
      [totalTime],
    );

    const totalTimeSeconds = useMemo(
      () => Math.round((totalTime / 1000) % 60),
      [totalTime],
    );

    // При нажатии на стрелочки, фокус падает на соответствующее слово
    useEffect(() => {
      const checkArrowsPress = (
        event: KeyboardEvent,
        words: AccentsWordsInterface[],
      ): void => {
        if (totalTime) return;

        if (waitRepeatedClickInFail && isIncorrect) {
          showNewWord(words, isErrorWork, randomWordId);
        }

        if (!tabletMediaQueryWidth.matches) {
          if (event.key === 'ArrowLeft') {
            if (!randomWordsIsReverse) {
              wordOnSuccess(words, isErrorWork, randomWordId);
            } else {
              wordOnFail(words, isErrorWork, randomWordId);
            }
          } else if (event.key === 'ArrowRight') {
            if (randomWordsIsReverse) {
              wordOnSuccess(words, isErrorWork, randomWordId);
            } else {
              wordOnFail(words, isErrorWork, randomWordId);
            }
          }
        } else {
          if (event.key === 'ArrowUp') {
            if (!randomWordsIsReverse) {
              wordOnSuccess(words, isErrorWork, randomWordId);
            } else {
              wordOnFail(words, isErrorWork, randomWordId);
            }
          } else if (event.key === 'ArrowDown') {
            if (randomWordsIsReverse) {
              wordOnSuccess(words, isErrorWork, randomWordId);
            } else {
              wordOnFail(words, isErrorWork, randomWordId);
            }
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
        className={styles.AccentsWords}
        relative
        width="100"
      >
        {!totalTime ? (
          <>
            <Flex align="start" gap="10">
              <Flex
                onMouseEnter={() => setIsHintVisible(true)}
                onMouseLeave={() => setIsHintVisible(false)}
                className={styles.AccentsWords__hint}
                justify="center"
              >
                <span>?</span>
              </Flex>

              <p
                className={`${styles.AccentsWords__hint__text}
              ${isHintVisible && styles.AccentsWords__hint__text__active}`}
              >
                Выбирайте ответ, а система будет предлагать новые слова или те,
                в которых были допущены ошибки. Когда вы перестанете их
                допускать, шкала полностью заполнится. Заполните шкалу несколько
                раз и вы будете готовы к 4 заданию.
              </p>
            </Flex>
            {isIncorrect && (
              <Flex
                className={styles.AccentsWords__uncorrect}
                data-testid="AccentsWords__uncorrect"
                justify="center"
              >
                Неверно
              </Flex>
            )}
            {randomWord && (
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
                  data-testid="AccentsWords__valid"
                  key={randomWord.valid}
                  width="100"
                  onClick={() =>
                    wordOnSuccess(storeWords, isErrorWork, randomWordId)
                  }
                  className={styles.AccentsWords__word}
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
                  data-testid="AccentsWords__invalid"
                  key={randomWord.invalid}
                  onClick={() =>
                    wordOnFail(storeWords, isErrorWork, randomWordId)
                  }
                  className={styles.AccentsWords__word}
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
            )}

            <AccentsProgressBar />
            <StrictModeSwitcher />
          </>
        ) : (
          <Flex direction="column" width="100" maxHeight>
            <span className={styles.AccentsWords__totalTime}>
              Общее время:{' '}
              {`${totalTimeMinutes < 10 ? '0' : ''}${totalTimeMinutes}`}:
              {`${totalTimeSeconds < 10 ? '0' : ''}${totalTimeSeconds}`}
            </span>

            {wordsWithUncorrectTimes.length > 0 && (
              <Flex maxHeight justify="around" direction="column">
                <Flex direction="column">
                  <span className={styles.AccentsWords__totalTime}>
                    Ошибки:
                  </span>

                  <Flex direction="column" gap="3" width="100">
                    {wordsWithUncorrectTimes.map((word) => (
                      <span
                        style={{
                          fontSize:
                            24 -
                            (wordsWithUncorrectTimes.length / 2 >= 21
                              ? 21
                              : wordsWithUncorrectTimes.length / 2),
                        }}
                        className={styles.AccentsWords__wordWithError}
                        key={word.id}
                      >
                        {word.valid} - {word.uncorrectTimes}{' '}
                        {[2, 3, 4].includes(word.uncorrectTimes!)
                          ? 'раза'
                          : 'раз'}
                      </span>
                    ))}
                  </Flex>
                </Flex>

                {!isErrorWork && (
                  <button
                    className={styles.AccentsWords__errorWork}
                    onClick={startErrorWork}
                    type="button"
                  >
                    Работа над ошибками
                  </button>
                )}
              </Flex>
            )}
          </Flex>
        )}
      </Flex>
    );
  },
);

AccentsWordsInner.displayName = 'AccentsWordsInner';

export const AccentsWords: React.FC<AccentsWordsProps> = memo(
  ({ words }): React.JSX.Element => {
    // Настройка контекста
    const [totalTime, setTotalTime] = useState<number>(0);

    return (
      <AccentsWordsContext.Provider
        value={{
          totalTime: totalTime,
          setTotalTime: setTotalTime,
        }}
      >
        <DynamicModuleLoader
          removeAfterUnmount={false}
          reducers={{ AccentsWordsReducer }}
        >
          <AccentsWordsInner words={words} />
        </DynamicModuleLoader>
      </AccentsWordsContext.Provider>
    );
  },
);

AccentsWords.displayName = 'AccentsWords';

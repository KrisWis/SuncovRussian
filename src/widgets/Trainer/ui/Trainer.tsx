import { Flex } from '@/shared/lib/Stack';
import { TrainerProps, TrainerWordsInterface } from '../model/types/types';
import * as styles from './Trainer.module.scss';
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
  TrainerContext,
  TrainerReducer,
  useWords,
} from '..';

import { useTrainerActions } from '../model/slice/TrainerSlice';
import { tabletMediaQueryWidth } from '@/shared/const/global';
import { useRandomWord, useWordActions } from '../model/hooks';
import { TrainerProgressBar } from './TrainerProgressBar/ui/TrainerProgressBar';
import { AccentsTrainerWords } from './AccentsTrainerWords/ui/AccentsTrainerWords';

// TODO: починить когда-нибудь ui тесты

const TrainerInner: React.FC<TrainerProps> = memo(
  ({ words }): React.JSX.Element => {
    // Инициализация данных и хуков
    const { setWords } = useTrainerActions();

    const [randomWordId, setRandomWordId] = useState<number | null>(null);

    const [randomWordsIsReverse, setRandomWordsIsReverse] =
      useState<boolean>(false);

    const { randomWord, updateRandomWord } = useRandomWord(
      randomWordId,
      setRandomWordsIsReverse,
      setRandomWordId,
    );

    // Появление плашки "Неверно"
    const [isIncorrect, setIsIncorrect] = useState<boolean>(false);

    const { wordOnFail, wordOnSuccess, showNewWord, waitRepeatedClickInFail } =
      useWordActions(
        randomWordId,
        setRandomWordsIsReverse,
        setRandomWordId,
        setIsIncorrect,
      );

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
    const { totalTime, setTotalTime } = useContext(TrainerContext);

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
        words: TrainerWordsInterface[],
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
        className={styles.Trainer}
        relative
        width="100"
      >
        {!totalTime ? (
          <>
            <Flex align="start" gap="10">
              <Flex
                onMouseEnter={() => setIsHintVisible(true)}
                onMouseLeave={() => setIsHintVisible(false)}
                className={styles.Trainer__hint}
                justify="center"
              >
                <span>?</span>
              </Flex>

              <p
                className={`${styles.Trainer__hint__text}
              ${isHintVisible && styles.Trainer__hint__text__active}`}
              >
                Выбирайте ответ, а система будет предлагать новые слова или те,
                в которых были допущены ошибки. Когда вы перестанете их
                допускать, шкала полностью заполнится. Заполните шкалу несколько
                раз и вы будете готовы к 4 заданию.
              </p>
            </Flex>
            {isIncorrect && (
              <Flex
                className={styles.Trainer__uncorrect}
                data-testid="Trainer__uncorrect"
                justify="center"
              >
                Неверно
              </Flex>
            )}
            {randomWord && words[0].type === 'accents' && (
              <AccentsTrainerWords
                randomWord={randomWord}
                setRandomWordId={setRandomWordId}
                setRandomWordsIsReverse={setRandomWordsIsReverse}
                randomWordsIsReverse={randomWordsIsReverse}
                isErrorWork={isErrorWork}
                setIsIncorrect={setIsIncorrect}
              />
            )}

            <TrainerProgressBar />
            <StrictModeSwitcher />
          </>
        ) : (
          <Flex direction="column" width="100" maxHeight>
            <span className={styles.Trainer__totalTime}>
              Общее время:{' '}
              {`${totalTimeMinutes < 10 ? '0' : ''}${totalTimeMinutes}`}:
              {`${totalTimeSeconds < 10 ? '0' : ''}${totalTimeSeconds}`}
            </span>

            {wordsWithUncorrectTimes.length > 0 && (
              <Flex maxHeight justify="around" direction="column">
                <Flex direction="column">
                  <span className={styles.Trainer__totalTime}>Ошибки:</span>

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
                        className={styles.Trainer__wordWithError}
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
                    className={styles.Trainer__errorWork}
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

TrainerInner.displayName = 'TrainerInner';

export const Trainer: React.FC<TrainerProps> = memo(
  ({ words }): React.JSX.Element => {
    // Настройка контекста
    const [totalTime, setTotalTime] = useState<number>(0);

    return (
      <TrainerContext.Provider
        value={{
          totalTime: totalTime,
          setTotalTime: setTotalTime,
        }}
      >
        <DynamicModuleLoader
          removeAfterUnmount={false}
          reducers={{ TrainerReducer }}
        >
          <TrainerInner words={words} />
        </DynamicModuleLoader>
      </TrainerContext.Provider>
    );
  },
);

Trainer.displayName = 'Trainer';

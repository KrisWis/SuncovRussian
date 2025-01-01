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

import { AccentsWordsInterface } from '@/shared/assets/static/accentsWords';
import { useAccentsWordsActions } from '../model/slice/AccentsWordsSlice';
import { tabletMediaQueryWidth } from '@/shared/const/global';

// TODO: починить когда-нибудь ui тесты

const AccentsWordsInner: React.FC<AccentsWordsProps> = memo(
  ({ words }): React.JSX.Element => {
    const {
      setWords,
      changeWordProbability,
      changeWordUncorrectTimes,
      changeWordConsecutivelyTimes,
      changeWordInProgressStatus,
    } = useAccentsWordsActions();
    const [randomWordId, setRandomWordId] = useState<number | null>(null);

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

    const updateRandomWord = useCallback(
      (words?: AccentsWordsInterface[]) => {
        let storeWordsCopy;

        if (words) {
          storeWordsCopy = words.filter((word) => word.id !== randomWordId);
        } else {
          storeWordsCopy = storeWords.filter(
            (word) => word.id !== randomWordId,
          );
        }

        const randomIsReverse = [true, false][Math.floor(Math.random() * 2)];

        setRandomWordsIsReverse(randomIsReverse);

        if (storeWordsCopy.length === 0) return;

        const totalChances = storeWordsCopy.reduce(
          (acc, c) => acc + (c.probability || 1),
          0,
        );
        const rnd = totalChances * Math.random();

        for (let i = 0, sum = 0; ; i++) {
          sum += storeWordsCopy[i].probability || 1;

          if (sum > rnd) {
            setRandomWordId(storeWordsCopy[i].id);
            return;
          }
        }
      },
      [randomWordId, storeWords],
    );

    useEffect(() => {
      if (storeWords.length && randomWordId === null) {
        updateRandomWord();
      }
    }, [randomWordId, storeWords, updateRandomWord]);

    // Появление плашки "Неверно"
    const [isIncorrect, setIsIncorrect] = useState<boolean>(false);

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

    // Изменение вероятности при неправильном ответе
    const [waitRepeatedClickInFail, setWaitRepeatedClickInFail] =
      useState<boolean>(false);

    const wordOnFail = useCallback(
      (words: AccentsWordsInterface[]) => {
        if (waitRepeatedClickInFail) return;

        if (process.env.NODE_ENV !== 'test') {
          const audio = new Audio('sounds/FailSound.mp3');
          audio.play();
        }

        setIsIncorrect(true);

        setWaitRepeatedClickInFail(true);

        const root =
          (document.querySelector('#root') as HTMLElement) ||
          (document.querySelector('body') as HTMLElement);

        const showNewWord = () => {
          setWaitRepeatedClickInFail(false);
          setIsIncorrect(false);

          const currentRandomWord = words.find(
            (word) => word.id === randomWordId,
          );

          if (!isErrorWork) {
            changeWordProbability({
              probability: 0.2,
              id: currentRandomWord!.id,
            });

            changeWordUncorrectTimes({
              id: currentRandomWord!.id,
              uncorrectTimes: currentRandomWord!.uncorrectTimes! + 1,
            });
          }

          changeWordConsecutivelyTimes({
            id: currentRandomWord!.id,
            consecutivelyTimes: 0,
          });

          changeWordInProgressStatus({
            id: currentRandomWord!.id,
            inProgress: false,
          });

          updateRandomWord();

          if (process.env.NODE_ENV !== 'test') {
            root.style.pointerEvents = 'all';
          }

          document.removeEventListener('click', showNewWord);
        };

        const eventTimeout = setTimeout(() => {
          if (process.env.NODE_ENV !== 'test') {
            root.style.pointerEvents = 'none';
          }

          document.addEventListener('click', showNewWord);
          clearTimeout(eventTimeout);
        }, 0);
      },
      [
        changeWordConsecutivelyTimes,
        changeWordInProgressStatus,
        changeWordProbability,
        changeWordUncorrectTimes,
        isErrorWork,
        randomWordId,
        updateRandomWord,
        waitRepeatedClickInFail,
      ],
    );

    // Изменение вероятности при правильном ответе
    const wordOnSuccess = useCallback(
      (words: AccentsWordsInterface[]) => {
        if (waitRepeatedClickInFail) return;

        const currentRandomWord = words.find(
          (word) => word.id === randomWordId,
        );

        if (isErrorWork) {
          const futureConsecutivelyTimes =
            currentRandomWord!.consecutivelyTimes! + 1;

          changeWordConsecutivelyTimes({
            id: currentRandomWord!.id,
            consecutivelyTimes: futureConsecutivelyTimes,
          });

          if (futureConsecutivelyTimes === 3) {
            changeWordInProgressStatus({
              id: currentRandomWord!.id,
              inProgress: true,
            });

            changeWordProbability({
              probability: 0.05,
              id: currentRandomWord!.id,
            });
          }
        } else {
          if (currentRandomWord!.probability === 0.2) {
            changeWordProbability({
              id: currentRandomWord!.id,
              probability: 0.1,
            });
          } else if (currentRandomWord!.probability === 0.1) {
            changeWordProbability({
              id: currentRandomWord!.id,
              probability: 0.05,
            });
          } else {
            changeWordProbability({
              id: currentRandomWord!.id,
              probability: 0.01,
            });

            changeWordInProgressStatus({
              id: currentRandomWord!.id,
              inProgress: true,
            });
          }
        }

        updateRandomWord();
      },
      [
        changeWordConsecutivelyTimes,
        changeWordInProgressStatus,
        changeWordProbability,
        isErrorWork,
        randomWordId,
        updateRandomWord,
        waitRepeatedClickInFail,
      ],
    );

    // Отображение слов в случайном порядке
    const [randomWordsIsReverse, setRandomWordsIsReverse] =
      useState<boolean>(false);

    const randomWord = useMemo(
      () => storeWords.find((word) => word.id === randomWordId),
      [randomWordId, storeWords],
    );

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
                  onClick={() => wordOnSuccess(storeWords)}
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
                  onClick={() => wordOnFail(storeWords)}
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
                <Flex direction="column" gap="15">
                  <span className={styles.AccentsWords__totalTime}>
                    Ошибки:
                  </span>

                  <Flex direction="column" gap="3" width="100">
                    {wordsWithUncorrectTimes.map((word) => (
                      <span
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
        <StrictModeSwitcher />
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

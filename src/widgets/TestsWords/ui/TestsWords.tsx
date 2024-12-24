import { Flex } from '@/shared/lib/Stack';
import { TestsWordsProps } from '../model/types/types';
import styles from './TestsWords.module.scss';
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
  TestsProgressBar,
  TestsWordsContext,
  TestsWordsReducer,
  useWords,
} from '..';
import { useTestsWordsActions } from '../model/slice/slice';
import { shuffleArray } from '@/shared/utils/shuffleArray/shuffleArray';

// TODO: написать тесты
// TODO: подумать по поводу энтити адаптер

const TestsWordsInner: React.FC<TestsWordsProps> = memo(
  ({ words }): React.JSX.Element => {
    const {
      setWords,
      changeWordProbability,
      changeWordUncorrectTimes,
      changeWordConsecutivelyTimes,
      changeWordInProgressStatus,
    } = useTestsWordsActions();
    const [randomWordId, setRandomWordId] = useState<number | null>(null);

    useEffect(() => {
      // Инициализация слов
      for (const word of words) {
        word.probability = 1;
        word.uncorrectTimes = 0;
        word.consecutivelyTimes = 0;
        word.inProgress = false;
      }

      const timeoutForReducerRender = setTimeout(() => {
        setWords(words);
        clearTimeout(timeoutForReducerRender);
      }, 0);
    }, [setWords, words]);

    // Получение случайного слова
    const storeWords = useWords();

    const updateRandomWord = useCallback(() => {
      const storeWordsCopy = storeWords.filter(
        (word) => word.id !== randomWordId,
      );

      if (storeWordsCopy.length === 0) return;

      const totalChances = storeWordsCopy.reduce(
        (acc, c) => acc + c.probability!,
        0,
      );
      const rnd = totalChances * Math.random();

      for (let i = 0, sum = 0; ; i++) {
        sum += storeWordsCopy[i].probability!;

        if (sum > rnd) {
          setRandomWordId(storeWordsCopy[i].id);
          return;
        }
      }
    }, [randomWordId, storeWords]);

    useEffect(() => {
      if (storeWords.length && randomWordId === null) {
        updateRandomWord();
      }
    }, [randomWordId, storeWords, updateRandomWord]);

    // Появление плашки "Неверно"
    const [isIncorrect, setIsIncorrect] = useState<boolean>(false);

    // Отображение тотального времени
    const { totalTime, setTotalTime } = useContext(TestsWordsContext);

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

      updateRandomWord();
    }, [setTotalTime, setWords, updateRandomWord, wordsWithUncorrectTimes]);

    // Изменение вероятности при неправильном ответе
    const [waitRepeatedClickInFail, setWaitRepeatedClickInFail] =
      useState<boolean>(false);

    const wordOnFail = useCallback(() => {
      if (waitRepeatedClickInFail) return;

      const audio = new Audio('sounds/FailSound.mp3');
      audio.play();

      setIsIncorrect(true);

      setWaitRepeatedClickInFail(true);

      const showNewWord = () => {
        setWaitRepeatedClickInFail(false);
        setIsIncorrect(false);

        const currentRandomWord = storeWords.find(
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

        document.querySelector('body')!.style.pointerEvents = 'all';
        document.removeEventListener('click', showNewWord);
      };

      const eventTimeout = setTimeout(() => {
        document.querySelector('body')!.style.pointerEvents = 'none';
        document.addEventListener('click', showNewWord);
        clearTimeout(eventTimeout);
      }, 0);
    }, [
      changeWordConsecutivelyTimes,
      changeWordInProgressStatus,
      changeWordProbability,
      changeWordUncorrectTimes,
      isErrorWork,
      randomWordId,
      storeWords,
      updateRandomWord,
      waitRepeatedClickInFail,
    ]);

    // Изменение вероятности при правильном ответе
    const wordOnSuccess = useCallback(() => {
      if (waitRepeatedClickInFail) return;

      const currentRandomWord = storeWords.find(
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
    }, [
      changeWordConsecutivelyTimes,
      changeWordInProgressStatus,
      changeWordProbability,
      isErrorWork,
      randomWordId,
      storeWords,
      updateRandomWord,
      waitRepeatedClickInFail,
    ]);

    // Отображение слов в случайном порядке
    const [randomWords, setRandomWords] = useState<React.JSX.Element[]>([]);

    useEffect(() => {
      const randomWord = storeWords.find((word) => word.id === randomWordId);

      if (!randomWord) return;

      const randomWords = shuffleArray([
        <Flex
          key={randomWord.valid}
          onClick={wordOnSuccess}
          className={styles.TestsWords__word}
          justify="center"
        >
          {randomWord.valid}
        </Flex>,

        <Flex
          key={randomWord.invalid}
          onClick={wordOnFail}
          className={styles.TestsWords__word}
          justify="center"
        >
          {randomWord.invalid}
        </Flex>,
      ]);

      setRandomWords(randomWords);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [randomWordId]);

    return (
      <>
        {!totalTime ? (
          <>
            {isIncorrect && <Flex justify="center">Неверно</Flex>}
            {randomWords && (
              <Flex justify="center" width="100">
                {randomWords.map((word) => word)}
              </Flex>
            )}

            <TestsProgressBar />
            <StrictModeSwitcher />
          </>
        ) : (
          <Flex direction="column" width="100" maxHeight>
            <span>
              Тотальное время: {Math.round(totalTime / 60000)} минут и{' '}
              {Math.round((totalTime / 1000) % 60)} секунд
            </span>

            {wordsWithUncorrectTimes.length > 0 && (
              <>
                <span>Неправильные слова:</span>

                <Flex direction="column" width="100">
                  {wordsWithUncorrectTimes.map((word) => (
                    <span key={word.id}>
                      {word.valid} - {word.uncorrectTimes} раз
                    </span>
                  ))}
                </Flex>

                {!isErrorWork && (
                  <button onClick={startErrorWork} type="button">
                    Работа над ошибками
                  </button>
                )}
              </>
            )}
          </Flex>
        )}
      </>
    );
  },
);

TestsWordsInner.displayName = 'TestsWordsInner';

export const TestsWords: React.FC<TestsWordsProps> = memo(
  ({ words }): React.JSX.Element => {
    // Настройка контекста
    const [totalTime, setTotalTime] = useState<number>(0);

    return (
      <TestsWordsContext.Provider
        value={{
          totalTime: totalTime,
          setTotalTime: setTotalTime,
        }}
      >
        <DynamicModuleLoader
          removeAfterUnmount={false}
          reducers={{ TestsWordsReducer }}
        >
          <TestsWordsInner words={words} />
        </DynamicModuleLoader>
      </TestsWordsContext.Provider>
    );
  },
);

TestsWords.displayName = 'TestsWords';

import { Flex } from '@/shared/lib/Stack';
import { TestsWordsProps } from '../model/types/types';
import styles from './TestsWords.module.scss';
import {
  Fragment,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';
import { TestsWordsContext, TestsWordsReducer, useWords } from '..';
import { useTestsWordsActions } from '../model/slice/slice';
import { shuffleArray } from '@/shared/utils/shuffleArray/shuffleArray';

// TODO: написать тесты

const TestsWordsInner: React.FC<TestsWordsProps> = memo(
  ({ words }): React.JSX.Element => {
    const { setWords, changeWordProbability, changeWordUncorrectTimes } =
      useTestsWordsActions();
    const [randomWordId, setRandomWordId] = useState<number | null>(null);

    useEffect(() => {
      // Инициализация слов
      for (const word of words) {
        word.probability = 1;
        word.uncorrectTimes = 0;
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

    // Изменение вероятности при правильном ответе
    const changeWordProbabilityInSuccess = useCallback(() => {
      const randomWord = storeWords.find((word) => word.id === randomWordId);

      if (randomWord!.probability === 0.2) {
        changeWordProbability({ id: randomWord!.id, probability: 0.1 });
      } else if (randomWord!.probability === 0.1) {
        changeWordProbability({ id: randomWord!.id, probability: 0.05 });
      } else {
        changeWordProbability({ id: randomWord!.id, probability: 0.01 });
      }

      updateRandomWord();
    }, [changeWordProbability, randomWordId, storeWords, updateRandomWord]);

    // Изменение вероятности при неправильном ответе
    const changeWordProbabilityInFail = useCallback(() => {
      setIsIncorrect(true);

      const timeoutForIncorrect = setTimeout(() => {
        setIsIncorrect(false);
        clearTimeout(timeoutForIncorrect);
      }, 1000);

      const randomWord = storeWords.find((word) => word.id === randomWordId);
      changeWordProbability({ probability: 0.2, id: randomWord!.id });
      changeWordUncorrectTimes({
        id: randomWord!.id,
        uncorrectTimes: randomWord!.uncorrectTimes! + 1,
      });

      updateRandomWord();
    }, [
      changeWordProbability,
      changeWordUncorrectTimes,
      randomWordId,
      storeWords,
      updateRandomWord,
    ]);

    // Отображение слов в случайном порядке
    const randomWords = useMemo(() => {
      const randomWord = storeWords.find((word) => word.id === randomWordId);

      if (!randomWord) return [];

      return shuffleArray([
        <Flex
          key={randomWord.valid}
          onClick={changeWordProbabilityInSuccess}
          className={styles.TestsWords__word}
          justify="center"
        >
          {randomWord.valid}
        </Flex>,

        <Flex
          key={randomWord.invalid}
          onClick={changeWordProbabilityInFail}
          className={styles.TestsWords__word}
          justify="center"
        >
          {randomWord.invalid}
        </Flex>,
      ]);
    }, [
      changeWordProbabilityInFail,
      changeWordProbabilityInSuccess,
      randomWordId,
      storeWords,
    ]);

    // Появление плашки "Неверно"
    const [isIncorrect, setIsIncorrect] = useState<boolean>(false);

    // Отображение тотального времени
    const { totalTime } = useContext(TestsWordsContext);

    // Отображение неправильных ответов
    const wordsWithUncorrectTimes = useMemo(
      () =>
        storeWords
          .filter((word) => word.uncorrectTimes! > 0)
          .sort((a, b) => b.uncorrectTimes! - a.uncorrectTimes!),
      [storeWords],
    );

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
          </>
        ) : (
          <Flex direction="column" width="100" maxHeight>
            <span>
              Тотальное время: {Math.round(totalTime / 60000)} минут и{' '}
              {Math.round(totalTime / 1000)} секунд
            </span>

            {wordsWithUncorrectTimes.length > 0 && (
              <span>Неправильные слова:</span>
            )}

            <Flex direction="column" width="100">
              {wordsWithUncorrectTimes.map((word) => (
                <span key={word.id}>
                  {word.valid} - {word.uncorrectTimes} раз
                </span>
              ))}
            </Flex>
          </Flex>
        )}
      </>
    );
  },
);

TestsWordsInner.displayName = 'TestsWordsInner';

export const TestsWords: React.FC<TestsWordsProps> = memo(
  ({ words }): React.JSX.Element => {
    return (
      <DynamicModuleLoader reducers={{ TestsWordsReducer }}>
        <TestsWordsInner words={words} />
      </DynamicModuleLoader>
    );
  },
);

TestsWords.displayName = 'TestsWords';

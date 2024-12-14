import { Flex } from '@/shared/lib/Stack';
import { TestsWordsProps } from '../model/types/types';
import styles from './TestsWords.module.scss';
import { memo, useEffect, useState } from 'react';
import { DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';
import { TestsWordsReducer } from '..';
import { useTestsWordsActions } from '../model/slice/slice';
import { TestsWordsInterface } from '@/shared/static/tests_words/types';

const TestsWordsInner: React.FC<TestsWordsProps> = memo(
  ({ words }): React.JSX.Element => {
    const { setWords } = useTestsWordsActions();
    const [randomWord, setRandomWord] = useState<TestsWordsInterface | null>(
      null,
    );

    useEffect(() => {
      // Инициализация слов
      for (const word of words) {
        word.probability = 1;
      }

      setWords(words);

      // Получение случайного слова
      let runningSum: number = 0;
      const randomValue = Math.random() * 100;
      for (let i = 0; i < words.length; i++) {
        runningSum += words[i].probability!;

        if (randomValue <= runningSum) {
          const choice = words[i];

          setRandomWord(choice);
          break;
        }
      }
    }, [setWords, words]);

    return (
      <>
        {randomWord && (
          <Flex justify="center" maxWidth>
            <Flex className={styles.TestsWords__word} justify="center">
              {randomWord.valid}
            </Flex>

            <Flex className={styles.TestsWords__word} justify="center">
              {randomWord.invalid}
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

import { Flex } from '@/shared/lib/Stack';
import { WordsButtonsTestType } from '../model/types';
import * as styles from './WordsButtonsTest.module.scss';
import { memo, useMemo } from 'react';

// TODO: написать тесты

export const WordsButtonsTest: React.FC<WordsButtonsTestType> = memo(
  ({ text }): React.JSX.Element => {
    // Разделяем текст на слова
    const textSplitByWords = useMemo(() => text.split(' '), [text]);

    return (
      <Flex className={styles.WordsButtonsTest} wrap>
        {textSplitByWords.map((word, index) => (
          <button
            className={styles.WordsButtonsTest__word}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            type="button"
          >
            {word}
          </button>
        ))}
      </Flex>
    );
  },
);

WordsButtonsTest.displayName = 'WordsButtonsTest';

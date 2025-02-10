import { Flex } from '@/shared/lib/Stack';
import { PartsOfSpeachItemType } from '../model/types/types';
import * as styles from './PartsOfSpeachItem.module.scss';
import { memo, useMemo } from 'react';

// TODO: написать тесты

export const PartsOfSpeachItem: React.FC<PartsOfSpeachItemType> = memo(
  ({ text }): React.JSX.Element => {
    // Разделяем текст на слова
    const textSplitByWords = useMemo(() => text.split(' '), [text]);

    return (
      <Flex className={styles.PartsOfSpeachItem} wrap>
        {textSplitByWords.map((word, index) => (
          <button
            className={styles.PartsOfSpeachItem__word}
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

PartsOfSpeachItem.displayName = 'PartsOfSpeachItem';

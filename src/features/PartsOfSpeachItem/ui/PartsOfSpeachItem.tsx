import { Flex } from '@/shared/lib/Stack';
import * as styles from './PartsOfSpeachItem.module.scss';
import { memo, useMemo, useState } from 'react';
import { wordOnClick } from '../lib/helpers/wordOnClick';
import { isWordCorrect } from '../lib/helpers/isWordCorrect';

// TODO: написать тесты

interface PartsOfSpeachItemProps {
  text: string;
  maxCorrectAnswersCount: number;
}

export const PartsOfSpeachItem: React.FC<PartsOfSpeachItemProps> = memo(
  ({ text, maxCorrectAnswersCount }): React.JSX.Element => {
    // Разделяем текст на слова
    const textSplitByWords = useMemo(() => text.split(' '), [text]);

    // Функционал выбора слова
    const [selectedWords, setSelectedWords] = useState<number[]>([]);

    return (
      <Flex
        gap="3"
        className={`${styles.PartsOfSpeachItem} 
      ${maxCorrectAnswersCount > 0 ? styles.PartsOfSpeachItem__finished : ''}`}
        wrap
      >
        {textSplitByWords.map((word, index) => {
          // Если слово правильное, то убираем вокруг него звездочки
          const wordIsCorrect = isWordCorrect(word);
          const modifiedWord = (
            wordIsCorrect ? word.replace(/\*/g, '') : word
          ).replace('&', ' ');

          // Переменная для определения того, что слово выбрано
          const wordIsSelected: boolean = selectedWords.includes(index);

          return (
            <button
              onClick={() =>
                wordOnClick(selectedWords, setSelectedWords, index)
              }
              className={`${styles.PartsOfSpeachItem__word} 
            ${wordIsSelected ? styles.PartsOfSpeachItem__word__selected : ''}`}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              type="button"
              data-selected={wordIsSelected}
              data-index={index}
              data-name="PartsOfSpeachItem__word"
            >
              {modifiedWord}
            </button>
          );
        })}
      </Flex>
    );
  },
);

PartsOfSpeachItem.displayName = 'PartsOfSpeachItem';

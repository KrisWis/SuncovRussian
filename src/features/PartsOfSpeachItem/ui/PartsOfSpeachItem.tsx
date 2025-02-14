import { Flex } from '@/shared/lib/Stack';
import * as styles from './PartsOfSpeachItem.module.scss';
import { Fragment, memo, useMemo } from 'react';
import { wordOnClick } from '../lib/helpers/wordOnClick';
import { isWordCorrect } from '../lib/helpers/isWordCorrect';
import {
  deletePunctiationMarks,
  PUNCTUATION_MARKS,
} from '@/shared/utils/deletePunctuationMarks';

interface PartsOfSpeachItemProps {
  text: string;
  maxCorrectAnswersCount: number;
  setSelectedWords: React.Dispatch<React.SetStateAction<number[]>>;
  selectedWords: number[];
}

export const PartsOfSpeachItem: React.FC<PartsOfSpeachItemProps> = memo(
  ({
    text,
    maxCorrectAnswersCount,
    setSelectedWords,
    selectedWords,
  }): React.JSX.Element => {
    // Разделяем текст на слова
    const textSplitByWords = useMemo(() => text.split(' '), [text]);

    return (
      <Flex
        gap="3"
        className={`${styles.PartsOfSpeachItem} 
      ${maxCorrectAnswersCount > 0 ? styles.PartsOfSpeachItem__finished : ''}`}
        wrap
      >
        {textSplitByWords.map((word, index) => {
          // Убираем знаки препинания из слова
          const wordWithoutPunctuationMarks: string =
            deletePunctiationMarks(word);

          // Если слово правильное, то убираем вокруг него звездочки
          const wordIsCorrect = isWordCorrect(wordWithoutPunctuationMarks);
          const modifiedWord = wordIsCorrect
            ? wordWithoutPunctuationMarks.replace(/\*/g, '')
            : wordWithoutPunctuationMarks;

          // Переменная для определения того, что слово выбрано
          const wordIsSelected: boolean = selectedWords.includes(index);

          return (
            <Flex
              key={
                // eslint-disable-next-line react/no-array-index-key
                index
              }
            >
              <button
                onClick={() =>
                  wordOnClick(selectedWords, setSelectedWords, index)
                }
                className={`${styles.PartsOfSpeachItem__word} 
            ${wordIsSelected ? styles.PartsOfSpeachItem__word__selected : ''}`}
                type="button"
                data-selected={wordIsSelected}
                data-index={index}
                data-name="PartsOfSpeachItem__word"
                data-testid="PartsOfSpeachItem__word"
              >
                {modifiedWord}
              </button>

              {PUNCTUATION_MARKS.map((mark) => (
                <Fragment key={mark}>
                  {word.includes(mark) && (
                    <span className={styles.PartsOfSpeachItem__punctuationMark}>
                      {mark}
                    </span>
                  )}
                </Fragment>
              ))}
            </Flex>
          );
        })}
      </Flex>
    );
  },
);

PartsOfSpeachItem.displayName = 'PartsOfSpeachItem';

import { Flex } from '@/shared/lib/Stack';
import * as styles from './Dictant.module.scss';
import { memo, useContext, useEffect, useMemo, useState } from 'react';
import { DictantContext } from '../model/context/DictantContext';
import { DictantFooter } from './DictantFooter/DictantFooter';
import { generateLetter } from '../lib/helpers/generateLetter';

interface DictantProps {
  text: string;
}

const splitSymbol: string = '*';

export const DictantInner: React.FC<DictantProps> = memo(
  ({ text }): React.JSX.Element => {
    // Разделяем текст на массив
    const splitTextByWords: string[] = useMemo(() => text.split(' '), [text]);

    const splitTextBySentences: string[] = useMemo(
      () => text.split('.').filter((sentence) => sentence.trim()),
      [text],
    );

    // Получение данных из контекста
    const { correctLetters, maxCorrectLetters, isMissed } =
      useContext(DictantContext);

    return (
      <Flex direction="column" gap="70" width="100">
        <Flex relative direction="column" gap="10" width="100">
          <Flex direction="column" width="80" className={styles.Dictant}>
            <Flex
              wrap
              gap={splitTextBySentences.length > 1 ? '15' : '5'}
              className={styles.Dictant__text}
            >
              {splitTextBySentences.length > 1 ? (
                <>
                  {splitTextBySentences.map((sentence, sentenceIndex) => {
                    const sentenceWords = sentence.trim().split(' ');

                    // Вычисляем смещение для текущего предложения
                    const previousSentencesLength =
                      splitTextBySentences.slice(0, sentenceIndex).join('. ')
                        .length + (sentenceIndex > 0 ? 2 : 0);

                    // Определяем, является ли первое слово темой
                    const firstWordIsTheme = /&(.+?)&/g.test(sentenceWords[0]);

                    return (
                      <Flex
                        gap="5"
                        width="100"
                        justify="center"
                        direction="column"
                        key={previousSentencesLength}
                      >
                        {firstWordIsTheme && (
                          <span className={styles.Dictant__sentenceTheme}>
                            {sentenceWords[0].replace(/&/g, '')}
                          </span>
                        )}

                        <Flex gap="5" wrap>
                          {sentenceWords.map((word, localWordIndex) => {
                            if (firstWordIsTheme && localWordIndex === 0)
                              return;

                            let currentPosition = 0;

                            for (
                              let i = 0;
                              i < splitTextBySentences.length;
                              i++
                            ) {
                              const currentSentence =
                                splitTextBySentences[i].trim();

                              if (i < sentenceIndex) {
                                currentPosition += currentSentence.length + 2; // +2 для учета '. '
                              } else if (i === sentenceIndex) {
                                break;
                              }
                            }

                            const globalLetterIndex =
                              text.split('').slice(0, currentPosition).length +
                              sentenceWords.slice(0, localWordIndex).join(' ')
                                .length +
                              (localWordIndex === 0 ? 2 : 3);

                            return generateLetter(
                              localWordIndex,
                              globalLetterIndex,
                              word,
                              splitSymbol,
                              maxCorrectLetters,
                              isMissed,
                              firstWordIsTheme,
                            );
                          })}
                        </Flex>
                      </Flex>
                    );
                  })}
                </>
              ) : (
                <>
                  {splitTextByWords.map((word, wordIndex) => {
                    const globalLetterIndex =
                      splitTextByWords.slice(0, wordIndex).join(' ').length +
                      (wordIndex > 0 ? 2 : 1);

                    return generateLetter(
                      wordIndex,
                      globalLetterIndex,
                      word,
                      splitSymbol,
                      maxCorrectLetters,
                      isMissed,
                      false,
                    );
                  })}
                </>
              )}
            </Flex>
          </Flex>

          {maxCorrectLetters > 0 && !isMissed && (
            <span className={styles.Dictant__total}>
              Итог: {correctLetters}/{maxCorrectLetters}
            </span>
          )}
        </Flex>

        <DictantFooter splitSymbol={splitSymbol} text={text} />
      </Flex>
    );
  },
);

DictantInner.displayName = 'DictantInner';

export const Dictant: React.FC<DictantProps> = memo(
  ({ text }): React.JSX.Element => {
    // Настройка контекста
    const [correctLetters, setCorrectLetters] = useState(0);
    const [maxCorrectLetters, setMaxCorrectLetters] = useState(0);
    const [isIncorrect, setIsIncorrect] = useState(false);
    const [isMissed, setIsMissed] = useState(false);

    // Инициализация начальных значений
    useEffect(() => {
      setMaxCorrectLetters(0);
      setCorrectLetters(0);
      setIsIncorrect(false);
      setIsMissed(false);
    }, [text]);

    return (
      <DictantContext.Provider
        value={{
          isMissed,
          setIsMissed,
          isIncorrect,
          setIsIncorrect,
          setCorrectLetters,
          setMaxCorrectLetters,
          correctLetters,
          maxCorrectLetters,
        }}
      >
        <DictantInner text={text} />
      </DictantContext.Provider>
    );
  },
);

Dictant.displayName = 'Dictant';

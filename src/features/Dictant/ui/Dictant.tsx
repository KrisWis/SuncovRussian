import { Flex } from '@/shared/lib/Stack';
import * as styles from './Dictant.module.scss';
import { memo, useContext, useMemo } from 'react';
import { renderLetter } from '../lib/helpers/renderLetter';
import { MissedLetterInputContext } from '@/shared/ui/MissedLetterInput';

export interface DictantProps {
  text: string;
  maxCorrectLetters: number;
  isMissed: boolean;
}

export const DictantSymbolForMissed: string = '*';
export const DictantSymbolForSplitSentences: string = '&';
export const DictantSymbolForEndSentences: string = '@';

export const Dictant: React.FC<DictantProps> = memo(
  ({ text, maxCorrectLetters, isMissed }): React.JSX.Element => {
    // Разделяем текст на массив
    const splitTextByWords: string[] = useMemo(() => text.split(' '), [text]);

    const splitTextBySentences: string[] = useMemo(
      () =>
        text
          .split(DictantSymbolForEndSentences)
          .filter((sentence) => sentence.trim()),
      [text],
    );

    // Получаем значения из контекста
    const {
      correctInputsIDs,
      missedInputsIDs,
      incorrectInputsIDs,
      setMissedInputsIDs,
    } = useContext(MissedLetterInputContext);

    return (
      <Flex direction="column" gap="70" width="100">
        <Flex relative direction="column" gap="10" width="100">
          <Flex direction="column" className={styles.Dictant}>
            <Flex
              wrap
              gap={splitTextBySentences.length > 1 ? '15' : '5'}
              className={styles.Dictant__text}
            >
              {splitTextBySentences.length > 1 ? (
                <>
                  {splitTextBySentences.map((sentence, sentenceIndex) => {
                    // Временно заменяем пробелы внутри &...& на специальный символ
                    const processedText = sentence.replace(
                      new RegExp(
                        `${DictantSymbolForSplitSentences}([^${DictantSymbolForSplitSentences}]+)${DictantSymbolForSplitSentences}`,
                        'g',
                      ),
                      (match) => match.replace(/ /g, '△'),
                    );

                    // Разбиваем текст по пробелам
                    const words = processedText.split(' ');

                    // Возвращаем обычные пробелы в словах с &
                    const sentenceWords = words.map((word) =>
                      word.replace(/△/g, ' '),
                    );

                    // Вычисляем смещение для текущего предложения
                    const previousSentencesLength =
                      splitTextBySentences
                        .slice(0, sentenceIndex)
                        .join(`${DictantSymbolForEndSentences} `).length +
                      (sentenceIndex > 0 ? 2 : 0);

                    // Определяем, является ли первое слово темой
                    const firstWordIsTheme =
                      sentenceWords[0].startsWith(
                        DictantSymbolForSplitSentences,
                      ) &&
                      sentenceWords[0].endsWith(DictantSymbolForSplitSentences);

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
                            {sentenceWords[0].replace(
                              new RegExp(DictantSymbolForSplitSentences, 'g'),
                              '',
                            )}
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
                                currentPosition += currentSentence.length + 2; // +2 для учета '@ '
                              } else if (i === sentenceIndex) {
                                break;
                              }
                            }

                            const globalLetterIndex =
                              text.split('').slice(0, currentPosition).length +
                              sentenceWords.slice(0, localWordIndex).join(' ')
                                .length +
                              (localWordIndex === 0 ? 2 : 1) -
                              sentenceWords[0].length;

                            return renderLetter(
                              localWordIndex,
                              globalLetterIndex,
                              word,
                              DictantSymbolForMissed,
                              maxCorrectLetters,
                              isMissed,
                              firstWordIsTheme,
                              correctInputsIDs,
                              incorrectInputsIDs,
                              missedInputsIDs,
                              setMissedInputsIDs,
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

                    return renderLetter(
                      wordIndex,
                      globalLetterIndex,
                      word,
                      DictantSymbolForMissed,
                      maxCorrectLetters,
                      isMissed,
                      false,
                      correctInputsIDs,
                      incorrectInputsIDs,
                      missedInputsIDs,
                      setMissedInputsIDs,
                    );
                  })}
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  },
);

Dictant.displayName = 'Dictant';

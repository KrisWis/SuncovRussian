import { Flex } from '@/shared/lib/Stack';
import * as styles from './Dictant.module.scss';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Button } from '@/shared/ui/Button';
import DislikeSVG from '@/shared/assets/icons/DictantsPage/DislikeSVG.svg';
import LikeSVG from '@/shared/assets/icons/DictantsPage/LikeSVG.svg';
import { clearClassesOnInput } from '../lib/helpers/clearClassesOnInput';
import { goToNextInput } from '../lib/helpers/goToNextInput';
import { useCheckCorrectness } from '../lib/hooks/useCheckCorrectness';

interface DictantProps {
  text: string;
}

const splitSymbol: string = '*';

export const Dictant: React.FC<DictantProps> = memo(
  ({ text }): React.JSX.Element => {
    // Разделяем текст на массив
    const splitText: string[] = useMemo(() => text.split(' '), [text]);

    // Функция для объедения функций инпутов
    const handleInput = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        clearClassesOnInput(e.target as HTMLInputElement, true);
        goToNextInput(e);
      },
      [],
    );

    // Функция для проверки введённых пользователем букв
    const [correctLetters, setCorrectLetters] = useState(0);
    const [maxCorrectLetters, setMaxCorrectLetters] = useState(0);
    const [isIncorrect, setIsIncorrect] = useState(false);
    const [isMissed, setIsMissed] = useState(false);

    const { checkCorrectness } = useCheckCorrectness(
      text,
      splitSymbol,
      setCorrectLetters,
      setMaxCorrectLetters,
      setIsIncorrect,
      setIsMissed,
    );

    // Инициализация начальных значений
    useEffect(() => {
      setMaxCorrectLetters(0);
      setCorrectLetters(0);
      setIsIncorrect(false);
      setIsMissed(false);
    }, [text]);

    return (
      <Flex
        className={styles.Dictant__wrapper}
        direction="column"
        gap="70"
        maxHeight
        width="100"
      >
        <Flex relative direction="column" gap="10" width="100">
          <Flex direction="column" width="80" className={styles.Dictant}>
            <Flex wrap gap="5" className={styles.Dictant__text}>
              {splitText.map((word, wordIndex) => {
                const globalLetterIndex =
                  splitText.slice(0, wordIndex).join(' ').length +
                  (wordIndex > 0 ? 2 : 1);

                return (
                  <div key={word + globalLetterIndex}>
                    {word.split('').map(
                      (
                        letter,
                        letterIndex, // Проходимся циклом по всему тексту
                      ) => {
                        const currentGlobalIndex =
                          globalLetterIndex + letterIndex;

                        return (word[letterIndex - 1] === splitSymbol &&
                          word[letterIndex + 1] === splitSymbol) ||
                          ([
                            word[letterIndex - 2],
                            word[letterIndex - 1],
                          ].includes(splitSymbol) &&
                            letter === splitSymbol) ? (
                          ''
                        ) : letter === splitSymbol ? ( // И если встречаем "*"
                          <input
                            data-testid="Dictant__input"
                            onInput={handleInput}
                            id={`DictantInput__${currentGlobalIndex}`}
                            className={`${styles.Dictant__input} Dictant__input`}
                            type="text"
                            maxLength={1}
                            key={letter + currentGlobalIndex}
                            readOnly={maxCorrectLetters > 0 && !isMissed}
                          />
                        ) : (
                          letter
                        );
                      },
                    )}
                  </div>
                );
              })}
            </Flex>
          </Flex>

          {maxCorrectLetters > 0 && !isMissed && (
            <span className={styles.Dictant__total}>
              Итог: {correctLetters}/{maxCorrectLetters}
            </span>
          )}
        </Flex>

        <Flex
          maxHeight
          align="start"
          relative
          justify="center"
          width="100"
          className={styles.Dictant__check}
        >
          {(!isIncorrect || isMissed) &&
            (maxCorrectLetters !== correctLetters || !maxCorrectLetters) && (
              <Button
                data-testid="Dictant__check"
                onClick={checkCorrectness}
                variant="medium"
                type="button"
                className={styles.Dictant__check}
              >
                Проверить
              </Button>
            )}

          {maxCorrectLetters > 0 && !isMissed && (
            <>
              {correctLetters === maxCorrectLetters ? (
                <>
                  {process.env.NODE_ENV === 'test' ? (
                    <div data-testid="Dictant__like">
                      <LikeSVG className={styles.Dictant__mark} />
                    </div>
                  ) : (
                    <LikeSVG className={styles.Dictant__mark} />
                  )}
                </>
              ) : (
                <>
                  {process.env.NODE_ENV === 'test' ? (
                    <div data-testid="Dictant__dislike">
                      <DislikeSVG className={styles.Dictant__mark} />
                    </div>
                  ) : (
                    <DislikeSVG className={styles.Dictant__mark} />
                  )}
                </>
              )}
            </>
          )}
        </Flex>
      </Flex>
    );
  },
);

Dictant.displayName = 'Dictant';

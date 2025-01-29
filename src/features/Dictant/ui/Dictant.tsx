import { Flex } from '@/shared/lib/Stack';
import * as styles from './Dictant.module.scss';
import {
  Fragment,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { clearClassesOnInput } from '../lib/helpers/clearClassesOnInput';
import { goToNextInput } from '../lib/helpers/goToNextInput';
import { DictantContext } from '../model/context/DictantContext';
import { DictantFooter } from './DictantFooter/DictantFooter';
import { goToPrevInput } from '../lib/helpers/goToPrevInput';
interface DictantProps {
  text: string;
}

const splitSymbol: string = '*';

export const DictantInner: React.FC<DictantProps> = memo(
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

    // Получение данных из контекста
    const { correctLetters, maxCorrectLetters, isMissed } =
      useContext(DictantContext);

    return (
      <Flex direction="column" gap="70" width="100">
        <Flex relative direction="column" gap="10" width="100">
          <Flex direction="column" width="80" className={styles.Dictant}>
            <Flex wrap gap="5" className={styles.Dictant__text}>
              {splitText.map((word, wordIndex) => {
                const globalLetterIndex =
                  splitText.slice(0, wordIndex).join(' ').length +
                  (wordIndex > 0 ? 2 : 1);

                return (
                  <Fragment key={word + globalLetterIndex}>
                    <div>
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
                              onKeyDown={goToPrevInput}
                              id={`DictantInput__${currentGlobalIndex}`}
                              className={`${styles.Dictant__input} Dictant__input`}
                              type="text"
                              maxLength={1}
                              key={letter + currentGlobalIndex}
                              readOnly={maxCorrectLetters > 0 && !isMissed}
                              autoComplete="off"
                            />
                          ) : (
                            letter
                          );
                        },
                      )}
                    </div>

                    {word.endsWith('.') && (
                      <div className={styles.Dictant__sentenceSeaparator}></div>
                    )}
                  </Fragment>
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

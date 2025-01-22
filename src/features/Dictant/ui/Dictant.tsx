import { Flex } from '@/shared/lib/Stack';
import * as styles from './Dictant.module.scss';
import { memo, useCallback, useMemo, useState } from 'react';
import { Button } from '@/shared/ui/Button';
import DislikeSVG from '@/shared/assets/icons/DictantsPage/DislikeSVG.svg';
import LikeSVG from '@/shared/assets/icons/DictantsPage/LikeSVG.svg';

interface DictantProps {
  text: string;
}

const splitSymbol: string = '*';

export const Dictant: React.FC<DictantProps> = memo(
  ({ text }): React.JSX.Element => {
    // Разделяем текст на массив
    const splitText: string[] = useMemo(() => text.split(''), [text]);

    // Функция для того, чтобы сбрасывать классы правильности, если пользователь ввёл новое значение в инпут
    const clearClassesOnInput = useCallback(
      (input: HTMLInputElement, withIsMissed: boolean) => {
        const classes = [
          styles.Dictant__input__correct,
          styles.Dictant__input__incorrect,
        ];

        if (withIsMissed) {
          classes.push(styles.Dictant__input__missed);
        }

        input.classList.remove(...classes);
      },
      [],
    );

    // Функция для проверки введённых пользователем букв
    const [correctLetters, setCorrectLetters] = useState(0);
    const [maxCorrectLetters, setMaxCorrectLetters] = useState(0);
    const [isIncorrect, setIsIncorrect] = useState(false);
    const [isMissed, setIsMissed] = useState(false);

    const checkCorrectness = useCallback(() => {
      const inputElements = document.querySelectorAll(
        '.Dictant__input',
      ) as NodeListOf<HTMLInputElement>;

      let correctLetters: number = inputElements.length;
      let isMissed: boolean = false;

      for (let i = 0; i < inputElements.length; i++) {
        const inputElement = inputElements[i];
        const letterId: number = Number(inputElement.id.split('__')[1]);
        const thisInputIsMissed: boolean =
          !inputElement.value && splitText[letterId] !== splitSymbol;

        if (thisInputIsMissed) {
          isMissed = true;
          setIsMissed(true);

          for (const inputElementForClear of inputElements) {
            clearClassesOnInput(inputElementForClear, false);
          }
        }

        if (thisInputIsMissed) {
          inputElement.classList.add(styles.Dictant__input__missed);
          correctLetters--;
        } else if (
          !isMissed &&
          inputElement.value !== splitText[letterId] &&
          !(!inputElement.value && splitText[letterId] === splitSymbol)
        ) {
          inputElement.classList.add(styles.Dictant__input__incorrect);
          setIsIncorrect(true);
          correctLetters--;
        } else if (!isMissed) {
          inputElement.classList.add(styles.Dictant__input__correct);
        }
      }

      setCorrectLetters(correctLetters);
      setMaxCorrectLetters(inputElements.length);
    }, [clearClassesOnInput, splitText]);

    return (
      <Flex direction="column" gap="70" maxHeight width="100">
        <Flex relative direction="column" gap="10" width="100">
          <Flex direction="column" width="90" className={styles.Dictant}>
            <p className={styles.Dictant__text}>
              {splitText.map(
                (
                  letter,
                  letterIndex, // Проходимся циклом по всему тексту
                ) =>
                  (splitText[letterIndex - 1] === splitSymbol &&
                    splitText[letterIndex + 1] === splitSymbol) ||
                  ([
                    splitText[letterIndex - 2],
                    splitText[letterIndex - 1],
                  ].includes(splitSymbol) &&
                    letter === splitSymbol) ? (
                    ''
                  ) : letter === splitSymbol ? ( // И если встречаем "*"
                    <input
                      onInput={(e) =>
                        clearClassesOnInput(e.target as HTMLInputElement, true)
                      }
                      id={`DictantInput__${letterIndex + 1}`}
                      className={`${styles.Dictant__input} Dictant__input`}
                      type="text"
                      maxLength={1}
                      key={letter + letterIndex}
                      readOnly={maxCorrectLetters > 0 && !isMissed}
                    />
                  ) : (
                    letter
                  ),
              )}
            </p>
          </Flex>

          {maxCorrectLetters > 0 && (
            <span className={styles.Dictant__total}>
              Итог: {correctLetters}/{maxCorrectLetters}
            </span>
          )}
        </Flex>

        <Flex relative justify="center" width="100">
          {!isIncorrect &&
            (maxCorrectLetters !== correctLetters || !maxCorrectLetters) && (
              <Button onClick={checkCorrectness} variant="big" type="button">
                Проверить
              </Button>
            )}

          {maxCorrectLetters > 0 && (
            <>
              {correctLetters === maxCorrectLetters ? (
                <LikeSVG className={styles.Dictant__mark} />
              ) : (
                <DislikeSVG className={styles.Dictant__mark} />
              )}
            </>
          )}
        </Flex>
      </Flex>
    );
  },
);

Dictant.displayName = 'Dictant';

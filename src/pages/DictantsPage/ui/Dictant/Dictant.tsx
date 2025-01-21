import { Flex } from '@/shared/lib/Stack';
import * as styles from './Dictant.module.scss';
import { memo, useMemo } from 'react';

interface DictantProps {
  text: string;
}

const splitSymbol: string = '*';

export const Dictant: React.FC<DictantProps> = memo(
  ({ text }): React.JSX.Element => {
    // Разделяем текст на массив
    let splitText: string[] = useMemo(() => text.split(''), [text]);

    return (
      <Flex width="90" className={styles.Dictant}>
        <p className={styles.Dictant__text}>
          {splitText.map(
            (
              letter,
              letterIndex, // Проходимся циклом по всему тексту
            ) =>
              (splitText[letterIndex - 1] === splitSymbol &&
                splitText[letterIndex + 1] === splitSymbol) ||
              (splitText[letterIndex - 2] === splitSymbol &&
                letter === splitSymbol) ? (
                ''
              ) : letter === splitSymbol ? ( // И если встречаем "*"
                <button type="button" key={letter + letterIndex}>
                  {(() => {
                    // То вместо просто буквы отображаем кнопку с буквой

                    // Получаем саму букву
                    const missedLetter = splitText.find(
                      (_, index) => index === letterIndex + 1,
                    );

                    // И возвращаем саму букву
                    return missedLetter && missedLetter.toUpperCase();
                  })()}
                </button>
              ) : (
                letter
              ),
          )}
        </p>
      </Flex>
    );
  },
);

Dictant.displayName = 'Dictant';

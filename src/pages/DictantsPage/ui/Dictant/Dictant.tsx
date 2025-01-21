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
    const splitText: string[] = useMemo(() => text.split(''), [text]);

    return (
      <Flex direction="column" width="90" className={styles.Dictant}>
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
                <input
                  className={styles.Dictant__input}
                  type="text"
                  maxLength={1}
                  key={letter + letterIndex}
                />
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

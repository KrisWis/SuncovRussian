import * as styles from './Hint.module.scss';
import { memo, useState } from 'react';
import { HintProps } from '../model/types';
import { Flex } from '@/shared/lib/Stack';

export const Hint: React.FC<HintProps> = memo(
  ({ textClassName, text, textDirection = 'top' }): React.JSX.Element => {
    // Отображение подсказки
    const [isHintVisible, setIsHintVisible] = useState<boolean>(false);

    return (
      <Flex relative align="start" gap="10">
        <Flex
          onMouseEnter={() => setIsHintVisible(true)}
          onMouseLeave={() => setIsHintVisible(false)}
          className={styles.Hint}
          justify="center"
        >
          <span>?</span>
        </Flex>

        <p
          className={`${styles.Hint__text}
              ${isHintVisible && styles.Hint__text__active}
              ${styles[`Hint__text__${textDirection}`]}
              ${textClassName}`}
        >
          {text}
        </p>
      </Flex>
    );
  },
);

Hint.displayName = 'Hint';

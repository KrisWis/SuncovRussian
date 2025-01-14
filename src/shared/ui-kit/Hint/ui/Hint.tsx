import * as styles from './Hint.module.scss';
import { memo, useState } from 'react';
import { HintProps } from '../model/types';
import { Flex } from '@/shared/lib/Stack';

export const Hint: React.FC<HintProps> = memo(
<<<<<<< HEAD
<<<<<<< HEAD
  ({ textClassName, text, textDirection = 'top' }): React.JSX.Element => {
=======
  ({ textClassName, children, textDirection = 'top' }): React.JSX.Element => {
>>>>>>> 3b93d38 (Fix header, add UI-Kit component -Hint, fix some other things.)
=======
  ({ textClassName, text, textDirection = 'top' }): React.JSX.Element => {
>>>>>>> fed6419 (Add PDFViewer Component, UI-kit ErrorComponent and Theory basic functional.)
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
<<<<<<< HEAD
<<<<<<< HEAD
          {text}
=======
          {children}
>>>>>>> 3b93d38 (Fix header, add UI-Kit component -Hint, fix some other things.)
=======
          {text}
>>>>>>> fed6419 (Add PDFViewer Component, UI-kit ErrorComponent and Theory basic functional.)
        </p>
      </Flex>
    );
  },
);

Hint.displayName = 'Hint';

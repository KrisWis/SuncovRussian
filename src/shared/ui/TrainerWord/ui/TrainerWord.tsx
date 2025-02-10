import * as styles from './TrainerWord.module.scss';
import { memo } from 'react';
import { TrainerWordProps } from '../model/types/types';
import { Flex } from '@/shared/lib/Stack';

export const TrainerWord: React.FC<TrainerWordProps> = memo(
  ({
    className,
    style,
    dataTestId,
    onClick,
    children,
    type = 'default',
  }): React.JSX.Element => {
    // Добавление, к переданной onClick функции, пропадания transition при клике на слово
    const handleClick = () => {
      const TrainerWords = document.querySelectorAll(
        '[data-name="TrainerWord"]',
      ) as NodeListOf<HTMLElement>;

      TrainerWords.forEach((word) => {
        word.style.transitionDuration = '0ms';
      });

      const timeoutForTransition = setTimeout(() => {
        clearTimeout(timeoutForTransition);

        TrainerWords.forEach((word) => {
          word.style.transitionDuration = 'var(--transition-duration-default)';
        });
      }, 100);

      if (onClick) {
        onClick();
      }
    };

    return (
      <Flex
        justify="center"
        data-testid={dataTestId}
        width="100"
        onClick={handleClick}
        className={`${styles.TrainerWord} ${className} ${styles[`TrainerWord__${type}`]}`}
        style={style}
        data-name="TrainerWord"
      >
        {children}
      </Flex>
    );
  },
);

TrainerWord.displayName = 'TrainerWord';

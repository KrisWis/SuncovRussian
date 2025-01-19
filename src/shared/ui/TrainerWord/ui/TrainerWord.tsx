import * as styles from './TrainerWord.module.scss';
import { memo, useState } from 'react';
import { TrainerWordProps } from '../model/types';
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
    // Добавление к переданному onClick функции, сброса hover-эффекта при клике на слово
    const [hoveredIsPossible, setHoveredIsPossible] = useState(true);

    const handleClick = () => {
      setHoveredIsPossible(false);

      const timeoutForHover = setTimeout(() => {
        setHoveredIsPossible(true);
        clearTimeout(timeoutForHover);
      }, 0);

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
        className={`TrainerWord ${styles.TrainerWord} ${className} ${styles[`TrainerWord__${type}`]}`}
        style={{ ...style, pointerEvents: hoveredIsPossible ? 'auto' : 'none' }}
      >
        {children}
      </Flex>
    );
  },
);

TrainerWord.displayName = 'TrainerWord';

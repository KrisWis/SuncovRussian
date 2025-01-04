import * as styles from './TrainerWord.module.scss';
import { memo } from 'react';
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
    return (
      <Flex
        justify="center"
        data-testid={dataTestId}
        width="100"
        onClick={onClick}
        className={`TrainerWord ${styles.TrainerWord} ${className} ${styles[`TrainerWord__${type}`]}`}
        style={style}
      >
        {children}
      </Flex>
    );
  },
);

TrainerWord.displayName = 'TrainerWord';

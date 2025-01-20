import { Flex } from '@/shared/lib/Stack';
import * as styles from './Dictant.module.scss';
import { memo } from 'react';

interface DictantProps {
  text: string;
}

export const Dictant: React.FC<DictantProps> = memo(
  ({ text }): React.JSX.Element => {
    return (
      <Flex width="90" className={styles.Dictant}>
        <p className={styles.Dictant__text}>{text}</p>
      </Flex>
    );
  },
);

Dictant.displayName = 'Dictant';

import { Flex } from '@/shared/lib/Stack';
import * as styles from './Header.module.scss';
import { memo } from 'react';

export const Header: React.FC = memo((): React.JSX.Element => {
  return (
    <Flex width="100" justify="between" className={styles.Header}>
      <span className={styles.Header__item}>Тесты</span>
      <span className={styles.Header__item}>Теория</span>
      <span className={styles.Header__item}>Тренажер</span>
      <span className={styles.Header__item}>Сочинения</span>
    </Flex>
  );
});

Header.displayName = 'Header';

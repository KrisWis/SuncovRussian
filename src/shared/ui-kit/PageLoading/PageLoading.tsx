import * as styles from './PageLoading.module.scss';
import { memo } from 'react';
import { Flex } from '@/shared/lib/Stack';
import AtomicSpinner from 'atomic-spinner';

export const PageLoading: React.FC = memo((): React.JSX.Element => {
  return (
    <Flex justify="center" className={styles.PageLoading}>
      <AtomicSpinner />
    </Flex>
  );
});
PageLoading.displayName = 'PageLoading';

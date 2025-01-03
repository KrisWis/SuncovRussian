import * as styles from './PageLoading.module.scss';
import { memo } from 'react';
import { Flex } from '@/shared/lib/Stack';

export const PageLoading: React.FC = memo((): React.JSX.Element => {
  return (
    <Flex justify="center" className={styles.PageLoading}>
      <img src="gifs/PageLoading.gif" alt="Анимация загрузки страниц" />
    </Flex>
  );
});
PageLoading.displayName = 'PageLoading';

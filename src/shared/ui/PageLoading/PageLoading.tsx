import * as styles from './PageLoading.module.scss';
import { memo } from 'react';
import { Flex } from '@/shared/lib/Stack';

export const PageLoading: React.FC = memo((): React.JSX.Element => {
  return (
    <Flex data-testid="Loading" justify="center" className={styles.PageLoading}>
      <img
        src={`${__IS_DEV__ ? '/' : `/${process.env.PUBLIC_URL}/`}gifs/PageLoading.gif`}
        alt="Анимация загрузки страниц"
      />
    </Flex>
  );
});
PageLoading.displayName = 'PageLoading';

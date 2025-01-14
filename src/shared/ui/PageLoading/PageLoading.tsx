import * as styles from './PageLoading.module.scss';
import { memo } from 'react';
import { Flex } from '@/shared/lib/Stack';

export const PageLoading: React.FC = memo((): React.JSX.Element => {
  return (
    <Flex data-testid="Loading" justify="center" className={styles.PageLoading}>
<<<<<<< HEAD:src/shared/ui/PageLoading/PageLoading.tsx
      <img src="/gifs/PageLoading.gif" alt="Анимация загрузки страниц" />
=======
      <img src="gifs/PageLoading.gif" alt="Анимация загрузки страниц" />
>>>>>>> 04df36d (Add cypress, e2e tests for theory block.):src/shared/ui-kit/PageLoading/PageLoading.tsx
    </Flex>
  );
});
PageLoading.displayName = 'PageLoading';

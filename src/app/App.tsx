import { MainPage } from '@/pages/MainPage';
import { PageLoading } from '@/shared/ui-kit/PageLoading/PageLoading';
import { Suspense } from 'react';

// TODO: найти библиотеку для скриншотного тестирования со Storybook и написать тесты

export const App = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <MainPage />
    </Suspense>
  );
};

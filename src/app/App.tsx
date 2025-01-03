import { MainPage } from '@/pages/MainPage';
import { PageLoading } from '@/shared/ui-kit/PageLoading/PageLoading';
import { Suspense } from 'react';

export const App = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <MainPage />
    </Suspense>
  );
};

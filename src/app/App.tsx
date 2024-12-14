import { MainPage } from '@/pages/MainPage';
import { Suspense } from 'react';

export const App = () => {
  return (
    <Suspense fallback="Идёт загрузка...">
      <MainPage />
    </Suspense>
  );
};

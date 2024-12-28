import { MainPage } from '@/pages/MainPage';
import { Header } from '@/widgets/Header';
import { Suspense } from 'react';

export const App = () => {
  return (
    <Suspense fallback="Идёт загрузка...">
      <Header />
      <MainPage />
    </Suspense>
  );
};

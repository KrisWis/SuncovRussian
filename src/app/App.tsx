import { MainPage } from '@/pages/MainPage';
import { PageLoading } from '@/shared/ui-kit/PageLoading/PageLoading';
import { Suspense } from 'react';

<<<<<<< HEAD
// TODO: Исправить ошибку с creevey, либо найти новую либу для ui тестирования со Storybook
=======
// TODO: написать cypress тесты в конце разработки
>>>>>>> 3736a6b (Add SideBar for Theory Block, add Theory Context and add functional of switching sections of theories.)

export const App = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <MainPage />
    </Suspense>
  );
};

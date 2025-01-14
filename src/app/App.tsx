import { MainPage } from '@/pages/MainPage';
import { PageLoading } from '@/shared/ui-kit/PageLoading/PageLoading';
import { Suspense } from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// TODO: Исправить ошибку с creevey, либо найти новую либу для ui тестирования со Storybook
=======
// TODO: написать cypress тесты в конце разработки
>>>>>>> 3736a6b (Add SideBar for Theory Block, add Theory Context and add functional of switching sections of theories.)
=======
// TODO: написать cypress тесты
=======
>>>>>>> 04df36d (Add cypress, e2e tests for theory block.)
// TODO: найти библиотеку для скриншотного тестирования со Storybook и написать тесты
>>>>>>> 1df825a (Remove loki from project.)

export const App = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <MainPage />
    </Suspense>
  );
};

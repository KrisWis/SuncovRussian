import { AppRouter } from './providers/router';
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { BrowserRouter } from 'react-router-dom';
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)
// TODO: Исправить ошибку с creevey, либо найти новую либу для ui тестирования со Storybook

// TODO: Исправить ошибку с creevey, либо найти новую либу для ui тестирования со Storybook
=======
// TODO: написать cypress тесты
=======
>>>>>>> 04df36d (Add cypress, e2e tests for theory block.)
// TODO: найти библиотеку для скриншотного тестирования со Storybook и написать тесты
>>>>>>> 1df825a (Remove loki from project.)
=======
// TODO: Исправить ошибку с creevey, либо найти новую либу для ui тестирования со Storybook
>>>>>>> 4d9286d (Add creevey instead of loki.)

export const App = () => {
<<<<<<< HEAD
  return <AppRouter />;
=======
  return (
    <BrowserRouter basename="/">
      <AppRouter />
    </BrowserRouter>
  );
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)
};

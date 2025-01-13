import { AppRouter } from './providers/router';
import { BrowserRouter } from 'react-router-dom';
// TODO: Исправить ошибку с creevey, либо найти новую либу для ui тестирования со Storybook

export const App = () => {
  return (
    <BrowserRouter basename="/">
      <AppRouter />
    </BrowserRouter>
  );
};

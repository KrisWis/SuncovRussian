import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { ErrorBoundary } from 'react-error-boundary';
import { store } from './app/store/AppStore';
import { Provider } from 'react-redux';

const container = document.getElementById('root');

if (!container) {
  throw new Error(
    'Контейнер root не найден. НЕ удалось вмонтировать реакт приложение',
  );
}

const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ErrorBoundary fallback={<div>Что-то пошло не так</div>}>
      <App />
    </ErrorBoundary>
  </Provider>,
);

import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { ErrorBoundary } from 'react-error-boundary';
import { store } from './app/store/AppStore';
import { Provider } from 'react-redux';
import '@/app/styles/reset.scss';
import '@/app/styles/index.scss';
import { Flex } from './shared/lib/Stack';

const container = document.getElementById('root');

if (!container) {
  throw new Error(
    'Контейнер root не найден. НЕ удалось вмонтировать реакт приложение',
  );
}

const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ErrorBoundary
      fallback={
        <Flex maxHeight width="100" justify="center">
          На сайте возникла непредвиденная ошибка. Приносим свои извинения.
        </Flex>
      }
    >
      <App />
    </ErrorBoundary>
  </Provider>,
);

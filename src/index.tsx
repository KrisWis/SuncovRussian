import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import '@/app/styles/reset.scss';
import '@/app/styles/index.scss';
import { ErrorComponent } from '@/shared/ui/ErrorComponent';
import { store } from '@/shared/lib/store';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');

if (!container) {
  throw new Error(
    'Контейнер root не найден. НЕ удалось вмонтировать реакт приложение',
  );
}

const root = createRoot(container);

// TODO: сделать так, чтобы подставлялось из глобальной переменной (везде)
root.render(
  <BrowserRouter basename="/SuncovRussian">
    <Provider store={store}>
      <ErrorBoundary fallback={<ErrorComponent />}>
        <App />
      </ErrorBoundary>
    </Provider>
  </BrowserRouter>,
);

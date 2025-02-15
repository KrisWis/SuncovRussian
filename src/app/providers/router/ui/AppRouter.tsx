import { memo, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import { PageLoading } from '@/shared/ui/PageLoading/ui/PageLoading';

export const AppRouter: React.FC = memo(() => {
  // Добавление data-атрибута в body в зависимости от режима сборки
  useEffect(() => {
    document.body.setAttribute('data-isDev', JSON.stringify(__IS_DEV__));
    document.body.setAttribute(
      'data-publicUrl',
      JSON.stringify(process.env.PUBLIC_URL),
    );
  }, []);

  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        {Object.values(routeConfig).map((route) =>
          'length' in route ? (
            Object.values(route).map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))
          ) : (
            <Route key={route.path} path={route.path} element={route.element} />
          ),
        )}
      </Routes>
    </Suspense>
  );
});

AppRouter.displayName = 'AppRouter';

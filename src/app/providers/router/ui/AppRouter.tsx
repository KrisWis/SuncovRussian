import { memo, Suspense, useEffect, useState } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import { PageLoading } from '@/shared/ui/PageLoading/ui/PageLoading';
import { useAppDispatch } from '@/shared/store';
import { AppRoutes } from '@/shared/types/router';
import { useFetchTests } from '../lib/hooks/useFetchTestsRoutes';

export const AppRouter: React.FC = memo(() => {
  // Добавление data-атрибута в body в зависимости от режима сборки
  useEffect(() => {
    document.body.setAttribute('data-isDev', JSON.stringify(__IS_DEV__));
    document.body.setAttribute(
      'data-publicUrl',
      JSON.stringify(process.env.PUBLIC_URL),
    );
  }, []);

  // Делаем конфиг с роутами стейтом
  const [routes, setRoutes] =
    useState<Record<AppRoutes, RouteProps>>(routeConfig);

  // Получаем данные с бекенда
  const dispatch = useAppDispatch();

  const { fetchTests } = useFetchTests();

  // Обновляем роуты
  useEffect(() => {
    const testsRoutes = fetchTests();

    setRoutes((prevRoutes) => ({
      ...prevRoutes,
      ...testsRoutes,
    }));

    fetchTests();
  }, [dispatch, fetchTests]);

  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        {Object.values(routes).map((route) =>
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

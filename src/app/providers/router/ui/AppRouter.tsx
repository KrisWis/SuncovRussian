import { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
import { PageLoading } from '@/shared/ui/PageLoading/PageLoading';

export const AppRouter: React.FC = memo(() => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        {Object.values(routeConfig).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Suspense>
  );
});

AppRouter.displayName = 'AppRouter';

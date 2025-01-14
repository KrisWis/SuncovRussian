import { lazy } from 'react';

export const MainPage: React.LazyExoticComponent<React.FC> = lazy(() => {
  return new Promise((resolve) => {
    resolve(
      import('./ui/MainPage').then(({ MainPage }) => ({
        default: MainPage,
      })),
    );
  });
});

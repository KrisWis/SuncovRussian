import { lazy } from 'react';

export const MainPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import('./ui/MainPage').then(({ MainPage }) => ({
    default: MainPage,
  })),
);

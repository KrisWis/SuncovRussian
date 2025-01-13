import { lazy } from 'react';

export const NotFoundPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import('./ui/NotFoundPage').then(({ NotFoundPage }) => ({
    default: NotFoundPage,
  })),
);

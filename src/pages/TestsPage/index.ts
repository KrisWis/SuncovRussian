import { lazy } from 'react';

export const TestsPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import('./ui/TestsPage').then(({ TestsPage }) => ({
    default: TestsPage,
  })),
);

export { mockTests } from './model/static/mockTests';

import { lazy } from 'react';
import { TestsPageProps } from './ui/TestsPage';

export const TestsPage: React.LazyExoticComponent<React.FC<TestsPageProps>> =
  lazy(() =>
    import('./ui/TestsPage').then(({ TestsPage }) => ({
      default: TestsPage,
    })),
  );

export { getAllTests } from './api/testsPageApi';

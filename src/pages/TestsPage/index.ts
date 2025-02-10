import { lazy } from 'react';
import { TestsPageProps } from './ui/TestsPage';

export const TestsPage: React.LazyExoticComponent<React.FC<TestsPageProps>> =
  lazy(() =>
    import('./ui/TestsPage').then(({ TestsPage }) => ({
      default: TestsPage,
    })),
  );

export { mockTests } from './model/static/mockTests';
export type { TestsType, TestsItem } from './model/types/types';

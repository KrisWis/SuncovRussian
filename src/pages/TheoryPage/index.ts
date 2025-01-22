import { lazy } from 'react';

export const TheoryPage: React.LazyExoticComponent<React.FC> = lazy(() => {
  return new Promise((resolve) => {
    resolve(
      import('./ui/TheoryPage').then(({ TheoryPage }) => ({
        default: TheoryPage,
      })),
    );
  });
});

export { TheorySidebar } from './ui/TheorySidebar/TheorySidebar';

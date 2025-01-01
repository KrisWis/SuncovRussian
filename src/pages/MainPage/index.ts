import { randomIntFromInterval } from '@/shared/utils/randomIntFromInterval';
import { lazy } from 'react';

export const MainPage: React.LazyExoticComponent<React.FC> = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve(
          import('./ui/MainPage').then(({ MainPage }) => ({
            default: MainPage,
          })),
        ),
      // TODO: сказать про эту задержку
      randomIntFromInterval(500, 2000),
    );
  });
});

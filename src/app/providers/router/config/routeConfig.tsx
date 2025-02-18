import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { TheoryPage } from '@/pages/TheoryPage';
import { TrainerPage, wordsForTrainers } from '@/pages/TrainerPage';
import {
  getRouteMain,
  getRouteNotFound,
  getRouteTheory,
  getRouteTrainer,
} from '@/shared/const/router';
import { AppRoutes } from '@/shared/types/router';
import { RouteProps } from 'react-router-dom';

export const routeConfig: Record<AppRoutes, RouteProps> = {
  main: {
    path: getRouteMain(),
    element: <MainPage />,
  },

  theory: {
    path: getRouteTheory(),
    element: <TheoryPage />,
  },

  ...[
    ...Object.entries(wordsForTrainers).map(([theme, words]) => ({
      path: getRouteTrainer(theme),
      element: <TrainerPage theme={theme} key={theme} words={words} />,
    })),
  ],

  notFound: {
    path: getRouteNotFound(),
    element: <NotFoundPage />,
  },
};

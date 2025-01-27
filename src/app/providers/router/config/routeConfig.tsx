import { DictantsPage, mockDictants } from '@/pages/DictantsPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { TheoryPage } from '@/pages/TheoryPage';
import { TrainerPage } from '@/pages/TrainerPage';
import {
  getRouteDictant,
  getRouteMain,
  getRouteNotFound,
  getRouteTheory,
  getRouteTrainer,
  trainerRoutes,
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
    ...trainerRoutes.map((route) => ({
      path: getRouteTrainer(route.subcategory),
      element: <TrainerPage key={route.subcategory} words={route.words} />,
    })),

    ...mockDictants.map((dictant) =>
      dictant.items.map((item) => ({
        path: getRouteDictant(dictant.theme, item.subtheme),
        element: <DictantsPage key={item.subtheme} dictant={item} />,
      })),
    ),
  ],

  notFound: {
    path: getRouteNotFound(),
    element: <NotFoundPage />,
  },
};

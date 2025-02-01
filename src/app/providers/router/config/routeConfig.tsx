import { DictantsPage, mockDictants } from '@/pages/DictantsPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { mockTests, TestsPage } from '@/pages/TestsPage';
import { TheoryPage } from '@/pages/TheoryPage';
import { TrainerPage, wordsForTrainers } from '@/pages/TrainerPage';
import {
  getRouteDictant,
  getRouteMain,
  getRouteNotFound,
  getRouteTests,
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

    ...mockDictants.map((dictant) =>
      dictant.items.map((item) => ({
        path: getRouteDictant(dictant.theme, item.subtheme),
        element: <DictantsPage key={item.subtheme} dictant={item} />,
      })),
    ),

    ...Object.entries(mockTests).map(([theme]) => ({
      path: getRouteTests(theme),
      element: <TestsPage />,
    })),
  ],

  notFound: {
    path: getRouteNotFound(),
    element: <NotFoundPage />,
  },
};

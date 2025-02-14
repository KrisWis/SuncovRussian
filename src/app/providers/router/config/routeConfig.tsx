import { DictantsPage, mockDictants } from '@/pages/DictantsPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { PartsOfSpeachPage } from '@/pages/PartsOfSpeachPage';
import { mockPartsOfSpeach } from '@/pages/PartsOfSpeachPage';
import { mockTests, TestsPage } from '@/pages/TestsPage';
import { TheoryPage } from '@/pages/TheoryPage';
import { TrainerPage, wordsForTrainers } from '@/pages/TrainerPage';
import {
  getRouteDictant,
  getRouteMain,
  getRouteNotFound,
  getRoutePartsOfSpeach,
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

    ...mockTests.map((test) => ({
      path: getRouteTests(test.title),
      element: <TestsPage theme={test.title} questions={test.questions} />,
    })),

    ...Object.entries(mockPartsOfSpeach).map(([theme]) => ({
      path: getRoutePartsOfSpeach(theme),
      element: (
        <PartsOfSpeachPage theme={theme} item={mockPartsOfSpeach[theme]} />
      ),
    })),
  ],

  notFound: {
    path: getRouteNotFound(),
    element: <NotFoundPage />,
  },
};

import { getRouteTests } from '@/shared/const/router';
import { useAppDispatch } from '@/shared/store/config/AppStore';
import { getTests, TestsPage } from '@/pages/TestsPage';
import { AppRoutes } from '@/shared/types/router';
import { RouteProps } from 'react-router-dom';
import { useCallback } from 'react';
import { isInJest } from '@/shared/tests/isInJest';

interface useFetchTestsResult {
  fetchTests: () => Promise<Partial<Record<AppRoutes, RouteProps>> | null>;
}

export const useFetchTests = (): useFetchTestsResult => {
  const dispatch = useAppDispatch();

  const fetchTests = useCallback(async () => {
    if (isInJest()) return null;

    try {
      const testsData = await dispatch(getTests()).unwrap();

      const testsRoutes: Partial<Record<AppRoutes, RouteProps>> =
        testsData.reduce(
          (acc, test) => ({
            ...acc,
            [test.title]: {
              path: getRouteTests(test.title),
              element: (
                <TestsPage
                  key={test.id}
                  theme={test.title}
                  questions={test.questions}
                />
              ),
            },
          }),
          {},
        );

      return testsRoutes;
    } catch (error) {
      console.error('Ошибка при загрузке тестов:', error);
      return null;
    }
  }, [dispatch]);

  return {
    fetchTests,
  };
};

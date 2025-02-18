import { getRouteTests } from '@/shared/const/router';
import { useAppDispatch } from '@/shared/store/config/AppStore';
import { getAllTests, TestsPage } from '@/pages/TestsPage';
import { AppRoutes } from '@/shared/types/router';
import { RouteProps } from 'react-router-dom';
import { useCallback } from 'react';
import { getData } from '@/shared/services/getData';
import { TestInterface } from '@/features/Test';

interface useFetchTestsRoutesResult {
  fetchTestsRoutes: () => Promise<Partial<
    Record<AppRoutes, RouteProps>
  > | null>;
}

export const useFetchTestsRoutes = (): useFetchTestsRoutesResult => {
  const dispatch = useAppDispatch();

  const fetchTestsRoutes = useCallback(async () => {
    try {
      const asyncThunk = getData<TestInterface[]>({
        requestID: 'tests/getAllTests',
        getRequest: getAllTests,
      });
      const testsData = await dispatch(asyncThunk()).unwrap();

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
    fetchTestsRoutes,
  };
};

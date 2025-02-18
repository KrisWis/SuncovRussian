import { AppRoutes } from '@/shared/types/router';
import { RouteProps } from 'react-router-dom';
import { useCallback } from 'react';
import { getData } from '@/shared/services/getData';

import { useAppDispatch } from '@/shared/store';
import {
  DictantsPage,
  DictantType,
  getAllDictants,
} from '@/pages/DictantsPage';
import { getRouteDictant } from '@/shared/const/router';

interface useFetchDictantsRoutesResult {
  fetchDictantsRoutes: () => Promise<Partial<
    Record<AppRoutes, RouteProps>
  > | null>;
}

export const useFetchDictantsRoutes = (): useFetchDictantsRoutesResult => {
  const dispatch = useAppDispatch();

  const fetchDictantsRoutes = useCallback(async () => {
    try {
      const asyncThunk = getData<DictantType[]>({
        requestID: 'Dictants/getAllDictants',
        getRequest: getAllDictants,
      });

      const DictantsData = await dispatch(asyncThunk()).unwrap();

      const DictantsRoutes: Partial<Record<AppRoutes, RouteProps>> =
        DictantsData.reduce((acc, dictant) => {
          const routes = dictant.items.reduce(
            (itemAcc, item) => ({
              ...itemAcc,
              [getRouteDictant(dictant.theme, item.subtheme)]: {
                path: getRouteDictant(dictant.theme, item.subtheme),
                element: <DictantsPage key={item.subtheme} dictant={item} />,
              },
            }),
            {},
          );

          return { ...acc, ...routes };
        }, {});

      return DictantsRoutes;
    } catch (error) {
      console.error('Ошибка при загрузке диктантов:', error);
      return null;
    }
  }, [dispatch]);

  return {
    fetchDictantsRoutes,
  };
};

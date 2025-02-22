import { AppRoutes } from '@/shared/types/router';
import { RouteProps } from 'react-router-dom';
import { useCallback } from 'react';
import { getData } from '@/shared/services/getData';

import { useAppDispatch } from '@/shared/store';
import {
  PartsOfSpeachPage,
  getAllPartsOfSpeach,
} from '@/pages/PartsOfSpeachPage';
import { getRoutePartsOfSpeach } from '@/shared/const/router';
import { PartsOfSpeachType } from '@/pages/PartsOfSpeachPage';

interface useFetchPartsOfSpeachRoutesResult {
  fetchPartsOfSpeachRoutes: () => Promise<Partial<
    Record<AppRoutes, RouteProps>
  > | null>;
}

export const useFetchPartsOfSpeachRoutes =
  (): useFetchPartsOfSpeachRoutesResult => {
    const dispatch = useAppDispatch();

    const fetchPartsOfSpeachRoutes = useCallback(async () => {
      try {
        const asyncThunk = getData<PartsOfSpeachType[]>({
          requestID: 'PartsOfSpeach/getAllPartsOfSpeach',
          getRequest: getAllPartsOfSpeach,
        });

        const partsOfSpeachData = await dispatch(asyncThunk()).unwrap();

        const partsOfSpeachRoutes: Partial<Record<AppRoutes, RouteProps>> =
          partsOfSpeachData.reduce(
            (acc, item) => ({
              ...acc,
              [item.theme]: {
                path: getRoutePartsOfSpeach(item.theme),
                element: <PartsOfSpeachPage item={item} />,
              },
            }),
            {},
          );

        return partsOfSpeachRoutes;
      } catch (error) {
        console.error('Ошибка при загрузке частей речи:', error);
        return null;
      }
    }, [dispatch]);

    return {
      fetchPartsOfSpeachRoutes,
    };
  };

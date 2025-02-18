/* eslint-disable ulbi-tv-plugin/layer-imports */
import { useAppDispatch } from '@/shared/store';
import { getAllTests } from '@/pages/TestsPage';
import { memo, useEffect } from 'react';
import { HeaderMenu } from '../../model/types';
import { getAllDictants } from '@/pages/DictantsPage';
import { getDataForCategory } from './lib/getDataForCategory';
import { getAllPartsOfSpeach } from '@/pages/PartsOfSpeachPage';

interface FetchProviderProps {
  children: React.ReactNode;
  setCategories: React.Dispatch<React.SetStateAction<HeaderMenu>>;
}

export const FetchProvider: React.FC<FetchProviderProps> = memo(
  ({ children, setCategories }): React.JSX.Element => {
    // Получаем тесты с бекенда
    const dispatch = useAppDispatch();

    useEffect(() => {
      const fetchData = async () => {
        try {
          // Получаем тесты с бекенда
          const testsData = await getDataForCategory(
            {
              requestID: 'tests/getAllTests',
              getRequest: getAllTests,
            },
            dispatch,
          );

          // Получаем диктанты с бекенда
          const dictantsData = await getDataForCategory(
            {
              requestID: 'dictants/getAllDictants',
              getRequest: getAllDictants,
            },
            dispatch,
          );

          // Получаем части речи с бекенда
          const partsOfSpeachData = await getDataForCategory(
            {
              requestID: 'partsOfSpeach/getAllPartsOfSpeach',
              getRequest: getAllPartsOfSpeach,
            },
            dispatch,
          );

          // Обновляем стейт с категориями
          setCategories((prevCategories) => ({
            ...prevCategories,
            Тесты: [...testsData.map((test) => test.title)],

            Диктанты: [
              ...dictantsData.map((dictant) => ({
                theme: dictant.theme,
                items: [
                  ...dictant.items.map((item) => ({
                    subtheme: item.subtheme,
                  })),

                  {
                    subtheme: `Все ${dictant.theme}`,
                  },
                ],
              })),
            ],

            'Части речи': [
              ...partsOfSpeachData.map((partOfSpeach) => partOfSpeach.theme),
            ],
          }));
        } catch (error) {
          console.error('Ошибка при загрузке категорий:', error);
        }
      };

      fetchData();
    }, [dispatch, setCategories]);

    return <>{children}</>;
  },
);

FetchProvider.displayName = 'FetchProvider';

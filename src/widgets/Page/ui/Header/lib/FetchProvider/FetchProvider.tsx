/* eslint-disable ulbi-tv-plugin/layer-imports */
import { useAppDispatch } from '@/shared/store';
import { getAllTests } from '@/pages/TestsPage';
import { memo, useEffect } from 'react';
import { HeaderMenu } from '../../model/types';
import { DictantType, getAllDictants } from '@/pages/DictantsPage';
import { getDataForCategory } from './lib/getDataForCategory';
import { getAllPartsOfSpeach, PartsOfSpeachType } from '@/pages/PartsOfSpeachPage';
import { headerCategories } from '../../model/data';
import { TestInterface } from '@/features/Test';

interface FetchProviderProps {
  children: React.ReactNode;
  setCategories: React.Dispatch<React.SetStateAction<HeaderMenu>>;
  setCategoriesLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FetchProvider: React.FC<FetchProviderProps> = memo(
  ({ children, setCategories, setCategoriesLoading }): React.JSX.Element => {
    // Получаем тесты с бекенда
    const dispatch = useAppDispatch();

    useEffect(() => {
      const fetchData = async () => {
        setCategoriesLoading(true);

        try {
          // Получаем тесты с бекенда
          const testsData = await getDataForCategory<TestInterface[]>(
            {
              requestID: 'tests/getAllTests',
              getRequest: getAllTests,
            },
            dispatch,
          );

          // Получаем диктанты с бекенда
          const dictantsData = await getDataForCategory<DictantType[]>(
            {
              requestID: 'dictants/getAllDictants',
              getRequest: getAllDictants,
            },
            dispatch,
          );

          // Получаем части речи с бекенда
          const partsOfSpeachData = await getDataForCategory<PartsOfSpeachType[]>(
            {
              requestID: 'partsOfSpeach/getAllPartsOfSpeach',
              getRequest: getAllPartsOfSpeach,
            },
            dispatch,
          );

          // Функция для получения объекта с диктантами
          const getDictantsItems = (dictant: DictantType) => [
            ...dictant.items.map((item) => ({
              subtheme: item.subtheme,
            })),
          ];

          // Обновляем стейт с категориями
          setCategories((prevCategories) => ({
            ...prevCategories,
            ...headerCategories,
            Тесты: [...testsData.map((test) => test.title)],

            Диктанты: [
              ...dictantsData.map((dictant) => ({
                theme: dictant.theme,
                items:
                  dictant.items.length > 1
                    ? [
                        ...getDictantsItems(dictant),

                        {
                          subtheme: `Все ${dictant.theme}`,
                        },
                      ]
                    : [...getDictantsItems(dictant)],
              })),
            ],

            'Части речи': [
              ...partsOfSpeachData.map((partOfSpeach) => partOfSpeach.theme),
            ],
          }));
        } catch (error) {
          console.error('Ошибка при загрузке категорий:', error);
        } finally {
          setCategoriesLoading(false);
        }
      };

      fetchData();
    }, [dispatch, setCategories, setCategoriesLoading]);

    return <>{children}</>;
  },
);

FetchProvider.displayName = 'FetchProvider';

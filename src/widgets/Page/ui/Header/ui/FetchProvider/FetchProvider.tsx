/* eslint-disable ulbi-tv-plugin/layer-imports */
import { useAppDispatch } from '@/shared/store';
import { getAllTests } from '@/pages/TestsPage';
import { memo, useEffect } from 'react';
import { HeaderMenu } from '../../model/types';
import { getData } from '@/shared/services/getData';
import { TestInterface } from '@/features/Test';
import { DictantType } from '@/features/Dictant';
import { getAllDictants } from '@/pages/DictantsPage';

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
          const asyncThunk = getData<TestInterface[]>(
            'tests/getAllTests',
            getAllTests,
          );
          const testsData = await dispatch(asyncThunk()).unwrap();

          // Получаем диктанты с бекенда
          const asyncThunkDictants = getData<DictantType[]>(
            'dictants/getAllDictants',
            getAllDictants,
          );
          const dictantsData = await dispatch(asyncThunkDictants()).unwrap();

          // Обновляем стейт с категориями
          setCategories((prevCategories) => ({
            ...prevCategories,
            Тесты: [...testsData.map((test) => test.title)],

            Диктанты: [
              ...dictantsData.map((dictant) => ({
                theme: dictant.theme,
                items: dictant.items.map((item) => ({
                  subtheme: item.subtheme,
                })),
              })),
            ],
          }));
        } catch (error) {
          console.error('Ошибка при загрузке тестов:', error);
        }
      };

      fetchData();
    }, [dispatch, setCategories]);

    return <>{children}</>;
  },
);

FetchProvider.displayName = 'FetchProvider';

/* eslint-disable ulbi-tv-plugin/layer-imports */
import { useAppDispatch } from '@/shared/store';
import { getTests } from '@/pages/TestsPage';
import { memo, useEffect } from 'react';
import { HeaderMenu } from '../../model/types';

interface FetchProviderProps {
  children: React.ReactNode;
  setCategories: React.Dispatch<React.SetStateAction<HeaderMenu>>;
}

export const FetchProvider: React.FC<FetchProviderProps> = memo(
  ({ children, setCategories }): React.JSX.Element => {
    // Получаем тесты с бекенда
    const dispatch = useAppDispatch();

    useEffect(() => {
      const fetchTests = async () => {
        try {
          const testsData = await dispatch(getTests()).unwrap();

          setCategories((prevCategories) => ({
            ...prevCategories,
            Тесты: [...testsData.map((test) => test.title)],
          }));
        } catch (error) {
          console.error('Ошибка при загрузке тестов:', error);
        }
      };

      fetchTests();
    }, [dispatch, setCategories]);

    return <>{children}</>;
  },
);

FetchProvider.displayName = 'FetchProvider';

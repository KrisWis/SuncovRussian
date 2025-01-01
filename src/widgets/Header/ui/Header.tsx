import { Flex } from '@/shared/lib/Stack';
import * as styles from './Header.module.scss';
import { memo, useCallback, useContext, useEffect } from 'react';
import { HeaderCategories } from '../model/types';
import { HeaderContext } from '../model/HeaderContext';

const headerCategories: HeaderCategories[] = [
  'Тесты',
  'Теория',
  'Тренажер',
  'Сочинения',
];

export const Header: React.FC = memo((): React.JSX.Element => {
  // Получение данных из контекста
  const { setHeaderCategory, headerCategory } = useContext(HeaderContext);

  // При клике на пустое пространство сбрасывается выбор категории
  useEffect(() => {
    const onClickEmptySpace = (e: MouseEvent) => {
      const root =
        (document.querySelector('#root') as HTMLElement) ||
        (document.querySelector('body') as HTMLElement);

      if (
        ['MAIN', 'BODY'].includes((e.target as HTMLElement).nodeName) &&
        root.style.pointerEvents !== 'none'
      ) {
        setHeaderCategory(null);
      }
    };

    document.addEventListener('click', onClickEmptySpace);

    return () => {
      document.removeEventListener('click', onClickEmptySpace);
    };
  }, [setHeaderCategory]);

  // Обработка клика на категорию
  const onClickCategory = useCallback(
    (category: HeaderCategories) => {
      if (category === headerCategory) {
        setHeaderCategory(null);
      } else {
        setHeaderCategory(category);
      }
    },
    [headerCategory, setHeaderCategory],
  );

  return (
    <header className={styles.Header}>
      {headerCategories.map((category) => (
        <Flex
          maxHeight
          justify="center"
          onClick={() => onClickCategory(category)}
          key={category}
          className={styles.Header__item}
        >
          {category}
        </Flex>
      ))}
    </header>
  );
});

Header.displayName = 'Header';

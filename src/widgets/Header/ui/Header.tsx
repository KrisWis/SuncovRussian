import { Flex } from '@/shared/lib/Stack';
import * as styles from './Header.module.scss';
import { memo, useCallback, useContext, useEffect, useState } from 'react';
import { HeaderContext } from '../model/HeaderContext';
import { HeaderCategories } from '../model/types';
import { headerCategories } from '../model/data';

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

  // Обработка наведения на категории
  const [headerHoveredCategory, setHoveredHeaderCategory] = useState<
    string | null
  >(null);

  return (
    <header className={styles.Header}>
      {Object.entries(headerCategories).map(([category, submenu]) => (
        <Flex
          onMouseEnter={() =>
            setHoveredHeaderCategory(category as HeaderCategories)
          }
          onMouseLeave={() => setHoveredHeaderCategory(null)}
          key={category}
          direction="column"
          relative
        >
          <Flex
            maxHeight
            justify="center"
            onClick={
              submenu.length > 0
                ? () => {}
                : () => onClickCategory(category as HeaderCategories)
            }
            className={styles.Header__item}
          >
            {category}
          </Flex>

          {submenu.length > 0 && (
            <Flex
              gap="10"
              align="start"
              className={`${styles.Header__submenu} 
            ${headerHoveredCategory === category && styles.Header__submenu__active}`}
              direction="column"
            >
              {submenu.map((menuItem) => (
                <span
                  onClick={() => setHeaderCategory(menuItem)}
                  key={menuItem}
                  className={styles.Header__submenu__item}
                >
                  {menuItem}
                </span>
              ))}
            </Flex>
          )}
        </Flex>
      ))}
    </header>
  );
});

Header.displayName = 'Header';

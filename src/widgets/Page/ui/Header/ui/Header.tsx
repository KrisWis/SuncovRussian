import { Flex } from '@/shared/lib/Stack';
import * as styles from './Header.module.scss';
import { memo, useEffect, useState } from 'react';
import { headerCategories, headerRoutesCategories } from '../model/data';
import { HeaderCategoryType } from '../model/types';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import { isOnStorybook } from '@/shared/utils/isOnStorybook';
=======
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)
=======
import { isOnStorybook } from '@/shared/utils/isOnStorybook';
>>>>>>> 786c80e (Add new trainers.)

export const Header: React.FC = memo((): React.JSX.Element => {
  // При клике на пустое пространство сбрасывается выбор категории
  useEffect(() => {
    const onClickEmptySpace = (e: MouseEvent) => {
      const main: HTMLElement = document.querySelector('main')!;
<<<<<<< HEAD
<<<<<<< HEAD
      const mainRoute: string = '/';

      if (!isOnStorybook()) {
        if (
          ['MAIN', 'BODY'].includes((e.target as HTMLElement).nodeName) &&
          main.style.pointerEvents !== 'none' &&
          window.location.pathname !== mainRoute
        ) {
          window.location.pathname = mainRoute;
        }
<<<<<<< HEAD
=======
=======
      const mainRoute: string = '/';
>>>>>>> 06f1d0e (Bugfix)

      if (
        ['MAIN', 'BODY'].includes((e.target as HTMLElement).nodeName) &&
        main.style.pointerEvents !== 'none' &&
        window.location.pathname !== mainRoute
      ) {
<<<<<<< HEAD
        window.location.href = '/';
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)
=======
        window.location.pathname = mainRoute;
>>>>>>> 06f1d0e (Bugfix)
=======
>>>>>>> 786c80e (Add new trainers.)
      }
    };

    document.addEventListener('click', onClickEmptySpace);

    return () => {
      document.removeEventListener('click', onClickEmptySpace);
    };
  }, []);

  // Обработка наведения на категории
  const [headerHoveredCategory, setHoveredHeaderCategory] = useState<
    string | null
  >(null);

  return (
    <header className={styles.Header}>
      {Object.entries(headerCategories).map(([category, submenu]) => (
        <Flex
          onMouseLeave={() => setHoveredHeaderCategory(null)}
          key={category}
          direction="column"
          relative
        >
          <Flex
            maxHeight
            justify="center"
            onMouseEnter={() => setHoveredHeaderCategory(category)}
            className={styles.Header__item}
            data-testid={`Header__${category}`}
          >
            {submenu.length > 0 ? (
              <>{category}</>
            ) : (
              <Link
                to={`/${headerRoutesCategories[category as HeaderCategoryType]}`}
              >
                {category}
              </Link>
            )}
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
                <Link
                  to={`/${headerRoutesCategories[category as HeaderCategoryType]}/${headerRoutesCategories[menuItem as HeaderCategoryType]}`}
                  key={menuItem}
                  className={styles.Header__submenu__item}
                >
                  {menuItem}
                </Link>
              ))}
            </Flex>
          )}
        </Flex>
      ))}
    </header>
  );
});

Header.displayName = 'Header';

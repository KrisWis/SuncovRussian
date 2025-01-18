import { Flex } from '@/shared/lib/Stack';
import * as styles from './Header.module.scss';
import { memo, useState } from 'react';
import { headerCategories, headerRoutesCategories } from '../model/data';
import { HeaderCategoryType } from '../model/types';
import { Link } from 'react-router-dom';

interface HeaderProps {
  withHomeButton?: boolean;
}

export const Header: React.FC<HeaderProps> = memo(
  ({ withHomeButton = true }): React.JSX.Element => {
    // Обработка наведения на категории
    const [headerHoveredCategory, setHoveredHeaderCategory] = useState<
      string | null
    >(null);

    return (
      <header className={styles.Header}>
        <Flex maxHeight width="100">
          {Object.entries(headerCategories).map(([category, submenu]) => {
            // Инициализация ссылки предмета навигации
            const itemLink = `/${headerRoutesCategories[category as HeaderCategoryType]}`;
            const regexForCategory = new RegExp(itemLink.replace(/\//g, '\\/'));

            return (
              <Flex
                onMouseLeave={() => setHoveredHeaderCategory(null)}
                key={category}
                direction="column"
                relative
                maxHeight
              >
                <Flex
                  maxHeight
                  justify="center"
                  onMouseEnter={() => setHoveredHeaderCategory(category)}
                  className={`${styles.Header__item} 
                ${regexForCategory.test(window.location.pathname) && styles.Header__item__active}`}
                  data-testid={`Header__${category}`}
                >
                  {submenu.length > 0 ? (
                    <>{category}</>
                  ) : (
                    <Link to={itemLink}>{category}</Link>
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
                    {submenu.map((menuItem) => {
                      // Инициализация предмета подменю
                      const submenuItemLink = `/${headerRoutesCategories[category as HeaderCategoryType]}/${headerRoutesCategories[menuItem as HeaderCategoryType]}`;
                      const regexForSubmenu = new RegExp(
                        submenuItemLink.replace(/\//g, '\\/'),
                      );

                      return (
                        <Link
                          to={submenuItemLink}
                          key={menuItem}
                          className={`${styles.Header__submenu__item} 
                        ${regexForSubmenu.test(window.location.pathname) && styles.Header__submenu__item__active}`}
                          onClick={() => setHoveredHeaderCategory(null)}
                        >
                          {menuItem}
                        </Link>
                      );
                    })}
                  </Flex>
                )}
              </Flex>
            );
          })}
        </Flex>

        {withHomeButton && (
          <Flex maxHeight justify="center" className={styles.Header__item}>
            <Link to="/">Домой</Link>
          </Flex>
        )}
      </header>
    );
  },
);

Header.displayName = 'Header';

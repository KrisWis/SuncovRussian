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
        {withHomeButton && (
          <Flex maxHeight justify="center" className={`${styles.Header__item} ${styles.Header__toHome}`}>
            <Link to="/">Домой</Link>
          </Flex>
        )}

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
  },
);

Header.displayName = 'Header';

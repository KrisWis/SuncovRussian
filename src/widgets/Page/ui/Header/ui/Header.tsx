import { Flex } from '@/shared/lib/Stack';
import * as styles from './Header.module.scss';
import { Fragment, memo, useState } from 'react';
import { headerCategories, headerRoutesCategories } from '../model/data';
import { HeaderCategoryType, HeaderMenu } from '../model/types';
import { Link } from 'react-router-dom';
import { transliterate } from '@/shared/utils/transliterate';
import { isInJest } from '@/shared/tests/isInJest';

import { FetchProvider } from '../lib/FetchProvider/FetchProvider';

interface HeaderProps {
  withHomeButton?: boolean;
}

export const Header: React.FC<HeaderProps> = memo(
  ({ withHomeButton = true }): React.JSX.Element => {
    // Обработка наведения на категории
    const [headerHoveredCategory, setHoveredHeaderCategory] = useState<
      string | null
    >(null);

    // Реализация показа подменю при наведении на категорию
    const [visibleSubmenu, setVisibleSubmenu] = useState<string | null>(null);

    // Получение дата-атрибутов из html
    const publicUrl = isInJest()
      ? ''
      : JSON.parse(document.body.getAttribute('data-publicUrl')!);

    const isDev = JSON.parse(document.body.getAttribute('data-isdev')!);
    const startPath = isDev ? '' : `/${publicUrl}`;

    // Делаем категории хедера стейтом
    const [categories, setCategories] = useState<HeaderMenu>(headerCategories);

    return (
      <header className={styles.Header}>
        <FetchProvider setCategories={setCategories}>
          <Flex maxHeight>
            {Object.entries(categories).map(([category, submenu]) => {
              // Инициализация ссылки предмета навигации
              const itemLink = `/${headerRoutesCategories[category as HeaderCategoryType]}`;
              const regexForCategory = new RegExp(
                itemLink.replace(/\//g, '\\/'),
              );

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
                      align="start"
                      className={`${styles.Header__submenu} 
            ${headerHoveredCategory === category && styles.Header__submenu__active}`}
                      direction="column"
                    >
                      {submenu.map((menuItem) => {
                        const isUsual = typeof menuItem === 'string';

                        return (
                          <Fragment key={isUsual ? menuItem : menuItem.theme}>
                            {isUsual
                              ? (() => {
                                  // Инициализация предмета подменю
                                  const submenuItemLink: string = `/${headerRoutesCategories[category as HeaderCategoryType]}/${transliterate(menuItem)}`;

                                  return (
                                    <Link
                                      to={submenuItemLink}
                                      className={`${styles.Header__submenu__item} 
                                    ${`${startPath}${submenuItemLink}` === window.location.pathname && styles.Header__submenu__item__active}`}
                                      onClick={() =>
                                        setHoveredHeaderCategory(null)
                                      }
                                    >
                                      {menuItem}
                                    </Link>
                                  );
                                })()
                              : (() => {
                                  // Ссылка на подменю
                                  const submenuItemLink = (
                                    subTheme: string,
                                  ): string =>
                                    `/${headerRoutesCategories[category as HeaderCategoryType]}/${transliterate(menuItem.theme)}/${transliterate(subTheme)}`;

                                  // Разбитие подменю на слайсы по 10 штук
                                  const submenuItems = menuItem.items.reduce<
                                    Array<typeof menuItem.items>
                                  >((acc, item, index) => {
                                    const chunkIndex = Math.floor(index / 10);

                                    if (!acc[chunkIndex]) {
                                      acc[chunkIndex] = [];
                                    }

                                    acc[chunkIndex].push(item);
                                    return acc;
                                  }, []);

                                  return (
                                    <Flex
                                      onMouseLeave={() =>
                                        setVisibleSubmenu(null)
                                      }
                                      align="start"
                                    >
                                      <span
                                        className={`${styles.Header__submenu__item} 
                                    ${
                                      window.location.pathname.startsWith(
                                        `${startPath}/${headerRoutesCategories[category as HeaderCategoryType]}/${transliterate(menuItem.theme)}/`,
                                      ) && styles.Header__submenu__item__active
                                    }`}
                                        onMouseEnter={() =>
                                          setVisibleSubmenu(menuItem.theme)
                                        }
                                      >
                                        {menuItem.theme}
                                      </span>

                                      <Flex
                                        align="start"
                                        className={`${styles.Header__submenu__submenu} 
                                        ${visibleSubmenu === menuItem.theme && styles.Header__submenu__submenu__visible}`}
                                      >
                                        {submenuItems.map((items) => (
                                          <Flex
                                            key={items[0].subtheme}
                                            direction="column"
                                            align="start"
                                            className={
                                              styles.Header__submenu__submenu__column
                                            }
                                          >
                                            {items.map((item) => (
                                              <Link
                                                className={`${styles.Header__submenu__item} 
                                              ${
                                                `${startPath}${submenuItemLink(
                                                  item.subtheme,
                                                )}` ===
                                                  window.location.pathname &&
                                                styles.Header__submenu__item__active
                                              }`}
                                                to={submenuItemLink(
                                                  item.subtheme,
                                                )}
                                                key={item.subtheme}
                                              >
                                                {item.subtheme}
                                              </Link>
                                            ))}
                                          </Flex>
                                        ))}
                                      </Flex>
                                    </Flex>
                                  );
                                })()}
                          </Fragment>
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
        </FetchProvider>
      </header>
    );
  },
);

Header.displayName = 'Header';

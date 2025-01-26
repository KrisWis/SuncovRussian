import * as styles from './TheorySidebar.module.scss';
import { memo, useContext, useEffect, useState } from 'react';
import { TheoryPageContext } from '../../model/context/TheoryPageContext';

interface TheorySidebarProps {
  pdfFilesTitles: string[];
}

export const TheorySidebar: React.FC<TheorySidebarProps> = memo(
  ({ pdfFilesTitles }): React.JSX.Element => {
    // Выбор раздела
    const { selectedSection, setSelectedSection } =
      useContext(TheoryPageContext);

    // Инициализация первого раздела как значения по умолчанию
    useEffect(() => {
      setSelectedSection(pdfFilesTitles[0]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setSelectedSection]);

    // Если скролл пользователя не максимально вверху, то убираем margin-top
    const [marginTop, setMarginTop] = useState<string | number>(
      'var(--header-height)',
    );

    useEffect(() => {
      const checkScroll = () => {
        if (document.body.scrollTop === 0) {
          setMarginTop('var(--header-height)');
        } else {
          setMarginTop(0);
        }
      };

      document.body.addEventListener('scroll', checkScroll);
      return () => document.body.removeEventListener('scroll', checkScroll);
    }, []);

    return (
      <aside
        data-testid="Theory__Sidebar"
        className={styles.TheorySidebar}
        style={{ marginTop: marginTop }}
      >
        {pdfFilesTitles.map((title, index) => (
          <span
            data-testid={`Theory__Sidebar__${index}`}
            onClick={() => setSelectedSection(title)}
            className={`${styles.TheorySidebar__title} ${selectedSection === title && styles.TheorySidebar__title__selected}`}
            key={title}
          >
            {title}
          </span>
        ))}
      </aside>
    );
  },
);

TheorySidebar.displayName = 'TheorySidebar';

import { Flex } from '@/shared/lib/Stack';
import * as styles from './TheorySidebar.module.scss';
import { memo, useContext, useEffect, useState } from 'react';
import { TheorySidebarProps } from '../model/types';
import { TheoryContext } from '../../../model/context/TheoryContext';
import { mobileMediaQueryWidth } from '@/shared/const/global';

export const TheorySidebar: React.FC<TheorySidebarProps> = memo(
  ({ pdfFilesTitles }): React.JSX.Element => {
    // Выбор раздела
    const { selectedSection, setSelectedSection } = useContext(TheoryContext);

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
      <Flex
        direction={mobileMediaQueryWidth.matches ? 'row' : 'column'}
        maxHeight
        align="start"
        width={mobileMediaQueryWidth.matches ? '100' : '15'}
        gap="15"
        className={styles.TheorySidebar}
        style={{ marginTop: marginTop }}
      >
        {pdfFilesTitles.map((title) => (
          <span
            onClick={() => setSelectedSection(title)}
            className={`${styles.TheorySidebar__title} ${selectedSection === title && styles.TheorySidebar__title__selected}`}
            key={title}
          >
            {title}
          </span>
        ))}
      </Flex>
    );
  },
);

TheorySidebar.displayName = 'TheorySidebar';

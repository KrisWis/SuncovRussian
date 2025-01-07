import { Flex } from '@/shared/lib/Stack';
import * as styles from './TheorySidebar.module.scss';
import { memo, useContext, useEffect } from 'react';
import { TheorySidebarProps } from '../model/types';
import { TheoryContext } from '../../../model/context/TheoryContext';

export const TheorySidebar: React.FC<TheorySidebarProps> = memo(
  ({ pdfFilesTitles }): React.JSX.Element => {
    // Выбор раздела
    const { selectedSection, setSelectedSection } = useContext(TheoryContext);

    // Инициализация первого раздела как значения по умолчанию
    useEffect(() => {
      setSelectedSection(pdfFilesTitles[0]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setSelectedSection]);

    return (
      <Flex
        direction="column"
        maxHeight
        align="start"
        width="20"
        gap="15"
        className={styles.TheorySidebar}
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

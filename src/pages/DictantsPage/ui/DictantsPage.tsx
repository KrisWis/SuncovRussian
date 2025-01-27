import { Flex } from '@/shared/lib/Stack';
import { Page } from '@/widgets/Page';
import { memo } from 'react';
import * as styles from './DictantsPage.module.scss';
import { DictantItem } from '../model/types/types';
import { Dictant } from '@/features/Dictant';

export interface DictantsPageProps {
  dictant: DictantItem;
}

export const DictantsPage: React.FC<DictantsPageProps> = memo(
  ({ dictant }): React.JSX.Element => {
    return (
      <Page className={styles.DictantsPage}>
        <Flex direction="column" gap="50" maxHeight width="100">
          <h1 className={styles.DictantsPage__title}>
            тема: {dictant.subtheme}
          </h1>

          <Dictant text={dictant.text} />
        </Flex>
      </Page>
    );
  },
);

DictantsPage.displayName = 'DictantsPage';

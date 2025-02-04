import { Flex } from '@/shared/lib/Stack';
import { Page } from '@/widgets/Page';
import { memo } from 'react';
import * as styles from './DictantsPage.module.scss';
import { DictantItem } from '@/features/Dictant';
import { Dictant } from '@/features/Dictant';

export interface DictantsPageProps {
  dictant: DictantItem;
}

export const DictantsPage: React.FC<DictantsPageProps> = memo(
  ({ dictant }): React.JSX.Element => {
    return (
      <Page className={styles.DictantsPage}>
        <Flex direction="column" gap="50" maxHeight width="100">
          <Dictant text={dictant.text} theme={dictant.subtheme} />
        </Flex>
      </Page>
    );
  },
);

DictantsPage.displayName = 'DictantsPage';

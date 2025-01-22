import { Flex } from '@/shared/lib/Stack';
import { Page } from '@/widgets/Page';
import { memo } from 'react';
import * as styles from './DictantsPage.module.scss';
import { DictantType } from '../model/types/types';
import { Button } from '@/shared/ui/Button';
import { Dictant } from '@/features/Dictant';

export interface DictantsPageProps {
  dictant: DictantType;
}

export const DictantsPage: React.FC<DictantsPageProps> = memo(
  ({ dictant }): React.JSX.Element => {
    return (
      <Page className={styles.DictantsPage}>
        <Flex direction="column" gap="50" maxHeight width="100">
          <h1 className={styles.DictantsPage__title}>тема: {dictant.theme}</h1>

          <Dictant text={dictant.text} />

          <Button type="button">Проверить</Button>
        </Flex>
      </Page>
    );
  },
);

DictantsPage.displayName = 'DictantsPage';

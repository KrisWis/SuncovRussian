import { memo } from 'react';
import { Page } from '@/widgets/Page';

import { ProviderForTests } from '@/shared/lib/ProviderForTests';
import { PartsOfSpeachItemTemplate } from './PartsOfSpeachItemTemplate/PartsOfSpeachItemTemplate';
import { PartsOfSpeachType } from '../model/types/types';

export interface PartsOfSpeachPageProps {
  item: PartsOfSpeachType;
}

export const PartsOfSpeachPage: React.FC<PartsOfSpeachPageProps> = memo(
  ({ item }): React.JSX.Element => {
    return (
      <Page withMarginTop>
        <ProviderForTests theme={item.theme} items={item.items}>
          <PartsOfSpeachItemTemplate />
        </ProviderForTests>
      </Page>
    );
  },
);

PartsOfSpeachPage.displayName = 'PartsOfSpeachPage';

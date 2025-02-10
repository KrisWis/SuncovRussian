import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { PartsOfSpeachItem } from '../model/types/types';
import { ProviderForTests } from '@/shared/lib/ProviderForTests';
import { PartsOfSpeachItemTemplate } from './PartsOfSpeachItemTemplate/PartsOfSpeachItemTemplate';

export interface PartsOfSpeachPageProps {
  theme: string;
  item: PartsOfSpeachItem;
}

export const PartsOfSpeachPage: React.FC<PartsOfSpeachPageProps> = memo(
  ({ theme, item }): React.JSX.Element => {
    return (
      <Page withMarginTop>
        <ProviderForTests theme={theme} items={item.items}>
          <PartsOfSpeachItemTemplate />
        </ProviderForTests>
      </Page>
    );
  },
);

PartsOfSpeachPage.displayName = 'PartsOfSpeachPage';

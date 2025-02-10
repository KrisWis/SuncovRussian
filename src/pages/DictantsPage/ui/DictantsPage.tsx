import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { DictantItem } from '@/features/Dictant';
import { ProviderForTests } from '@/shared/lib/ProviderForTests';
import { DictantTemplate } from './DictantTemplate/DictantTemplate';

export interface DictantsPageProps {
  dictant: DictantItem;
}

export const DictantsPage: React.FC<DictantsPageProps> = memo(
  ({ dictant }): React.JSX.Element => {
    return (
      <Page withMarginTop>
        <ProviderForTests theme={dictant.subtheme}>
          <DictantTemplate text={dictant.text} theme={dictant.subtheme} />
        </ProviderForTests>
      </Page>
    );
  },
);

DictantsPage.displayName = 'DictantsPage';

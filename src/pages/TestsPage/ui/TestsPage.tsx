import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { TestsItem } from '../model/types/types';
import { ProviderForTests } from '@/shared/lib/ProviderForTests';
import { TestTemplate } from './TestTemplate/TestTemplate';

export interface TestsPageProps {
  theme: string;
  item: TestsItem;
}

export const TestsPage: React.FC<TestsPageProps> = memo(
  ({ theme, item }): React.JSX.Element => {
    return (
      <Page withMarginTop>
        <ProviderForTests theme={theme} items={item.items}>
          <TestTemplate />
        </ProviderForTests>
      </Page>
    );
  },
);

TestsPage.displayName = 'TestsPage';

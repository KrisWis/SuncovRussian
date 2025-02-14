import { Page } from '@/widgets/Page';
import { memo } from 'react';
import { ProviderForTests } from '@/shared/lib/ProviderForTests';
import { TestTemplate } from './TestTemplate/TestTemplate';
import { Question } from '@/features/Test';

export interface TestsPageProps {
  theme: string;
  questions: Question[];
}

export const TestsPage: React.FC<TestsPageProps> = memo(
  ({ theme, questions }): React.JSX.Element => {
    return (
      <Page withMarginTop>
        <ProviderForTests theme={theme} items={questions}>
          <TestTemplate />
        </ProviderForTests>
      </Page>
    );
  },
);

TestsPage.displayName = 'TestsPage';

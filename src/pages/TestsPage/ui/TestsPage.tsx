import { Page } from '@/widgets/Page';
import { memo } from 'react';

export const TestsPage: React.FC = memo((): React.JSX.Element => {
  return <Page>Страница тестов</Page>;
});

TestsPage.displayName = 'TestsPage';

import { Flex } from '@/shared/lib/Stack';
import { Page } from '@/widgets/Page';
import { memo } from 'react';

export const NotFoundPage: React.FC = memo((): React.JSX.Element => {
  return (
    <Page data-testid="NotFoundPage">
      <Flex maxHeight width="100" justify="center">
        Страница не существует!
      </Flex>
    </Page>
  );
});

NotFoundPage.displayName = 'NotFoundPage';

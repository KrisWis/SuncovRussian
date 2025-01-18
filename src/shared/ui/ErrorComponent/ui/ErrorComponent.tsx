import { memo } from 'react';
import { Flex } from '@/shared/lib/Stack';
// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { Page } from '@/widgets/Page';
interface ErrorComponentProps {
  withHeader?: boolean;
}

export const ErrorComponent: React.FC<ErrorComponentProps> = memo(
  ({ withHeader = true }): React.JSX.Element => {
    const content = (
      <Flex data-testid="ErrorComponent" maxHeight width="100" justify="center">
        На сайте возникла непредвиденная ошибка. Приносим свои извинения.
      </Flex>
    );

    return withHeader ? <Page>{content}</Page> : content;
  },
);

ErrorComponent.displayName = 'ErrorComponent';

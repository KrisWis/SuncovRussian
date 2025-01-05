import { memo } from 'react';
import { Flex } from '@/shared/lib/Stack';
import { ErrorComponentProps } from '../model/types';

export const ErrorComponent: React.FC<ErrorComponentProps> = memo(
  ({ className }): React.JSX.Element => {
    return (
      <Flex className={className} maxHeight width="100" justify="center">
        На сайте возникла непредвиденная ошибка. Приносим свои извинения.
      </Flex>
    );
  },
);

ErrorComponent.displayName = 'ErrorComponent';

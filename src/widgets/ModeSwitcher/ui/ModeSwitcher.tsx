import { Flex } from '@/shared/lib/Stack';
import { memo } from 'react';
import {
  ModeSwitcherItem,
  ModeSwitcherItemProps,
} from './ModeSwitcherItem/ModeSwitcherItem';

interface ModeSwitcherProps {
  items: ModeSwitcherItemProps[];
}

export const ModeSwitcher: React.FC<ModeSwitcherProps> = memo(
  ({ items }): React.JSX.Element => {
    return (
      <Flex justify="end" width="100" gap="10" relative>
        <Flex direction="column" gap="10">
          {items.map((item) => (
            <ModeSwitcherItem key={item.name} {...item} />
          ))}
        </Flex>
      </Flex>
    );
  },
);

ModeSwitcher.displayName = 'ModeSwitcher';

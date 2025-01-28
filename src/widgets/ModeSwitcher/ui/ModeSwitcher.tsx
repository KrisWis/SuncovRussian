import { Flex } from '@/shared/lib/Stack';
import { memo } from 'react';
import { Hint } from '@/shared/ui/Hint';
import {
  ModeSwitcherItem,
  ModeSwitcherItemProps,
} from './ModeSwitcherItem/ModeSwitcherItem';
import * as styles from './ModeSwitcher.module.scss';

interface ModeSwitcherProps {
  items: ModeSwitcherItemProps[];
}

export const ModeSwitcher: React.FC<ModeSwitcherProps> = memo(
  ({ items }): React.JSX.Element => {
    return (
      <Flex
        data-testid="Trainer__StrictModeSwitcher"
        justify="end"
        width="100"
        gap="10"
        relative
      >
        <Flex direction="column" gap="20">
          {items.map((item) => (
            <ModeSwitcherItem
              key={item.name}
              name={item.name}
              onClick={item.onClick}
              modeIsOn={item.modeIsOn}
              setModeIsOn={item.setModeIsOn}
            />
          ))}
        </Flex>

        <Hint
          textClassName={styles.ModeSwitcher__hint}
          textDirection="top"
          text={`Выберите один из режимов`}
        ></Hint>
      </Flex>
    );
  },
);

ModeSwitcher.displayName = 'ModeSwitcher';

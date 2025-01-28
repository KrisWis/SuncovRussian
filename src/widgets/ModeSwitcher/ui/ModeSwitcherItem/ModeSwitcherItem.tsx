import { Flex } from '@/shared/lib/Stack';
import * as styles from './ModeSwitcherItem.module.scss';
import { memo, useCallback } from 'react';
import СheckmarkSVG from '@/shared/assets/icons/global/СheckmarkSVG.svg';

export interface ModeSwitcherItemProps {
  name: string;
  onClick: () => void;
  modeIsOn: boolean;
  setModeIsOn: (modeIsOn: boolean) => void;
}

export const ModeSwitcherItem: React.FC<ModeSwitcherItemProps> = memo(
  ({ name, onClick, modeIsOn, setModeIsOn }): React.JSX.Element => {
    // Добавление переключения режима к входящей функции
    const handleClick = useCallback(() => {
      setModeIsOn(!modeIsOn);
      onClick();
    }, [onClick, modeIsOn, setModeIsOn]);

    return (
      <Flex
        className={`${styles.ModeSwitcherItem}
        ${modeIsOn && styles.ModeSwitcherItem__active}`}
      >
        <Flex
          onClick={handleClick}
          className={styles.ModeSwitcherItem__switcher}
          justify="center"
        >
          <СheckmarkSVG
            className={styles.ModeSwitcherItem__switcher__checkmark}
          />
        </Flex>

        <span className={styles.ModeSwitcherItem__text}>{name}</span>
      </Flex>
    );
  },
);

ModeSwitcherItem.displayName = 'ModeSwitcherItem';

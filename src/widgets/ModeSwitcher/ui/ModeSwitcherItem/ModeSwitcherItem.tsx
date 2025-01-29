import { Flex } from '@/shared/lib/Stack';
import * as styles from './ModeSwitcherItem.module.scss';
import { memo, useCallback, useState } from 'react';
import СheckmarkSVG from '@/shared/assets/icons/global/СheckmarkSVG.svg';

export interface ModeSwitcherItemProps {
  name: string;
  onClick: () => void;
  modeIsOn: boolean;
  setModeIsOn: (modeIsOn: boolean) => void;
  hintText?: string;
}

export const ModeSwitcherItem: React.FC<ModeSwitcherItemProps> = memo(
  ({ name, onClick, modeIsOn, setModeIsOn, hintText }): React.JSX.Element => {
    // Добавление переключения режима к входящей функции
    const handleClick = useCallback(() => {
      setModeIsOn(!modeIsOn);
      onClick();
    }, [onClick, modeIsOn, setModeIsOn]);

    // Отображение подсказки для режима
    const [isHintVisible, setIsHintVisible] = useState(false);

    return (
      <Flex direction="column" relative>
        <Flex
          className={`${styles.ModeSwitcherItem}
        ${modeIsOn && styles.ModeSwitcherItem__active}`}
        >
          <Flex
            onClick={handleClick}
            className={styles.ModeSwitcherItem__switcher}
            justify="center"
            data-testid={`ModeSwitcherItem__${name}`}
            data-selected={modeIsOn}
          >
            <СheckmarkSVG
              className={styles.ModeSwitcherItem__switcher__checkmark}
            />
          </Flex>

          <span
            onMouseEnter={() => setIsHintVisible(true)}
            onMouseLeave={() => setIsHintVisible(false)}
            className={styles.ModeSwitcherItem__text}
          >
            {name}
          </span>
        </Flex>

        {hintText && (
          <Flex
            justify="center"
            className={`${styles.ModeSwitcherItem__hint} 
        ${isHintVisible && styles.ModeSwitcherItem__hint__active}`}
          >
            {hintText}
          </Flex>
        )}
      </Flex>
    );
  },
);

ModeSwitcherItem.displayName = 'ModeSwitcherItem';

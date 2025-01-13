import { Flex } from '@/shared/lib/Stack';
import * as styles from './StrictModeSwitcher.module.scss';
import { memo, useCallback, useState } from 'react';
import СheckmarkSVG from '@/shared/assets/icons/global/СheckmarkSVG.svg';
import { useWords } from '../../../model/selectors/getTrainerWords/getTrainerWords';
import { useTrainerActions } from '../../../model/slice/TrainerPageSlice';
import { Hint } from '@/shared/ui/Hint';

export const StrictModeSwitcher: React.FC = memo((): React.JSX.Element => {
  // Переключение строгого режима
  const [strictModeIsOn, setStrictModeIsOn] = useState<boolean>(false);

  // Строгий режим
  const storeWords = useWords();

  const {
    changeWordProbability,
    changeWordConsecutivelyTimes,
    changeWordInProgressStatus,
  } = useTrainerActions();

  // Функция очистки прогресса
  const clearProgress = useCallback(() => {
    for (const word of storeWords) {
      changeWordProbability({ id: word.id, probability: 1 });
      changeWordConsecutivelyTimes({ id: word.id, consecutivelyTimes: 0 });
      changeWordInProgressStatus({ id: word.id, inProgress: false });
    }
  }, [
    changeWordConsecutivelyTimes,
    changeWordInProgressStatus,
    changeWordProbability,
    storeWords,
  ]);

  // Функция очистки прогресса когда юзер выходит с вкладки
  const strictModeFunction = useCallback(() => {
    if (document.hidden) {
      clearProgress();
    }
  }, [clearProgress]);

  // Функция включения строгого режима
  const strictModeToggle = useCallback(() => {
    if (!strictModeIsOn) {
      clearProgress();
      setStrictModeIsOn(true);
      document.onvisibilitychange = strictModeFunction;
    } else {
      setStrictModeIsOn(false);
      document.onvisibilitychange = null;
    }
  }, [clearProgress, strictModeFunction, strictModeIsOn]);

  return (
    <Flex
      data-testid="Trainer__StrictModeSwitcher"
      justify="end"
      width="100"
      gap="20"
      relative
      className={styles.StrictModeSwitcher__wrapper}
    >
      <Flex
        gap="10"
        className={`${styles.StrictModeSwitcher}
        ${strictModeIsOn && styles.StrictModeSwitcher__active}`}
      >
        <Flex
          onClick={strictModeToggle}
          className={styles.StrictModeSwitcher__switcher}
          justify="center"
        >
          <СheckmarkSVG
            className={styles.StrictModeSwitcher__switcher__checkmark}
          />
        </Flex>

        <span className={styles.StrictModeSwitcher__text}>Строгий режим</span>
      </Flex>

      <Hint
        textClassName={styles.StrictModeSwitcher__hint}
        textDirection="top"
        text={`Обнуляет прогресс каждый раз,
          Когда вы покидаете сайт.`}
      ></Hint>
    </Flex>
  );
});

StrictModeSwitcher.displayName = 'StrictModeSwitcher';

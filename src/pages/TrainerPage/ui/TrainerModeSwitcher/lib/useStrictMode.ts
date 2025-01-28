import { useTrainerActions } from '../../../model/slice/TrainerPageSlice';
import { useWords } from '../../../model/selectors/getTrainerWords/getTrainerWords';
import { useCallback } from 'react';
import { ModeSwitcherItemProps } from '@/widgets/ModeSwitcher';

interface useStrictModeResult {
  strictModeItem: ModeSwitcherItemProps;
}

export const useStrictMode = (
  strictModeIsOn: boolean,
  setStrictModeIsOn: (strictModeIsOn: boolean) => void,
): useStrictModeResult => {
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
  }, [clearProgress, setStrictModeIsOn, strictModeFunction, strictModeIsOn]);

  const strictModeItem = {
    name: 'Строгий',
    onClick: strictModeToggle,
    modeIsOn: strictModeIsOn,
    setModeIsOn: setStrictModeIsOn,
  };

  return {
    strictModeItem,
  };
};

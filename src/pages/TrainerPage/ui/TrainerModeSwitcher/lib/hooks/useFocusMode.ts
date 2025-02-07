import { useTrainerActions } from '../../../../model/slice/TrainerPageSlice';
import { useWords } from '../../../../model/selectors/getTrainerWords/getTrainerWords';
import { useCallback } from 'react';
import { ModeSwitcherItemProps } from '@/widgets/ModeSwitcher';

interface useFocusModeResult {
  focusModeItem: ModeSwitcherItemProps;
}

export const useFocusMode = (
  focusModeIsOn: boolean,
  setFocusModeIsOn: (focusModeIsOn: boolean) => void,
): useFocusModeResult => {
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
  const focusModeFunction = useCallback(() => {
    if (document.hidden) {
      clearProgress();
    }
  }, [clearProgress]);

  // Функция включения строгого режима
  const focusModeToggle = useCallback(() => {
    if (!focusModeIsOn) {
      clearProgress();
      document.onvisibilitychange = focusModeFunction;
    } else {
      document.onvisibilitychange = null;
    }
  }, [clearProgress, focusModeFunction, focusModeIsOn]);

  // Включаем по-умолчанию
  if (focusModeIsOn) {
    document.onvisibilitychange = focusModeFunction;
  }

  // Гененерируем айтем
  const focusModeItem = {
    name: 'Фокусировка',
    onClick: focusModeToggle,
    modeIsOn: focusModeIsOn,
    setModeIsOn: setFocusModeIsOn,
    hintText: 'Обнуляет прогресс каждый раз, когда вы покидаете сайт.',
  };

  return {
    focusModeItem,
  };
};

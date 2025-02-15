import { useTrainerActions } from '../../../../model/slice/TrainerPageSlice';
import { useWords } from '../../../../model/selectors/getTrainerWords/getTrainerWords';
import { useCallback } from 'react';
import { ModeSwitcherItemProps } from '@/widgets/ModeSwitcher';
import devtoolsDetect from 'devtools-detect';

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
    if (document.hidden || devtoolsDetect.isOpen) {
      clearProgress();
    }
  }, [clearProgress]);

  // Функция включения режима фокусировки
  const focusModeOn = useCallback(() => {
    document.onvisibilitychange = focusModeFunction;
    document.addEventListener('click', focusModeFunction);
  }, [focusModeFunction]);

  // Функция включения строгого режима
  const focusModeToggle = useCallback(() => {
    if (!focusModeIsOn) {
      clearProgress();
      focusModeOn();
    } else {
      document.onvisibilitychange = null;
      document.removeEventListener('click', focusModeFunction);
    }
  }, [clearProgress, focusModeFunction, focusModeIsOn, focusModeOn]);

  // Включаем по-умолчанию
  if (focusModeIsOn) {
    focusModeOn();
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

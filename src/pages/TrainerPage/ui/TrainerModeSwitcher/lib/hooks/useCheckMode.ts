import { useCallback, useContext } from 'react';
import { ModeSwitcherItemProps } from '@/widgets/ModeSwitcher';
import { TrainerPageContext } from '../../../../model/context/TrainerPageContext';

interface useCheckModeResult {
  CheckModeItem: ModeSwitcherItemProps;
}

export const useCheckMode = (): useCheckModeResult => {
  // Режим одной жизни
  const { setIsCheckMode, isCheckMode, setIsOneLifeMode } =
    useContext(TrainerPageContext);

  // Функция включения строгого режима
  const CheckModeToggle = useCallback(() => {
    if (!isCheckMode) setIsOneLifeMode(false);

    setIsCheckMode(!isCheckMode);
  }, [isCheckMode, setIsCheckMode, setIsOneLifeMode]);

  const CheckModeItem = {
    name: 'Проверка',
    onClick: CheckModeToggle,
    modeIsOn: isCheckMode,
    setModeIsOn: setIsCheckMode,
    hintText: 'Слово не будут повторяться даже при допущении ошибки',
  };

  return {
    CheckModeItem,
  };
};

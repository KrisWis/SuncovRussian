import { useCallback, useContext } from 'react';
import { ModeSwitcherItemProps } from '@/widgets/ModeSwitcher';
import { TrainerPageContext } from '../../../../model/context/TrainerPageContext';

interface useOneLifeModeResult {
  OneLifeModeItem: ModeSwitcherItemProps;
}

export const useOneLifeMode = (): useOneLifeModeResult => {
  // Режим одной жизни
  const { setIsOneLifeMode, isOneLifeMode, setIsCheckMode } =
    useContext(TrainerPageContext);

  // Функция включения строгого режима
  const OneLifeModeToggle = useCallback(() => {
    if (!isOneLifeMode) setIsCheckMode(false);

    setIsOneLifeMode(!isOneLifeMode);
  }, [isOneLifeMode, setIsCheckMode, setIsOneLifeMode]);

  const OneLifeModeItem = {
    name: 'Одна жизнь',
    onClick: OneLifeModeToggle,
    modeIsOn: isOneLifeMode,
    setModeIsOn: setIsOneLifeMode,
    hintText: 'Прогресс обнуляется при первой же ошибке',
  };

  return {
    OneLifeModeItem,
  };
};

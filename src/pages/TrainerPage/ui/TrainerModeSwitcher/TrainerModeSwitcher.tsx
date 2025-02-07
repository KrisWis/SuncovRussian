import { ModeSwitcher } from '@/widgets/ModeSwitcher';
import { memo, useState } from 'react';
import { useFocusMode } from './lib/hooks/useFocusMode';
import { useOneLifeMode } from './lib/hooks/useOneLifeMode';
import { useCheckMode } from './lib/hooks/useCheckMode';

export const TrainerModeSwitcher: React.FC = memo((): React.JSX.Element => {
  // Режим "Фокусировка"
  const [focusModeIsOn, setFocusModeIsOn] = useState<boolean>(true);
  const { focusModeItem } = useFocusMode(focusModeIsOn, setFocusModeIsOn);

  // Режим одной жизни
  const { OneLifeModeItem } = useOneLifeMode();

  // Режим проверки
  const { CheckModeItem } = useCheckMode();

  // Формирование режимов
  const items = [focusModeItem, OneLifeModeItem, CheckModeItem];

  return <ModeSwitcher items={items} />;
});

TrainerModeSwitcher.displayName = 'TrainerModeSwitcher';

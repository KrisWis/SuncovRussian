import { ModeSwitcher } from '@/widgets/ModeSwitcher';
import { memo, useState } from 'react';
import { useStrictMode } from './lib/hooks/useStrictMode';
import { useOneLifeMode } from './lib/hooks/useOneLifeMode';
import { useCheckMode } from './lib/hooks/useCheckMode';

export const TrainerModeSwitcher: React.FC = memo((): React.JSX.Element => {
  // Строгий режим
  const [strictModeIsOn, setStrictModeIsOn] = useState<boolean>(true);
  const { strictModeItem } = useStrictMode(strictModeIsOn, setStrictModeIsOn);

  // Режим одной жизни
  const { OneLifeModeItem } = useOneLifeMode();

  // Режим проверки
  const { CheckModeItem } = useCheckMode();

  // Формирование режимов
  const items = [strictModeItem, OneLifeModeItem, CheckModeItem];

  return <ModeSwitcher items={items} />;
});

TrainerModeSwitcher.displayName = 'TrainerModeSwitcher';

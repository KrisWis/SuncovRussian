import { ModeSwitcher } from '@/widgets/ModeSwitcher';
import { memo, useState } from 'react';
import { useStrictMode } from './lib/useStrictMode';

export const TrainerModeSwitcher: React.FC = memo((): React.JSX.Element => {
  // Строгий режим
  const [strictModeIsOn, setStrictModeIsOn] = useState<boolean>(false);
  const { strictModeItem } = useStrictMode(strictModeIsOn, setStrictModeIsOn);

  const items = [strictModeItem];

  return <ModeSwitcher items={items} />;
});

TrainerModeSwitcher.displayName = 'TrainerModeSwitcher';

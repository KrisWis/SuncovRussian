import { tips } from '@/shared/assets/static/tips';
import { Tip } from '@/widgets/Tip';
import { memo, useMemo } from 'react';

export const MainPage: React.FC = memo((): React.JSX.Element => {
  // Выбор случайного совета при загрузке страницы
  const randomTip = useMemo(
    () => tips[Math.floor(Math.random() * (tips.length - 1))],
    [],
  );

  return (
    <main>
      <Tip id={randomTip.id} text={randomTip.text} />
    </main>
  );
});

MainPage.displayName = 'MainPage';

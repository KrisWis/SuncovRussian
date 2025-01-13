import { tips } from '@/shared/assets/static/tips';
import { Tip } from '@/shared/ui/Tip';
import { memo, useMemo } from 'react';
import { Page } from '@/widgets/Page';

export const MainPage: React.FC = memo((): React.JSX.Element => {
  // Выбор случайного совета при загрузке страницы
  const randomTip = useMemo(
    () => tips[Math.floor(Math.random() * (tips.length - 1))],
    [],
  );

  return (
    <Page data-testid="MainPage">
      <Tip id={randomTip.id} text={randomTip.text} />
    </Page>
  );
});

MainPage.displayName = 'MainPage';

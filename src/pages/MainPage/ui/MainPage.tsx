import { memo } from 'react';
import { Tip } from '@/shared/ui/Tip/ui/Tip';
import { tips } from '../model/static/tips';
import { Page } from '@/widgets/Page';
import { useMemo } from 'react';

export const MainPage: React.FC = memo((): React.JSX.Element => {
  // Выбор случайного совета при загрузке страницы
  const randomTip = useMemo(
    () => tips[Math.floor(Math.random() * (tips.length - 1))],
    [],
  );

  return (
    <Page data-testid="MainPage" withHomeButton={false}>
      <Tip id={randomTip.id} text={randomTip.text} />
    </Page>
  );
});

MainPage.displayName = 'MainPage';

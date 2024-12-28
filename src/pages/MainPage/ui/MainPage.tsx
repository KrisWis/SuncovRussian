import { tips } from '@/shared/assets/static/tips';
import { Header, HeaderCategories, HeaderContext } from '@/widgets/Header';
import { Tip } from '@/widgets/Tip';
import { memo, useMemo, useState } from 'react';

export const MainPage: React.FC = memo((): React.JSX.Element => {
  // Выбор случайного совета при загрузке страницы
  const randomTip = useMemo(
    () => tips[Math.floor(Math.random() * (tips.length - 1))],
    [],
  );

  // Настройка контекста
  const [headerCategory, setHeaderCategory] = useState<HeaderCategories | null>(
    null,
  );

  return (
    <HeaderContext.Provider value={{ headerCategory, setHeaderCategory }}>
      <Header />

      <main>
        <Tip id={randomTip.id} text={randomTip.text} />
      </main>
    </HeaderContext.Provider>
  );
});

MainPage.displayName = 'MainPage';

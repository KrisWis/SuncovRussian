import { tips } from '@/shared/assets/static/tips';

import { Header, HeaderContext } from '@/widgets/Header';
import { Tip } from '@/widgets/Tip';
import { accentsWords, Trainer } from '@/widgets/Trainer';
import { memo, useMemo, useState } from 'react';

export const MainPage: React.FC = memo((): React.JSX.Element => {
  // Выбор случайного совета при загрузке страницы
  const randomTip = useMemo(
    () => tips[Math.floor(Math.random() * (tips.length - 1))],
    [],
  );

  // Настройка контекста
  const [headerCategory, setHeaderCategory] = useState<string | null>(null);

  // TODO: проверить все комментарии на макете в конце работы

  return (
    <HeaderContext.Provider value={{ headerCategory, setHeaderCategory }}>
      <Header />

      <main>
        {headerCategory === null && (
          <Tip id={randomTip.id} text={randomTip.text} />
        )}

        {headerCategory === 'Ударения' && <Trainer words={accentsWords} />}
      </main>
    </HeaderContext.Provider>
  );
});

MainPage.displayName = 'MainPage';

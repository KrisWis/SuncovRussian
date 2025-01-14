import { tips } from '@/shared/assets/static/tips';
import { Header, headerCategories, HeaderContext } from '@/widgets/Header';
import { Theory } from '@/widgets/Theory';
import { Tip } from '@/widgets/Tip';
import {
  wordsForAccentsTests,
  Trainer,
  wordsForUnionsTests,
  TrainerContext,
  useTrainerActions,
} from '@/widgets/Trainer';
import { memo, useContext, useEffect, useMemo, useState } from 'react';

export const MainPage: React.FC = memo((): React.JSX.Element => {
  // Выбор случайного совета при загрузке страницы
  const randomTip = useMemo(
    () => tips[Math.floor(Math.random() * (tips.length - 1))],
    [],
  );

  // Настройка контекста
  const [headerCategory, setHeaderCategory] = useState<string | null>(null);

  // При изменении категории, данные очищаются
  const { setWords } = useTrainerActions();
  const { setTotalTime } = useContext(TrainerContext);

  useEffect(() => {
    setTotalTime(0);
    setWords([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerCategory]);

  // TODO: проверить все комментарии на макете в конце работы

  return (
    <HeaderContext.Provider value={{ headerCategory, setHeaderCategory }}>
      <Header />

      <main>
        {headerCategory === null && (
          <Tip id={randomTip.id} text={randomTip.text} />
        )}

<<<<<<< HEAD
        {headerCategory && (
          <>
            {headerCategory === 'Теория' && <Theory />}
=======
        {headerCategory &&
          headerCategories.Тренажеры.includes(headerCategory) && (
            <>
              {headerCategory === 'Ударения' && (
                <Trainer words={wordsForAccentsTests} />
              )}
>>>>>>> 3b93d38 (Fix header, add UI-Kit component -Hint, fix some other things.)

            {headerCategories.Тренажеры.includes(headerCategory) && (
              <>
                {headerCategory === 'Ударения' && (
                  <Trainer words={wordsForAccentsTests} />
                )}

                {headerCategory === 'Виды союзов' && (
                  <Trainer words={wordsForUnionsTests} />
                )}
              </>
            )}
          </>
        )}
      </main>
    </HeaderContext.Provider>
  );
});

MainPage.displayName = 'MainPage';

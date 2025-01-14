import { tips } from '../model/static/tips';
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
<<<<<<< HEAD
    <HeaderContext.Provider value={{ headerCategory, setHeaderCategory }}>
      <Header />

      <main>
        {headerCategory === null && (
          <Tip id={randomTip.id} text={randomTip.text} />
        )}

<<<<<<< HEAD
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
=======
        {headerCategory && (
          <>
            {headerCategory === 'Теория' && <Theory />}
>>>>>>> fed6419 (Add PDFViewer Component, UI-kit ErrorComponent and Theory basic functional.)

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
=======
    <Page data-testid="MainPage">
      <Tip id={randomTip.id} text={randomTip.text} />
    </Page>
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)
  );
});

MainPage.displayName = 'MainPage';

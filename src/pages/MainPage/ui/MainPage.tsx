import './MainPage.scss';
import { memo, useState } from 'react';
import { TestsWords, TestsWordsContext } from '@/widgets/TestsWords';
import { accentsTestsWords } from '@/shared/static/tests_words/accents';
import { TestsProgressBar } from '@/widgets/TestsWords';

export const MainPage: React.FC = memo((): React.JSX.Element => {
  // Настройка контекста
  const [totalTime, setTotalTime] = useState<number>(0);

  return (
    <main className="Page MainPage__main">
      <div className="padding">
        <TestsWordsContext.Provider
          value={{
            totalTime: totalTime,
            setTotalTime: setTotalTime,
          }}
        >
          <TestsWords words={accentsTestsWords} />
          <TestsProgressBar />
        </TestsWordsContext.Provider>
      </div>
    </main>
  );
});

MainPage.displayName = 'MainPage';

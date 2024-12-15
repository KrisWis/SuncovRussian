import './MainPage.scss';
import { memo } from 'react';
import { TestsWords } from '@/widgets/TestsWords';
import { accentsTestsWords } from '@/shared/static/tests_words/accents';
import { TestsProgressBar } from '@/widgets/TestsWords';

export const MainPage: React.FC = memo((): React.JSX.Element => {
  return (
    <main className="Page MainPage__main">
      <div className="padding">
        <TestsWords words={accentsTestsWords} />
        <TestsProgressBar />
      </div>
    </main>
  );
});

MainPage.displayName = 'MainPage';

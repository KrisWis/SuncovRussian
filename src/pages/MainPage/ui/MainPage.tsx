import { memo } from 'react';
import { TestsWords } from '@/widgets/TestsWords';
import { accentsTestsWords } from '@/shared/static/tests_words/accents';

export const MainPage: React.FC = memo((): React.JSX.Element => {
  return (
    <main>
      <TestsWords words={accentsTestsWords} />
    </main>
  );
});

MainPage.displayName = 'MainPage';

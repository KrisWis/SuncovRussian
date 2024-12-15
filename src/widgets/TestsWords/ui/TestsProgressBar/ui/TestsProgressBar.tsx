import { Flex } from '@/shared/lib/Stack';
import styles from './TestsProgressBar.module.scss';
import { memo, useEffect, useMemo } from 'react';
import { DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';
import { TestsWordsReducer } from '../../../model/slice/slice';
import { useWords } from '../../../model/selectors/getWords/getWords';

export const TestsProgressBarInner: React.FC = memo((): React.JSX.Element => {
  // Получение слов
  const storeWords = useWords();

  // Получение слов с 1% выпадения
  const wordsWithOnePercentProbability = useMemo(
    () => storeWords.filter((word) => word.probability === 0.01),
    [storeWords],
  );

  // Получение процентов слов с 1% выпадения
  const wordsWithOnePercentProbabilityPercent = useMemo(() => {
    const result = wordsWithOnePercentProbability.length / storeWords.length;

    if (isNaN(result)) return 0;

    return result;
  }, [storeWords.length, wordsWithOnePercentProbability.length]);

  // Окно с завершением тренажёра
  useEffect(() => {
    if (wordsWithOnePercentProbabilityPercent === 1) {
      alert('Вы прошли тест!');
      location.reload();
    }
  }, [wordsWithOnePercentProbabilityPercent]);

  return (
    <Flex gap="5" className={styles.TestsProgressBar}>
      <span>{Math.round(wordsWithOnePercentProbabilityPercent * 100)}%</span>
      <progress value={wordsWithOnePercentProbabilityPercent}></progress>
    </Flex>
  );
});

TestsProgressBarInner.displayName = 'TestsProgressBarInner';

export const TestsProgressBar: React.FC = memo((): React.JSX.Element => {
  return (
    <DynamicModuleLoader reducers={{ TestsWordsReducer }}>
      <TestsProgressBarInner />
    </DynamicModuleLoader>
  );
});

TestsProgressBar.displayName = 'TestsProgressBar';

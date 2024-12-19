import { Flex } from '@/shared/lib/Stack';
import styles from './TestsProgressBar.module.scss';
import { memo, useContext, useEffect, useMemo, useRef } from 'react';
import { DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';
import { TestsWordsReducer } from '../../../model/slice/slice';
import { useWords } from '../../../model/selectors/getWords/getWords';
import { TestsWordsContext } from '../../../model/context/context';

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

  // Сохранение времени начала прохождения
  const StartTimeRef = useRef<Date>(new Date());

  useEffect(() => {
    StartTimeRef.current = new Date();
  }, []);

  // Окно с завершением тренажёра
  const { setTotalTime, totalTime } = useContext(TestsWordsContext);

  useEffect(() => {
    if (wordsWithOnePercentProbabilityPercent === 1) {
      const endTime = new Date();

      const TotalTime = endTime.getTime() - StartTimeRef.current!.getTime();

      setTotalTime(TotalTime);
    }
  }, [setTotalTime, wordsWithOnePercentProbabilityPercent]);

  return (
    <>
      {!totalTime && (
        <Flex gap="5" className={styles.TestsProgressBar}>
          <span>
            {Math.round(wordsWithOnePercentProbabilityPercent * 100)}%
          </span>
          <progress value={wordsWithOnePercentProbabilityPercent}></progress>
        </Flex>
      )}
    </>
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

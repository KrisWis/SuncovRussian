import { Flex } from '@/shared/lib/Stack';
import { memo, useContext, useEffect, useMemo, useRef } from 'react';
import { useWords } from '../../../model/selectors/getWords/getWords';
import { TestsWordsContext } from '../../../model/context/context';

export const TestsProgressBar: React.FC = memo((): React.JSX.Element => {
  // Получение слов
  const storeWords = useWords();

  // Получение слов, находящихся в прогрессе
  const wordsInProgressProbability = useMemo(
    () => storeWords.filter((word) => word.inProgress),
    [storeWords],
  );

  // Получение процентов слов, находящихся в прогрессе
  const wordsInProgressProbabilityPercent = useMemo(() => {
    const result = wordsInProgressProbability.length / storeWords.length;

    if (isNaN(result)) return 0;

    return result;
  }, [storeWords.length, wordsInProgressProbability.length]);

  // Сохранение времени начала прохождения
  const StartTimeRef = useRef<Date>(new Date());

  useEffect(() => {
    StartTimeRef.current = new Date();
  }, []);

  // Окно с завершением тренажёра
  const { setTotalTime } = useContext(TestsWordsContext);

  useEffect(() => {
    if (wordsInProgressProbabilityPercent === 1) {
      const endTime = new Date();

      const TotalTime = endTime.getTime() - StartTimeRef.current!.getTime();

      setTotalTime(TotalTime);
    }
  }, [setTotalTime, wordsInProgressProbabilityPercent]);

  return (
    <Flex gap="5">
      <span>{Math.round(wordsInProgressProbabilityPercent * 100)}%</span>
      <progress value={wordsInProgressProbabilityPercent}></progress>
    </Flex>
  );
});

TestsProgressBar.displayName = 'TestsProgressBar';

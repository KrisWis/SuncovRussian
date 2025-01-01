import { Flex } from '@/shared/lib/Stack';
import { memo, useContext, useEffect, useMemo, useRef } from 'react';
import { useWords } from '../../../model/selectors/getAccentsWords/getAccentsWords';
import { AccentsWordsContext } from '../../../model/context/AccentsWordsContext';
import * as styles from './AccentsWordsProgressBar.module.scss';

export const AccentsProgressBar: React.FC = memo((): React.JSX.Element => {
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
  const { setTotalTime } = useContext(AccentsWordsContext);

  useEffect(() => {
    if (wordsInProgressProbabilityPercent === 1) {
      const endTime = new Date();

      const TotalTime = endTime.getTime() - StartTimeRef.current!.getTime();

      setTotalTime(TotalTime);

      document.onkeydown = null;

      document.onclick = null;
    }
  }, [setTotalTime, wordsInProgressProbabilityPercent]);

  return (
    <Flex
      className={styles.AccentsProgressBar}
      width="50"
      justify="center"
      gap="10"
    >
      <span className={styles.AccentsProgressBar__percent}>
        {Math.round(wordsInProgressProbabilityPercent * 100)}%
      </span>
      <progress
        className={styles.AccentsProgressBar__progressbar}
        data-testid="AccentsWords__AccentsProgressBar__percent"
        value={wordsInProgressProbabilityPercent}
      ></progress>
    </Flex>
  );
});

AccentsProgressBar.displayName = 'AccentsProgressBar';

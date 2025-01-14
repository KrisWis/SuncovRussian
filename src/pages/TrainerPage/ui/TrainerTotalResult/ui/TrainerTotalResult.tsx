import { Flex } from '@/shared/lib/Stack';
import * as styles from './TrainerTotalResult.module.scss';
import { memo, useCallback, useContext, useMemo } from 'react';
import { TrainerTotalResultProps } from '../model/types';
import { useWords } from '../../../model/selectors/getTrainerWords/getTrainerWords';
<<<<<<< HEAD
<<<<<<< HEAD
import { PrimaryWordsInterface } from '../../../model/types/types';
import { UnionsWordsInterface } from '../../../model/static/wordsForUnionsTests';
import { TrainerPageContext } from '../../../model/context/TrainerPageContext';
import { useTrainerActions } from '../../../model/slice/TrainerPageSlice';
import { useInitializeWords } from '../../../model/hooks/useInitializeWords';
=======
import { useTrainerActions } from '../../../model/slice/TrainerPageSlice';
import { AccentsWordsInterface } from '../../../model/static/wordsForAccentsTests';
import { UnionsWordsInterface } from '../../../model/static/wordsForUnionsTests';
import { TrainerPageContext } from '../../../model/context/TrainerPageContext';
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)
=======
import { PrimaryWordsInterface } from '../../../model/types/types';
import { UnionsWordsInterface } from '../../../model/static/wordsForUnionsTests';
import { TrainerPageContext } from '../../../model/context/TrainerPageContext';
import { useTrainerActions } from '../../../model/slice/TrainerPageSlice';
>>>>>>> fb89821 (Made types for header, rebuild accents for trainer words to primary trainer words for reusing.)

export const TrainerTotalResult: React.FC<TrainerTotalResultProps> = memo(
  ({ updateRandomWord, words }): React.JSX.Element => {
    // Инициализация хуков и контекста
    const storeWords = useWords();
    const { setWords } = useTrainerActions();
<<<<<<< HEAD
    const { totalTime, setTotalTime, isErrorWork, setIsErrorWork } =
      useContext(TrainerPageContext);
=======
    const { totalTime, setTotalTime } = useContext(TrainerPageContext);
    const { isErrorWork, setIsErrorWork } = useContext(TrainerPageContext);
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)

    // Высчитывание данных для общего времени
    const totalTimeMinutes = useMemo(
      () => Math.round(totalTime / 60000),
      [totalTime],
    );

    const totalTimeSeconds = useMemo(
      () => Math.round((totalTime / 1000) % 60),
      [totalTime],
    );

    // Отображение неправильных ответов
    const wordsWithUncorrectTimes = useMemo(
      () =>
        storeWords
          .filter((word) => word.uncorrectTimes! > 0)
          .sort((a, b) => b.uncorrectTimes! - a.uncorrectTimes!),
      [storeWords],
    );

    // Переход ко второму раунду
    const startErrorWork = useCallback(() => {
      setIsErrorWork(true);

      const UpdatedWordsWithUncorrectTimes = wordsWithUncorrectTimes.map(
        (word) => ({
          ...word,
          probability: 1,
          uncorrectTimes: 0,
          consecutivelyTimes: 0,
          inProgress: false,
        }),
      );

      setWords(UpdatedWordsWithUncorrectTimes);
      setTotalTime(0);

      updateRandomWord(UpdatedWordsWithUncorrectTimes);
    }, [
      setIsErrorWork,
      setTotalTime,
      setWords,
      updateRandomWord,
      wordsWithUncorrectTimes,
    ]);

    // Очистка результатов при нажатии "Повторить"
    const { initializeWords } = useInitializeWords(words);

    const Retry = useCallback(() => {
      initializeWords();
      setTotalTime(0);
      setIsErrorWork(false);
    }, [initializeWords, setIsErrorWork, setTotalTime]);

    return (
      <Flex justify="between" direction="column" width="100" maxHeight>
        <span className={styles.TrainerTotalResult__totalTime}>
          Общее время:{' '}
          {`${totalTimeMinutes < 10 ? '0' : ''}${totalTimeMinutes}`}:
          {`${totalTimeSeconds < 10 ? '0' : ''}${totalTimeSeconds}`}
        </span>

        {wordsWithUncorrectTimes.length > 0 ? (
          <Flex maxHeight justify="between" direction="column">
            <Flex direction="column">
              <span className={styles.TrainerTotalResult__totalTime}>
                Ошибки:
              </span>

              <Flex direction="column" gap="3" width="100">
                {wordsWithUncorrectTimes.map((word) => (
                  <span
                    style={{
                      fontSize:
                        24 -
                        (wordsWithUncorrectTimes.length / 2 >= 21
                          ? 21
                          : wordsWithUncorrectTimes.length / 2),
                    }}
                    className={styles.TrainerTotalResult__wordWithError}
                    key={word.id}
                  >
                    {word.trainerType === 'ударения' && (
                      <>
                        {(word as PrimaryWordsInterface).valid} -{' '}
                        {word.uncorrectTimes}{' '}
                        {[2, 3, 4].includes(word.uncorrectTimes!)
                          ? 'раза'
                          : 'раз'}
                      </>
                    )}

                    {word.trainerType === 'виды союзов' && (
                      <>
                        {(word as UnionsWordsInterface).word} -{' '}
                        {word.uncorrectTimes}{' '}
                        {[2, 3, 4].includes(word.uncorrectTimes!)
                          ? 'раза'
                          : 'раз'}{' '}
                        (Правильно: {(word as UnionsWordsInterface).unionType})
                      </>
                    )}
                  </span>
                ))}
              </Flex>
            </Flex>

            {!isErrorWork && (
              <button
                className={styles.TrainerTotalResult__button}
                onClick={startErrorWork}
                type="button"
              >
                Работа над ошибками
              </button>
            )}
          </Flex>
        ) : (
          <button
            className={styles.TrainerTotalResult__button}
            onClick={Retry}
            type="button"
          >
            Повторить
          </button>
        )}
      </Flex>
    );
  },
);

TrainerTotalResult.displayName = 'TrainerTotalResult';

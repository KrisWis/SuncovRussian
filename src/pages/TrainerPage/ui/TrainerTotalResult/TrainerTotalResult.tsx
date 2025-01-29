import { Flex } from '@/shared/lib/Stack';
import * as styles from './TrainerTotalResult.module.scss';
import { memo, useCallback, useContext, useMemo } from 'react';
import { useWords } from '../../model/selectors/getTrainerWords/getTrainerWords';
import { PrimaryWordsInterface, WordsTypes } from '../../model/types/types';
import { TrainerPageContext } from '../../model/context/TrainerPageContext';
import { useTrainerActions } from '../../model/slice/TrainerPageSlice';
import { trainersOfPrimaryType } from '../../model/const/const';
import { useInitializeWords } from '../../lib/hooks/useInitializeWords';
import { UnionsWordsInterface } from '../../model/static/wordsForUnionsTests';
import { Button } from '@/shared/ui/Button/ui/Button';

interface TrainerTotalResultProps {
  updateRandomWord: (words?: WordsTypes[]) => void;
  words: WordsTypes[];
}

export const TrainerTotalResult: React.FC<TrainerTotalResultProps> = memo(
  ({ updateRandomWord, words }): React.JSX.Element => {
    // Инициализация хуков и контекста
    const storeWords = useWords();
    const { setWords } = useTrainerActions();

    const { totalTime, setTotalTime, isErrorWork, setIsErrorWork } =
      useContext(TrainerPageContext);

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

    // Получение режимов, с которыми пользователь прошёл тренажёр
    const { isCheckMode, isOneLifeMode } = useContext(TrainerPageContext);

    return (
      <Flex
        className={styles.TrainerTotalResult__wrapper}
        justify="between"
        direction="column"
        width="100"
        maxHeight
      >
        <span className={styles.TrainerTotalResult__totalTime}>
          Общее время:{' '}
          {`${totalTimeMinutes < 10 ? '0' : ''}${totalTimeMinutes}`}:
          {`${totalTimeSeconds < 10 ? '0' : ''}${totalTimeSeconds}`}
        </span>

        <span className={styles.TrainerTotalResult__extraText}>
          Тема: {words[0].trainerType}
        </span>

        {(isCheckMode || isOneLifeMode) && (
          <span className={styles.TrainerTotalResult__extraText}>
            Режим: «{isCheckMode ? 'Проверка' : 'Одна жизнь'}»
          </span>
        )}

        {wordsWithUncorrectTimes.length > 0 ? (
          <Flex
            className={styles.TrainerTotalResult__textWrapper}
            gap="20"
            maxHeight
            justify="between"
            direction="column"
          >
            <Flex direction="column">
              <span className={styles.TrainerTotalResult__totalTime}>
                Ошибки:
              </span>

              <Flex direction="column" gap="3" width="100">
                {wordsWithUncorrectTimes.map((word) => (
                  <span
                    className={styles.TrainerTotalResult__wordWithError}
                    key={word.id}
                  >
                    {trainersOfPrimaryType.includes(word.trainerType) && (
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
              <Button onClick={startErrorWork} type="button">
                Работа над ошибками
              </Button>
            )}
          </Flex>
        ) : (
          <Button onClick={Retry} type="button">
            Повторить
          </Button>
        )}
      </Flex>
    );
  },
);

TrainerTotalResult.displayName = 'TrainerTotalResult';

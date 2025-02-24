import { Flex } from '@/shared/lib/Stack';
import * as styles from './TrainerTotalResult.module.scss';
import { memo, useCallback, useContext, useMemo } from 'react';
import { useWords } from '../../model/selectors/getTrainerWords/getTrainerWords';
import {
  WordsForTrainersItem,
  WordsForTrainersTypes,
} from '../../model/types/types';
import { PrimaryWordsInterface } from '../../model/types/primary';
import { TrainerPageContext } from '../../model/context/TrainerPageContext';
import { useTrainerActions } from '../../model/slice/TrainerPageSlice';
import { useInitializeWords } from '../../lib/hooks/useInitializeWords';
import { UnionsWordsInterface } from '../../model/types/unions';
import { Button } from '@/shared/ui/Button/ui/Button';
import { ChoiceWordInterface } from '../../model/types/choice';

interface TrainerTotalResultProps {
  updateRandomWord: (words?: WordsForTrainersTypes[]) => void;
  words: WordsForTrainersItem;
  theme: string;
}

export const TrainerTotalResult: React.FC<TrainerTotalResultProps> = memo(
  ({ updateRandomWord, words, theme }): React.JSX.Element => {
    // Получение режимов, с которыми пользователь прошёл тренажёр и кол-ва ошибок
    const {
      isCheckMode,
      isOneLifeMode,
      allAttemptsCount,
      setAllAttemptsCount,
    } = useContext(TrainerPageContext);

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
      setAllAttemptsCount(0);

      updateRandomWord(UpdatedWordsWithUncorrectTimes);
    }, [
      setAllAttemptsCount,
      setIsErrorWork,
      setTotalTime,
      setWords,
      updateRandomWord,
      wordsWithUncorrectTimes,
    ]);

    // Очистка результатов при нажатии "Повторить"
    const { initializeWords } = useInitializeWords(words.items);

    const Retry = useCallback(() => {
      initializeWords();
      setTotalTime(0);
      setIsErrorWork(false);
      setAllAttemptsCount(0);
    }, [initializeWords, setAllAttemptsCount, setIsErrorWork, setTotalTime]);

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

        {isOneLifeMode && (
          <span className={styles.TrainerTotalResult__extraText}>
            Количество попыток: {allAttemptsCount}
          </span>
        )}

        <span className={styles.TrainerTotalResult__extraText}>
          Тема: {theme}
        </span>

        {(isCheckMode || isOneLifeMode) && (
          <span className={styles.TrainerTotalResult__extraText}>
            Режим: «{isCheckMode ? 'Проверка' : 'Одна жизнь'}»
          </span>
        )}

        {wordsWithUncorrectTimes.length > 0 && !isOneLifeMode ? (
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
                    {words.type === 'primary' && (
                      <>
                        {(word as PrimaryWordsInterface).valid} -{' '}
                        {word.uncorrectTimes}{' '}
                        {[2, 3, 4].includes(word.uncorrectTimes!)
                          ? 'раза'
                          : 'раз'}
                      </>
                    )}

                    {words.type === 'unions' && (
                      <>
                        {(word as UnionsWordsInterface).word} -{' '}
                        {word.uncorrectTimes}{' '}
                        {[2, 3, 4].includes(word.uncorrectTimes!)
                          ? 'раза'
                          : 'раз'}{' '}
                        (Правильно: {(word as UnionsWordsInterface).unionType})
                      </>
                    )}

                    {words.type === 'choice' && (
                      <>
                        {(word as ChoiceWordInterface).word} -{' '}
                        {word.uncorrectTimes}{' '}
                        {[2, 3, 4].includes(word.uncorrectTimes!)
                          ? 'раза'
                          : 'раз'}{' '}
                        (Правильно: {(word as ChoiceWordInterface).choiceWord})
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

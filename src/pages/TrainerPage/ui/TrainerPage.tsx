import { Flex } from '@/shared/lib/Stack';
import { TrainerPageProps, TrainerWordsInterface } from '../model/types/types';
import * as styles from './TrainerPage.module.scss';
import { memo, useContext, useEffect, useState } from 'react';
import { DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';

import { TrainerReducer } from '../model/slice/TrainerPageSlice';
import { tabletMediaQueryWidth } from '@/shared/const/global';
import { TrainerProgressBar } from './TrainerProgressBar/ui/TrainerProgressBar';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { PrimaryWordsInterface } from '../model/types/types';
=======
import { AccentsTrainerWords } from './AccentsTrainerWords/ui/AccentsTrainerWords';
import { AccentsWordsInterface } from '../model/static/wordsForAccentsTests';
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)
=======
import { PrimaryTrainerWords } from './PrimaryTrainerWords/ui/PrimaryTrainerWords';
=======
>>>>>>> c31c805 (bugfix)
import { PrimaryWordsInterface } from '../model/types/types';
>>>>>>> fb89821 (Made types for header, rebuild accents for trainer words to primary trainer words for reusing.)

import { UnionsWordsInterface } from '../model/static/wordsForUnionsTests';

import { Hint } from '@/shared/ui/Hint';
import { TrainerPageContext } from '../model/context/TrainerPageContext';
import { useWords } from '../model/selectors/getTrainerWords/getTrainerWords';
import { UnionsTrainerWords } from './UnionsTrainerWords/ui/UnionsTrainerWords';
import { StrictModeSwitcher } from './StrictModeSwitcher/ui/StrictModeSwitcher';
import { TrainerTotalResult } from './TrainerTotalResult/ui/TrainerTotalResult';
import { useRandomWord } from '../model/hooks/useRandomWord';
import { useWordActions } from '../model/hooks/useWordActions';
<<<<<<< HEAD
<<<<<<< HEAD
import { useInitializeWords } from '../model/hooks/useInitializeWords';
import { PrimaryTrainerWords } from './PrimaryTrainerWords/ui/PrimaryTrainerWords';
import { Page } from '@/widgets/Page';
=======
import { Page } from '@/widgets/Page';
import { useInitializeWords } from '../model/hooks/useInitializeWords';
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)
=======
import { useInitializeWords } from '../model/hooks/useInitializeWords';
import { PrimaryTrainerWords } from './PrimaryTrainerWords/ui/PrimaryTrainerWords';
import { Page } from '@/widgets/Page';
>>>>>>> c31c805 (bugfix)

const TrainerInner: React.FC<TrainerPageProps> = memo(
  ({ words }): React.JSX.Element => {
    // Инициализация данных, хуков, контекста
    const [randomWordId, setRandomWordId] = useState<number | null>(null);

    const [randomWordsIsReverse, setRandomWordsIsReverse] =
      useState<boolean>(false);

    const { randomWord, updateRandomWord } = useRandomWord(
      randomWordId,
      setRandomWordsIsReverse,
      setRandomWordId,
    );

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 06f1d0e (Bugfix)
    const {
      totalTime,
      setIsIncorrect,
      isIncorrect,
      isErrorWork,
      setIsErrorWork,
      setTotalTime,
    } = useContext(TrainerPageContext);
<<<<<<< HEAD
=======
    const { totalTime, setIsIncorrect, isIncorrect, isErrorWork } =
      useContext(TrainerPageContext);
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)
=======
>>>>>>> 06f1d0e (Bugfix)

    useEffect(() => {
      if (!randomWord) setRandomWordId(0);
    }, [randomWord, randomWordId]);

    // Появление плашки "Неверно"
    const { wordOnFail, wordOnSuccess, showNewWord, waitRepeatedClickInFail } =
      useWordActions(
        randomWordId,
        setRandomWordsIsReverse,
        setRandomWordId,
        setIsIncorrect,
      );

    // Получение случайного слова
    const storeWords = useWords();

    useEffect(() => {
      if (storeWords.length && randomWordId === null) {
        updateRandomWord();
      }
    }, [randomWordId, storeWords, updateRandomWord]);

    // При нажатии на стрелочки, фокус падает на соответствующее слово
    useEffect(() => {
      const checkArrowsPress = (
        event: KeyboardEvent,
        words: TrainerWordsInterface[],
      ): void => {
        if (totalTime) return;

        if (waitRepeatedClickInFail && isIncorrect) {
          showNewWord(words, isErrorWork, randomWordId);
        }

        const wordElements = document.querySelectorAll('.TrainerWord');

        const clickElements = (NotReverseIndex: number): void => {
<<<<<<< HEAD
<<<<<<< HEAD
          if (words[0].trainerType === 'виды союзов') {
=======
          if (storeWords[0].trainerType === 'unions') {
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)
=======
          if (words[0].trainerType === 'виды союзов') {
>>>>>>> fb89821 (Made types for header, rebuild accents for trainer words to primary trainer words for reusing.)
            (wordElements[NotReverseIndex] as HTMLElement).click();
            return;
          }

          if (!randomWordsIsReverse)
            (wordElements[NotReverseIndex] as HTMLElement).click();
          else
            (
              wordElements[NotReverseIndex === 0 ? 1 : 0] as HTMLElement
            ).click();
        };

        if (!tabletMediaQueryWidth.matches) {
          if (event.key === 'ArrowLeft') {
            clickElements(0);
          } else if (event.key === 'ArrowRight') {
            clickElements(1);
          }
        } else {
          if (event.key === 'ArrowUp') {
            clickElements(0);
          } else if (event.key === 'ArrowDown') {
            clickElements(1);
          }
        }
      };

      document.onkeydown = (e) => checkArrowsPress(e, storeWords);

      return () => {
        document.onkeydown = null;
      };
    }, [
      isErrorWork,
      isIncorrect,
      randomWordId,
      randomWordsIsReverse,
      showNewWord,
      storeWords,
      totalTime,
      waitRepeatedClickInFail,
      wordOnFail,
      wordOnSuccess,
    ]);

    // Инициализация слов
    const { initializeWords } = useInitializeWords(words);

    useEffect(() => {
      const timeoutForInitializeWords = setTimeout(() => {
<<<<<<< HEAD
<<<<<<< HEAD
        setIsIncorrect(false);
        setIsErrorWork(false);
        setTotalTime(0);
        initializeWords();
        clearTimeout(timeoutForInitializeWords);
      }, 0);
    }, [initializeWords, setIsErrorWork, setIsIncorrect, setTotalTime]);

    return (
      <Page className={styles.TrainerPage}>
        {storeWords.length > 0 && (
          <>
            {!totalTime ? (
              <>
                {['ударения', 'cловарные слова', 'наречия', 'н/нн'].includes(
                  storeWords[0].trainerType,
                ) && (
                  <Hint
                    text={`Выбирайте ответ, а система будет предлагать новые слова или
                    те, в которых были допущены ошибки. Когда вы перестанете их
                    допускать, шкала полностью заполнится. Заполните шкалу
                    несколько раз, сделайте работу над ошибками - и вы готовы.`}
                    textClassName={styles.TrainerPage__hint}
                  />
                )}

                {storeWords[0].trainerType === 'виды союзов' && (
                  <Hint
                    text={`В этом тренажере под подчинительным союзом понимается любое
                    средство подчинительной связи, т.е. союз, союзное слово,
                    частица`}
                    textClassName={styles.TrainerPage__hint}
                  />
                )}

                {isIncorrect && (
                  <Flex
                    className={styles.TrainerPage__uncorrect}
                    data-testid="Trainer__uncorrect"
                    justify="center"
                  >
                    Неверно
                  </Flex>
                )}

                {randomWord && (
                  <>
                    {[
                      'ударения',
                      'cловарные слова',
                      'наречия',
                      'н/нн',
                    ].includes(storeWords[0].trainerType) && (
                      <PrimaryTrainerWords
                        randomWord={randomWord as PrimaryWordsInterface}
                        randomWordsIsReverse={randomWordsIsReverse}
                        wordOnFail={wordOnFail}
                        wordOnSuccess={wordOnSuccess}
                      />
                    )}

                    {words[0].trainerType === 'виды союзов' && (
                      <UnionsTrainerWords
                        randomWord={randomWord as UnionsWordsInterface}
                        wordOnSuccess={wordOnSuccess}
                        wordOnFail={wordOnFail}
                      />
                    )}
                  </>
                )}

                <TrainerProgressBar />
                <StrictModeSwitcher />
              </>
            ) : (
              <TrainerTotalResult
                words={words}
                updateRandomWord={updateRandomWord}
              />
            )}
          </>
        )}
=======
=======
        setIsIncorrect(false);
        setIsErrorWork(false);
        setTotalTime(0);
>>>>>>> 06f1d0e (Bugfix)
        initializeWords();
        clearTimeout(timeoutForInitializeWords);
      }, 0);
    }, [initializeWords, setIsErrorWork, setIsIncorrect, setTotalTime]);

    return (
      <Page className={styles.TrainerPage}>
        {storeWords.length > 0 && (
          <>
            {!totalTime ? (
              <>
                {storeWords[0].trainerType === 'ударения' && (
                  <Hint
                    text={`Выбирайте ответ, а система будет предлагать новые слова или
                    те, в которых были допущены ошибки. Когда вы перестанете их
                    допускать, шкала полностью заполнится. Заполните шкалу
                    несколько раз, сделайте работу над ошибками - и вы готовы.`}
                    textClassName={styles.TrainerPage__hint}
                  />
                )}

                {storeWords[0].trainerType === 'виды союзов' && (
                  <Hint
                    text={`В этом тренажере под подчинительным союзом понимается любое
                    средство подчинительной связи, т.е. союз, союзное слово,
                    частица`}
                    textClassName={styles.TrainerPage__hint}
                  />
                )}

                {isIncorrect && (
                  <Flex
                    className={styles.TrainerPage__uncorrect}
                    data-testid="Trainer__uncorrect"
                    justify="center"
                  >
                    Неверно
                  </Flex>
                )}

                {randomWord && (
                  <>
                    {storeWords[0].trainerType === 'ударения' && (
                      <PrimaryTrainerWords
                        randomWord={randomWord as PrimaryWordsInterface}
                        randomWordsIsReverse={randomWordsIsReverse}
                        wordOnFail={wordOnFail}
                        wordOnSuccess={wordOnSuccess}
                      />
                    )}

                    {words[0].trainerType === 'виды союзов' && (
                      <UnionsTrainerWords
                        randomWord={randomWord as UnionsWordsInterface}
                        wordOnSuccess={wordOnSuccess}
                        wordOnFail={wordOnFail}
                      />
                    )}
                  </>
                )}

                <TrainerProgressBar />
                <StrictModeSwitcher />
              </>
            ) : (
              <TrainerTotalResult
                words={words}
                updateRandomWord={updateRandomWord}
              />
            )}
<<<<<<< HEAD

                  <TrainerProgressBar />
                  <StrictModeSwitcher />
                </>
              ) : (
                <TrainerTotalResult
                  updateRandomWord={updateRandomWord}
                  initializeWords={initializeWords}
                />
              )}
            </>
          )}
        </Flex>
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.)
=======
          </>
        )}
>>>>>>> c31c805 (bugfix)
      </Page>
    );
  },
);

TrainerInner.displayName = 'TrainerInner';

export const TrainerPage: React.FC<TrainerPageProps> = memo(
  ({ words }): React.JSX.Element => {
    // Настройка контекста
    const [totalTime, setTotalTime] = useState<number>(0);
    const [isIncorrect, setIsIncorrect] = useState<boolean>(false);
    const [isErrorWork, setIsErrorWork] = useState<boolean>(false);

    return (
      <TrainerPageContext.Provider
        value={{
          totalTime,
          setTotalTime,
          isIncorrect,
          setIsIncorrect,
          isErrorWork,
          setIsErrorWork,
        }}
      >
        <DynamicModuleLoader
          removeAfterUnmount={false}
          reducers={{ Trainer: TrainerReducer }}
        >
          <TrainerInner words={words} />
        </DynamicModuleLoader>
      </TrainerPageContext.Provider>
    );
  },
);

TrainerPage.displayName = 'TrainerPage';

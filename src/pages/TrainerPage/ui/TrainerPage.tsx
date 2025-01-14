import { Flex } from '@/shared/lib/Stack';
import { TrainerPageProps, TrainerWordsInterface } from '../model/types/types';
import * as styles from './TrainerPage.module.scss';
import { memo, useContext, useEffect, useState } from 'react';
import { DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';

import { TrainerReducer } from '../model/slice/TrainerPageSlice';
import { tabletMediaQueryWidth } from '@/shared/const/global';
import { TrainerProgressBar } from './TrainerProgressBar/ui/TrainerProgressBar';
import { AccentsTrainerWords } from './AccentsTrainerWords/ui/AccentsTrainerWords';
import { AccentsWordsInterface } from '../model/static/wordsForAccentsTests';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { UnionsTrainerWords } from './UnionsTrainerWords';
=======

>>>>>>> f1d426f (Delete dependency cruiser and replace it eslint plugin, fix circular dependencies, fix storybook and unit tests, finish theory block - fix pdf viewer, add adaptive for theory)
import { UnionsWordsInterface } from '../model/static/wordsForUnionsTests';

import { Hint } from '@/shared/ui-kit/Hint';
<<<<<<< HEAD
>>>>>>> 3b93d38 (Fix header, add UI-Kit component -Hint, fix some other things.)
=======
import { TrainerContext } from '../model/context/TrainerContext';
import { useWords } from '../model/selectors/getTrainerWords/getTrainerWords';
import { UnionsTrainerWords } from './UnionsTrainerWords/ui/UnionsTrainerWords';
import { StrictModeSwitcher } from './StrictModeSwitcher/ui/StrictModeSwitcher';
import { TrainerTotalResult } from './TrainerTotalResult/ui/TrainerTotalResult';
import { useRandomWord } from '../model/hooks/useRandomWord';
import { useWordActions } from '../model/hooks/useWordActions';
>>>>>>> f1d426f (Delete dependency cruiser and replace it eslint plugin, fix circular dependencies, fix storybook and unit tests, finish theory block - fix pdf viewer, add adaptive for theory)

import { UnionsWordsInterface } from '../model/static/wordsForUnionsTests';

import { Hint } from '@/shared/ui/Hint';
import { TrainerPageContext } from '../model/context/TrainerPageContext';
import { useWords } from '../model/selectors/getTrainerWords/getTrainerWords';
import { UnionsTrainerWords } from './UnionsTrainerWords/ui/UnionsTrainerWords';
import { StrictModeSwitcher } from './StrictModeSwitcher/ui/StrictModeSwitcher';
import { TrainerTotalResult } from './TrainerTotalResult/ui/TrainerTotalResult';
import { useRandomWord } from '../model/hooks/useRandomWord';
import { useWordActions } from '../model/hooks/useWordActions';
import { Page } from '@/widgets/Page';
import { useInitializeWords } from '../model/hooks/useInitializeWords';

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

    const { totalTime, setIsIncorrect, isIncorrect, isErrorWork } =
      useContext(TrainerPageContext);

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
          if (storeWords[0].trainerType === 'unions') {
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
        initializeWords();
        clearTimeout(timeoutForInitializeWords);
      }, 0);
    }, [initializeWords]);

    return (
<<<<<<< HEAD:src/widgets/Trainer/ui/Trainer.tsx
      <Flex
        maxHeight
        justify="between"
        direction="column"
        className={styles.Trainer}
        relative
        width="100"
      >
        {!totalTime ? (
          <>
<<<<<<< HEAD
<<<<<<< HEAD
            {words[0].trainerType === 'accents' && (
              <Hint
                text={`Выбирайте ответ, а система будет предлагать новые слова или
=======
      <Page>
        <Flex
          maxHeight
          justify="between"
          direction="column"
          className={styles.TrainerPage}
          relative
          width="100"
        >
          {storeWords.length > 0 && (
            <>
              {!totalTime ? (
                <>
                  {storeWords[0].trainerType === 'accents' && (
                    <Hint
                      text={`Выбирайте ответ, а система будет предлагать новые слова или
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.):src/pages/TrainerPage/ui/TrainerPage.tsx
                    те, в которых были допущены ошибки. Когда вы перестанете их
                    допускать, шкала полностью заполнится. Заполните шкалу
                    несколько раз, сделайте работу над ошибками - и вы готовы.`}
                      textClassName={styles.TrainerPage__hint}
                    />
                  )}

                  {storeWords[0].trainerType === 'unions' && (
                    <Hint
                      text={`В этом тренажере под подчинительным союзом понимается любое
                    средство подчинительной связи, т.е. союз, союзное слово,
                    частица`}
                      textClassName={styles.TrainerPage__hint}
                    />
                  )}

<<<<<<< HEAD:src/widgets/Trainer/ui/Trainer.tsx
=======
            <Hint textClassName={styles.Trainer__hint}>
              <>
                {words[0].trainerType === 'accents' && (
                  <p>
                    Выбирайте ответ, а система будет предлагать новые слова или
=======
            {words[0].trainerType === 'accents' && (
              <Hint
                text={`Выбирайте ответ, а система будет предлагать новые слова или
>>>>>>> fed6419 (Add PDFViewer Component, UI-kit ErrorComponent and Theory basic functional.)
                    те, в которых были допущены ошибки. Когда вы перестанете их
                    допускать, шкала полностью заполнится. Заполните шкалу
                    несколько раз, сделайте работу над ошибками - и вы готовы.`}
                textClassName={styles.Trainer__hint}
              />
            )}

            {words[0].trainerType === 'unions' && (
              <Hint
                text={`В этом тренажере под подчинительным союзом понимается любое
                    средство подчинительной связи, т.е. союз, союзное слово,
<<<<<<< HEAD
                    частица
                  </p>
                )}
              </>
            </Hint>
>>>>>>> 3b93d38 (Fix header, add UI-Kit component -Hint, fix some other things.)
=======
                    частица`}
                textClassName={styles.Trainer__hint}
              />
            )}

>>>>>>> fed6419 (Add PDFViewer Component, UI-kit ErrorComponent and Theory basic functional.)
            {isIncorrect && (
              <Flex
                className={styles.Trainer__uncorrect}
                data-testid="Trainer__uncorrect"
                justify="center"
              >
                Неверно
              </Flex>
            )}
=======
                  {isIncorrect && (
                    <Flex
                      className={styles.TrainerPage__uncorrect}
                      data-testid="Trainer__uncorrect"
                      justify="center"
                    >
                      Неверно
                    </Flex>
                  )}
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.):src/pages/TrainerPage/ui/TrainerPage.tsx

                  {randomWord && (
                    <>
                      {storeWords[0].trainerType === 'accents' && (
                        <AccentsTrainerWords
                          randomWord={randomWord as AccentsWordsInterface}
                          randomWordsIsReverse={randomWordsIsReverse}
                          wordOnFail={wordOnFail}
                          wordOnSuccess={wordOnSuccess}
                          storeWords={storeWords}
                        />
                      )}

                      {storeWords[0].trainerType === 'unions' && (
                        <UnionsTrainerWords
                          randomWord={randomWord as UnionsWordsInterface}
                          wordOnSuccess={wordOnSuccess}
                          wordOnFail={wordOnFail}
                          storeWords={storeWords}
                        />
                      )}
                    </>
                  )}

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

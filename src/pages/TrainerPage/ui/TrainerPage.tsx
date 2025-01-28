import { Flex } from '@/shared/lib/Stack';
import {
  PrimaryWordsInterface,
  TrainerWordsInterface,
  WordsTypes,
} from '../model/types/types';
import * as styles from './TrainerPage.module.scss';
import { tabletMediaQueryWidth } from '@/shared/const/global';
import { DynamicModuleLoader } from '@/shared/lib/DynamicModuleLoader';
import { Hint } from '@/shared/ui/Hint';
import { memo, useState, useContext, useEffect } from 'react';
import { Page } from '@/widgets/Page';
import { TrainerPageContext } from '../model/context/TrainerPageContext';
import { useWords } from '../model/selectors/getTrainerWords/getTrainerWords';
import { TrainerReducer } from '../model/slice/TrainerPageSlice';
import { TrainerTotalResult } from './TrainerTotalResult/TrainerTotalResult';
import { UnionsTrainerWords } from './UnionsTrainerWords/UnionsTrainerWords';
import { trainersOfPrimaryType } from '../model/const/const';
import { useRandomWord } from '../lib/hooks/useRandomWord';
import { useWordActions } from '../lib/hooks/useWordActions';
import { useInitializeWords } from '../lib/hooks/useInitializeWords';
import { UnionsWordsInterface } from '../model/static/wordsForUnionsTests';
import { PrimaryTrainerWords } from './PrimaryTrainerWords/PrimaryTrainerWords';
import { TrainerProgressBar } from './TrainerProgressBar/TrainerProgressBar';
import { TrainerModeSwitcher } from './TrainerModeSwitcher/TrainerModeSwitcher';

interface TrainerPageProps {
  words: WordsTypes[];
}

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

    const {
      totalTime,
      setIsIncorrect,
      isIncorrect,
      isErrorWork,
      setIsErrorWork,
      setTotalTime,
    } = useContext(TrainerPageContext);

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
          if (words[0].trainerType === 'виды союзов') {
            (wordElements[NotReverseIndex] as HTMLElement).click();
            return;
          }

          if (!randomWordsIsReverse)
            (wordElements[NotReverseIndex] as HTMLElement).click();
          else {
            const element = wordElements[
              NotReverseIndex === 0 ? 1 : 0
            ] as HTMLElement;

            if (element) element.click();
          }
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
                {trainersOfPrimaryType.includes(storeWords[0].trainerType) && (
                  <Flex width="100">
                    <Hint
                      text={`Выбирайте ответ, а система будет предлагать новые слова или
                    те, в которых были допущены ошибки. Когда вы перестанете их
                    допускать, шкала полностью заполнится. Заполните шкалу
                    несколько раз, сделайте работу над ошибками - и вы готовы.`}
                      textClassName={styles.TrainerPage__hint}
                    />
                  </Flex>
                )}

                {storeWords[0].trainerType === 'виды союзов' && (
                  <Flex width="100">
                    <Hint
                      text={`В этом тренажере под подчинительным союзом понимается любое
                    средство подчинительной связи, т.е. союз, союзное слово,
                    частица`}
                      textClassName={styles.TrainerPage__hint}
                    />
                  </Flex>
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
                    {trainersOfPrimaryType.includes(
                      storeWords[0].trainerType,
                    ) && (
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
                <TrainerModeSwitcher />
              </>
            ) : (
              <TrainerTotalResult
                words={words}
                updateRandomWord={updateRandomWord}
              />
            )}
          </>
        )}
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
    const [isOneLifeMode, setIsOneLifeMode] = useState<boolean>(false);
    const [isCheckMode, setIsCheckMode] = useState<boolean>(false);

    return (
      <TrainerPageContext.Provider
        value={{
          totalTime,
          setTotalTime,
          isIncorrect,
          setIsIncorrect,
          isErrorWork,
          setIsErrorWork,
          isOneLifeMode,
          setIsOneLifeMode,
          isCheckMode,
          setIsCheckMode,
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

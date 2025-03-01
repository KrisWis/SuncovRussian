import { Flex } from '@/shared/lib/Stack';
import {
  wordActionsFunctionType,
  wordActionsFunctionTypeWithElemForClick,
} from '../../../lib/hooks/useWordActions';
import { WithMissedLettersWordsInterface } from '../../../model/types/withMissedLetters';
import * as styles from './TrainerWithMissedLettersWords.module.scss';
import { Fragment, memo, useContext, useEffect } from 'react';
import { Button } from '@/shared/ui/Button';
import { renderLetter } from '../lib/renderLetter';
import { onContinueHandler } from '../lib/onContinueHandler';
import { continueOnKeyDown } from '../lib/continueOnKeyDown';
import { MissedLetterInputContext } from '@/shared/ui/MissedLetterInput';
import { useWords } from '../../../model/selectors/getTrainerWords/getTrainerWords';
import { TrainerPageContext } from '../../../model/context/TrainerPageContext';

// TODO: написать тесты
export interface TrainerWithMissedLettersWordsProps {
  randomWord: WithMissedLettersWordsInterface;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionTypeWithElemForClick;
}

export const TrainerWithMissedLettersWords: React.FC<TrainerWithMissedLettersWordsProps> =
  memo(({ randomWord, wordOnSuccess, wordOnFail }): React.JSX.Element => {
    // Получаем данные из контекстов
    const { incorrectInputsIDs, setIncorrectInputsIDs } = useContext(
      MissedLetterInputContext,
    );
    const { isErrorWork, isIncorrect, setIsIncorrect } =
      useContext(TrainerPageContext);

    // Получаем данные из хранилища
    const storeWords = useWords();

    // Добавляем обработчик нажатия клавиши Enter
    useEffect(() => {
      document.addEventListener('keydown', continueOnKeyDown);

      return () => {
        document.removeEventListener('keydown', continueOnKeyDown);
      };
    }, []);

    // При изменении randomWord, обнуляем данные
    useEffect(() => {
      setIncorrectInputsIDs([]);

      // Проходимся по всем инпутам и удаляем значение
      const TrainerWithMissedLettersInputs =
        document.querySelectorAll<HTMLInputElement>(
          '[data-name="TrainerWithMissedLetters__input"',
        );

      for (const input of TrainerWithMissedLettersInputs) {
        input.value = '';
      }
    }, [randomWord, setIncorrectInputsIDs]);

    return (
      <Flex width="100" maxHeight justify="center" direction="column" gap="50">
        <Flex direction="column">
          <span className={styles.TrainerWithMissedLettersWords__letter}>
            {randomWord.word.split('').map((letter, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={index}>
                {renderLetter(
                  letter,
                  index + 1,
                  randomWord.missedLettersIndexes,
                  incorrectInputsIDs,
                )}
              </Fragment>
            ))}
          </span>

          {isIncorrect && (
            <span className={styles.TrainerWithMissedLettersWords__letter}>
              {randomWord.word.split('').map((letter, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Fragment key={index}>
                  {randomWord.missedLettersIndexes.includes(index + 1) ? (
                    <span
                      className={
                        styles.TrainerWithMissedLettersWords__correctLetter
                      }
                    >
                      {letter}
                    </span>
                  ) : (
                    letter
                  )}
                </Fragment>
              ))}
            </span>
          )}
        </Flex>

        <Button
          onClick={() =>
            onContinueHandler({
              randomWord,
              setIncorrectInputsIDs,
              wordOnSuccess,
              wordOnFail,
              storeWords,
              isErrorWork,
              setIsIncorrect,
            })
          }
          size="big"
          variant="inverse"
          id="TrainerWithMissedLettersWords__continueButton"
        >
          Далее
        </Button>
      </Flex>
    );
  });

TrainerWithMissedLettersWords.displayName = 'TrainerWithMissedLettersWords';

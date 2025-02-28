import { Flex } from '@/shared/lib/Stack';
import {
  wordActionsFunctionType,
  wordOnFailType,
} from '../../../lib/hooks/useWordActions';
import { WithMissedLettersWordsInterface } from '../../../model/types/withMissedLetters';
import * as styles from './TrainerWithMissedLettersWords.module.scss';
import { Fragment, memo, useContext, useEffect, useMemo } from 'react';
import { Button } from '@/shared/ui/Button';
import { renderLetter } from '../lib/renderLetter';
import { onContinueHandler } from '../lib/onContinueHandler';
import { continueOnKeyDown } from '../lib/continueOnKeyDown';
import { MissedLetterInputContext } from '@/shared/ui/MissedLetterInput';

// TODO: написать тесты
export interface TrainerWithMissedLettersWordsProps {
  randomWord: WithMissedLettersWordsInterface;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordOnFailType;
  showNewWord: wordActionsFunctionType;
}

export const TrainerWithMissedLettersWords: React.FC<TrainerWithMissedLettersWordsProps> =
  memo(({ randomWord }): React.JSX.Element => {
    // Получаем данные из контекста
    const {
      correctInputsIDs,
      incorrectInputsIDs,
      missedInputsIDs,
      setCorrectInputsIDs,
      setIncorrectInputsIDs,
      setMissedInputsIDs,
    } = useContext(MissedLetterInputContext);

    // Формируем параметры для функции onContinueHandler
    const onContinueHandlerParams = useMemo(
      () => ({
        word: randomWord.word,
        setMissedInputsIDs,
        setCorrectInputsIDs,
        setIncorrectInputsIDs,
      }),
      [
        randomWord.word,
        setMissedInputsIDs,
        setCorrectInputsIDs,
        setIncorrectInputsIDs,
      ],
    );

    // Добавляем обработчик нажатия клавиши Enter
    useEffect(() => {
      document.addEventListener('keydown', continueOnKeyDown);

      return () => {
        document.removeEventListener('keydown', continueOnKeyDown);
      };
    }, []);

    return (
      <Flex width="100" maxHeight justify="center" direction="column" gap="50">
        <span className={styles.TrainerWithMissedLettersWords__letter}>
          {randomWord.word.split('').map((letter, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Fragment key={index}>
              {renderLetter(
                letter,
                index + 1,
                randomWord.missedLettersIndexes,
                missedInputsIDs,
                correctInputsIDs,
                incorrectInputsIDs,
                setMissedInputsIDs,
              )}
            </Fragment>
          ))}
        </span>

        <Button
          onClick={() => onContinueHandler(onContinueHandlerParams)}
          size="small"
          variant="inverse"
          id="TrainerWithMissedLettersWords__continueButton"
        >
          Далее
        </Button>
      </Flex>
    );
  });

TrainerWithMissedLettersWords.displayName = 'TrainerWithMissedLettersWords';

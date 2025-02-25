import { Flex } from '@/shared/lib/Stack';
import {
  wordActionsFunctionType,
  wordOnFailType,
} from '../../../lib/hooks/useWordActions';
import { WithMissedLettersWordsInterface } from '../../../model/types/withMissedLetters';
import * as styles from './TrainerWithMissedLettersWords.module.scss';
import { Fragment, memo } from 'react';
import { Button } from '@/shared/ui/Button';
import { renderLetter } from '../lib/renderLetter';

export interface TrainerWithMissedLettersWordsProps {
  randomWord: WithMissedLettersWordsInterface;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordOnFailType;
  showNewWord: wordActionsFunctionType;
}

export const TrainerWithMissedLettersWords: React.FC<TrainerWithMissedLettersWordsProps> =
  memo(({ randomWord }): React.JSX.Element => {
    return (
      <Flex width="100" maxHeight justify="center" direction="column" gap="50">
        <span className={styles.TrainerWithMissedLettersWords__letter}>
          {randomWord.word.split('').map((letter, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Fragment key={index}>
              {renderLetter(letter, index, randomWord.missedLettersIndexes)}
            </Fragment>
          ))}
        </span>

        <Button size="small" variant="inverse">
          Далее
        </Button>
      </Flex>
    );
  });

TrainerWithMissedLettersWords.displayName = 'TrainerWithMissedLettersWords';

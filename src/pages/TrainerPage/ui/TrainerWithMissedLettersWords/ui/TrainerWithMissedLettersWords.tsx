import { Flex } from '@/shared/lib/Stack';
import {
  wordActionsFunctionType,
  wordOnFailType,
} from '../../../lib/hooks/useWordActions';
import { WithMissedLettersWordsInterface } from '../../../model/types/withMissedLetters';
import * as styles from './TrainerWithMissedLettersWords.module.scss';
import { memo } from 'react';
import { MissedLetterInput } from '@/shared/ui/MissedLetterInput';
import { Button } from '@/shared/ui/Button';

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
          {randomWord.word.split('').map((letter, index) => {
            if (randomWord.missedLettersIndexes.includes(index + 1)) {
              // eslint-disable-next-line react/no-array-index-key
              return <MissedLetterInput key={index} />;
            }

            return (
              <span
                // eslint-disable-next-line react/no-array-index-key
                key={index}
              >
                {letter}
              </span>
            );
          })}
        </span>

        <Button size="small" variant="inverse">
          Далее
        </Button>
      </Flex>
    );
  });

TrainerWithMissedLettersWords.displayName = 'TrainerWithMissedLettersWords';

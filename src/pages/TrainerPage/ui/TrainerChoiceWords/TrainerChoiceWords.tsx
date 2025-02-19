// TODO: написать тесты
import { memo } from 'react';
import * as styles from './TrainerChoiceWords.module.scss';
import {
  ChoiceWordInterface,
  ChoiceWordsCategory,
} from '../../model/types/choice';
import { wordActionsFunctionType } from '../../lib/hooks/useWordActions';
import { Flex } from '@/shared/lib/Stack';

export interface TrainerChoiceWordsProps {
  randomWord: ChoiceWordInterface;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionType;
  categories: ChoiceWordsCategory[];
}

export const TrainerChoiceWords: React.FC<TrainerChoiceWordsProps> = memo(
  ({ randomWord, categories }): React.JSX.Element => {
    return (
      <Flex maxHeight width="100" direction="column" gap="20" justify="center">
        <span className={styles.TrainerChoiceWords__word}>
          {randomWord.word}
        </span>

        <Flex width="100" justify="center" direction="column" gap="50">
          {categories.map((category) => (
            <Flex width="100" key={category.category}>
              <span className={styles.TrainerChoiceWords__category}>
                {category.category}
              </span>

              <Flex width="100" wrap gap="15">
                {category.choiceWords.map((choiceWord) => (
                  <span
                    className={styles.TrainerChoiceWords__choiceWord}
                    key={choiceWord}
                  >
                    {choiceWord}
                  </span>
                ))}
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    );
  },
);

TrainerChoiceWords.displayName = 'TrainerChoiceWords';

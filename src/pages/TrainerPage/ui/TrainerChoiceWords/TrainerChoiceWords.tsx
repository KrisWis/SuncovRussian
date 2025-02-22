import { memo, useContext, useEffect } from 'react';
import * as styles from './TrainerChoiceWords.module.scss';
import {
  ChoiceWordInterface,
  ChoiceWordsCategory,
} from '../../model/types/choice';
import { Flex } from '@/shared/lib/Stack';
import { useWords } from '../../model/selectors/getTrainerWords/getTrainerWords';
import { TrainerPageContext } from '../../model/context/TrainerPageContext';
import { clearClassesOnWord } from './lib/clearClassesOnWord';
import { ChoiceWordOnClick } from './lib/choiceWordOnClick';
import {
  wordActionsFunctionType,
  wordOnFailType,
} from '../../lib/hooks/useWordActions';

export interface TrainerChoiceWordsProps {
  randomWord: ChoiceWordInterface;
  categories: ChoiceWordsCategory[];
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordOnFailType;
  showNewWord: wordActionsFunctionType;
}

export const TrainerChoiceWords: React.FC<TrainerChoiceWordsProps> = memo(
  ({
    randomWord,
    categories,
    wordOnFail,
    wordOnSuccess,
    showNewWord,
  }): React.JSX.Element => {
    // Инициализация данных и контекста
    const storeWords = useWords();
    const { isErrorWork } = useContext(TrainerPageContext);

    // При новом слове производим очистку классов у слов
    useEffect(() => {
      clearClassesOnWord();
    }, [randomWord]);

    return (
      <Flex
        className={styles.TrainerChoiceWords}
        maxHeight
        width="100"
        direction="column"
        gap="20"
        justify="center"
      >
        <span
          data-testid="TrainerChoiceWords_word"
          className={styles.TrainerChoiceWords__word}
        >
          {randomWord.word}
        </span>

        <Flex width="100" justify="center" direction="column" gap="50">
          {categories.map((category) => (
            <Flex width="100" key={category.choiceWords.join('')}>
              {category.category && (
                <span className={styles.TrainerChoiceWords__category}>
                  {category.category}
                </span>
              )}

              <Flex width="100" wrap gap="10">
                {category.choiceWords.map((choiceWord) => (
                  <span
                    onClick={(e) =>
                      ChoiceWordOnClick(
                        e,
                        randomWord,
                        choiceWord,
                        wordOnSuccess,
                        wordOnFail,
                        isErrorWork,
                        storeWords,
                        showNewWord,
                      )
                    }
                    className={`
                    ${styles.TrainerChoiceWords__choiceWord}
                    ${!category.category ? styles.TrainerChoiceWords__choiceWord__withoutCategory : ''}
                    `}
                    key={choiceWord}
                    data-name="TrainerChoiceWords_choiceWord"
                    data-value={choiceWord}
                    data-testid="TrainerChoiceWords_choiceWord"
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

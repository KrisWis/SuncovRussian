// TODO: написать тесты
import { memo, useContext, useEffect } from 'react';
import * as styles from './TrainerChoiceWords.module.scss';
import {
  ChoiceWordInterface,
  ChoiceWordsCategory,
} from '../../model/types/choice';
import { wordActionsFunctionType } from '../../lib/hooks/useWordActions';
import { Flex } from '@/shared/lib/Stack';
import { useWords } from '../../model/selectors/getTrainerWords/getTrainerWords';
import { TrainerPageContext } from '../../model/context/TrainerPageContext';
import { onFailHandler } from './lib/onFailHandler';
import { clearClassesOnWord } from './lib/clearClassesOnWord';

export interface TrainerChoiceWordsProps {
  randomWord: ChoiceWordInterface;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionType;
  categories: ChoiceWordsCategory[];
}

export const TrainerChoiceWords: React.FC<TrainerChoiceWordsProps> = memo(
  ({
    randomWord,
    categories,
    wordOnFail,
    wordOnSuccess,
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
        <span className={styles.TrainerChoiceWords__word}>
          {randomWord.word}
        </span>

        <Flex width="100" justify="center" direction="column" gap="50">
          {categories.map((category) => (
            <Flex width="100" key={category.category}>
              <span className={styles.TrainerChoiceWords__category}>
                {category.category}
              </span>

              <Flex width="100" wrap gap="10">
                {category.choiceWords.map((choiceWord) => (
                  <span
                    onClick={(e) =>
                      randomWord.choiceWord === choiceWord
                        ? wordOnSuccess(storeWords, isErrorWork, randomWord.id)
                        : onFailHandler(
                            e,
                            randomWord,
                            wordOnFail,
                            storeWords,
                            isErrorWork,
                          )
                    }
                    className={styles.TrainerChoiceWords__choiceWord}
                    key={choiceWord}
                    data-name="TrainerChoiceWords_choiceWord"
                    data-value={choiceWord}
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

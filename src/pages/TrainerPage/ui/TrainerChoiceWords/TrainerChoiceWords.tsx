import { memo, useContext, useEffect, useMemo } from 'react';
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
  wordActionsFunctionTypeWithElemForClick,
} from '../../lib/hooks/useWordActions';

export interface TrainerChoiceWordsProps {
  randomWord: ChoiceWordInterface;
  categories: ChoiceWordsCategory[];
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionTypeWithElemForClick;
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

    // Определение того, что тренажер без категорий
    const isWithoutCategory = useMemo(
      () => !categories.find((category) => category.category),
      [categories],
    );

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

        <Flex
          className={`
          ${styles.TrainerChoiceWords__choiceWordsWrapper}
          ${isWithoutCategory ? styles.TrainerChoiceWords__choiceWordsWrapper__withoutCategory : ''}
          `}
          width="100"
          justify="center"
          direction="column"
          gap="50"
        >
          {categories.map((category) => (
            <Flex
              justify={isWithoutCategory ? 'center' : 'start'}
              width="100"
              key={category.choiceWords.join('')}
            >
              {category.category && (
                <span className={styles.TrainerChoiceWords__category}>
                  {category.category}
                </span>
              )}

              <div className={styles.TrainerChoiceWords__choiceWords}>
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
                    className={styles.TrainerChoiceWords__choiceWord}
                    key={choiceWord}
                    data-name="TrainerChoiceWords_choiceWord"
                    data-value={choiceWord}
                    data-testid="TrainerChoiceWords_choiceWord"
                  >
                    {choiceWord}
                  </span>
                ))}
              </div>
            </Flex>
          ))}
        </Flex>
      </Flex>
    );
  },
);

TrainerChoiceWords.displayName = 'TrainerChoiceWords';

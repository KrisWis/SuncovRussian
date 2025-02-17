import { Flex } from '@/shared/lib/Stack';
import { Answer } from '../model/types/types';
import * as styles from './Test.module.scss';
import { memo, useCallback } from 'react';
import { testSwitching } from '../lib/helpers/TestSwitching';
import { deleteClassOfMissing } from '../lib/helpers/deleteClassOfMissing';

interface TestProps {
  caption: string;
  answers: Answer[];
  hasOneCorrectAnswer: boolean;
  index: number;
  maxCorrectAnswersCount: number;
  testHasMissedAnswers: boolean;
}

export const Test: React.FC<TestProps> = memo(
  ({
    caption,
    answers,
    hasOneCorrectAnswer,
    index,
    maxCorrectAnswersCount,
    testHasMissedAnswers,
  }): React.JSX.Element => {
    // Функция для объедения функций инпутов
    const handleRadioButton = useCallback(
      (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        deleteClassOfMissing(e);
        testSwitching(hasOneCorrectAnswer, e);
      },
      [hasOneCorrectAnswer],
    );

    return (
      <Flex
        direction="column"
        className={`${styles.Test} 
        ${maxCorrectAnswersCount > 0 && !testHasMissedAnswers ? styles.Test__unactive : ''}`}
        justify="center"
        gap="20"
        relative
        data-name="Test"
        width="100"
        id={`Test__${index}`}
        data-testid="Test"
      >
        <div data-name="Test__bg" className={styles.Test__bg}></div>

        <h2 className={styles.Test__caption}>{caption}</h2>

        <Flex width="100" align="start" direction="column" gap="10">
          {answers.map((answer, answerIndex) => (
            <Flex key={answer.id} gap="10">
              <input
                className={styles.Test__itemRadio}
                type="radio"
                onClick={handleRadioButton}
                data-name="Test__radioButton"
                data-index={answerIndex}
                data-testid={`Test__radioButton__${index}`}
              />

              <label className={styles.Test__itemLabel}>{answer.text}</label>
            </Flex>
          ))}
        </Flex>
      </Flex>
    );
  },
);

Test.displayName = 'Test';

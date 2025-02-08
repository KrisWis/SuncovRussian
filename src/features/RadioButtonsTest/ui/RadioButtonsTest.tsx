import { Flex } from '@/shared/lib/Stack';
import { RadioButtonsTestItem } from '../model/types';
import * as styles from './RadioButtonsTest.module.scss';
import { memo, useCallback } from 'react';
import { radioButtonSwitching } from '../lib/helpers/radioButtonSwitching';
import { deleteClassOfMissing } from '../lib/helpers/deleteClassOfMissing';
// eslint-disable-next-line ulbi-tv-plugin/layer-imports
import { TestsType } from '@/pages/TestsPage';

interface RadioButtonsTestProps {
  caption: string;
  items: RadioButtonsTestItem[];
  hasOneCorrectAnswer: boolean;
  index: number;
  tests: TestsType;
  theme: string;
}

export const RadioButtonsTest: React.FC<RadioButtonsTestProps> = memo(
  ({
    caption,
    items,
    hasOneCorrectAnswer,
    index,
    tests,
    theme,
  }): React.JSX.Element => {
    // Функция для объедения функций инпутов
    const handleRadioButton = useCallback(
      (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
        deleteClassOfMissing(e, tests, theme);
        radioButtonSwitching(hasOneCorrectAnswer, e);
      },
      [hasOneCorrectAnswer, tests, theme],
    );

    return (
      <Flex
        direction="column"
        className={styles.RadioButtonsTest}
        justify="center"
        gap="20"
        relative
        data-name="RadioButtonsTest"
        width="100"
        id={`RadioButtonsTest__${index}`}
      >
        <div
          data-name="RadioButtonsTest__bg"
          className={styles.RadioButtonsTest__bg}
        ></div>

        <h2 className={styles.RadioButtonsTest__caption}>
          {caption} (укажите ответ{!hasOneCorrectAnswer ? 'ы' : ''}):
        </h2>

        <Flex width="100" align="start" direction="column" gap="10">
          {items.map((item, itemIndex) => (
            <Flex key={item.value} gap="10">
              <input
                className={styles.RadioButtonsTest__itemRadio}
                type="radio"
                onClick={handleRadioButton}
                data-name="RadioButtonsTest__radioButton"
                data-index={itemIndex}
              />

              <label
                className={styles.RadioButtonsTest__itemLabel}
                htmlFor={item.value}
              >
                {item.value}
              </label>
            </Flex>
          ))}
        </Flex>
      </Flex>
    );
  },
);

RadioButtonsTest.displayName = 'RadioButtonsTest';

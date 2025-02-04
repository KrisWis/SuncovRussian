import { Flex } from '@/shared/lib/Stack';
import { RadioButtonsTestItem } from '../model/types';
import * as styles from './RadioButtonsTest.module.scss';
import { memo, useMemo } from 'react';

interface RadioButtonsTestProps {
  caption: string;
  items: RadioButtonsTestItem[];
  hasOneCorrectAnswer: boolean;
}

export const RadioButtonsTest: React.FC<RadioButtonsTestProps> = memo(
  ({ caption, items, hasOneCorrectAnswer }): React.JSX.Element => {
    // Убираем из заголовка пробелы и делаем все буквы маленькими
    const captionForRadio = useMemo(
      () => caption.toLowerCase().replace(/\s+/g, '-'),
      [caption],
    );

    return (
      <Flex
        width="80"
        direction="column"
        className={styles.RadioButtonsTest}
        justify="center"
        gap="20"
      >
        <h2 className={styles.RadioButtonsTest__caption}>
          {caption} (укажите ответ{!hasOneCorrectAnswer ? 'ы' : ''}):
        </h2>

        <Flex width="100" align="start" direction="column" gap="10">
          {items.map((item) => (
            <Flex key={item.value} gap="10">
              <input
                className={styles.RadioButtonsTest__itemRadio}
                type="radio"
                name={
                  hasOneCorrectAnswer
                    ? `RadioButtonsTest__itemRadio__${captionForRadio}`
                    : undefined
                }
                onClick={(e) => {
                  // Реализация отмены выбора
                  if (!hasOneCorrectAnswer) {
                    const target = e.target as HTMLInputElement;

                    if (
                      target.checked &&
                      target.dataset.wasChecked === 'true'
                    ) {
                      target.checked = false;
                    }

                    target.dataset.wasChecked = String(target.checked);
                  }
                }}
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

import { Flex } from '@/shared/lib/Stack';
import styles from './StrictModeSwitcher.module.scss';
import { memo, useCallback, useState } from 'react';
import { useWords } from '../../../model/selectors/getWords/getWords';
import { useTestsWordsActions } from '../../../model/slice/slice';

export const StrictModeSwitcher: React.FC = memo((): React.JSX.Element => {
  // Переключение строгого режима
  const [strictModeIsOn, setStrictModeIsOn] = useState<boolean>(false);

  // Включение строгого режима
  const storeWords = useWords();

  const { changeWordProbability } = useTestsWordsActions();

  const strictModeFunction = useCallback(() => {
    if (document.hidden) {
      for (const word of storeWords) {
        changeWordProbability({ id: word.id, probability: 1 });
      }
    }
  }, [changeWordProbability, storeWords]);

  const strictModeToggle = useCallback(() => {
    if (!strictModeIsOn) {
      setStrictModeIsOn(true);
      document.onvisibilitychange = strictModeFunction;
    } else {
      setStrictModeIsOn(false);
      document.onvisibilitychange = null;
    }
  }, [strictModeFunction, strictModeIsOn]);

  return (
    <Flex justify="end" width="100" maxHeight>
      <Flex
        onClick={strictModeToggle}
        justify="center"
        className={styles.StrictModeSwitcher}
        direction="column"
        gap="10"
      >
        <span>Строгий режим</span>
        <span>{strictModeIsOn ? 'вкл' : 'выкл'}</span>
      </Flex>
    </Flex>
  );
});

StrictModeSwitcher.displayName = 'StrictModeSwitcher';

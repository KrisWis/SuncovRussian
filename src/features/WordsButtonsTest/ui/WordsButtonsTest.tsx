import * as styles  from './WordsButtonsTest.module.scss';
import { memo } from 'react';

export const WordsButtonsTest: React.FC = memo((): React.JSX.Element => {
  return <div className={styles.WordsButtonsTest}></div>;
})

WordsButtonsTest.displayName = 'WordsButtonsTest';
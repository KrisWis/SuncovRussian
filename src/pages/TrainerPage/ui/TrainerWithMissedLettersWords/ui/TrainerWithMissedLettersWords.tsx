import * as styles  from './TrainerWithMissedLettersWords.module.scss';
import { memo } from 'react';

export const TrainerWithMissedLettersWords: React.FC = memo((): React.JSX.Element => {
  return <div className={styles.TrainerWithMissedLettersWords}></div>;
})

TrainerWithMissedLettersWords.displayName = 'TrainerWithMissedLettersWords';
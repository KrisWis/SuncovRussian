import * as styles  from './ModeSwitcher.module.scss';
import { memo } from 'react';

export const ModeSwitcher: React.FC = memo((): React.JSX.Element => {
  return <div className={styles.ModeSwitcher}></div>;
})

ModeSwitcher.displayName = 'ModeSwitcher';
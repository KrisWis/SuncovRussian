import { TipInterface } from '@/shared/assets/static/tips';
import { Flex } from '@/shared/lib/Stack';
import { memo } from 'react';
import * as styles from './Tip.module.scss';

export const Tip: React.FC<TipInterface> = memo(
  ({ id, text }): React.JSX.Element => {
    return (
      <Flex className={styles.Tip} gap="10" direction="column" justify="center">
        <h6 className={styles.Tip__caption}>Совет № {id + 1}.</h6>

        <p className={styles.Tip__text}>{text}</p>
      </Flex>
    );
  },
);

Tip.displayName = 'Tip';

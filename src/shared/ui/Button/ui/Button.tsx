import * as styles from './Button.module.scss';
import { memo } from 'react';
import { ButtonProps } from '../model/types';

export const Button: React.FC<ButtonProps> = memo(
  ({ className, children, ...props }): React.JSX.Element => {
    return (
      // eslint-disable-next-line react/button-has-type
      <button {...props} className={`${styles.Button} ${className}`}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

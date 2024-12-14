import styles from './Button.module.scss';
import { memo } from 'react';
import { ButtonProps } from '../model/types';

export const Button: React.FC<ButtonProps> = memo(
  ({ className, children, theme = 'valid' }): React.JSX.Element => {
    return (
      <div
        className={`${styles.Button} 
  ${className} ${styles[`Button__${theme}`]}`}
      >
        {children}
      </div>
    );
  },
);

Button.displayName = 'Button';

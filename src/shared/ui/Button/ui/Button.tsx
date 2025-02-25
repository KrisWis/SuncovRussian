import * as styles from './Button.module.scss';
import { memo } from 'react';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  variant?: 'big' | 'medium';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = memo(
  ({
    className,
    children,
    variant = 'medium',
    ...props
  }): React.JSX.Element => {
    return (
      // eslint-disable-next-line react/button-has-type
      <button
        {...props}
        className={`${styles.Button} ${styles[`Button__${variant}`]} ${className}`}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

import * as styles from './Button.module.scss';
import { memo } from 'react';

type ButtonSize = 'big' | 'medium' | 'small';

type ButtonVariant = 'primary' | 'inverse';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = memo(
  ({
    className,
    children,
    size = 'medium',
    variant = 'primary',
    ...props
  }): React.JSX.Element => {
    return (
      // eslint-disable-next-line react/button-has-type
      <button
        {...props}
        className={`${styles.Button} ${styles[`Button__${size}`]} ${styles[`Button__${variant}`]} ${className}`}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

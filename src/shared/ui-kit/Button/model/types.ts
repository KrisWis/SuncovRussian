type ButtonThemes = 'valid' | 'invalid';

export interface ButtonProps {
  className?: string;
  theme?: ButtonThemes;
  children: React.ReactNode;
}

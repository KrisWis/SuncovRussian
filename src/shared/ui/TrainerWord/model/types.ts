type TrainerWordTypes = 'default' | 'invalid';

export interface TrainerWordProps {
  className?: string;
  style?: React.CSSProperties;
  dataTestId?: string;
  onClick?: () => void;
  type?: TrainerWordTypes;
  children: React.ReactNode;
}

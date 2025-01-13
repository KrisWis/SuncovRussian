type HintTextDirection = 'right' | 'top';

export interface HintProps {
  textClassName?: string;
  textDirection?: HintTextDirection;
  text: string;
}

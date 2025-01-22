import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import * as styles from './Flex.module.scss';

export type FlexJustify =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'evenly'
  | 'around';
export type FlexAlign = 'start' | 'center' | 'end' | 'stretch';
export type FlexDirection = 'row' | 'column' | 'rowReverse' | 'columnReverse';
export type FlexGap =
  | '0'
  | '3'
  | '5'
  | '10'
  | '15'
  | '20'
  | '30'
  | '40'
  | '50'
  | '70'
  | '100';
export type FlexWitdth =
  | '5'
  | '10'
  | '15'
  | '20'
  | '25'
  | '30'
  | '35'
  | '40'
  | '45'
  | '50'
  | '55'
  | '60'
  | '65'
  | '70'
  | '75'
  | '80'
  | '85'
  | '90'
  | '95'
  | '100';

const justifyClasses: Record<FlexJustify, string> = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  between: styles.justifyBetween,
  evenly: styles.justifyEvenly,
  around: styles.justifyAround,
};

const alignClasses: Record<FlexAlign, string> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
  stretch: styles.alignStretch,
};

const directionClasses: Record<FlexDirection, string> = {
  row: styles.directionRow,
  column: styles.directionColumn,
  rowReverse: styles.directionRowReverse,
  columnReverse: styles.directionColumnReverse,
};

const gapClasses: Record<FlexGap, string> = {
  0: styles.gap0,
  3: styles.gap3,
  5: styles.gap5,
  10: styles.gap10,
  15: styles.gap15,
  20: styles.gap20,
  30: styles.gap30,
  40: styles.gap40,
  50: styles.gap50,
  70: styles.gap70,
  100: styles.gap100,
};

const widthClasses: Record<FlexWitdth, string> = {
  5: styles.width5,
  10: styles.width10,
  15: styles.width15,
  20: styles.width20,
  25: styles.width25,
  30: styles.width30,
  35: styles.width35,
  40: styles.width40,
  45: styles.width45,
  50: styles.width50,
  55: styles.width55,
  60: styles.width60,
  65: styles.width65,
  70: styles.width70,
  75: styles.width75,
  80: styles.width80,
  85: styles.width85,
  90: styles.width90,
  95: styles.width95,
  100: styles.width100,
};

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  wrap?: boolean;
  gap?: FlexGap;
  maxHeight?: boolean;
  width?: FlexWitdth;
  innerRef?: React.Ref<HTMLDivElement>;
  relative?: boolean;
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    maxHeight,
    innerRef,
    wrap,
    width,
    relative,
    ...otherProps
  } = props;

  const classes = [
    styles.Flex,
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
    width && widthClasses[width],
    maxHeight && styles.maxHeight,
    relative && styles.relative,
    wrap && styles.wrap,
  ];

  return (
    <div ref={innerRef} className={classes.join(' ')} {...otherProps}>
      {children}
    </div>
  );
};
Flex.displayName = 'Flex';

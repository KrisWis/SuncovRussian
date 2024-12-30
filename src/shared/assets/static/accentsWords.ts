export interface AccentsWordsInterface {
  id: number;
  valid: string;
  invalid: string;
  probability?: number;
  uncorrectTimes?: number;
  consecutivelyTimes?: number;
  inProgress?: boolean;
}

export const accentsWords: AccentsWordsInterface[] = [
  {
    valid: 'аэропОрты',
    invalid: 'аэропортЫ',
    id: 0,
  },
  {
    valid: 'бАнты',
    invalid: 'бантЫ',
    id: 1,
  },
  {
    valid: 'бухгАлтеров',
    invalid: 'бухгалтерОв',
    id: 2,
  },
  {
    valid: 'вероисповЕдание',
    invalid: 'вероисповедАние',
    id: 3,
  },
  {
    valid: 'водопровОд',
    invalid: 'водопрОвод',
    id: 4,
  },
];

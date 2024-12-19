import { TestsWordsInterface } from './types';

export const accentsTestsWords: TestsWordsInterface[] = [
  {
    valid: 'аэропОрты',
    invalid: 'аэропортЫ',
    id: 0,
    probability: 1,
  },
  {
    valid: 'бАнты',
    invalid: 'бантЫ',
    id: 1,
    probability: 1,
  },
];

import { wordActionsFunctionType } from './../../../model/hooks';
import { AccentsWordsInterface } from '../../../model/static/wordsForAccentsTests';

export interface AccentsTrainerWordsProps {
  randomWord: AccentsWordsInterface;
  randomWordsIsReverse: boolean;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionType;
}

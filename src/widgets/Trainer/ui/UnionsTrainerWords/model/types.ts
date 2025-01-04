import { wordActionsFunctionType } from '../../../model/hooks';
import { UnionsWordsInterface } from '../../../model/static/wordsForUnionsTests';

export interface UnionsTrainerWordsProps {
  randomWord: UnionsWordsInterface;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionType;
}

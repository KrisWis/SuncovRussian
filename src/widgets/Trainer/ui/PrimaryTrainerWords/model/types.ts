import { wordActionsFunctionType } from '../../../model/hooks/useWordActions';
import { PrimaryWordsInterface } from '../../../model/types/types';

export interface PrimaryTrainerWordsProps {
  randomWord: PrimaryWordsInterface;
  randomWordsIsReverse: boolean;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionType;
}

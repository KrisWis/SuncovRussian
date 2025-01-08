import { wordActionsFunctionType } from '@/widgets/Trainer/model/hooks/useWordActions';
import { AccentsWordsInterface } from '../../../model/static/wordsForAccentsTests';

export interface AccentsTrainerWordsProps {
  randomWord: AccentsWordsInterface;
  randomWordsIsReverse: boolean;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionType;
}

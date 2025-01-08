import { wordActionsFunctionType } from '@/widgets/Trainer/model/hooks/useWordActions';
import { UnionsWordsInterface } from '../../../model/static/wordsForUnionsTests';

export interface UnionsTrainerWordsProps {
  randomWord: UnionsWordsInterface;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionType;
}

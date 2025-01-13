import { wordActionsFunctionType } from '../../../model/hooks/useWordActions';
import { UnionsWordsInterface } from '../../../model/static/wordsForUnionsTests';
import { WordsTypes } from '../../../model/types/types';

export interface UnionsTrainerWordsProps {
  randomWord: UnionsWordsInterface;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionType;
  storeWords: WordsTypes[];
}

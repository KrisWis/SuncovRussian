<<<<<<< HEAD
import { wordActionsFunctionType } from '../../../model/hooks/useWordActions';
=======
import { wordActionsFunctionType } from '@/widgets/Trainer/model/hooks/useWordActions';
>>>>>>> f1d426f (Delete dependency cruiser and replace it eslint plugin, fix circular dependencies, fix storybook and unit tests, finish theory block - fix pdf viewer, add adaptive for theory)
import { AccentsWordsInterface } from '../../../model/static/wordsForAccentsTests';

export interface AccentsTrainerWordsProps {
  randomWord: AccentsWordsInterface;
  randomWordsIsReverse: boolean;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionType;
}

<<<<<<< HEAD
<<<<<<< HEAD
import { wordActionsFunctionType } from '../../../model/hooks/useWordActions';
=======
import { wordActionsFunctionType } from '@/widgets/Trainer/model/hooks/useWordActions';
>>>>>>> f1d426f (Delete dependency cruiser and replace it eslint plugin, fix circular dependencies, fix storybook and unit tests, finish theory block - fix pdf viewer, add adaptive for theory)
=======
import { wordActionsFunctionType } from '../../../model/hooks/useWordActions';
>>>>>>> 12d4b89 (Delete cnd package for pdf and add react alternative lib.)
import { AccentsWordsInterface } from '../../../model/static/wordsForAccentsTests';

export interface AccentsTrainerWordsProps {
  randomWord: AccentsWordsInterface;
  randomWordsIsReverse: boolean;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionType;
}

<<<<<<< HEAD
<<<<<<< HEAD
import { wordActionsFunctionType } from '../../../model/hooks/useWordActions';
=======
import { wordActionsFunctionType } from '@/widgets/Trainer/model/hooks/useWordActions';
>>>>>>> f1d426f (Delete dependency cruiser and replace it eslint plugin, fix circular dependencies, fix storybook and unit tests, finish theory block - fix pdf viewer, add adaptive for theory)
=======
import { wordActionsFunctionType } from '../../../model/hooks/useWordActions';
>>>>>>> 12d4b89 (Delete cnd package for pdf and add react alternative lib.)
import { UnionsWordsInterface } from '../../../model/static/wordsForUnionsTests';

export interface UnionsTrainerWordsProps {
  randomWord: UnionsWordsInterface;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionType;
}

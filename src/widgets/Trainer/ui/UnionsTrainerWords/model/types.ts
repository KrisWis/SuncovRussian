<<<<<<< HEAD
import { wordActionsFunctionType } from '../../../model/hooks/useWordActions';
=======
import { wordActionsFunctionType } from '@/widgets/Trainer/model/hooks/useWordActions';
>>>>>>> f1d426f (Delete dependency cruiser and replace it eslint plugin, fix circular dependencies, fix storybook and unit tests, finish theory block - fix pdf viewer, add adaptive for theory)
import { UnionsWordsInterface } from '../../../model/static/wordsForUnionsTests';

export interface UnionsTrainerWordsProps {
  randomWord: UnionsWordsInterface;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionType;
}

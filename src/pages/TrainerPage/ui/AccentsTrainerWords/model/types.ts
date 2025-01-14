<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:src/widgets/Trainer/ui/AccentsTrainerWords/model/types.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { WordsTypes } from '../../../model/types/types';
>>>>>>> 93ebe07 (Fully initialize router, add routing for all project, add unit and e2e tests for routing, refactore project - made sections as pages.):src/pages/TrainerPage/ui/AccentsTrainerWords/model/types.ts
import { wordActionsFunctionType } from '../../../model/hooks/useWordActions';
=======
import { wordActionsFunctionType } from '@/widgets/Trainer/model/hooks/useWordActions';
>>>>>>> f1d426f (Delete dependency cruiser and replace it eslint plugin, fix circular dependencies, fix storybook and unit tests, finish theory block - fix pdf viewer, add adaptive for theory)
=======
import { wordActionsFunctionType } from '../../../model/hooks/useWordActions';
>>>>>>> 12d4b89 (Delete cnd package for pdf and add react alternative lib.)
=======
import { WordsTypes } from '../../../model/types/types';
import { wordActionsFunctionType } from '../../../model/hooks/useWordActions';
>>>>>>> 3f8fb2c (Resolve conflicts by taking incoming changes)
import { AccentsWordsInterface } from '../../../model/static/wordsForAccentsTests';

export interface AccentsTrainerWordsProps {
  randomWord: AccentsWordsInterface;
  randomWordsIsReverse: boolean;
  wordOnSuccess: wordActionsFunctionType;
  wordOnFail: wordActionsFunctionType;
  storeWords: WordsTypes[];
}
<<<<<<< HEAD
=======
>>>>>>> fb89821 (Made types for header, rebuild accents for trainer words to primary trainer words for reusing.)
=======
>>>>>>> 3f8fb2c (Resolve conflicts by taking incoming changes)

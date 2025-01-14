import { lazy } from 'react';
import { TrainerPageProps } from './model/types/types';

export const TrainerPage: React.LazyExoticComponent<
  React.FC<TrainerPageProps>
> = lazy(() => {
  return new Promise((resolve) => {
    resolve(
      import('./ui/TrainerPage').then(({ TrainerPage }) => ({
        default: TrainerPage,
      })),
    );
  });
});

export { TrainerReducer } from './model/slice/TrainerPageSlice';

export type { TrainerPageSliceSchema } from './model/types/sliceTypes';

export type { WordsTypes } from './model/types/types';

export { useWords } from './model/selectors/getTrainerWords/getTrainerWords';

export { TrainerProgressBar } from './ui/TrainerProgressBar/ui/TrainerProgressBar';

export { TrainerPageContext } from './model/context/TrainerPageContext';

export { StrictModeSwitcher } from './ui/StrictModeSwitcher/ui/StrictModeSwitcher';

export { useTrainerActions } from './model/slice/TrainerPageSlice';

// Static
export { wordsForAccentsTests } from './model/static/wordsForAccentsTests';

export { wordsForNNTests } from './model/static/wordsForNNTests';

export { wordsForDictionaryTests } from './model/static/wordsForDictionaryTests';

export { wordsForAdverbsTests } from './model/static/wordsForAdverbsTests';

export { wordsForUnionsTests } from './model/static/wordsForUnionsTests';
